import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageCircle } from 'lucide-react';

const shapes = [
  { size: 300, top: '5%', left: '-5%', dur: 20, round: true },
  { size: 250, bottom: '10%', right: '-8%', dur: 15, round: false },
  { size: 200, top: '40%', left: '60%', dur: 18, round: true },
  { size: 350, bottom: '5%', left: '20%', dur: 22, round: false },
  { size: 180, top: '15%', right: '15%', dur: 16, round: true },
  { size: 280, top: '60%', left: '5%', dur: 19, round: false },
];

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-[100px] overflow-hidden">
      {/* Animated gradient bg */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
          backgroundSize: '200% 200%',
        }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Floating shapes */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute bg-white/[0.08] ${s.round ? 'rounded-full' : 'rounded-none'}`}
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
          }}
          animate={{
            x: [0, i % 2 === 0 ? 30 : -40, 0],
            y: [0, i % 2 === 0 ? -40 : 30, 0],
            rotate: [0, i % 2 === 0 ? 180 : -90, i % 2 === 0 ? 360 : 0],
          }}
          transition={{ duration: s.dur, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-[900px] text-center relative z-10">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[52px] md:leading-tight text-white mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('Pripravljen Dvigniti Svojo Vsebino na Višjo Raven?', 'Ready to Elevate Your Content?')}
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-white/90 max-w-[700px] mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {t(
            'Rezerviraj brezplačno 30-minutno posvetovanje in ugotovi, kako lahko AI vsebina transformira tvoj marketing.',
            'Book a free 30-minute consultation and discover how AI content can transform your marketing.'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          <Link
            to="/kontakt"
            className="inline-block h-16 px-10 bg-white text-primary font-bold text-lg md:text-xl rounded-2xl leading-[64px] transition-all duration-300 hover:scale-[1.08] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            {t('Rezerviraj Brezplačno Posvetovanje →', 'Book Free Consultation →')}
          </Link>
        </motion.div>

        <motion.p
          className="text-white/80 text-base mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {t('Ali nas kontaktirajte direktno:', 'Or contact us directly:')}
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-6 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="mailto:info@ai-oglasi.si"
            className="flex items-center gap-2 text-white hover:text-secondary transition-colors group"
          >
            <Mail className="w-5 h-5 group-hover:scale-[1.2] group-hover:-translate-y-0.5 transition-transform" />
            <span>info@ai-oglasi.si</span>
          </a>
          <a
            href="https://wa.me/38600000000"
            className="flex items-center gap-2 text-white hover:text-secondary transition-colors group"
          >
            <MessageCircle className="w-5 h-5 group-hover:scale-[1.2] group-hover:-translate-y-0.5 transition-transform" />
            <span>+386 XX XXX XXX</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
