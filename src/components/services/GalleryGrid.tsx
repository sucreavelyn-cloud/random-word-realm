import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface GalleryGridProps {
  count?: number;
}

const GalleryGrid = ({ count = 6 }: GalleryGridProps) => {
  const { t } = useLanguage();

  const labels = [
    { si: 'E-commerce Produkt', en: 'E-commerce Product' },
    { si: 'Lifestyle Scena', en: 'Lifestyle Scene' },
    { si: 'Kataložna Fotografija', en: 'Catalog Photography' },
    { si: 'Odstranitev Ozadja', en: 'Background Removal' },
    { si: 'Socialna Omrežja', en: 'Social Media' },
    { si: 'Marketinški Material', en: 'Marketing Material' },
  ];

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
          {t('Galerija', 'Gallery')}
        </motion.p>
        <motion.h2
          className="font-heading font-extrabold text-3xl md:text-[44px] tracking-tight text-foreground text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('Primeri Del', 'Work Examples')}
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {Array.from({ length: count }).map((_, i) => (
            <motion.div
              key={i}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-card border border-border hover-lift"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-primary/4 to-accent/8" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-primary-foreground text-xs font-medium">
                  {t(labels[i % labels.length].si, labels[i % labels.length].en)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
