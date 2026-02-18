import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const tiers = [
  {
    name: { si: 'Video Paket', en: 'Video Package' },
    price: { si: 'Od €149', en: 'From €149' },
    description: { si: 'AI video oglasi za socialna omrežja', en: 'AI video ads for social media' },
    features: [
      { si: '1-3 videi (do 60s)', en: '1-3 videos (up to 60s)' },
      { si: 'Do 4K UHD resolucija', en: 'Up to 4K UHD resolution' },
      { si: 'Vsi formati (MP4, MOV, WebM)', en: 'All formats (MP4, MOV, WebM)' },
      { si: '2 kroga revizij', en: '2 rounds of revisions' },
      { si: 'Glasba in voiceover', en: 'Music and voiceover' },
      { si: 'Dostava v 24h', en: 'Delivery in 24h' },
    ],
    cta: { si: 'Izberi Video Paket', en: 'Choose Video Package' },
  },
  {
    name: { si: 'Fotografija Paket', en: 'Photography Package' },
    price: { si: 'Od €99', en: 'From €99' },
    description: { si: 'AI produktna fotografija', en: 'AI product photography' },
    highlighted: true,
    features: [
      { si: '10-50+ fotografij', en: '10-50+ photos' },
      { si: 'Profesionalna kakovost', en: 'Professional quality' },
      { si: 'Različna ozadja in stili', en: 'Various backgrounds and styles' },
      { si: 'Odstranjevanje ozadij', en: 'Background removal' },
      { si: 'Lifestyle in flat-lay', en: 'Lifestyle and flat-lay' },
      { si: 'Dostava v 24h', en: 'Delivery in 24h' },
    ],
    cta: { si: 'Izberi Foto Paket', en: 'Choose Photo Package' },
  },
  {
    name: { si: 'Custom / Enterprise', en: 'Custom / Enterprise' },
    price: { si: 'Po meri', en: 'Custom' },
    description: { si: 'Za večje projekte in stalne stranke', en: 'For larger projects and regular clients' },
    features: [
      { si: 'Neomejeni videi in fotografije', en: 'Unlimited videos and photos' },
      { si: 'Prioritetna obravnava', en: 'Priority handling' },
      { si: 'Dedicirani projektni vodja', en: 'Dedicated project manager' },
      { si: 'Mesečno svetovanje', en: 'Monthly consulting' },
      { si: 'API integracija', en: 'API integration' },
      { si: 'SLA garancije', en: 'SLA guarantees' },
    ],
    cta: { si: 'Rezerviraj Klic', en: 'Book a Call' },
  },
];

const PricingPage = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-background">
      <Header />

      <section className="pt-36 pb-20 bg-mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.p
            className="text-[11px] uppercase tracking-[3px] text-primary font-semibold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease }}
          >
            {t('Cenik', 'Pricing')}
          </motion.p>
          <motion.h1
            className="font-heading font-extrabold text-4xl md:text-[64px] leading-[0.95] tracking-tight text-primary-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {t('Transparentne Cene', 'Transparent Pricing')}
          </motion.h1>
          <motion.p
            className="text-lg text-hero-muted max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease }}
          >
            {t('Brez skritih stroškov. Brez presenečenj. Samo rezultati.', 'No hidden costs. No surprises. Just results.')}
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                className={`relative rounded-2xl p-8 border hover-lift ${
                  tier.highlighted
                    ? 'bg-primary/5 border-primary/40 ring-1 ring-primary/20'
                    : 'bg-card border-border'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-[1.5px] font-bold rounded-full bg-primary text-primary-foreground">
                    {t('Popularno', 'Popular')}
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-1 tracking-tight">{t(tier.name.si, tier.name.en)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(tier.description.si, tier.description.en)}</p>
                <div className="font-heading font-extrabold text-4xl text-foreground mb-8 tracking-tight">{t(tier.price.si, tier.price.en)}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {t(f.si, f.en)}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`group w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm uppercase tracking-[0.5px] transition-all duration-300 ${
                    tier.highlighted
                      ? 'bg-primary text-primary-foreground shadow-glow-primary hover:gap-3'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {t(tier.cta.si, tier.cta.en)}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PricingPage;
