import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const MobileCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-hero-from/95 backdrop-blur-xl border-t border-badge-border p-3">
      <Link
        to="/kontakt"
        className="flex items-center justify-center w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-glow-primary"
      >
        {t('Rezerviraj Posvetovanje →', 'Book Consultation →')}
      </Link>
    </div>
  );
};

export default MobileCTA;
