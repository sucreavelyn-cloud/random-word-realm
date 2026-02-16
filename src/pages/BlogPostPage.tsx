import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blog';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const BlogPostPage = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bg-background min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <p className="text-muted-foreground">{t('Objava ni najdena.', 'Post not found.')}</p>
          <Link to="/blog" className="text-primary underline mt-4 inline-block">{t('Nazaj na blog', 'Back to blog')}</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <main className="bg-background">
      <Header />

      {/* Featured image */}
      <section className="pt-24">
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img src={post.heroImage} alt={t(post.title.si, post.title.en)} className="w-full h-full object-cover" />
        </div>
      </section>

      <article className="container mx-auto px-4 md:px-6 max-w-3xl -mt-16 relative z-10">
        <motion.div
          className="bg-card rounded-3xl border border-border p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted-foreground">
            <Link to="/blog" className="hover:text-primary transition-colors">← {t('Blog', 'Blog')}</Link>
            <span>·</span>
            <span className="text-primary font-medium">{t(post.categoryLabel.si, post.categoryLabel.en)}</span>
            <span>·</span>
            <span>{post.publishDate}</span>
            <span>·</span>
            <span>{post.readTime} min {t('branja', 'read')}</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8 leading-tight">
            {t(post.title.si, post.title.en)}
          </h1>

          {/* Inline image */}
          <div className="rounded-2xl overflow-hidden mb-8 border border-border">
            <img src={post.inlineImage} alt="" className="w-full aspect-video object-cover" loading="lazy" />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-foreground
              prose-headings:font-heading prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-strong:text-foreground
              prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-li:text-muted-foreground
              prose-th:text-foreground prose-td:text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: t(post.content.si, post.content.en)
                .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                .replace(/^> "(.+)"$/gm, '<blockquote><p>"$1"</p></blockquote>')
                .replace(/^> (.+)$/gm, '<blockquote><p>$1</p></blockquote>')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/^\d+\. \*\*(.+?)\*\* - (.+)$/gm, '<li><strong>$1</strong> — $2</li>')
                .replace(/^- (.+)$/gm, '<li>$1</li>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/^(?!<[hblu])/gm, '<p>')
                .replace(/(?<![>])$/gm, '</p>')
            }}
          />

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-border flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
              AI
            </div>
            <div>
              <div className="font-semibold text-foreground">{post.author}</div>
              <div className="text-sm text-muted-foreground">{t('AI Oglasi ekipa', 'AI Oglasi team')}</div>
            </div>
          </div>
        </motion.div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16 mb-16">
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">
              {t('Podobne objave', 'Related posts')}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="group block rounded-2xl bg-card border border-border hover:border-primary/40 overflow-hidden transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img src={r.heroImage} alt={t(r.title.si, r.title.en)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {t(r.title.si, r.title.en)}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center p-10 rounded-3xl bg-hero-gradient border border-badge-border mb-16">
          <h2 className="font-heading font-bold text-2xl text-primary-foreground mb-3">
            {t('Potrebujete AI Vsebino?', 'Need AI Content?')}
          </h2>
          <p className="text-hero-muted mb-6">{t('Rezervirajte brezplačno posvetovanje.', 'Book a free consultation.')}</p>
          <Link to="/kontakt" className="inline-flex items-center px-8 h-14 text-base font-semibold rounded-xl bg-primary text-primary-foreground shadow-glow-primary">
            {t('Rezerviraj Posvetovanje →', 'Book Consultation →')}
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPostPage;
