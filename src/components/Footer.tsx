import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const links = {
    services: [
      { label: t('AI Video Oglasi', 'AI Video Ads'), to: '/ai-video-oglasi' },
      { label: t('AI Fotografija', 'AI Photography'), to: '/ai-produktna-fotografija' },
      { label: t('Cenik', 'Pricing'), to: '/cenik' },
    ],
    company: [
      { label: 'Portfolio', to: '/portfolio' },
      { label: 'Blog', to: '/blog' },
    ],
  };

  return (
    <footer className="bg-hero-gradient relative overflow-hidden">
      {/* Top CTA strip */}
      <div className="border-b border-badge-border">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground tracking-tight leading-tight">
              {t('Pripravljen na', 'Ready to')}<br />
              <span className="text-gradient-brand">{t('naslednji korak?', 'take the next step?')}</span>
            </h3>
          </div>
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-primary text-primary-foreground shadow-glow-primary transition-all duration-300 hover:gap-5"
          >
            {t('Rezerviraj Klic', 'Book a Call')}
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Links grid */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-heading text-2xl font-extrabold text-primary-foreground tracking-tighter">
              AI<span className="text-primary">.</span>Oglasi
            </Link>
            <p className="text-sm text-hero-muted mt-4 max-w-[220px] leading-relaxed">
              {t(
                'Profesionalna AI vsebina, ki dviga vaš marketing na višjo raven.',
                'Professional AI content that elevates your marketing.'
              )}
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-[2px] text-hero-muted mb-5">{t('Storitve', 'Services')}</h4>
            <ul className="space-y-3">
              {links.services.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-hero-muted hover:text-primary transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-[2px] text-hero-muted mb-5">{t('Podjetje', 'Company')}</h4>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-hero-muted hover:text-primary transition-colors duration-300">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[11px] uppercase tracking-[2px] text-hero-muted mb-5">{t('Kontakt', 'Contact')}</h4>
            <ul className="space-y-3 text-sm text-hero-muted">
              <li>info@aioglasi.si</li>
              <li>+386 1 234 5678</li>
              <li>Škofja Loka, Slovenija</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-badge-border">
        <div className="container mx-auto px-4 md:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] uppercase tracking-[1px] text-hero-muted">
          <span>© 2026 AI Oglasi. {t('Vse pravice pridržane.', 'All rights reserved.')}</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">{t('Zasebnost', 'Privacy')}</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">{t('Pogoji', 'Terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
