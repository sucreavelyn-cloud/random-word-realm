import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricingTier {
  name: { si: string; en: string };
  price: string;
  features: { si: string; en: string }[];
  highlighted?: boolean;
}

interface PricingGuideProps {
  tiers: PricingTier[];
}

const PricingGuide = ({ tiers }: PricingGuideProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {t('Cenik', 'Pricing')}
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('Pregledne cene brez skritih stroškov.', 'Transparent pricing with no hidden costs.')}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl p-6 border ${
                tier.highlighted
                  ? 'bg-primary/5 border-primary shadow-glow-primary'
                  : 'bg-card border-border'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                  {t('Najpogostejša izbira', 'Most Popular')}
                </span>
              )}
              <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                {t(tier.name.si, tier.name.en)}
              </h3>
              <p className="font-heading font-bold text-3xl text-foreground mb-6">
                {tier.price}
              </p>
              <ul className="space-y-3">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    {t(f.si, f.en)}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#booking"
                className={`mt-6 w-full inline-flex items-center justify-center h-12 rounded-xl font-semibold text-sm transition-colors ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground hover:shadow-glow-primary'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('Izberite paket', 'Choose Plan')}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGuide;
