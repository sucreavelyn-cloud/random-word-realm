import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioItems } from '@/data/portfolio';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const CaseStudyPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const item = portfolioItems.find((p) => p.id === id);

  if (!item) {
    return (
      <main className="bg-background min-h-screen">
        <Header />
        <div className="pt-32 text-center">
          <p className="text-muted-foreground">{t('Projekt ni najden.', 'Project not found.')}</p>
          <Link to="/portfolio" className="text-primary underline mt-4 inline-block">{t('Nazaj na portfolio', 'Back to portfolio')}</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/portfolio" className="inline-flex items-center text-sm text-hero-muted hover:text-primary-foreground transition-colors mb-6">
            ← {t('Nazaj na portfolio', 'Back to portfolio')}
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/40">
              {t(item.industry.si, item.industry.en)}
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/20 text-secondary border border-secondary/40">
              {item.serviceType === 'video' ? 'Video' : t('Fotografija', 'Photography')}
            </span>
          </div>
          <motion.h1
            className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {t(item.title.si, item.title.en)}
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        {/* Before/After Placeholder Gallery */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border flex items-center justify-center">
            <span className="text-muted-foreground font-medium">{t('Pred / Before', 'Before')}</span>
          </div>
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 flex items-center justify-center">
            <span className="text-primary font-medium">{t('Po / After', 'After')}</span>
          </div>
        </motion.div>

        {/* Challenge */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">{t('Izziv', 'Challenge')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t(item.challenge.si, item.challenge.en)}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading font-bold text-2xl text-foreground mb-4">{t('Rešitev', 'Solution')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t(item.solution.si, item.solution.en)}</p>
        </motion.div>

        {/* Results */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">{t('Rezultati', 'Results')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {item.results.map((r) => (
              <div key={r.label} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="font-heading font-bold text-3xl text-primary mb-1">{r.value}</div>
                <div className="text-sm text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          className="relative p-8 rounded-2xl bg-card border border-border mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="text-4xl text-primary/30 mb-4">"</div>
          <p className="text-lg text-foreground italic leading-relaxed mb-4">
            {t(item.testimonial.quote.si, item.testimonial.quote.en)}
          </p>
          <footer className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
              {item.testimonial.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold text-foreground">{item.testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{t(item.testimonial.role.si, item.testimonial.role.en)}</div>
            </div>
          </footer>
        </motion.blockquote>

        {/* CTA */}
        <motion.div
          className="text-center p-12 rounded-3xl bg-hero-gradient border border-badge-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
            {t('Želite podobne rezultate?', 'Want similar results?')}
          </h2>
          <p className="text-hero-muted mb-6">
            {t('Rezervirajte brezplačno posvetovanje in začnimo vaš projekt.', 'Book a free consultation and let\'s start your project.')}
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-8 h-14 text-base font-semibold rounded-xl bg-primary text-primary-foreground shadow-glow-primary hover:shadow-lg transition-all"
          >
            {t('Rezerviraj Posvetovanje →', 'Book Consultation →')}
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default CaseStudyPage;
