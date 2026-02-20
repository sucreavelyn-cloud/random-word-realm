import { useState, useMemo, useCallback } from 'react';

import { format, parseISO, addMinutes } from 'date-fns';
import { CalendarIcon, Clock, ArrowRight, ArrowLeft, Loader2, User, Mail, Phone, CheckCircle, XCircle } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';

type Step = 'calendar' | 'details' | 'confirmed' | 'failed';

const SERVICE_OPTIONS = [
  { value: 'ai-video-ads', si: 'AI video oglasi', en: 'AI Video Ads' },
  { value: 'ai-product-photography', si: 'AI produktna fotografija', en: 'AI Product Photography' },
  { value: 'social-media-content', si: 'Družbena omrežja', en: 'Social Media Content' },
  { value: 'digital-marketing', si: 'Digitalni marketing', en: 'Digital Marketing' },
  { value: 'ai-avatar-creation', si: 'AI avatarji', en: 'AI Avatar Creation' },
  { value: 'ai-creative-engine', si: 'AI kreativni paket', en: 'AI Creative Engine' },
];

const BookingCalendarDialog = () => {
  const { t } = useLanguage();
  const { slots, loading, dialogOpen, setDialogOpen } = useBooking();
  const [step, setStep] = useState<Step>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableDates = useMemo(() => {
    return Object.keys(slots).map((d) => parseISO(d));
  }, [slots]);

  const timesForSelectedDate = useMemo(() => {
    if (!selectedDate) return [];
    const key = format(selectedDate, 'yyyy-MM-dd');
    return slots[key] || [];
  }, [selectedDate, slots]);

  const isDateAvailable = (date: Date) => {
    const key = format(date, 'yyyy-MM-dd');
    return key in slots;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      newErrors.name = t('Ime je obvezno', 'Name is required');
    } else if (trimmedName.length > 100) {
      newErrors.name = t('Ime je predolgo', 'Name is too long');
    }

    if (!trimmedEmail) {
      newErrors.email = t('E-pošta je obvezna', 'Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = t('Neveljaven e-poštni naslov', 'Invalid email address');
    }

    if (!trimmedPhone) {
      newErrors.phone = t('Telefonska številka je obvezna', 'Phone number is required');
    } else if (trimmedPhone.length < 6 || trimmedPhone.length > 20) {
      newErrors.phone = t('Neveljavna telefonska številka', 'Invalid phone number');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [submitting, setSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);

  const BOOKING_WEBHOOK = 'https://gg.tevorasolutions.si/webhook/ae28f82c-7836-4a8e-9a3c-012601e6031f';

  const handleConfirm = async () => {
    if (!validateForm() || !selectedTime || !selectedDate) return;

    setSubmitting(true);
    setBookingError(null);

    const startTime = selectedTime;
    // Extract timezone offset from startTime string (e.g. "+01:00")
    const tzMatch = startTime.match(/([+-]\d{2}:\d{2})$/);
    const tzOffset = tzMatch ? tzMatch[1] : '+01:00';
    const startParsed = parseISO(startTime);
    const endParsed = addMinutes(startParsed, 30);
    const endTime = format(endParsed, "yyyy-MM-dd'T'HH:mm:ss") + tzOffset;

    const serviceName = service
      ? SERVICE_OPTIONS.find((s) => s.value === service)?.[t('si', 'en') as 'si' | 'en'] || service
      : '';

    const payload = {
      startTime,
      endTime,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      notes: serviceName ? `Service: ${serviceName}` : '',
    };

    try {
      const res = await fetch(BOOKING_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const text = await res.text();

      if (text.trim() === 'Booking confirmed') {
        setStep('confirmed');
      } else {
        console.error('Booking webhook unexpected response:', text);
        setStep('failed');
      }
    } catch (err) {
      console.error('Booking webhook error:', err);
      setStep('failed');
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setSelectedDate(undefined);
      setSelectedTime(null);
      setStep('calendar');
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setErrors({});
      setBookingError(null);
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-heading text-2xl font-bold text-foreground">
            {t('Rezervirajte brezplačen posvet', 'Book a Free Consultation')}
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            {step === 'calendar'
              ? t('Izberite datum in uro, ki vam ustreza.', 'Pick a date and time that works for you.')
              : step === 'details'
              ? t('Izpolnite svoje podatke.', 'Fill in your details.')
              : ''}
          </p>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 animate-spin text-primary" />
          </div>
        ) : step === 'confirmed' ? (
          <div className="p-6 text-center py-12">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              {t('Termin potrjen!', 'Booking Confirmed!')}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t('Vaš termin je uspešno rezerviran. Potrditveno e-sporočilo boste prejeli v kratkem.', 'Your appointment has been successfully booked. You will receive a confirmation email.')}
            </p>
          </div>
        ) : step === 'failed' ? (
          <div className="p-6 text-center py-12">
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              {t('Rezervacija ni uspela', 'Booking Failed')}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {t('Termina ni bilo mogoče rezervirati. Poskusite znova.', 'The meeting was not booked. Please try again.')}
            </p>
            <Button onClick={() => { setStep('details'); setSubmitting(false); }} size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('Poskusite znova', 'Try Again')}
            </Button>
          </div>
        ) : step === 'details' ? (
          <div className="p-6 pt-4 space-y-4">
            {/* Summary */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-3 border border-border">
              <CalendarIcon className="w-4 h-4 text-primary shrink-0" />
              <span>
                {selectedDate && format(selectedDate, 'MMM d, yyyy')} — {selectedTime && format(parseISO(selectedTime), 'HH:mm')}
              </span>
            </div>

            {/* Name */}
            <div className="space-y-1.5">
              <Label htmlFor="booking-name" className="text-sm font-medium text-foreground">
                {t('Ime *', 'Name *')}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('Ime in priimek', 'Your name')}
                  className="pl-10 bg-muted/50 border-border"
                  maxLength={100}
                />
              </div>
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <Label htmlFor="booking-email" className="text-sm font-medium text-foreground">
              {t('E-naslov *', 'Email *')}
            </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('vas@email.com', 'you@email.com')}
                  className="pl-10 bg-muted/50 border-border"
                  maxLength={255}
                />
              </div>
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <Label htmlFor="booking-phone" className="text-sm font-medium text-foreground">
                {t('Telefon *', 'Phone *')}
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="booking-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+386 ..."
                  className="pl-10 bg-muted/50 border-border"
                  maxLength={20}
                />
              </div>
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            {/* Service (optional) */}
            <div className="space-y-1.5">
              <Label className="text-sm font-medium text-foreground">
                {t('Storitev (neobvezno)', 'Service (optional)')}
              </Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="bg-muted/50 border-border">
                  <SelectValue placeholder={t('Izberite storitev', 'Select a service')} />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-[200]">
                  {SERVICE_OPTIONS.map((s) => (
                    <SelectItem key={s.value} value={s.value}>
                      {t(s.si, s.en)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {bookingError && (
              <p className="text-sm text-destructive bg-destructive/10 rounded-lg px-4 py-2">{bookingError}</p>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => { setStep('calendar'); setErrors({}); setBookingError(null); }}
                className="flex-1"
                size="lg"
                disabled={submitting}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('Nazaj', 'Back')}
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1"
                size="lg"
                disabled={submitting}
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : null}
                {submitting ? t('Pošiljam …', 'Sending...') : t('Potrdi rezervacijo', 'Confirm Booking')}
                {!submitting && <ArrowRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6 pt-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setSelectedTime(null);
              }}
              disabled={(date) => !isDateAvailable(date)}
              className="p-3 pointer-events-auto mx-auto"
              modifiers={{ available: availableDates }}
              components={{
                DayContent: ({ date, ...props }) => {
                  const key = format(date, 'yyyy-MM-dd');
                  const hasSlots = key in slots;
                  return (
                    <div className="relative flex flex-col items-center">
                      <span>{date.getDate()}</span>
                      {hasSlots && (
                        <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-green-500" />
                      )}
                    </div>
                  );
                },
              }}
            />

            {selectedDate && timesForSelectedDate.length > 0 && (
              <div className="mt-4 space-y-3">
                <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  {t('Prosti termini za ', 'Available times for ')}
                  {format(selectedDate, 'MMM d, yyyy')}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {timesForSelectedDate.map((slot) => {
                    const time = parseISO(slot.time);
                    const timeLabel = format(time, 'HH:mm');
                    const isSelected = selectedTime === slot.time;
                    return (
                      <button
                        key={slot.time}
                        onClick={() => setSelectedTime(slot.time)}
                        className={cn(
                          'h-11 rounded-lg text-sm font-medium border transition-all',
                          isSelected
                            ? 'bg-accent text-accent-foreground border-accent shadow-glow-accent'
                            : 'bg-muted/50 text-foreground border-border hover:border-primary/50 hover:bg-muted'
                        )}
                      >
                        {timeLabel}
                      </button>
                    );
                  })}
                </div>

                <Button
                  onClick={() => setStep('details')}
                  disabled={!selectedTime}
                  className="w-full mt-2"
                  size="lg"
                >
                  {t('Naprej', 'Continue')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingCalendarDialog;
