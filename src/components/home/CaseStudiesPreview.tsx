import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const floatingShapes = [
  { size: 300, top: '10%', left: '-5%', dur: 20, xRange: 30, yRange: -40 },
  { size: 250, top: '60%', right: '-8%', dur: 15, xRange: -40, yRange: 30 },
  { size: 200, bottom: '5%', left: '30%', dur: 18, xRange: 20, yRange: -30 },
  { size: 350, top: '20%', right: '20%', dur: 22, xRange: -25, yRange: 35 },
];

const caseStudies = [
  {
    industry: 'E-Commerce',
    service: 'AI Video',
    industryColor: 'bg-secondary',
    serviceColor: 'bg-primary',
    title: { si: 'Povečanje Prodaje za 150% z AI Video Oglasi', en: '150% Sales Increase with AI Video Ads' },
    desc: {
      si: 'Kratek opis kako smo pomagali e-trgovini doseči neverjetne rezultate z AI generiranimi video oglasi na Instagram in Facebook...',
      en: 'A brief description of how we helped an e-shop achieve incredible results with AI-generated video ads on Instagram and Facebook...',
    },
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    industry: { si: 'Gostinstvo', en: 'Hospitality' },
    service: { si: 'AI Fotografija', en: 'AI Photography' },
    industryColor: 'bg-secondary',
    serviceColor: 'bg-primary',
    title: { si: 'Profesionalne Food Fotografije Brez Fotografa', en: 'Professional Food Photos Without a Photographer' },
    desc: {
      si: 'Restavracija je s pomočjo AI fotografije preoblikovala svojo celotno spletno prisotnost in povečala rezervacije za 80%...',
      en: 'A restaurant transformed its entire web presence with AI photography and increased reservations by 80%...',
    },
    gradient: 'from-secondary/20 to-primary/20',
  },
  {
    industry: 'Fitness',
    service: 'AI Video',
    industryColor: 'bg-secondary',
    serviceColor: 'bg-primary',
    title: { si: 'Viral TikTok Kampanja v 48 Urah', en: 'Viral TikTok Campaign in 48 Hours' },
    desc: {
      si: 'Fitness influencer je z našimi AI video rešitvami dosegel 2M+ ogledov na TikToku in podvojil število naročnikov...',
      en: 'A fitness influencer achieved 2M+ TikTok views and doubled subscribers with our AI video solutions...',
    },
    gradient: 'from-accent/20 to-primary/20',
  },
];

const CaseStudiesPreview = () => {
  const { t } = useLanguage();

  const getIndustry = (ind: string | { si: string; en: string }) =>
    typeof ind === 'string' ? ind : t(ind.si, ind.en);
  const getService = (svc: string | { si: string; en: string }) =>
    typeof svc === 'string' ? svc : t(svc.si, svc.en);

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      {/* Floating shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            x: [0, shape.xRange, 0],
            y: [0, shape.yRange, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: shape.dur, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Header */}
        <motion.p
          className="text-sm text-secondary uppercase tracking-[1.5px] text-center font-semibold"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {t('NAŠE DELO', 'OUR WORK')}
        </motion.p>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
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

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-2xl border border-badge-border overflow-hidden h-[480px] flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-primary hover:shadow-[0_0_0_1px_hsl(var(--primary)),0_25px_50px_rgba(59,130,246,0.3)]"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.3 + i * 0.2 }}
            >
              {/* Image placeholder */}
              <div className={`relative h-[60%] bg-gradient-to-br ${cs.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/80 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t('Poglej Projekt →', 'View Project →')}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  <span className={`${cs.industryColor} text-white text-xs font-semibold px-3 py-1 rounded-xl`}>
                    {getIndustry(cs.industry)}
                  </span>
                  <span className={`${cs.serviceColor} text-white text-xs font-semibold px-3 py-1 rounded-xl`}>
                    {getService(cs.service)}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-[22px] text-primary-foreground leading-tight mb-3">
                  {t(cs.title.si, cs.title.en)}
                </h3>
                <p className="text-hero-muted text-[15px] leading-relaxed line-clamp-3 flex-1">
                  {t(cs.desc.si, cs.desc.en)}
                </p>
                <Link
                  to="/portfolio"
                  className="text-sm font-semibold text-primary hover:text-secondary transition-colors mt-4 inline-block hover:translate-x-1 transition-transform"
                >
                  {t('Preberi več →', 'Read more →')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link
            to="/portfolio"
            className="inline-block px-12 py-4 text-lg border-2 border-white text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/10"
          >
            {t('Poglej Vse Projekte →', 'View All Projects →')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
