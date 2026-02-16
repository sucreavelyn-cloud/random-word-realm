import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface Spec {
  label: { si: string; en: string };
  value: { si: string; en: string };
}

interface TechSpecsProps {
  title: { si: string; en: string };
  specs: Spec[];
}

const TechSpecs = ({ title, specs }: TechSpecsProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {t(title.si, title.en)}
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              className="flex justify-between items-center py-4 border-b border-border last:border-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-muted-foreground text-sm font-medium">{t(spec.label.si, spec.label.en)}</span>
              <span className="font-heading font-semibold text-foreground">{t(spec.value.si, spec.value.en)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
