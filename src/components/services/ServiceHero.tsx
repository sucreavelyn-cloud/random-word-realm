import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

interface ServiceHeroProps {
  eyebrow: { si: string; en: string };
  title: { si: string; en: string };
  subtitle: { si: string; en: string };
  gradient: 'blue' | 'orange';
  ctaText?: { si: string; en: string };
}

const ServiceHero = ({ eyebrow, title, subtitle, gradient, ctaText }: ServiceHeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.p
          className="text-sm uppercase tracking-[1.5px] text-secondary font-medium mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          {t(eyebrow.si, eyebrow.en)}
        </motion.p>
        <motion.h1
          className="font-heading font-bold text-[36px] md:text-[48px] lg:text-[60px] leading-[1.1] text-primary-foreground max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          {t(title.si, title.en)}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-hero-muted max-w-2xl mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
        >
          {t(subtitle.si, subtitle.en)}
        </motion.p>
        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <motion.a
            href="#booking"
            className={`inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-xl text-primary-foreground ${
              gradient === 'blue' ? 'bg-primary shadow-glow-primary' : 'bg-secondary shadow-glow-secondary'
            }`}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            {ctaText ? t(ctaText.si, ctaText.en) : t('Rezerviraj klic →', 'Book a Call →')}
          </motion.a>
          <motion.a
            href="#process"
            className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-xl border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('Kako deluje ↓', 'How it works ↓')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
