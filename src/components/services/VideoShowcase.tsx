import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface VideoShowcaseProps {
  placeholderCount?: number;
}

const VideoShowcase = ({ placeholderCount = 3 }: VideoShowcaseProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.p
          className="text-[11px] uppercase tracking-[3px] text-primary font-semibold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('Primeri', 'Examples')}
        </motion.p>
        <motion.h2
          className="font-heading font-extrabold text-3xl md:text-[44px] tracking-tight text-foreground text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('Primeri Naših Del', 'Our Work Examples')}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <motion.div
              key={i}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-card border border-border hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/4 to-secondary/8" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
                <p className="text-primary-foreground text-sm font-medium">
                  {t(`Video Primer ${i + 1}`, `Video Example ${i + 1}`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
