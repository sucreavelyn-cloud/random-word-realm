import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-mesh-gradient overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary-foreground" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-primary-foreground" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-primary-foreground" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-[900px]">
          {/* Eyebrow */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-[12px] uppercase tracking-[2px] font-medium text-hero-muted">
              {t('Slovensko AI Podjetje', 'Slovenian AI Company')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading font-extrabold text-[48px] md:text-[72px] lg:text-[90px] leading-[0.95] tracking-tight text-primary-foreground mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            {t('Ustvarjamo', 'We Create')}{' '}
            <span className="text-gradient-brand">{t('AI Vsebino', 'AI Content')}</span>
            <br />
            {t('Ki Prodaja', 'That Sells')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-hero-muted max-w-[540px] leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            {t(
              'Profesionalni AI video oglasi in produktna fotografija za podjetja, ki želijo izstopati. Dostava v 24 urah.',
              'Professional AI video ads and product photography for businesses that want to stand out. Delivery in 24 hours.'
            )}
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
          >
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 h-14 px-8 text-sm uppercase tracking-[1px] font-semibold rounded-full bg-primary text-primary-foreground shadow-glow-primary transition-all duration-300 hover:gap-5"
            >
              {t('Rezerviraj Klic', 'Book a Call')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 h-14 px-8 text-sm uppercase tracking-[1px] font-semibold rounded-full border border-badge-border text-primary-foreground hover:bg-badge-bg transition-all duration-300"
            >
              {t('Poglej Delo', 'View Work')}
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex gap-12 mt-20 pt-10 border-t border-badge-border/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
          >
            {[
              { value: '150+', label: t('Projektov', 'Projects') },
              { value: '24h', label: t('Dostava', 'Delivery') },
              { value: '98%', label: t('Zadovoljstvo', 'Satisfaction') },
            ].map((stat, i) => (
              <div key={i}>
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground">{stat.value}</div>
                <div className="text-[11px] uppercase tracking-[2px] text-hero-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
