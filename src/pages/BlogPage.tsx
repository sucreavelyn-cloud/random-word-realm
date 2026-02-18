import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, blogCategories } from '@/data/blog';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const BlogPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('vse');

  const featured = blogPosts.find((p) => p.featured);
  const filtered = activeCategory === 'vse'
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="bg-background">
      <Header />

      {/* Featured post */}
      {featured && (
        <section className="pt-28 bg-mesh-gradient relative overflow-hidden">
          <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-10 items-center pb-20 pt-12 relative z-10">
            <div>
              <motion.p
                className="text-[11px] uppercase tracking-[3px] text-primary font-semibold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease }}
              >
                {t('Izpostavljeno', 'Featured')}
              </motion.p>
              <Link to={`/blog/${featured.slug}`} className="group block">
                <motion.h1
                  className="font-heading font-extrabold text-3xl md:text-[52px] leading-[0.95] tracking-tight text-primary-foreground mb-5 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease }}
                >
                  {t(featured.title.si, featured.title.en)}
                </motion.h1>
                <motion.p
                  className="text-lg text-hero-muted mb-5 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease }}
                >
                  {t(featured.excerpt.si, featured.excerpt.en)}
                </motion.p>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[1.5px] text-hero-muted">
                  <span>{featured.publishDate}</span>
                  <span className="w-1 h-1 rounded-full bg-hero-muted" />
                  <span>{featured.readTime} min</span>
                  <span className="w-1 h-1 rounded-full bg-hero-muted" />
                  <span className="text-primary">{t(featured.categoryLabel.si, featured.categoryLabel.en)}</span>
                </div>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              <Link to={`/blog/${featured.slug}`} className="block rounded-2xl overflow-hidden border border-badge-border">
                <img src={featured.heroImage} alt={t(featured.title.si, featured.title.en)} className="w-full aspect-video object-cover" loading="lazy" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-[12px] uppercase tracking-[1px] font-medium transition-all duration-300 ${
                  activeCategory === cat.key
                    ? 'bg-primary text-primary-foreground'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500 flex flex-col">
                    <div className="aspect-video relative overflow-hidden">
                      <img src={post.heroImage} alt={t(post.title.si, post.title.en)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <span className="absolute top-3 left-3 px-3 py-1 text-[10px] uppercase tracking-[1px] font-medium rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm">
                        {t(post.categoryLabel.si, post.categoryLabel.en)}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-heading font-bold text-lg text-card-foreground group-hover:text-primary transition-colors tracking-tight mb-3">
                        {t(post.title.si, post.title.en)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3 leading-relaxed">
                        {t(post.excerpt.si, post.excerpt.en)}
                      </p>
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[1px] text-muted-foreground">
                        <span>{post.publishDate}</span>
                        <span>{post.readTime} min</span>
                      </div>
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

export default BlogPage;
