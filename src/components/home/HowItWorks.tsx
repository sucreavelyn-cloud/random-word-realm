import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const steps = [
  {
    num: '01',
    icon: '📝',
    borderColor: 'border-primary',
    numColor: 'text-primary',
    title: { si: 'Pošljete Navodila', en: 'Send Instructions' },
    desc: {
      si: 'Izpolnite kratek vprašalnik ali nam pošljite e-mail z opisom projekta. Povejte nam, kaj potrebujete – mi poskrbimo za vse ostalo.',
      en: 'Fill out a short questionnaire or email us a project description. Tell us what you need – we take care of the rest.',
    },
    delay: 0.3,
  },
  {
    num: '02',
    icon: '🤖',
    borderColor: 'border-secondary',
    numColor: 'text-secondary',
    title: { si: 'AI Ustvarja', en: 'AI Creates' },
    desc: {
      si: 'Naša napredna AI tehnologija ustvari vašo vsebino v 24-48 urah. Brez dolgih čakalnih vrst, brez odvisnosti od fotografov ali video ekip.',
      en: 'Our advanced AI technology creates your content in 24-48 hours. No long queues, no dependence on photographers or video teams.',
    },
    delay: 0.6,
  },
  {
    num: '03',
    icon: '✨',
    borderColor: 'border-accent',
    numColor: 'text-accent',
    title: { si: 'Prejmete Vsebino', en: 'Receive Content' },
    desc: {
      si: 'Prejemate končne datoteke v visoki ločljivosti, pripravljene za takojšnjo uporabo. Z neomejeno revizijo, če je potrebno kaj prilagoditi.',
      en: 'Receive final files in high resolution, ready for immediate use. With unlimited revisions if adjustments are needed.',
    },
    delay: 0.9,
  },
];

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Header */}
        <motion.p
          className="text-sm text-secondary uppercase tracking-[1.5px] text-center font-medium"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {t('ENOSTAVNO IN HITRO', 'SIMPLE AND FAST')}
        </motion.p>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('Kako Deluje Sodelovanje', 'How Collaboration Works')}
        </motion.h2>
        <motion.p
          className="text-lg text-hero-muted text-center max-w-[600px] mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('Vaša AI vsebina v treh preprostih korakih', 'Your AI content in three simple steps')}
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - desktop horizontal */}
          <motion.div
            className="hidden md:block absolute top-[60px] left-[20%] right-[20%] h-1 rounded-full z-0"
            style={{ background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
          />
          {/* Mobile vertical line */}
          <motion.div
            className="md:hidden absolute left-[50px] top-0 bottom-0 w-1 rounded-full z-0"
            style={{ background: 'linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--secondary)))' }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-6 md:gap-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: step.delay }}
              >
                {/* Icon */}
                <motion.span
                  className="text-[48px] md:mb-4 flex-shrink-0"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {step.icon}
                </motion.span>

                {/* Number Circle */}
                <div
                  className={`w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full bg-badge-bg border-4 ${step.borderColor} shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex items-center justify-center md:mb-8 transition-all duration-300 flex-shrink-0`}
                >
                  <span className={`font-heading font-bold text-3xl md:text-[40px] ${step.numColor}`}>
                    {step.num}
                  </span>
                </div>

                <div className="md:max-w-[320px]">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-primary-foreground mb-4">
                    {t(step.title.si, step.title.en)}
                  </h3>
                  <p className="text-hero-muted text-base leading-relaxed">
                    {t(step.desc.si, step.desc.en)}
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

export default HowItWorks;
