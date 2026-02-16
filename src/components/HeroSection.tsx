import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroVideo from '@/assets/hero-scroll-video.mp4';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);
  const videoScale = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.85, 1, 1.1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.6, 1, 1, 0.3]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (video.duration && isFinite(video.duration)) {
        video.currentTime = v * video.duration;
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
    <section
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      {/* Sticky container */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-bg-from)/0.5)] via-transparent to-[hsl(var(--hero-bg-from)/0.7)]" />
        </motion.div>

        {/* Text content */}
        <motion.div
          className="container mx-auto px-6 relative z-20 text-center max-w-[900px]"
          style={{ opacity: textOpacity, y: textY }}
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
      </div>
    </section>
  );
};

export default HeroSection;
