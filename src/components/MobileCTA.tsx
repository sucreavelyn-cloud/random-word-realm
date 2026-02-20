import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';

const MobileCTA = () => {
  const { t } = useLanguage();
  const { setDialogOpen } = useBooking();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-hero-from/95 backdrop-blur-xl border-t border-badge-border p-3">
      <button
        onClick={() => setDialogOpen(true)}
        className="flex items-center justify-center w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-glow-primary"
      >
        {t('Rezerviraj klic →', 'Book a Call →')}
      </button>
    </div>
  );
};

export default MobileCTA;
