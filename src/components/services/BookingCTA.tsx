import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BookingCTA = () => {
  const { t } = useLanguage();
  const { setDialogOpen } = useBooking();

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          {t('Pripravljeni na začetek?', 'Ready to get started?')}
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          {t(
            'Rezervirajte brezplačen 30-minutni posvet in odkrijte, kako lahko AI spremeni vaše poslovanje.',
            'Book a free 30-minute consultation and discover how AI can transform your business.'
          )}
        </p>
        <Button size="lg" className="text-base px-8 py-6" onClick={() => setDialogOpen(true)}>
          {t('Rezerviraj brezplačen posvet', 'Book a Free Consultation')}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default BookingCTA;
