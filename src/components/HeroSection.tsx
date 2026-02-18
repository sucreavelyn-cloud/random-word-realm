import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const HeroSection = () => {
  const { t } = useLanguage();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-[900px]">
        {/* Eyebrow */}
        <motion.p
          className="text-sm uppercase tracking-[1.5px] text-secondary font-medium mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
        >
          {t('🇸🇮 Slovensko AI Podjetje', '🇸🇮 Slovenian AI Company')}
        </motion.p>

        {/* Company Name */}
        <motion.h1
          className="font-heading font-bold text-[56px] md:text-[80px] lg:text-[100px] leading-[1] text-primary-foreground mb-6"
          {...fadeUp(0.2)}
        >
          <span className="text-gradient-brand">AI Oglasi</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl text-hero-muted max-w-[640px] mx-auto leading-relaxed mb-12"
          {...fadeUp(0.4)}
        >
          {t(
            'Profesionalni AI video oglasi in produktna fotografija, ki povečajo prodajo. Brez dolgih čakalnih dob, brez visokih cen, samo rezultati.',
            'Professional AI video ads and product photography that increase sales. No long waiting times, no high prices, just results.'
          )}
        </motion.p>

        {/* CTA Button */}
        <motion.div {...fadeUp(0.6)}>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center h-16 px-10 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground shadow-glow-primary"
            whileHover={{ y: -4, boxShadow: '0 0 50px -5px hsl(217 91% 60% / 0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            {t('Rezerviraj Klic →', 'Book a Call →')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
