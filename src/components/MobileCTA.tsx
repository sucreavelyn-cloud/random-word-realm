import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const MobileCTA = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-hero-from/95 backdrop-blur-2xl border-t border-badge-border p-3">
      <Link
        to="/kontakt"
        className="flex items-center justify-center gap-2 w-full h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm tracking-wide shadow-glow-primary"
      >
        {t('Rezerviraj Klic', 'Book a Call')}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default MobileCTA;
