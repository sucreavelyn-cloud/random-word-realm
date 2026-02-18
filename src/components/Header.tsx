import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('Domov', 'Home'), to: '/' },
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
          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
        }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-hero-from/80 backdrop-blur-xl border-b border-badge-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
          <Link to="/" className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
            AI Oglasi
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm text-hero-muted hover:text-primary-foreground transition-colors">
              {t('Domov', 'Home')}
            </Link>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-hero-muted hover:text-primary-foreground transition-colors">
                {t('Storitve', 'Services')} <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-hero-from/95 backdrop-blur-xl border border-badge-border p-2 shadow-xl"
                  >
                    <Link to="/ai-video-oglasi" className="block px-4 py-2.5 text-sm text-hero-muted hover:text-primary-foreground hover:bg-badge-bg rounded-lg transition-colors">
                      🎬 {t('AI Video Oglasi', 'AI Video Ads')}
                    </Link>
                    <Link to="/ai-produktna-fotografija" className="block px-4 py-2.5 text-sm text-hero-muted hover:text-primary-foreground hover:bg-badge-bg rounded-lg transition-colors">
                      📸 {t('AI Fotografija', 'AI Photography')}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/portfolio" className="px-3 py-2 text-sm text-hero-muted hover:text-primary-foreground transition-colors">Portfolio</Link>
            <Link to="/blog" className="px-3 py-2 text-sm text-hero-muted hover:text-primary-foreground transition-colors">Blog</Link>
            
            <Link to="/cenik" className="px-3 py-2 text-sm text-hero-muted hover:text-primary-foreground transition-colors">{t('Cenik', 'Pricing')}</Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link
              to="/kontakt"
              className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:shadow-glow-primary transition-all duration-200"
            >
              {t('Rezerviraj Klic', 'Book a Call')}
            </Link>

            {/* Mobile hamburger */}
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
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-hero-from/95 backdrop-blur-xl border-b border-badge-border"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
                {/* Services accordion */}
                <div>
                  <Link to="/ai-video-oglasi" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-hero-muted hover:text-primary-foreground rounded-lg">
                    🎬 {t('AI Video Oglasi', 'AI Video Ads')}
                  </Link>
                  <Link to="/ai-produktna-fotografija" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-hero-muted hover:text-primary-foreground rounded-lg">
                    📸 {t('AI Fotografija', 'AI Photography')}
                  </Link>
                </div>
                {navItems.filter(n => n.to !== '/').map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm text-hero-muted hover:text-primary-foreground rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/kontakt"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg bg-primary text-primary-foreground"
                >
                  {t('Rezerviraj Klic', 'Book a Call')}
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
