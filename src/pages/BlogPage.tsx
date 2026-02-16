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

      {/* Featured post hero */}
      {featured && (
        <section className="pt-24 bg-hero-gradient">
          <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center pb-16 pt-12">
            <div>
              <motion.p
                className="text-sm uppercase tracking-[1.5px] text-secondary font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease }}
              >
                {t('Izpostavljeno', 'Featured')}
              </motion.p>
              <Link to={`/blog/${featured.slug}`} className="group block">
                <motion.h1
                  className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-4 group-hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease }}
                >
                  {t(featured.title.si, featured.title.en)}
                </motion.h1>
                <motion.p
                  className="text-lg text-hero-muted mb-4 max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease }}
                >
                  {t(featured.excerpt.si, featured.excerpt.en)}
                </motion.p>
                <div className="flex items-center gap-4 text-sm text-hero-muted">
                  <span>{featured.publishDate}</span>
                  <span>·</span>
                  <span>{featured.readTime} min {t('branja', 'read')}</span>
                  <span>·</span>
                  <span className="text-primary">{t(featured.categoryLabel.si, featured.categoryLabel.en)}</span>
                </div>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
            >
              <Link to={`/blog/${featured.slug}`} className="block rounded-2xl overflow-hidden border border-badge-border shadow-xl">
                <img src={featured.heroImage} alt={t(featured.title.si, featured.title.en)} className="w-full aspect-video object-cover" loading="lazy" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.key
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300 flex flex-col">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <img src={post.heroImage} alt={t(post.title.si, post.title.en)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full bg-primary/80 text-primary-foreground backdrop-blur-sm">
                        {t(post.categoryLabel.si, post.categoryLabel.en)}
                      </span>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-heading font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors mb-2">
                        {t(post.title.si, post.title.en)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                        {t(post.excerpt.si, post.excerpt.en)}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.publishDate}</span>
                        <span>{post.readTime} min {t('branja', 'read')}</span>
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
