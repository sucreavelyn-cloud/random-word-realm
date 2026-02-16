import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, TrendingUp, Utensils, Dumbbell } from 'lucide-react';

const caseStudies = [
  {
    id: 'ecommerce-moda',
    icon: TrendingUp,
    stat: '+150%',
    statLabel: { si: 'Prodaja', en: 'Sales' },
    industry: 'E-Commerce',
    service: 'AI Video',
    title: { si: 'Povečanje Prodaje za 150% z AI Video Oglasi', en: '150% Sales Increase with AI Video Ads' },
    desc: {
      si: 'E-trgovini smo pomagali doseči izjemne rezultate z AI generiranimi video oglasi na Instagram in Facebook.',
      en: 'We helped an e-shop achieve incredible results with AI-generated video ads on Instagram and Facebook.',
    },
    accent: 'primary',
  },
  {
    id: 'restavracija-hrana',
    icon: Utensils,
    stat: '+80%',
    statLabel: { si: 'Rezervacije', en: 'Bookings' },
    industry: { si: 'Gostinstvo', en: 'Hospitality' },
    service: { si: 'AI Fotografija', en: 'AI Photography' },
    title: { si: 'Profesionalne Food Fotografije Brez Fotografa', en: 'Professional Food Photos Without a Photographer' },
    desc: {
      si: 'Restavracija je s pomočjo AI fotografije preoblikovala svojo celotno spletno prisotnost.',
      en: 'A restaurant transformed its entire web presence with AI photography.',
    },
    accent: 'secondary',
  },
  {
    id: 'fitness-influencer',
    icon: Dumbbell,
    stat: '2M+',
    statLabel: { si: 'Ogledi', en: 'Views' },
    industry: 'Fitness',
    service: 'AI Video',
    title: { si: 'Viral TikTok Kampanja v 48 Urah', en: 'Viral TikTok Campaign in 48 Hours' },
    desc: {
      si: 'Fitness influencer je z našimi AI video rešitvami dosegel 2M+ ogledov na TikToku.',
      en: 'A fitness influencer achieved 2M+ TikTok views with our AI video solutions.',
    },
    accent: 'accent',
  },
];

const CaseStudiesPreview = () => {
  const { t } = useLanguage();

  const getLabel = (val: string | { si: string; en: string }) =>
    typeof val === 'string' ? val : t(val.si, val.en);

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Header */}
        <motion.p
          className="text-sm text-secondary uppercase tracking-[1.5px] text-center font-semibold"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('NAŠE DELO', 'OUR WORK')}
        </motion.p>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('Projekti, Ki Govorijo Zase', 'Projects That Speak for Themselves')}
        </motion.h2>
        <motion.p
          className="text-lg text-hero-muted text-center max-w-[600px] mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(
            'Poglej, kako smo pomagali slovenskim podjetjem rasti z AI vsebino',
            'See how we helped Slovenian businesses grow with AI content'
          )}
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              className="group relative bg-badge-bg/60 backdrop-blur-sm border border-badge-border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:border-primary/40 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              {/* Stat highlight */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cs.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <span className="block font-heading font-bold text-3xl text-primary">{cs.stat}</span>
                  <span className="text-xs text-hero-muted uppercase tracking-wide">{t(cs.statLabel.si, cs.statLabel.en)}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4">
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {getLabel(cs.industry)}
                </span>
                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                  {getLabel(cs.service)}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-heading font-bold text-xl text-primary-foreground leading-tight mb-3">
                {t(cs.title.si, cs.title.en)}
              </h3>
              <p className="text-hero-muted text-[15px] leading-relaxed flex-1 mb-6">
                {t(cs.desc.si, cs.desc.en)}
              </p>

              {/* Link */}
              <Link
                to={`/portfolio/${cs.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-300"
              >
                {t('Preberi več', 'Read more')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base border border-badge-border text-primary-foreground rounded-xl font-semibold transition-all duration-300 hover:bg-badge-bg hover:border-primary/40"
          >
            {t('Poglej Vse Projekte', 'View All Projects')}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
