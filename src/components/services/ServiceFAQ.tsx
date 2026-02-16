import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

interface FAQItem {
  question: { si: string; en: string };
  answer: { si: string; en: string };
}

interface ServiceFAQProps {
  items: FAQItem[];
}

const ServiceFAQ = ({ items }: ServiceFAQProps) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {t('Pogosta Vprašanja', 'Frequently Asked Questions')}
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-badge-border overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-badge-bg hover:bg-badge-bg/80 transition-colors"
              >
                <span className="font-heading font-semibold text-primary-foreground text-sm md:text-base">
                  {t(item.question.si, item.question.en)}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className="text-primary text-xl flex-shrink-0 ml-4"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-hero-muted text-sm leading-relaxed">
                      {t(item.answer.si, item.answer.en)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
