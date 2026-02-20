import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Video, Camera, Share2, BarChart3, User, Layers } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { useBooking } from '@/contexts/BookingContext';

const Header = () => {
  const { t } = useLanguage();
  const { setDialogOpen } = useBooking();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { label: t('AI video oglasi', 'AI Video Ads'), href: '/ai-video-ads', icon: Video },
    { label: t('AI produktna fotografija', 'AI Product Photography'), href: '/ai-product-photography', icon: Camera },
    { label: t('Družbena omrežja', 'Social Media Content'), href: '/social-media-content', icon: Share2 },
    { label: t('Digitalni marketing', 'Digital Marketing'), href: '/digital-marketing', icon: BarChart3 },
    { label: t('AI avatarji', 'AI Avatar Creation'), href: '/ai-avatar-creation', icon: User },
    { label: t('AI kreativni paket', 'AI Creative Engine'), href: '/ai-creative-engine', icon: Layers },
  ];

  const handleAnchorClick = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-heading text-xl font-bold text-foreground tracking-tight">
          AI <span className="text-gradient-brand">Oglasi</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Services dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('Storitve', 'Services')}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-0 pt-2"
                >
                  <div className="w-64 rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        <s.icon className="w-4 h-4 text-primary" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleAnchorClick('#how-it-works')}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('Kako deluje', 'How It Works')}
          </button>
          <button
            onClick={() => handleAnchorClick('#testimonials')}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t('Mnenja', 'Testimonials')}
          </button>
          <Link
            to="/blog"
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <motion.button
            onClick={() => setDialogOpen(true)}
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-bold rounded-lg bg-accent text-accent-foreground shadow-glow-accent"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            {t('Rezerviraj klic', 'Book a Call')}
          </motion.button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
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
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
              <p className="px-4 py-2 text-xs uppercase tracking-wider text-muted-foreground/60 font-semibold">
                {t('Storitve', 'Services')}
              </p>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                >
                  <s.icon className="w-4 h-4 text-primary" />
                  {s.label}
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <button
                onClick={() => handleAnchorClick('#how-it-works')}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors text-left"
              >
                {t('Kako deluje', 'How It Works')}
              </button>
              <button
                onClick={() => handleAnchorClick('#testimonials')}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors text-left"
              >
                {t('Mnenja', 'Testimonials')}
              </button>
              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors text-left"
              >
                Blog
              </Link>
              <button
                onClick={() => { setMobileOpen(false); setDialogOpen(true); }}
                className="mt-2 flex items-center justify-center px-4 py-3 text-sm font-bold rounded-lg bg-accent text-accent-foreground"
              >
                {t('Rezerviraj klic', 'Book a Call')}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
