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
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.p
            className="text-sm uppercase tracking-[1.5px] text-secondary font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {t('Naš Portfolio', 'Our Portfolio')}
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-4xl md:text-6xl text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {t('Projekti, Ki Govorijo Sami', 'Projects That Speak for Themselves')}
          </motion.h1>
          <motion.p
            className="text-lg text-hero-muted max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease }}
          >
            {t(
              'Oglejte si izbor naših najboljših projektov AI video oglasov in produktne fotografije.',
              'Browse a selection of our best AI video ad and product photography projects.'
            )}
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-16 z-40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat.key
                    ? 'bg-primary text-primary-foreground shadow-glow-primary'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {t(cat.label.si, cat.label.en)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="break-inside-avoid"
              >
                <Link to={`/portfolio/${item.id}`} className="group block">
                  <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300">
                    {/* Thumbnail placeholder */}
                    <div
                      className={`w-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center ${
                        i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                      }`}
                    >
                      <div className="text-4xl">{item.serviceType === 'video' ? '🎬' : '📸'}</div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-center justify-center">
                      <span className="text-primary-foreground font-heading font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {t('Poglej več →', 'View more →')}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm">
                        {t(item.industry.si, item.industry.en)}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-secondary-foreground backdrop-blur-sm">
                        {item.serviceType === 'video' ? 'Video' : t('Foto', 'Photo')}
                      </span>
                    </div>

                    {/* Title bar */}
                    <div className="p-4">
                      <h3 className="font-heading font-semibold text-card-foreground group-hover:text-primary transition-colors">
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
