import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageSquare, Wand2, Rocket } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      step: '01',
      title: t('Povejte nam', 'Tell Us'),
      description: t(
        'Rezervirajte brezplačen klic. Spoznamo vašo znamko, cilje in ciljno občinstvo.',
        'Book a free call. We understand your brand, goals, and target audience.'
      ),
    },
    {
      icon: Wand2,
      step: '02',
      title: t('Mi ustvarimo', 'We Create'),
      description: t(
        'Z AI ustvarimo vrhunsko vsebino v 24–48 urah. Brez čakanja na fotografe ali snemalne ekipe.',
        'Our AI produces premium content in 24-48 hours. No waiting for photographers or video crews.'
      ),
    },
    {
      icon: Rocket,
      step: '03',
      title: t('Vi rastete', 'You Grow'),
      description: t(
        'Objavite vsebino in spremljajte, kako vaša prodaja in prepoznavnost rasteta.',
        'Publish the content and watch your sales and brand awareness soar.'
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-sm uppercase tracking-[2px] text-accent font-semibold mb-4 block"
            initial={{ opacity: 0, letterSpacing: '0px' }}
            whileInView={{ opacity: 1, letterSpacing: '2px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('Kako deluje', 'How It Works')}
          </motion.span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            {t('3 preprosti koraki', '3 Simple Steps')}
          </h2>
        </motion.div>

        {/* Connecting line */}
        <div className="hidden md:block relative max-w-5xl mx-auto mb-0">
          <motion.div
            className="absolute top-[52px] left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.step}
              className="relative text-center p-8"
              variants={stepVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <step.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <div className="text-xs font-bold text-accent tracking-[3px] uppercase mb-3">{t('Korak', 'Step')} {step.step}</div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
