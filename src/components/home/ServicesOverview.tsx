import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Film, Camera, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: { si: 'AI Video Oglasi', en: 'AI Video Ads' },
    description: {
      si: 'Profesionalni video oglasi za social media, YouTube in spletne kampanje — ustvarjeni z AI v 24 urah.',
      en: 'Professional video ads for social media, YouTube and web campaigns — created with AI in 24 hours.',
    },
    features: [
      { si: 'Social media oglasi', en: 'Social media ads' },
      { si: 'Produktni demo videi', en: 'Product demo videos' },
      { si: 'Brand story videi', en: 'Brand story videos' },
      { si: 'AI voiceover', en: 'AI voiceover' },
    ],
    link: '/ai-video-oglasi',
    price: '€149',
  },
  {
    icon: Camera,
    title: { si: 'AI Fotografija', en: 'AI Photography' },
    description: {
      si: 'Fotorealistična produktna fotografija brez studia. Perfektna osvetlitev, ozadja in stilizacija.',
      en: 'Photorealistic product photography without a studio. Perfect lighting, backgrounds and styling.',
    },
    features: [
      { si: 'E-commerce fotografije', en: 'E-commerce photos' },
      { si: 'Lifestyle scene', en: 'Lifestyle scenes' },
      { si: 'Odstranitev ozadja', en: 'Background removal' },
      { si: 'Product placement', en: 'Product placement' },
    ],
    link: '/ai-produktna-fotografija',
    price: '€99',
  },
];

const ServicesOverview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
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
              {t('Storitve', 'Services')}
            </motion.p>
            <motion.h2
              className="font-heading font-extrabold text-3xl md:text-[52px] leading-[1.05] tracking-tight text-primary-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {t('Kaj Ustvarjamo', 'What We Create')}
            </motion.h2>
          </div>
          <motion.p
            className="text-hero-muted max-w-[400px] leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('Izberite storitev in v 24 urah prejmite profesionalno AI vsebino.', 'Choose a service and receive professional AI content in 24 hours.')}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative glass-card rounded-3xl p-10 md:p-14 flex flex-col hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              {/* Price tag */}
              <span className="absolute top-8 right-8 text-[11px] uppercase tracking-[1.5px] font-semibold text-primary">
                {t(`Od ${service.price}`, `From ${service.price}`)}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                <service.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4 tracking-tight">
                {t(service.title.si, service.title.en)}
              </h3>

              {/* Description */}
              <p className="text-hero-muted leading-relaxed mb-8">
                {t(service.description.si, service.description.en)}
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 gap-3 mb-10 flex-1">
                {service.features.map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2 text-sm text-hero-muted">
                    <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {t(f.si, f.en)}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[1px] font-semibold text-primary group-hover:gap-4 transition-all duration-300"
              >
                {t('Poglej Več', 'Learn More')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
