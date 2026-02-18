import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-hero-gradient border-t border-badge-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-heading text-xl font-bold text-primary-foreground tracking-tight">
              AI Oglasi
            </Link>
            <p className="text-sm text-hero-muted mt-3 max-w-[200px]">
              {t(
                'Profesionalna AI vsebina za slovenska podjetja.',
                'Professional AI content for Slovenian companies.'
              )}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="px-3 py-1 text-xs rounded-full bg-badge-bg border border-badge-border text-hero-muted">
                🇸🇮 {t('Slovensko podjetje', 'Slovenian company')}
              </span>
            </div>
          </div>

          {/* Storitve */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-primary-foreground mb-4">{t('Storitve', 'Services')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ai-video-oglasi" className="text-hero-muted hover:text-primary-foreground transition-colors">{t('AI Video Oglasi', 'AI Video Ads')}</Link></li>
              <li><Link to="/ai-produktna-fotografija" className="text-hero-muted hover:text-primary-foreground transition-colors">{t('AI Fotografija', 'AI Photography')}</Link></li>
              <li><Link to="/cenik" className="text-hero-muted hover:text-primary-foreground transition-colors">{t('Cenik', 'Pricing')}</Link></li>
            </ul>
          </div>

          {/* Podjetje */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-primary-foreground mb-4">{t('Podjetje', 'Company')}</h4>
            <ul className="space-y-2 text-sm">
              
              <li><Link to="/portfolio" className="text-hero-muted hover:text-primary-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-hero-muted hover:text-primary-foreground transition-colors">Blog</Link></li>
              
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-primary-foreground mb-4">{t('Kontakt', 'Contact')}</h4>
            <ul className="space-y-2 text-sm text-hero-muted">
              <li>📧 info@aioglasi.si</li>
              <li>📱 +386 1 234 5678</li>
              <li>📍 Škofja Loka, Slovenija</li>
            </ul>
            <div className="flex gap-3 mt-4">
              {['LinkedIn', 'Instagram', 'Facebook'].map((s) => (
                <a key={s} href="#" className="text-hero-muted hover:text-primary-foreground text-xs transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-badge-border">
        <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-hero-muted">
          <span>© 2026 AI Oglasi. {t('Vse pravice pridržane.', 'All rights reserved.')}</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors">{t('Politika zasebnosti', 'Privacy Policy')}</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">{t('Pogoji uporabe', 'Terms of Use')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
