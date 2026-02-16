import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const values = [
  { icon: '⚡', title: { si: 'Hitrost', en: 'Speed' }, desc: { si: 'Dostava v 24-48 urah. Hitro, učinkovito, brez čakanja.', en: 'Delivery in 24-48 hours. Fast, efficient, no waiting.' } },
  { icon: '✨', title: { si: 'Kakovost', en: 'Quality' }, desc: { si: 'Profesionalna kakovost, ki presega pričakovanja.', en: 'Professional quality that exceeds expectations.' } },
  { icon: '🔍', title: { si: 'Transparentnost', en: 'Transparency' }, desc: { si: 'Jasne cene, brez skritih stroškov, odprta komunikacija.', en: 'Clear pricing, no hidden costs, open communication.' } },
  { icon: '🚀', title: { si: 'Inovativnost', en: 'Innovation' }, desc: { si: 'Najnovejše AI tehnologije za najboljše rezultate.', en: 'Latest AI technologies for the best results.' } },
];

const milestones = [
  { year: '2025', text: { si: 'Ustanovitev AI Oglasi', en: 'AI Oglasi founded' } },
  { year: '2025', text: { si: 'Prvih 50 zadovoljnih strank', en: 'First 50 satisfied clients' } },
  { year: '2026', text: { si: 'Širitev storitev in ekipe', en: 'Service and team expansion' } },
  { year: '2026', text: { si: '500+ uspešno zaključenih projektov', en: '500+ successfully completed projects' } },
];

const team = [
  { name: 'Ime Priimek', role: { si: 'Direktor & Ustanovitelj', en: 'Director & Founder' } },
  { name: 'Ime Priimek', role: { si: 'Vodja produkcije', en: 'Production Lead' } },
  { name: 'Ime Priimek', role: { si: 'AI specialist', en: 'AI Specialist' } },
  { name: 'Ime Priimek', role: { si: 'Marketing', en: 'Marketing' } },
];

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <main className="bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.p className="text-sm uppercase tracking-[1.5px] text-secondary font-medium mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease }}>
            {t('O Nas', 'About Us')}
          </motion.p>
          <motion.h1
            className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {t(
              'Demokratiziramo dostop do vrhunske AI vsebine za vsa slovenska podjetja',
              'Democratizing access to premium AI content for all Slovenian companies'
            )}
          </motion.h1>
          <motion.p className="text-lg text-hero-muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3, ease }}>
            {t(
              'Verjamemo, da si vsako podjetje zasluži profesionalno vsebino - ne glede na proračun.',
              'We believe every business deserves professional content - regardless of budget.'
            )}
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
            {t('Naše Vrednote', 'Our Values')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl bg-card border border-border text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{t(v.title.si, v.title.en)}</h3>
                <p className="text-sm text-muted-foreground">{t(v.desc.si, v.desc.en)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">
              {t('Naša Tehnologija', 'Our Technology')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t(
                'Uporabljamo najnovejše AI modele in orodja za generiranje video vsebin in fotografij. Naša tehnologija omogoča fotorealistične rezultate v resolucijah do 4K UHD, z možnostjo popolne prilagoditve barvne sheme, tipografije in stila vaši blagovni znamki.',
                'We use the latest AI models and tools for generating video content and photography. Our technology enables photorealistic results in resolutions up to 4K UHD, with the ability to fully customize color scheme, typography and style to your brand.'
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI Video Generation', 'AI Photo Synthesis', '4K UHD', 'Brand Customization', 'Multi-format Export'].map((tech) => (
                <span key={tech} className="px-4 py-2 text-sm rounded-full bg-card border border-border text-foreground">{tech}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
            {t('Naša Ekipa', 'Our Team')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border flex items-center justify-center mb-3">
                  <span className="text-2xl">👤</span>
                </div>
                <h4 className="font-heading font-semibold text-foreground text-sm">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{t(member.role.si, member.role.en)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground text-center mb-12">
            {t('Naša Pot', 'Our Journey')}
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} pl-12 md:pl-0`}>
                  <span className="text-sm font-bold text-primary">{m.year}</span>
                  <p className="text-foreground">{t(m.text.si, m.text.en)}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 border-2 border-background" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="p-12 rounded-3xl bg-hero-gradient border border-badge-border max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              {t('Začnimo Sodelovanje', 'Let\'s Start Working Together')}
            </h2>
            <p className="text-hero-muted mb-6">{t('Kontaktirajte nas za brezplačno posvetovanje.', 'Contact us for a free consultation.')}</p>
            <Link to="/kontakt" className="inline-flex items-center px-8 h-14 text-base font-semibold rounded-xl bg-primary text-primary-foreground shadow-glow-primary">
              {t('Kontaktirajte Nas →', 'Contact Us →')}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
