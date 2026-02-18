import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex items-center rounded-full bg-badge-bg border border-badge-border p-0.5">
      <button
        onClick={() => setLang('si')}
        className={`relative z-10 px-3 py-1 text-[11px] uppercase tracking-[1px] font-semibold rounded-full transition-all duration-300 ${
          lang === 'si' ? 'bg-primary text-primary-foreground' : 'text-hero-muted hover:text-primary-foreground'
        }`}
      >
        SI
      </button>
      <button
        onClick={() => setLang('en')}
        className={`relative z-10 px-3 py-1 text-[11px] uppercase tracking-[1px] font-semibold rounded-full transition-all duration-300 ${
          lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-hero-muted hover:text-primary-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
