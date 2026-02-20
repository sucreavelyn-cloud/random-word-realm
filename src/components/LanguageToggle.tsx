import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative flex items-center rounded-full bg-muted border border-border p-0.5">
      <motion.div
        className="absolute h-[calc(100%-4px)] w-[calc(50%-2px)] rounded-full bg-primary"
        animate={{ x: language === 'si' ? 2 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      <button
        onClick={() => setLanguage('si')}
        className={`relative z-10 px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === 'si' ? 'text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        SI
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`relative z-10 px-3 py-1 text-sm font-medium rounded-full transition-colors duration-300 ${
          language === 'en' ? 'text-primary-foreground' : 'text-muted-foreground'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
