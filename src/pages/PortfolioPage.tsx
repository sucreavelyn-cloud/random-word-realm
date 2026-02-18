import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioItems, filterCategories } from '@/data/portfolio';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const PortfolioPage = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('vse');

  const filtered = activeFilter === 'vse'
    ? portfolioItems
    : activeFilter === 'video'
    ? portfolioItems.filter(p => p.serviceType === 'video')
    : activeFilter === 'foto'
    ? portfolioItems.filter(p => p.serviceType === 'foto')
    : portfolioItems.filter(p => p.category === activeFilter);

  return (
    <main className="bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.p
            className="text-[11px] uppercase tracking-[3px] text-primary font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
          >
            Portfolio
          </motion.p>
          <motion.h1
            className="font-heading font-extrabold text-4xl md:text-[64px] leading-[0.95] tracking-tight text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {t('Naše Delo', 'Our Work')}
          </motion.h1>
          <motion.p
            className="text-lg text-hero-muted max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            {t(
              'Oglejte si izbor naših najboljših projektov AI vsebine.',
              'Browse a selection of our best AI content projects.'
            )}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-20 z-40 bg-background/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-[12px] uppercase tracking-[1px] font-medium transition-all duration-300 ${
                  activeFilter === cat.key
                    ? 'bg-primary text-primary-foreground shadow-glow-primary'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(cat.label.si, cat.label.en)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
                className="break-inside-avoid"
              >
                <Link to={`/portfolio/${item.id}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500">
                    <div
                      className={`w-full bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 flex items-center justify-center ${
                        i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                      }`}
                    >
                      <div className="text-4xl">{item.serviceType === 'video' ? '🎬' : '📸'}</div>
                    </div>

                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-500 flex items-center justify-center">
                      <span className="text-primary-foreground font-heading font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-tight">
                        {t('Poglej več →', 'View more →')}
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 text-[10px] uppercase tracking-[1px] font-medium rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm">
                        {t(item.industry.si, item.industry.en)}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="font-heading font-bold text-card-foreground group-hover:text-primary transition-colors tracking-tight">
                        {t(item.title.si, item.title.en)}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PortfolioPage;
