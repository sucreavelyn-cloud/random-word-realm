import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface UseCase {
  icon: string;
  title: { si: string; en: string };
  description: { si: string; en: string };
}

interface UseCasesGridProps {
  title: { si: string; en: string };
  cases: UseCase[];
}

const UseCasesGrid = ({ title, cases }: UseCasesGridProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background overflow-hidden">
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
      </div>
      <div className="relative">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: cases.length * 5, repeat: Infinity, ease: 'linear' }}
        >
          {[...cases, ...cases].map((c, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-72 p-6 rounded-2xl bg-card border border-border"
            >
              <span className="text-4xl mb-4 block">{c.icon}</span>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {t(c.title.si, c.title.en)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(c.description.si, c.description.en)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesGrid;
