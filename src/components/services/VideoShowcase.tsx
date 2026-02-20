import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface VideoShowcaseProps {
  placeholderCount?: number;
}

const VideoShowcase = ({ placeholderCount = 3 }: VideoShowcaseProps) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {t('Primeri naših del', 'Our Work Examples')}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <motion.div
              key={i}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-card border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg className="w-6 h-6 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-primary-foreground text-sm font-medium">
                  {t(`Video primer ${i + 1}`, `Video Example ${i + 1}`)}
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
