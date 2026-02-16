import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Film, Camera, Check } from 'lucide-react';

const services = [
  {
    icon: Film,
    borderColor: 'border-primary/40',
    iconBg: 'bg-primary/20',
    checkColor: 'text-primary',
    btnBg: 'bg-primary hover:shadow-glow-primary',
    title: { si: 'AI Video Oglasi & Socialna Vsebina', en: 'AI Video Ads & Social Content' },
    description: {
      si: 'Profesionalni video oglasi za social media, YouTube in spletne kampanje. Od kratkih reels do dolgih promocijskih videov – vse ustvarjeno z AI v rekordnem času.',
      en: 'Professional video ads for social media, YouTube and web campaigns. From short reels to long promotional videos – all created with AI in record time.',
    },
    features: [
      { si: 'Social media video oglasi (Instagram, TikTok, Facebook)', en: 'Social media video ads (Instagram, TikTok, Facebook)' },
      { si: 'Produktni demo videi', en: 'Product demo videos' },
      { si: 'Brand story videi', en: 'Brand story videos' },
      { si: 'AI voiceover v slovenščini', en: 'AI voiceover in Slovenian' },
    ],
    cta: { si: 'Več o Video Storitvah →', en: 'More About Video Services →' },
    link: '/ai-video-oglasi',
    price: '€299',
  },
  {
    icon: Camera,
    borderColor: 'border-secondary/40',
    iconBg: 'bg-secondary/20',
    checkColor: 'text-secondary',
    btnBg: 'bg-secondary hover:shadow-glow-secondary',
    title: { si: 'AI Produktna Fotografija & Marketing Slike', en: 'AI Product Photography & Marketing Images' },
    description: {
      si: 'Spremenite osnovne produktne fotografije v profesionalne marketing materiale. Perfektna osvetlitev, ozadja in stilizacija – brez fotografskega studia.',
      en: 'Transform basic product photos into professional marketing materials. Perfect lighting, backgrounds and styling – without a photo studio.',
    },
    features: [
      { si: 'E-commerce produktne fotografije', en: 'E-commerce product photos' },
      { si: 'Lifestyle in kontekstualne slike', en: 'Lifestyle and contextual images' },
      { si: 'Odstranitev in sprememba ozadja', en: 'Background removal and replacement' },
      { si: 'Kreativni product placement', en: 'Creative product placement' },
    ],
    cta: { si: 'Več o Fotografiji →', en: 'More About Photography →' },
    link: '/ai-produktna-fotografija',
    price: '€149',
  },
];

const ServicesOverview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        {/* Header */}
        <motion.p
          className="text-sm text-secondary uppercase tracking-[1.5px] text-center font-medium"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {t('NAŠE STORITVE', 'OUR SERVICES')}
        </motion.p>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('Kaj Lahko Ustvarimo za Vas?', 'What Can We Create for You?')}
        </motion.h2>
        <motion.p
          className="text-lg text-hero-muted text-center max-w-[600px] mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('Izberite storitev, ki ustreza vašim potrebam', 'Choose the service that fits your needs')}
        </motion.p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className={`relative bg-badge-bg border ${service.borderColor} rounded-3xl p-8 md:p-12 min-h-[480px] flex flex-col group`}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: 0.3 + idx * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon */}
              <motion.div
                className={`w-24 h-24 rounded-full ${service.iconBg} flex items-center justify-center mb-8`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 0.4 + idx * 0.2 }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              >
                <service.icon className={`w-10 h-10 ${service.checkColor}`} />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="font-heading font-bold text-2xl md:text-[32px] text-primary-foreground mb-4 leading-tight"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.2 }}
              >
                {t(service.title.si, service.title.en)}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-hero-muted text-[17px] leading-[1.7] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
              >
                {t(service.description.si, service.description.en)}
              </motion.p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-1">
                {service.features.map((f, fi) => (
                  <motion.li
                    key={fi}
                    className="flex items-start gap-2 text-[15px] text-hero-muted"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + idx * 0.2 + fi * 0.1 }}
                  >
                    <Check className={`w-[18px] h-[18px] ${service.checkColor} mt-0.5 flex-shrink-0`} />
                    <span>{t(f.si, f.en)}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 + idx * 0.2 }}
              >
                <Link
                  to={service.link}
                  className={`block w-full h-12 ${service.btnBg} text-primary-foreground font-semibold text-base rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105`}
                >
                  {t(service.cta.si, service.cta.en)}
                </Link>
              </motion.div>

              {/* Price Badge */}
              <motion.span
                className="absolute bottom-6 right-6 bg-badge-bg px-4 py-2 rounded-full text-[13px] font-semibold text-primary border border-badge-border"
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 + idx * 0.2 }}
              >
                {t(`Od ${service.price}`, `From ${service.price}`)}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
