import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[800px] text-center relative z-10">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[52px] md:leading-tight text-gradient-brand mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {t('Pripravljen Dvigniti Svojo Vsebino?', 'Ready to Elevate Your Content?')}
        </motion.h2>
        <motion.p
          className="text-lg text-hero-muted max-w-[560px] mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {t(
            'Rezerviraj brezplačno posvetovanje in ugotovi, kako lahko AI vsebina transformira tvoj marketing.',
            'Book a free consultation and discover how AI content can transform your marketing.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold rounded-xl bg-primary text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            {t('Rezerviraj Klic →', 'Book a Call →')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
