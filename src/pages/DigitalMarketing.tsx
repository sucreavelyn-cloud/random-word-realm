import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ProcessSteps from '@/components/services/ProcessSteps';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import ValueProps from '@/components/services/ValueProps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import BookingCTA from '@/components/services/BookingCTA';

const valueProps = [
  { si: 'Celoten prodajni lijak: zavedanje → premislek → konverzija → ohranjanje', en: 'Full-funnel campaigns: Awareness → Consideration → Conversion → Retention' },
  { si: 'Upravljanje na več platformah: Meta, Google, TikTok, LinkedIn, programatsko', en: 'Cross-platform management: Meta, Google, TikTok, LinkedIn, Programmatic' },
  { si: 'AI optimizacija ponudb, kreative in ciljanja občinstev', en: 'AI-optimized bidding, creative, and audience targeting' },
  { si: 'Sprotne nadzorne plošče in tedenska optimizacija', en: 'Real-time performance dashboards and weekly optimization' },
  { si: 'Modeliranje pripisovanja in testiranje dejanske učinkovitosti', en: 'Attribution modeling and incrementality testing' },
];

const channels = [
  { icon: '📘', title: { si: 'Meta oglasi', en: 'Meta Ads' }, description: { si: 'Oglaševanje na Facebooku in Instagramu z AI optimizacijo.', en: 'Facebook & Instagram advertising with AI optimization.' } },
  { icon: '🎵', title: { si: 'TikTok oglasi', en: 'TikTok Ads' }, description: { si: 'Nativno oglaševanje na najhitreje rastoči platformi.', en: 'Native advertising on the fastest-growing platform.' } },
  { icon: '🔍', title: { si: 'Google oglasi', en: 'Google Ads' }, description: { si: 'Iskanje, prikazno omrežje, YouTube — celoten Google ekosistem.', en: 'Search, Display, YouTube—full Google ecosystem.' } },
  { icon: '💼', title: { si: 'LinkedIn oglasi (B2B)', en: 'LinkedIn Ads (B2B)' }, description: { si: 'B2B oglaševanje za profesionalno ciljno občinstvo.', en: 'B2B advertising for professional audiences.' } },
  { icon: '📺', title: { si: 'Programatsko/CTV', en: 'Programmatic/CTV' }, description: { si: 'Pametne televizije in programatsko oglaševanje.', en: 'Connected TV and programmatic advertising.' } },
  { icon: '🛒', title: { si: 'Amazon oglaševanje', en: 'Amazon Advertising' }, description: { si: 'Oglaševanje na največji e-commerce tržnici.', en: 'Advertising on the largest ecommerce marketplace.' } },
];

const steps = [
  { number: '01', title: { si: 'Pregled in strategija', en: 'Audit & Strategy' }, description: { si: 'Analiziramo trenutno stanje in pripravimo načrt za rast.', en: 'Current performance analysis and growth roadmap.' } },
  { number: '02', title: { si: 'Razvoj kreative', en: 'Creative Development' }, description: { si: 'AI oglasna kreativa, prilagojena vsakemu kanalu.', en: 'AI-powered ad creative tailored to each channel.' } },
  { number: '03', title: { si: 'Nastavitev kampanj', en: 'Campaign Setup' }, description: { si: 'Namestitev pikslov, gradnja občinstev, sledenje.', en: 'Pixel implementation, audience building, tracking.' } },
  { number: '04', title: { si: 'Zagon in optimizacija', en: 'Launch & Optimize' }, description: { si: 'Dnevno spremljanje, tedenski popravki, mesečni strateški pregledi.', en: 'Daily monitoring, weekly adjustments, monthly strategy reviews.' } },
  { number: '05', title: { si: 'Širjenje in rast', en: 'Scale & Expand' }, description: { si: 'Skaliranje uspešne kreative, testiranje novih kanalov, napredne taktike.', en: 'Winning creative scaling, new channel testing, advanced tactics.' } },
];

const faqItems = [
  { question: { si: 'Katere platforme pokrivate?', en: 'Which platforms do you cover?' }, answer: { si: 'Meta (Facebook in Instagram), Google Ads, TikTok Ads, LinkedIn Ads, YouTube Ads, programatsko/CTV in Amazon.', en: 'Meta (Facebook & Instagram), Google Ads, TikTok Ads, LinkedIn Ads, YouTube Ads, Programmatic/CTV and Amazon.' } },
  { question: { si: 'Kakšen je najmanjši oglaševalski proračun?', en: 'What is the minimum ad budget?' }, answer: { si: 'Priporočamo vsaj 500 € mesečnega proračuna za oglase, poleg naše provizije za upravljanje.', en: 'We recommend a minimum monthly ad budget of €500, in addition to our management fee.' } },
  { question: { si: 'Kako hitro se pokažejo rezultati?', en: 'How quickly will I see results?' }, answer: { si: 'Prve rezultate običajno opazite v 1–2 tednih. Optimalne rezultate dosežemo po 4–6 tednih testiranja in optimizacije.', en: 'You typically see first results within 1-2 weeks. Optimal results are achieved after 4-6 weeks of testing and optimization.' } },
  { question: { si: 'Lahko sproti spremljam rezultate?', en: 'Can I track results in real time?' }, answer: { si: 'Da, zagotovimo vam dostop do nadzorne plošče v živo z vsemi ključnimi kazalniki vaših kampanj.', en: 'Yes, we provide access to a live dashboard with all key metrics of your campaigns.' } },
];

const DigitalMarketing = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ServiceHero
      eyebrow={{ si: 'Digitalni marketing', en: 'Digital Marketing' }}
      title={{ si: 'Digitalni marketing z AI za najboljši donos', en: 'AI-Powered Digital Marketing for Maximum ROI' }}
      subtitle={{ si: 'Podatkovno vodene kampanje na vseh platformah. Združujemo učinkovitost AI s človeško strategijo za rast vaših strank in prihodkov.', en: 'Data-driven campaigns across all platforms. We combine AI efficiency with human strategy to scale your customer acquisition and retention.' }}
      gradient="orange"
      ctaText={{ si: 'Brezplačni marketing pregled + strateški načrt →', en: 'Free Marketing Audit + Strategy Plan →' }}
    />
    <ValueProps title={{ si: 'Ključne prednosti', en: 'Key Value Propositions' }} items={valueProps} />
    <UseCasesGrid title={{ si: 'Kanali', en: 'Channels' }} cases={channels} />
    <ProcessSteps steps={steps} />
    <ServiceFAQ items={faqItems} />
    <BookingCTA />
    <Footer />
  </div>
);

export default DigitalMarketing;
