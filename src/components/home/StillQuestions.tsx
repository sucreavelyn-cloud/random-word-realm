import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';

const StillQuestions = () => {
  const { t } = useLanguage();
  const { setDialogOpen } = useBooking();

  return (
    <section className="py-16 md:py-24 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.p
          className="text-lg md:text-xl text-hero-muted mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('Imate dodatna vprašanja? Z veseljem vam pomagamo.', 'Still have questions? We\'re here to help.')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button
            onClick={() => setDialogOpen(true)}
            className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold rounded-xl bg-accent text-accent-foreground tracking-wide uppercase transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-[0_0_30px_-5px_hsl(var(--accent)/0.4)]"
          >
            {t('REZERVIRAJ KLIC', 'BOOK A CALL')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default StillQuestions;
