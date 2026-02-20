import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const { t } = useLanguage();

  const rows = [
    { feature: t('Rok dostave', 'Delivery Time'), us: t('24 ur', '24 hours'), them: t('2–4 tedne', '2–4 weeks') },
    { feature: t('Stroški produkcije', 'Production Cost'), us: t('Do 90 % nižji', 'Up to 90% less'), them: t('Visoki fiksni stroški', 'High fixed costs') },
    { feature: t('Število različic', 'Number of Variations'), us: t('Neomejeno', 'Unlimited'), them: t('Omejeno s proračunom', 'Limited by budget') },
    { feature: t('Razširljivost', 'Scalability'), us: true, them: false },
    { feature: t('Prilagoditev blagovni znamki', 'Brand Personalization'), us: true, them: true },
    { feature: t('Osebni kontakt', 'Dedicated Contact'), us: true, them: false },
    { feature: t('Snemanje in modeli', 'Shoots & Models Required'), us: false, them: true },
    { feature: t('A/B testiranje kreativ', 'A/B Creative Testing'), us: true, them: false },
  ];

  const renderCell = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-accent mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

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
          <span className="text-sm uppercase tracking-[2px] text-accent font-semibold mb-4 block">
            {t('Primerjava', 'Comparison')}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            {t('Mi proti klasičnim agencijam', 'Us vs. Traditional Agencies')}
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto overflow-visible rounded-2xl border border-border relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Green glow behind AI Oglasi column */}
          <div className="absolute top-0 right-0 w-1/3 h-full rounded-r-2xl border-2 border-accent/40 pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-1/3 h-full rounded-r-2xl bg-accent/5 pointer-events-none" />
          <div className="absolute -top-3 -right-3 w-[calc(33.333%+6px)] h-[calc(100%+6px)] rounded-2xl shadow-[0_0_30px_hsl(var(--accent)/0.15)] pointer-events-none z-0" />

          {/* Header */}
          <div className="grid grid-cols-3 bg-card border-b border-border relative z-[1]">
            <div className="p-4 md:p-5" />
            <div className="p-4 md:p-5 text-center border-l border-border">
              <span className="font-heading font-bold text-muted-foreground text-sm md:text-base">
                {t('Klasično', 'Traditional')}
              </span>
            </div>
            <div className="p-4 md:p-5 text-center border-l border-accent/40">
              <span className="font-heading font-bold text-accent text-sm md:text-base">AI Oglasi</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              className={`grid grid-cols-3 relative z-[1] ${i < rows.length - 1 ? 'border-b border-border' : ''} ${i % 2 === 0 ? 'bg-muted/30' : 'bg-card'}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }}
            >
              <div className="p-4 md:p-5 flex items-center">
                <span className="text-sm font-medium text-foreground">{row.feature}</span>
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center text-center border-l border-border text-muted-foreground">
                {renderCell(row.them)}
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center text-center border-l border-accent/40 text-foreground">
                {renderCell(row.us)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
