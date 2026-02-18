import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

interface ServiceHeroProps {
  eyebrow: { si: string; en: string };
  title: { si: string; en: string };
  subtitle: { si: string; en: string };
  gradient: 'blue' | 'orange';
}

const ServiceHero = ({ eyebrow, title, subtitle, gradient }: ServiceHeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-36 pb-24 bg-mesh-gradient overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-primary-foreground" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-primary-foreground" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.p
          className="text-[11px] uppercase tracking-[3px] text-primary font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          {t(eyebrow.si, eyebrow.en)}
        </motion.p>
        <motion.h1
          className="font-heading font-extrabold text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-tight text-primary-foreground max-w-4xl"
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
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
        >
          <motion.a
            href="#booking"
            className="group inline-flex items-center gap-3 h-14 px-8 text-sm uppercase tracking-[1px] font-semibold rounded-full text-primary-foreground bg-primary shadow-glow-primary transition-all duration-300 hover:gap-5"
            whileTap={{ scale: 0.97 }}
          >
            {t('Rezerviraj Klic', 'Book a Call')}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.a>
          <motion.a
            href="#process"
            className="inline-flex items-center gap-2 h-14 px-8 text-sm uppercase tracking-[1px] font-semibold rounded-full border border-badge-border text-primary-foreground hover:bg-badge-bg transition-all duration-300"
            whileTap={{ scale: 0.97 }}
          >
            {t('Kako deluje', 'How it works')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
