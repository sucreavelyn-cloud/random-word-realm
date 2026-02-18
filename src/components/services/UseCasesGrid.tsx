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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="font-heading font-extrabold text-3xl md:text-[44px] tracking-tight text-foreground text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t(title.si, title.en)}
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/30 hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-3xl mb-5 block">{c.icon}</span>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2 tracking-tight">
                {t(c.title.si, c.title.en)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(c.description.si, c.description.en)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesGrid;
