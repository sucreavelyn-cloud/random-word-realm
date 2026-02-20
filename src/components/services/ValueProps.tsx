import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

interface ValuePropsProps {
  title: { si: string; en: string };
  items: { si: string; en: string }[];
}

const ValueProps = ({ title, items }: ValuePropsProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t(title.si, title.en)}
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 py-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">{t(item.si, item.en)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
