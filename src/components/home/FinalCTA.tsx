import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const { t } = useLanguage();
  const { setDialogOpen } = useBooking();

  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] pointer-events-none"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[800px] text-center relative z-10">
        <motion.h2
          className="font-heading font-extrabold text-4xl md:text-[56px] md:leading-tight text-foreground mb-6"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('Pripravljeni na ', 'Ready to ')}
          <span className="text-gradient-brand">{t('rezultate', 'Get Results')}</span>
          ?
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-[520px] mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(
            'Rezervirajte brezplačen 30-minutni posvet. Brez obveznosti, brez pritiska.',
            'Book a free 30-minute consultation. No obligations, no sales pressure.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          <motion.button
            onClick={() => setDialogOpen(true)}
            className="relative inline-flex items-center gap-2 h-16 px-10 text-lg font-bold rounded-2xl bg-accent text-accent-foreground shadow-glow-accent"
            whileHover={{ y: -4, scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-accent/40"
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              {t('Rezerviraj klic', 'Book a Call')}
              <ArrowRight className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
