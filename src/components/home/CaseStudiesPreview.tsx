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
    title: { si: 'Povečanje Prodaje za 150%', en: '150% Sales Increase' },
    desc: {
      si: 'E-trgovini smo pomagali doseči izjemne rezultate z AI generiranimi video oglasi.',
      en: 'We helped an e-shop achieve incredible results with AI-generated video ads.',
    },
  },
  {
    id: 'restavracija-hrana',
    icon: Utensils,
    stat: '+80%',
    statLabel: { si: 'Rezervacije', en: 'Bookings' },
    industry: { si: 'Gostinstvo', en: 'Hospitality' },
    service: { si: 'AI Fotografija', en: 'AI Photography' },
    title: { si: 'Food Fotografije Brez Fotografa', en: 'Food Photos Without a Photographer' },
    desc: {
      si: 'Restavracija je preoblikovala svojo spletno prisotnost z AI fotografijo.',
      en: 'A restaurant transformed its web presence with AI photography.',
    },
  },
  {
    id: 'fitness-influencer',
    icon: Dumbbell,
    stat: '2M+',
    statLabel: { si: 'Ogledi', en: 'Views' },
    industry: 'Fitness',
    service: 'AI Video',
    title: { si: 'Viral TikTok Kampanja', en: 'Viral TikTok Campaign' },
    desc: {
      si: 'Fitness influencer je z našimi AI rešitvami dosegel 2M+ ogledov.',
      en: 'A fitness influencer achieved 2M+ views with our AI solutions.',
    },
  },
];

const CaseStudiesPreview = () => {
  const { t } = useLanguage();

  const getLabel = (val: string | { si: string; en: string }) =>
    typeof val === 'string' ? val : t(val.si, val.en);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <motion.p
              className="text-[11px] uppercase tracking-[3px] text-primary font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('Rezultati', 'Results')}
            </motion.p>
            <motion.h2
              className="font-heading font-extrabold text-3xl md:text-[52px] leading-[1.05] tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {t('Uspešne Zgodbe', 'Success Stories')}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[1px] font-semibold text-primary hover:gap-4 transition-all duration-300"
            >
              {t('Vsi Projekti', 'All Projects')}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <Link to={`/portfolio/${cs.id}`} className="block h-full">
                <div className="h-full rounded-2xl border border-border bg-card p-8 flex flex-col hover-lift group-hover:border-primary/30">
                  {/* Stat */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <cs.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-right">
                      <span className="block font-heading font-extrabold text-4xl tracking-tight text-foreground">{cs.stat}</span>
                      <span className="text-[10px] uppercase tracking-[2px] text-muted-foreground">{t(cs.statLabel.si, cs.statLabel.en)}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 mb-5">
                    <span className="text-[10px] uppercase tracking-[1px] font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {getLabel(cs.industry)}
                    </span>
                    <span className="text-[10px] uppercase tracking-[1px] font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {getLabel(cs.service)}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-foreground leading-tight mb-3 tracking-tight">
                    {t(cs.title.si, cs.title.en)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    {t(cs.desc.si, cs.desc.en)}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                    {t('Preberi več', 'Read more')}
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
