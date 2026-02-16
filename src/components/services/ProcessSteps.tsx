import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface Step {
  number: string;
  title: { si: string; en: string };
  description: { si: string; en: string };
}

interface ProcessStepsProps {
  steps: Step[];
}

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {t('Naš Proces', 'Our Process')}
        </motion.h2>
        <motion.p
          className="text-hero-muted text-center mb-16 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('Od ideje do končnega izdelka v 5 preprostih korakih.', 'From idea to final product in 5 simple steps.')}
        </motion.p>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-badge-border" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex gap-6 md:gap-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shadow-glow-primary">
                  <span className="font-heading font-bold text-primary-foreground text-lg md:text-xl">
                    {step.number}
                  </span>
                </div>
                <div className="pt-1 md:pt-3">
                  <h3 className="font-heading font-semibold text-lg md:text-xl text-primary-foreground mb-2">
                    {t(step.title.si, step.title.en)}
                  </h3>
                  <p className="text-hero-muted text-sm md:text-base leading-relaxed">
                    {t(step.description.si, step.description.en)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
