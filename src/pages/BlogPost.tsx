import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import { CalendarDays, User, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground">
            {t('Članka nismo našli', 'Post not found')}
          </h1>
          <Link to="/blog" className="text-primary mt-4 inline-block">
            {t('Nazaj na blog', 'Back to blog')}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const content = t(post.content.si, post.content.en);

  // Simple markdown-like rendering
  const renderContent = (text: string) => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];
    let key = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={key++} className="list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-6">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const formatInline = (line: string): string => {
      return line
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
    };

    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed) {
        flushList();
        continue;
      }

      if (trimmed.startsWith('# ')) {
        flushList();
        // Skip h1 since we show title separately
        continue;
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={key++} className="font-heading font-bold text-xl text-foreground mt-10 mb-4">
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={key++} className="font-heading font-bold text-2xl text-foreground mt-12 mb-5">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.match(/^\d+\.\s/)) {
        if (!inList) inList = true;
        listItems.push(trimmed.replace(/^\d+\.\s/, ''));
      } else if (trimmed.startsWith('- ')) {
        if (!inList) inList = true;
        listItems.push(trimmed.slice(2));
      } else {
        flushList();
        elements.push(
          <p
            key={key++}
            className="text-muted-foreground leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
          />
        );
      }
    }
    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('Nazaj na blog', 'Back to blog')}
            </Link>

            <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary mb-4">
              {t(post.category.si, post.category.en)}
            </span>

            <h1 className="font-heading font-bold text-[32px] md:text-[42px] lg:text-[48px] leading-[1.15] text-foreground mb-6">
              {t(post.title.si, post.title.en)}
            </h1>

            <div className="flex items-center gap-5 text-sm text-muted-foreground mb-10">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString(t('sl-SI', 'en-US'), {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <img
              src={post.heroImage}
              alt={t(post.title.si, post.title.en)}
              className="w-full rounded-2xl object-cover aspect-video"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto prose-custom"
          >
            {renderContent(content)}

            {post.inlineImage && (
              <div className="my-10">
                <img
                  src={post.inlineImage}
                  alt=""
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
