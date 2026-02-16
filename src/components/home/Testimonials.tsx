import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '100+', label: { si: 'Uspešnih Projektov', en: 'Successful Projects' }, numericEnd: 100 },
  { value: '50+', label: { si: 'Zadovoljnih Strank', en: 'Happy Clients' }, numericEnd: 50 },
  { value: '24h', label: { si: 'Povprečna Dostava', en: 'Average Delivery' }, numericEnd: 24 },
  { value: '98%', label: { si: 'Zadovoljstvo', en: 'Satisfaction' }, numericEnd: 98 },
];

const testimonials = [
  {
    quote: {
      si: 'AI Oglasi je popolnoma spremenil našo marketinško strategijo. V samo dveh dneh smo dobili profesionalen video oglas, ki je presegel vsa pričakovanja. Njihova hitrost in kakovost sta neverjetna!',
      en: 'AI Oglasi completely changed our marketing strategy. In just two days we got a professional video ad that exceeded all expectations. Their speed and quality are incredible!',
    },
    name: 'Ana Novak',
    role: { si: 'Marketing Manager, TechStart SI', en: 'Marketing Manager, TechStart SI' },
    initial: 'A',
  },
  {
    quote: {
      si: 'Potrebovali smo hitro rešitev za našo produktno fotografijo. AI Oglasi je v 48h ustvaril slike, ki izgledajo kot iz profesionalnega studia. Prihranek časa in denarja je ogromen!',
      en: 'We needed a quick solution for our product photography. AI Oglasi created images in 48h that look like they\'re from a professional studio. The time and money savings are enormous!',
    },
    name: 'Matej Kovač',
    role: { si: 'Lastnik, Kovač e-Trgovina', en: 'Owner, Kovač e-Shop' },
    initial: 'M',
  },
  {
    quote: {
      si: 'Kot solopodjetnik nimam časa za celonočne snemanje. AI video rešitve od AI Oglasi mi omogočajo, da ostanem aktiven na vseh platformah s profesionalno vsebino. Top!',
      en: 'As a solo entrepreneur I don\'t have time for all-night shoots. AI video solutions from AI Oglasi let me stay active on all platforms with professional content. Top!',
    },
    name: 'Luka Horvat',
    role: { si: 'Digital Creator & Influencer', en: 'Digital Creator & Influencer' },
    initial: 'L',
  },
];

const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          {t('ZADOVOLJNE STRANKE', 'HAPPY CLIENTS')}
        </motion.p>
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mt-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {t('Zaupajo Nam Vodilna Slovenska Podjetja', 'Leading Slovenian Companies Trust Us')}
        </motion.h2>
        <motion.p
          className="text-lg text-hero-muted text-center max-w-[600px] mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('Poglej, kaj pravijo naše stranke o sodelovanju', 'See what our clients say about working with us')}
        </motion.p>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.3 + i * 0.1 }}
            >
              <div className="font-heading font-bold text-4xl md:text-[56px] text-gradient-brand">
                <CountUp end={stat.numericEnd} suffix={stat.value.replace(/\d+/, '')} />
              </div>
              <p className="text-hero-muted text-base mt-2">{t(stat.label.si, stat.label.en)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="relative">
          {/* Desktop: show all 3 */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                className="bg-badge-bg border border-badge-border rounded-[20px] p-10 h-[320px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:border-primary/50"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}
              >
                <span className="text-[48px] text-primary/20 leading-none mb-6 font-serif">"</span>
                <p className="text-hero-muted text-[17px] leading-[1.7] mb-8 flex-1">
                  {t(item.quote.si, item.quote.en)}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xl font-bold">
                    {item.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-primary-foreground">{item.name}</p>
                    <p className="text-sm text-hero-muted">{t(item.role.si, item.role.en)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: carousel */}
          <div className="md:hidden">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${activeSlide * 100}%` }}
                transition={{ duration: 0.5 }}
              >
                {testimonials.map((item, i) => (
                  <div key={i} className="min-w-full px-2">
                    <div className="bg-badge-bg border border-badge-border rounded-[20px] p-8 h-[320px] flex flex-col">
                      <span className="text-[48px] text-primary/20 leading-none mb-4 font-serif">"</span>
                      <p className="text-hero-muted text-base leading-[1.7] mb-6 flex-1">
                        {t(item.quote.si, item.quote.en)}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-lg font-bold">
                          {item.initial}
                        </div>
                        <div>
                          <p className="font-semibold text-primary-foreground text-sm">{item.name}</p>
                          <p className="text-xs text-hero-muted">{t(item.role.si, item.role.en)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeSlide ? 'bg-primary w-6' : 'bg-badge-border'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
