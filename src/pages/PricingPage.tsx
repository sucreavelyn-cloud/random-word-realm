import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
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
    gradient: 'from-primary/10 to-primary/5',
    border: 'border-primary/20',
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
    gradient: 'from-secondary/10 to-secondary/5',
    border: 'border-secondary/40',
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
    cta: { si: 'Kontaktirajte Nas', en: 'Contact Us' },
    gradient: 'from-accent/10 to-accent/5',
    border: 'border-accent/20',
  },
];

const PricingPage = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-background">
      <Header />

      <section className="pt-32 pb-16 bg-hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {t('Pregledne Cene, Brez Presenečenj', 'Transparent Pricing, No Surprises')}
          </motion.h1>
          <motion.p className="text-lg text-hero-muted max-w-xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6, ease }}>
            {t('Izberite paket, ki ustreza vašim potrebam. Vsi paketi vključujejo brezplačno posvetovanje.', 'Choose a package that fits your needs. All packages include a free consultation.')}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                className={`relative rounded-3xl p-8 bg-gradient-to-b ${tier.gradient} border ${tier.border} ${tier.highlighted ? 'ring-2 ring-secondary shadow-glow-secondary' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
                whileHover={{ y: -5 }}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full bg-secondary text-secondary-foreground">
                    {t('Najpopularnejše', 'Most Popular')}
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">{t(tier.name.si, tier.name.en)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(tier.description.si, tier.description.en)}</p>
                <div className="font-heading font-bold text-3xl text-foreground mb-6">{t(tier.price.si, tier.price.en)}</div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {t(f.si, f.en)}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    tier.highlighted
                      ? 'bg-secondary text-secondary-foreground hover:shadow-glow-secondary'
                      : 'bg-primary text-primary-foreground hover:shadow-glow-primary'
                  }`}
                >
                  {t(tier.cta.si, tier.cta.en)}
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
