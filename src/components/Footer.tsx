import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Main footer */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:w-1/5 shrink-0">
            <div className="font-heading text-xl font-bold text-foreground mb-3">
              AI <span className="text-gradient-brand">Oglasi</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t(
                'Profesionalne AI vsebine za podjetja po vsem svetu.',
                'Professional AI content for businesses worldwide.'
              )}
            </p>
          </div>

          {/* Storitve */}
          <div className="lg:flex-1">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              {t('Storitve', 'Services')}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 max-w-[280px]">
              <li>
                <Link to="/ai-video-ads" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('AI video oglasi', 'AI Video Ads')}
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('Digitalni marketing', 'Digital Marketing')}
                </Link>
              </li>
              <li>
                <Link to="/ai-product-photography" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('AI fotografija', 'AI Photography')}
                </Link>
              </li>
              <li>
                <Link to="/ai-avatar-creation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('AI avatarji', 'AI Avatars')}
                </Link>
              </li>
              <li>
                <Link to="/social-media-content" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('Družbena omrežja', 'Social Media')}
                </Link>
              </li>
              <li>
                <Link to="/ai-creative-engine" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t('AI kreativni paket', 'AI Creative Engine')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Podjetje + Kontakt */}
          <div className="flex gap-10 lg:gap-14 shrink-0">
            {/* Podjetje */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t('Podjetje', 'Company')}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t('Mnenja', 'Testimonials')}
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t('Kako deluje', 'How it works')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t('Kontakt', 'Contact')}
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <a href="mailto:info@aioglasi.si" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    info@aioglasi.si
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <a href="tel:+38612345678" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +386 1 234 5678
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Škofja Loka, Slovenija
                  </span>
                </li>
              </ul>
              <div className="flex items-center gap-3 mt-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © 2026 AI Oglasi. {t('Vse pravice pridržane.', 'All rights reserved.')}
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t('Politika zasebnosti', 'Privacy Policy')}
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {t('Pogoji uporabe', 'Terms of Use')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
