import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const HeroSection = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPulse(true), 1500);
    const handleScroll = () => setShowScrollIndicator(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  const trustBadges = [
    t('⚡ Dostava 24-48h', '⚡ Delivery 24-48h'),
    t('✨ 100% Kakovost', '✨ 100% Quality'),
    t('🇸🇮 Slovenski Tim', '🇸🇮 Slovenian Team'),
  ];

  const floatingBadges = [
    { label: 'AI Generated', color: 'secondary', position: 'top-4 -right-3 md:right-4', delay: 1.5 },
    { label: '+247% Engagement', color: 'primary', position: '-bottom-2 -left-3 md:left-4', delay: 1.65 },
    { label: '4K Resolution', color: 'accent', position: 'top-4 -left-3 md:left-4', delay: 1.8 },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-24 md:py-0">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left - Text (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Eyebrow */}
            <motion.p
              className="text-sm uppercase tracking-[1.5px] text-secondary font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {t(
                '🇸🇮 Slovensko AI Podjetje za Kreativno Vsebino',
                '🇸🇮 Slovenian AI Company for Creative Content'
              )}
            </motion.p>

            {/* Headline */}
            <motion.h1
              className="font-heading font-bold text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] text-primary-foreground"
              {...fadeUp(0.3)}
            >
              {t(
                'Ustvarite Vrhunsko AI Vsebino v ',
                'Create Premium AI Content in '
              )}
              <span className="relative inline-block">
                <span className="text-gradient-brand">24-48 Urah</span>
                <motion.span
                  className="absolute bottom-0 left-0 h-[3px] rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, hsl(var(--secondary)), hsl(var(--accent)))',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1, ease }}
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-hero-muted max-w-[560px] leading-relaxed"
              {...fadeUp(0.5)}
            >
              {t(
                'Profesionalni AI video oglasi in produktna fotografija, ki povečajo prodajo. Brez dolgih čakalnih dob, brez visokih cen, samo rezultati.',
                'Professional AI video ads and product photography that increase sales. No long waiting times, no high prices, just results.'
              )}
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-4" {...fadeUp(0.7)}>
              <motion.a
                href="#contact"
                className="relative inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-xl bg-primary text-primary-foreground shadow-glow-primary"
                whileHover={{ y: -3, boxShadow: '0 0 40px -5px hsl(217 91% 60% / 0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                {t('Rezerviraj Brezplačno Posvetovanje →', 'Book Free Consultation →')}
                {/* Pulse rings */}
                {showPulse && (
                  <>
                    <span className="absolute inset-0 rounded-xl border-2 border-primary animate-pulse-ring" />
                    <span className="absolute inset-0 rounded-xl border-2 border-primary animate-pulse-ring [animation-delay:0.5s]" />
                    <span className="absolute inset-0 rounded-xl border-2 border-primary animate-pulse-ring [animation-delay:1s]" />
                  </>
                )}
              </motion.a>

              <motion.a
                href="#portfolio"
                className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold rounded-xl border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-colors duration-200"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('Poglej Portfolio ↓', 'View Portfolio ↓')}
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {trustBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  className="inline-flex items-center px-4 py-2 text-sm text-hero-muted bg-badge-bg border border-badge-border rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.9 + i * 0.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right - Visual (40%) */}
          <motion.div
            className="lg:col-span-2 relative"
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 1.1, ease }}
            style={{ perspective: 1000 }}
          >
            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
              backgroundImage: 'linear-gradient(hsl(var(--hero-bg-to)), hsl(var(--hero-bg-to))), linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
              backgroundOrigin: 'border-box',
            }}>
              <div className="aspect-[4/3] bg-badge-bg flex items-center justify-center">
                {/* Placeholder visual with animated gradient */}
                <div className="w-full h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                    <p className="text-hero-muted text-sm font-medium">AI Content Preview</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className={`absolute ${badge.position} z-10`}
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12, delay: badge.delay }}
              >
                <motion.div
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full backdrop-blur-md border shadow-lg ${
                    badge.color === 'secondary'
                      ? 'bg-secondary/20 border-secondary/40 text-secondary'
                      : badge.color === 'primary'
                      ? 'bg-primary/20 border-primary/40 text-primary'
                      : 'bg-accent/20 border-accent/40 text-accent'
                  }`}
                  animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: badge.delay * 0.5 }}
                >
                  {badge.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        animate={{
          opacity: showScrollIndicator ? 1 : 0,
          y: showScrollIndicator ? [0, 10, 0] : 20,
        }}
        transition={{ duration: 1.5, repeat: showScrollIndicator ? Infinity : 0 }}
      >
        <span className="text-hero-muted text-sm">
          {t('Drsaj za več ↓', 'Scroll for more ↓')}
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
