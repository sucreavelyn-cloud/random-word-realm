import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Film, Camera, Check } from 'lucide-react';
import heroVideo from '@/assets/hero-scroll-video.mp4';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const services = [
  {
    icon: Film,
    borderColor: 'border-primary/40',
    iconBg: 'bg-primary/20',
    checkColor: 'text-primary',
    btnBg: 'bg-primary hover:shadow-glow-primary',
    title: { si: 'AI Video Oglasi & Socialna Vsebina', en: 'AI Video Ads & Social Content' },
    description: {
      si: 'Profesionalni video oglasi za social media, YouTube in spletne kampanje.',
      en: 'Professional video ads for social media, YouTube and web campaigns.',
    },
    features: [
      { si: 'Social media video oglasi', en: 'Social media video ads' },
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
    title: { si: 'AI Produktna Fotografija', en: 'AI Product Photography' },
    description: {
      si: 'Spremenite osnovne produktne fotografije v profesionalne marketing materiale.',
      en: 'Transform basic product photos into professional marketing materials.',
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

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Hero text: visible 0-15%, fades out by 20%
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.12, 0.18], [1, 1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.18], [0, -100]);

  // Video: scrubs through, then fades out as services appear
  const videoOpacity = useTransform(scrollYProgress, [0, 0.08, 0.35, 0.45], [0.5, 1, 1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 0.35, 0.45], [0.9, 1.05, 1.15]);

  // Services header: fades in around 30-40%
  const servicesHeaderOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const servicesHeaderY = useTransform(scrollYProgress, [0.3, 0.4], [60, 0]);

  // Service card 1: fades in around 42-55%
  const card1Opacity = useTransform(scrollYProgress, [0.42, 0.52], [0, 1]);
  const card1Y = useTransform(scrollYProgress, [0.42, 0.52], [80, 0]);
  const card1Scale = useTransform(scrollYProgress, [0.42, 0.52], [0.9, 1]);

  // Service card 2: fades in around 55-68%
  const card2Opacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
  const card2Y = useTransform(scrollYProgress, [0.55, 0.65], [80, 0]);
  const card2Scale = useTransform(scrollYProgress, [0.55, 0.65], [0.9, 1]);

  // Scrub video on scroll
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;

    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (video.duration && isFinite(video.duration)) {
        // Map scroll 0-45% to full video duration
        const videoProgress = Math.min(v / 0.45, 1);
        video.currentTime = videoProgress * video.duration;
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section ref={sectionRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none z-10" />

        {/* Scroll-controlled video */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: videoScale, opacity: videoOpacity }}
        >
          <video
            ref={videoRef}
            src={heroVideo}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-bg-from)/0.4)] via-transparent to-[hsl(var(--hero-bg-from)/0.6)]" />
        </motion.div>

        {/* Hero text */}
        <motion.div
          className="container mx-auto px-6 relative z-20 text-center max-w-[900px]"
          style={{ opacity: heroTextOpacity, y: heroTextY }}
        >
          <motion.p
            className="text-sm uppercase tracking-[1.5px] text-secondary font-medium mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {t('🇸🇮 Slovensko AI Podjetje', '🇸🇮 Slovenian AI Company')}
          </motion.p>

          <motion.h1
            className="font-heading font-bold text-[56px] md:text-[80px] lg:text-[100px] leading-[1] text-primary-foreground mb-6"
            {...fadeUp(0.2)}
          >
            <span className="text-gradient-brand">AI Oglasi</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-hero-muted max-w-[640px] mx-auto leading-relaxed mb-12"
            {...fadeUp(0.4)}
          >
            {t(
              'Profesionalni AI video oglasi in produktna fotografija, ki povečajo prodajo. Brez dolgih čakalnih dob, brez visokih cen, samo rezultati.',
              'Professional AI video ads and product photography that increase sales. No long waiting times, no high prices, just results.'
            )}
          </motion.p>

          <motion.div {...fadeUp(0.6)}>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center h-16 px-10 text-lg font-semibold rounded-2xl bg-primary text-primary-foreground shadow-glow-primary"
              whileHover={{ y: -4, boxShadow: '0 0 50px -5px hsl(217 91% 60% / 0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              {t('Rezerviraj Brezplačno Posvetovanje →', 'Book Free Consultation →')}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Services overlay — appears after video fades */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="container mx-auto px-6 max-w-[1280px]">
            {/* Services Header */}
            <motion.div
              className="text-center mb-12"
              style={{ opacity: servicesHeaderOpacity, y: servicesHeaderY }}
            >
              <p className="text-sm text-secondary uppercase tracking-[1.5px] font-medium">
                {t('NAŠE STORITVE', 'OUR SERVICES')}
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground mt-4 mb-4">
                {t('Kaj Lahko Ustvarimo za Vas?', 'What Can We Create for You?')}
              </h2>
              <p className="text-lg text-hero-muted max-w-[600px] mx-auto">
                {t('Izberite storitev, ki ustreza vašim potrebam', 'Choose the service that fits your needs')}
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="grid md:grid-cols-2 gap-8 pointer-events-auto">
              {services.map((service, idx) => {
                const cardOpacity = idx === 0 ? card1Opacity : card2Opacity;
                const cardY = idx === 0 ? card1Y : card2Y;
                const cardScale = idx === 0 ? card1Scale : card2Scale;

                return (
                  <motion.div
                    key={idx}
                    className={`relative bg-badge-bg/90 backdrop-blur-xl border ${service.borderColor} rounded-3xl p-8 md:p-10 flex flex-col`}
                    style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full ${service.iconBg} flex items-center justify-center mb-6`}>
                      <service.icon className={`w-8 h-8 ${service.checkColor}`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl md:text-2xl text-primary-foreground mb-3 leading-tight">
                      {t(service.title.si, service.title.en)}
                    </h3>

                    {/* Description */}
                    <p className="text-hero-muted text-[15px] leading-[1.7] mb-5">
                      {t(service.description.si, service.description.en)}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-[14px] text-hero-muted">
                          <Check className={`w-4 h-4 ${service.checkColor} mt-0.5 flex-shrink-0`} />
                          <span>{t(f.si, f.en)}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to={service.link}
                      className={`block w-full h-12 ${service.btnBg} text-primary-foreground font-semibold text-base rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105`}
                    >
                      {t(service.cta.si, service.cta.en)}
                    </Link>

                    {/* Price Badge */}
                    <span className="absolute bottom-5 right-5 bg-badge-bg px-3 py-1.5 rounded-full text-[12px] font-semibold text-primary border border-badge-border">
                      {t(`Od ${service.price}`, `From ${service.price}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
