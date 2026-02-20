import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const CountUp = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: 'easeOut' });
    return controls.stop;
  }, [count, target]);

  return (
    <motion.span ref={ref}>
      {useTransform(rounded, (v) => `${v}${suffix}`)}
    </motion.span>
  );
};

const FloatingOrb = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      opacity: [0.15, 0.25, 0.15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

const HeroSection = () => {
  const { t } = useLanguage();
  const { setDialogOpen } = useBooking();

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, delay: 0.3 + i * 0.04, ease },
    }),
  };

  const line1 = t('AI vsebine, ki', 'AI Content That');
  const line2 = t('prodajajo', 'Converts');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient orbs */}
      <FloatingOrb className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <FloatingOrb className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] pointer-events-none" delay={3} />
      <FloatingOrb className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-[80px] pointer-events-none" delay={5} />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-[950px] py-32">
        {/* Animated headline with letter-by-letter reveal */}
        <motion.h1
          className="font-heading font-extrabold text-[48px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-tight text-foreground mb-8"
          initial="hidden"
          animate="visible"
        >
          <span className="block" style={{ perspective: '600px' }}>
            {line1.split('').map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                custom={i}
                variants={letterVariants}
                className="inline-block"
                style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
          <span className="block text-gradient-brand" style={{ perspective: '600px' }}>
            {line2.split('').map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                custom={i + line1.length}
                variants={letterVariants}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subheadline with blur reveal */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
        >
          {t(
            'Ustvarjamo AI video oglase, produktne fotografije in vsebine za družbena omrežja, ki pritegnejo pozornost, okrepijo vašo blagovno znamko in povečajo prodajo.',
            'We create scroll-stopping AI video ads, product photography, and social content that boost your brand visibility and sales.'
          )}
        </motion.p>

        {/* CTA with pulse glow */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease }}
        >
          <motion.button
            onClick={() => setDialogOpen(true)}
            className="relative inline-flex items-center gap-2 h-14 px-8 text-base font-bold rounded-xl bg-accent text-accent-foreground shadow-glow-accent"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-accent/50"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              {t('Rezerviraj klic', 'Book a Call')}
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 gap-8 max-w-sm mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
        >
          {[
            { value: 24, suffix: 'h', label: t('Dostava', 'Delivery') },
            { value: 10, suffix: 'x', label: 'ROI' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
