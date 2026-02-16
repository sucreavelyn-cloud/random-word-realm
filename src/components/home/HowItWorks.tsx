import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Bot, Download } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Send,
      num: '01',
      title: { si: 'Pošljete Navodila', en: 'Send Instructions' },
      desc: {
        si: 'Povejte nam, kaj potrebujete – mi poskrbimo za vse ostalo.',
        en: 'Tell us what you need – we take care of the rest.',
      },
      delay: 0.2,
    },
    {
      icon: Bot,
      num: '02',
      title: { si: 'AI Ustvarja', en: 'AI Creates' },
      desc: {
        si: 'Naša AI tehnologija ustvari vašo vsebino v 24-48 urah.',
        en: 'Our AI technology creates your content in 24-48 hours.',
      },
      delay: 0.4,
    },
    {
      icon: Download,
      num: '03',
      title: { si: 'Prejmete Vsebino', en: 'Receive Content' },
      desc: {
        si: 'Končne datoteke v visoki ločljivosti, pripravljene za uporabo.',
        en: 'Final files in high resolution, ready for immediate use.',
      },
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Header */}
        <motion.p
          className="text-sm text-secondary uppercase tracking-[1.5px] text-center font-medium"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('KAKO DELUJE', 'HOW IT WORKS')}
        </motion.p>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mt-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('Tri Enostavne Korake', 'Three Simple Steps')}
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative bg-badge-bg border border-badge-border rounded-2xl p-8 md:p-10 text-center group hover:-translate-y-2 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: step.delay }}
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-heading font-bold text-6xl text-primary/10">
                {step.num}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">
                {t(step.title.si, step.title.en)}
              </h3>
              <p className="text-hero-muted text-base leading-relaxed">
                {t(step.desc.si, step.desc.en)}
              </p>

              {/* Connector arrow on desktop */}
              {i < 2 && (
                <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary/30 text-2xl z-20">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
