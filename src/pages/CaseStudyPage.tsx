import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioItems } from '@/data/portfolio';
import { ArrowRight } from 'lucide-react';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const CaseStudyPage = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  const item = portfolioItems.find((p) => p.id === id);

  if (!item) {
    return (
      <main className="bg-background min-h-screen">
        <Header />
        <div className="pt-36 text-center">
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
      <section className="pt-36 pb-20 bg-mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/portfolio" className="inline-flex items-center text-[11px] uppercase tracking-[1.5px] text-hero-muted hover:text-primary transition-colors mb-8">
            ← {t('Nazaj', 'Back')}
          </Link>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="px-3 py-1 text-[10px] uppercase tracking-[1.5px] font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {t(item.industry.si, item.industry.en)}
            </span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-[1.5px] font-medium rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              {item.serviceType === 'video' ? 'Video' : t('Fotografija', 'Photography')}
            </span>
          </div>
          <motion.h1
            className="font-heading font-extrabold text-3xl md:text-[56px] leading-[0.95] tracking-tight text-primary-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {t(item.title.si, item.title.en)}
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
        {/* Before/After */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="aspect-video rounded-2xl bg-muted border border-border flex items-center justify-center">
            <span className="text-muted-foreground font-heading font-medium text-sm uppercase tracking-[2px]">{t('Pred', 'Before')}</span>
          </div>
          <div className="aspect-video rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center">
            <span className="text-primary font-heading font-medium text-sm uppercase tracking-[2px]">{t('Po', 'After')}</span>
          </div>
        </motion.div>

        {/* Challenge */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading font-extrabold text-2xl text-foreground mb-4 tracking-tight">{t('Izziv', 'Challenge')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t(item.challenge.si, item.challenge.en)}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading font-extrabold text-2xl text-foreground mb-4 tracking-tight">{t('Rešitev', 'Solution')}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{t(item.solution.si, item.solution.en)}</p>
        </motion.div>

        {/* Results */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h2 className="font-heading font-extrabold text-2xl text-foreground mb-8 tracking-tight">{t('Rezultati', 'Results')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {item.results.map((r) => (
              <div key={r.label} className="text-center p-6 rounded-2xl bg-card border border-border">
                <div className="font-heading font-extrabold text-3xl text-primary mb-1 tracking-tight">{r.value}</div>
                <div className="text-[11px] uppercase tracking-[1.5px] text-muted-foreground">{r.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          className="relative p-10 rounded-2xl bg-card border border-border mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="text-5xl text-primary/20 font-heading mb-4">"</div>
          <p className="text-lg text-foreground italic leading-relaxed mb-6">
            {t(item.testimonial.quote.si, item.testimonial.quote.en)}
          </p>
          <footer className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-heading font-bold text-sm">
              {item.testimonial.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-heading font-bold text-foreground">{item.testimonial.author}</div>
              <div className="text-[11px] uppercase tracking-[1.5px] text-muted-foreground">{t(item.testimonial.role.si, item.testimonial.role.en)}</div>
            </div>
          </footer>
        </motion.blockquote>

        {/* CTA */}
        <motion.div
          className="text-center p-14 rounded-3xl bg-hero-gradient border border-badge-border relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-foreground mb-4 tracking-tight">
              {t('Želite podobne rezultate?', 'Want similar results?')}
            </h2>
            <p className="text-hero-muted mb-8">
              {t('Rezervirajte brezplačno posvetovanje.', 'Book a free consultation.')}
            </p>
            <Link
              to="/kontakt"
              className="group inline-flex items-center gap-3 px-8 h-14 text-sm uppercase tracking-[1px] font-semibold rounded-full bg-primary text-primary-foreground shadow-glow-primary hover:gap-5 transition-all duration-300"
            >
              {t('Rezerviraj Klic', 'Book a Call')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
};

export default CaseStudyPage;
