import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative flex items-center rounded-full bg-badge-bg border border-badge-border p-0.5">
      <motion.div
        className="absolute h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-full bg-primary"
        animate={{ x: lang === 'si' ? 2 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      <button
        onClick={() => setLang('si')}
        className={`relative z-10 px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          lang === 'si' ? 'text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        SI
      </button>
      <button
        onClick={() => setLang('en')}
        className={`relative z-10 px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          lang === 'en' ? 'text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
