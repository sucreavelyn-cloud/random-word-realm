import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import { CalendarDays, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Map<string, { si: string; en: string }>();
    blogPosts.forEach((p) => {
      cats.set(p.category.en, p.category);
    });
    return Array.from(cats.values());
  }, []);

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'all') return blogPosts;
    return blogPosts.filter((p) => p.category.en === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-foreground mb-4">
              {t('Blog', 'Blog')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                'Sveži vpogledi, nasveti in trendi iz sveta AI vsebin ter digitalnega marketinga.',
                'Latest insights, tips, and trends from the world of AI content and digital marketing.'
              )}
            </p>
          </motion.div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30'
              }`}
            >
              {t('Vse', 'All')}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.en}
                onClick={() => setActiveFilter(cat.en)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                  activeFilter === cat.en
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-muted-foreground border-border hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {t(cat.si, cat.en)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/40 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.heroImage}
                      alt={t(post.title.si, post.title.en)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays className="w-3.5 h-3.5" />
                        {new Date(post.date).toLocaleDateString(t('sl-SI', 'en-US'), {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                    </div>
                    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-3">
                      {t(post.category.si, post.category.en)}
                    </span>
                    <h2 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {t(post.title.si, post.title.en)}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {t(post.excerpt.si, post.excerpt.en)}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      {t('Preberi več', 'Read more')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
