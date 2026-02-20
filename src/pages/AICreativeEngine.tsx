import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ValueProps from '@/components/services/ValueProps';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import BookingCTA from '@/components/services/BookingCTA';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const bundleIncludes = [
  { si: 'Prilagojen AI avatar (vaš ekskluzivni ambasador znamke)', en: 'Custom AI Avatar (your exclusive brand ambassador)' },
  { si: 'AI video oglasi (50+ različic na mesec)', en: 'AI Video Ads (50+ variations/month)' },
  { si: 'AI produktna fotografija (neomejeno število izdelkov)', en: 'AI Product Photography (unlimited SKUs)' },
  { si: 'Vsebine za družbena omrežja (dnevne objave + zgodbe + reelsi)', en: 'Social Media Content (daily posts + stories + reels)' },
  { si: 'Upravljanje digitalnega marketinga (kampanje celotnega lijaka)', en: 'Digital Marketing Management (full-funnel campaigns)' },
];

const bundleBenefits = [
  { icon: '🤖', title: { si: 'En avatar', en: 'One Avatar' }, description: { si: 'Enoten lik za vse vaše vsebine.', en: 'One consistent character across all your content.' } },
  { icon: '📡', title: { si: 'Vsak kanal', en: 'Every Channel' }, description: { si: 'Od družbenih omrežij do CTV — povsod prisotni.', en: 'From social media to CTV—present everywhere.' } },
  { icon: '🔄', title: { si: 'Vedno dosleden', en: 'Always Consistent' }, description: { si: 'Enotna identiteta znamke na vseh stičnih točkah.', en: 'Unified brand identity across all touchpoints.' } },
  { icon: '📈', title: { si: 'Brez omejitev', en: 'Infinitely Scalable' }, description: { si: 'Več vsebin, hitreje — brez zgornjih meja.', en: 'Scale without limits—more content, faster.' } },
];

const faqItems = [
  { question: { si: 'Kaj je vključeno v paket?', en: 'What is included in the bundle?' }, answer: { si: 'Celoten paket vključuje prilagojen AI avatar, AI video oglase, produktno fotografijo, vsebine za družbena omrežja in upravljanje digitalnega marketinga.', en: 'The complete package includes custom AI avatar, AI video ads, product photography, social media content and digital marketing management.' } },
  { question: { si: 'Koliko prihranim v primerjavi s posameznimi storitvami?', en: 'What is the savings compared to individual services?' }, answer: { si: 'Paket ponuja občutne prihranke v primerjavi z naročanjem storitev posamično. Pišite nam za prilagojeno ponudbo.', en: 'The bundle offers significant savings compared to ordering individual services—contact us for a custom quote.' } },
  { question: { si: 'Lahko paket prilagodim svojim potrebam?', en: 'Can I customize the bundle?' }, answer: { si: 'Da, vsak paket prilagodimo vašim specifičnim potrebam in proračunu.', en: 'Yes, every bundle is customizable to your specific needs and budget.' } },
];

const BundleIncludes = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('Kaj je vključeno', 'What\'s Included')}
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t(
            'En avatar. Vsak kanal. Vedno dosleden. Brez omejitev.',
            'One avatar. Every channel. Always consistent. Infinitely scalable.'
          )}
        </motion.p>
        <div className="max-w-2xl mx-auto space-y-4">
          {bundleIncludes.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Check className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-foreground font-medium">{t(item.si, item.en)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AICreativeEngine = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ServiceHero
      eyebrow={{ si: 'AI kreativni paket', en: 'Complete AI Creative Engine' }}
      title={{ si: 'AI kreativni paket: avatar + vsebine + oglasi', en: 'The Complete AI Creative Engine: Avatar + Content + Ads' }}
      subtitle={{ si: 'Vaš prilagojen avatar poganja vsak kos vsebine na vsakem kanalu. Enoten glas vaše znamke. Neomejene možnosti.', en: 'Your custom avatar powering every piece of content across every channel. One consistent brand voice. Unlimited scale.' }}
      gradient="orange"
    />
    <BundleIncludes />
    <UseCasesGrid title={{ si: 'Zakaj paket?', en: 'Why Bundle?' }} cases={bundleBenefits} />
    <ServiceFAQ items={faqItems} />
    <BookingCTA />
    <Footer />
  </div>
);

export default AICreativeEngine;
