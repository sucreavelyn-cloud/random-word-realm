import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, ArrowRight } from 'lucide-react';

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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.p
          className="text-[11px] uppercase tracking-[3px] text-primary font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('Cenik', 'Pricing')}
        </motion.p>
        <motion.h2
          className="font-heading font-extrabold text-3xl md:text-[44px] tracking-tight text-foreground text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('Izberite Paket', 'Choose a Plan')}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl p-8 border hover-lift ${
                tier.highlighted
                  ? 'bg-primary/5 border-primary/40 ring-1 ring-primary/20'
                  : 'bg-card border-border'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-[1.5px] font-bold rounded-full bg-primary text-primary-foreground">
                  {t('Popularno', 'Popular')}
                </span>
              )}
              <h3 className="font-heading font-bold text-lg text-foreground mb-1 tracking-tight">
                {t(tier.name.si, tier.name.en)}
              </h3>
              <p className="font-heading font-extrabold text-4xl text-foreground mb-8 tracking-tight">
                {tier.price}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {t(f.si, f.en)}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#booking"
                className={`group w-full inline-flex items-center justify-center gap-2 h-12 rounded-full font-semibold text-sm uppercase tracking-[0.5px] transition-all duration-300 ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground shadow-glow-primary hover:gap-3'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
                whileTap={{ scale: 0.97 }}
              >
                {t('Izberi', 'Choose')}
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGuide;
