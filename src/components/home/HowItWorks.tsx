import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Bot, Download, Sparkles, Check } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Send,
      num: 1,
      title: { si: 'Pošljete Navodila', en: 'Send Instructions' },
      desc: {
        si: 'Povejte nam, kaj potrebujete – vrsto vsebine, stil in ključne sporočila. Mi poskrbimo za vse ostalo.',
        en: 'Tell us what you need – content type, style and key messages. We take care of the rest.',
      },
      features: [
        { si: 'Analiza vaših potreb', en: 'Needs analysis' },
        { si: 'Pojasnitev ciljev', en: 'Goal clarification' },
        { si: 'Prilagojena ponudba', en: 'Custom quote' },
      ],
    },
    {
      icon: Bot,
      num: 2,
      title: { si: 'AI Ustvarja', en: 'AI Creates' },
      desc: {
        si: 'Naša AI tehnologija ustvari vašo vsebino v 24 urah z vrhunsko kakovostjo.',
        en: 'Our AI technology creates your content in 24 hours with top-notch quality.',
      },
      features: [
        { si: 'Napredna AI tehnologija', en: 'Advanced AI technology' },
        { si: 'Človeški nadzor kakovosti', en: 'Human quality control' },
        { si: 'Iteracije vključene', en: 'Iterations included' },
      ],
    },
    {
      icon: Download,
      num: 3,
      title: { si: 'Prejmete Vsebino', en: 'Receive Content' },
      desc: {
        si: 'Končne datoteke v visoki ločljivosti, pripravljene za takojšnjo uporabo na vseh platformah.',
        en: 'Final files in high resolution, ready for immediate use across all platforms.',
      },
      features: [
        { si: 'Visoka ločljivost', en: 'High resolution' },
        { si: 'Vsi formati vključeni', en: 'All formats included' },
        { si: 'Pripravljen za objavo', en: 'Ready to publish' },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1000px] relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-secondary" />
          <motion.p
            className="text-sm text-secondary uppercase tracking-[1.5px] font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('KAKO DELUJE', 'HOW IT WORKS')}
          </motion.p>
        </div>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('Tri Enostavne Korake', 'Three Simple Steps')}
        </motion.h2>
        <motion.p
          className="text-lg text-hero-muted text-center max-w-[550px] mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t(
            'Od prvega sporočila do končne vsebine – tako enostavno je.',
            "From first message to final content – here's exactly what to expect."
          )}
        </motion.p>

        {/* Roadmap */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40 -translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 !== 0;

            return (
              <motion.div
                key={i}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-0 mb-20 last:mb-0`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
              >
                {/* Left content or spacer */}
                <div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:order-1' : 'md:order-3 md:text-left'}`}>
                  {isLeft ? (
                    <div className="bg-badge-bg/70 backdrop-blur-sm border border-badge-border rounded-2xl p-7 transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-primary-foreground">
                          {t(step.title.si, step.title.en)}
                        </h3>
                      </div>
                      <p className="text-hero-muted text-[15px] leading-relaxed mb-4">
                        {t(step.desc.si, step.desc.en)}
                      </p>
                      <ul className="space-y-1.5">
                        {step.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-[13px] text-hero-muted">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {t(f.si, f.en)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Center node */}
                <div className="md:order-2 flex-shrink-0 w-20 flex items-center justify-center relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg shadow-glow-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.3 + i * 0.15 }}
                  >
                    {step.num}
                  </motion.div>
                </div>

                {/* Right content or spacer */}
                <div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:order-3' : 'md:order-1'}`}>
                  {!isLeft ? (
                    <div className="bg-badge-bg/70 backdrop-blur-sm border border-badge-border rounded-2xl p-7 transition-all duration-300 hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-heading font-bold text-xl text-primary-foreground">
                          {t(step.title.si, step.title.en)}
                        </h3>
                      </div>
                      <p className="text-hero-muted text-[15px] leading-relaxed mb-4">
                        {t(step.desc.si, step.desc.en)}
                      </p>
                      <ul className="space-y-1.5">
                        {step.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2 text-[13px] text-hero-muted">
                            <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {t(f.si, f.en)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
