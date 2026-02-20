import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Clock, TrendingUp, Shield, Palette, Users } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateY: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const WhyUs = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: Zap,
      title: t('Bliskovito hitro', 'Lightning Fast'),
      description: t('Dostava v 24 urah. Brez tedenskega čakanja.', 'Delivery in 24 hours or less. No weeks of waiting.'),
    },
    {
      icon: Clock,
      title: t('Prihranite čas', 'Save Time'),
      description: t('Brez organiziranja snemanj, modelov ali studiev.', 'No organizing shoots, models, or studios.'),
    },
    {
      icon: TrendingUp,
      title: t('Dokazani rezultati', 'Proven ROI'),
      description: t('Naše stranke beležijo 3–10x donosnost naložbe.', 'Our clients report 3-10x return on investment.'),
    },
    {
      icon: Shield,
      title: t('Vrhunska kakovost', 'Premium Quality'),
      description: t('Profesionalni rezultati, ki jih ne ločite od klasične produkcije.', 'Professional quality indistinguishable from traditional methods.'),
    },
    {
      icon: Palette,
      title: t('Popolna prilagoditev', 'Fully Customizable'),
      description: t('Vse prilagodimo vaši blagovni znamki in vizualni identiteti.', 'Everything is tailored to your brand and style.'),
    },
    {
      icon: Users,
      title: t('Osebni pristop', 'Personal Support'),
      description: t('Za vsak projekt imate svojo kontaktno osebo od začetka do konca.', 'Dedicated contact for every project from start to finish.'),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative" style={{ perspective: '1000px' }}>
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
            {t('Zakaj mi', 'Why Us')}
          </motion.span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            {t('Vaša konkurenčna prednost', 'An Unfair Advantage')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <reason.icon className="w-8 h-8 text-accent mb-4 group-hover:drop-shadow-[0_0_8px_hsl(var(--accent)/0.5)] transition-all" />
              </motion.div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
