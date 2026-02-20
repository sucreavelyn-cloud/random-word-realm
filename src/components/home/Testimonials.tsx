import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const starVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.3, type: 'spring' as const, stiffness: 500 },
  }),
};

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Ana K.',
      role: t('Lastnica spletne trgovine', 'E-commerce Owner'),
      text: t(
        '"AI Oglasi so nam popolnoma spremenili marketing. V samo 2 mesecih smo povečali konverzije za 340 %."',
        '"AI Oglasi completely transformed our marketing. Our conversions increased by 340% in just 2 months."'
      ),
    },
    {
      name: 'Marko T.',
      role: t('Ustanovitelj startupa', 'Startup Founder'),
      text: t(
        '"Hitrejše, cenejše in kakovostnejše kot karkoli, kar smo dobili od agencij. Toplo priporočam."',
        '"Faster, cheaper, and higher quality than any agency we\'ve worked with. Absolutely recommend."'
      ),
    },
    {
      name: 'Petra S.',
      role: t('Vodja marketinga', 'Marketing Director'),
      text: t(
        '"Neverjeten donos. V 24 urah smo imeli vsebine, ki so prekašale vse naše dosedanje kampanje."',
        '"Incredible ROI. In 24 hours we had content that outperformed all our previous campaigns."'
      ),
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative">
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
            {t('Kaj pravijo stranke', 'Testimonials')}
          </motion.span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            {t('Zaupajo nam', 'They Trust Us')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent/20 transition-colors"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="flex gap-1 mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[...Array(5)].map((_, j) => (
                  <motion.div key={j} custom={j} variants={starVariants}>
                    <Star className="w-4 h-4 fill-secondary text-secondary" />
                  </motion.div>
                ))}
              </motion.div>
              <p className="text-foreground leading-relaxed mb-6">{item.text}</p>
              <div>
                <div className="font-semibold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
