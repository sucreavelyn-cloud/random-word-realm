import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('Video Oglasi', 'Video Ads'), to: '/ai-video-oglasi' },
    { label: t('Fotografija', 'Photography'), to: '/ai-produktna-fotografija' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Blog', to: '/blog' },
    { label: t('Cenik', 'Pricing'), to: '/cenik' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60]"
        style={{
          width: progressWidth,
          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))',
        }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-hero-from/90 backdrop-blur-2xl border-b border-badge-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
          <Link to="/" className="font-heading text-2xl font-extrabold text-primary-foreground tracking-tighter">
            AI<span className="text-primary">.</span>Oglasi
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative px-4 py-2 text-[13px] uppercase tracking-[1px] font-medium text-hero-muted hover:text-primary-foreground transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              to="/kontakt"
              className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[13px] uppercase tracking-[1px] font-semibold rounded-full bg-primary text-primary-foreground hover:shadow-glow-primary transition-all duration-300"
            >
              {t('Rezerviraj Klic', 'Book a Call')}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-primary-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden bg-hero-from/98 backdrop-blur-2xl border-b border-badge-border"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3.5 text-[13px] uppercase tracking-[1px] font-medium text-hero-muted hover:text-primary-foreground border-b border-badge-border/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 px-4 py-3.5 text-[13px] uppercase tracking-[1px] font-semibold rounded-full bg-primary text-primary-foreground"
                >
                  {t('Rezerviraj Klic', 'Book a Call')}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
