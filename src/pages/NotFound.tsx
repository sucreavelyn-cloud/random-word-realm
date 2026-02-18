import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="text-center relative z-10">
        <h1 className="font-heading font-extrabold text-[120px] leading-none text-primary/20 mb-2">404</h1>
        <p className="text-xl text-hero-muted mb-8 font-heading">{t('Stran ne obstaja', 'Page not found')}</p>
        <Link to="/" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-[1px] shadow-glow-primary">
          {t('Domov', 'Home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
