import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ProcessSteps from '@/components/services/ProcessSteps';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import ValueProps from '@/components/services/ValueProps';
import VideoShowcase from '@/components/services/VideoShowcase';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import BookingCTA from '@/components/services/BookingCTA';

const valueProps = [
  { si: '20–100+ video različic na mesec za učinkovito A/B testiranje', en: '20-100+ video variations per month for A/B testing' },
  { si: 'Formati prilagojeni vsem platformam (9:16, 1:1, 16:9) — dostavljeni samodejno', en: 'Platform-native formats (9:16, 1:1, 16:9) delivered automatically' },
  { si: 'AI ustvari scenarije, vizuale in glasovne posnetke — strategijo vodijo ljudje', en: 'AI-generated scripts, visuals, and voiceovers—human-strategized' },
  { si: 'Povratna zanka: sproti optimiziramo na podlagi vaših podatkov', en: 'Performance feedback loops: We optimize based on your ad data' },
];

const steps = [
  { number: '01', title: { si: 'Strateški pogovor', en: 'Strategy Call' }, description: { si: 'Opredelimo občinstvo, sporočila in kreativno smer.', en: 'Define audience, messaging, and creative direction.' } },
  { number: '02', title: { si: 'Zbiranje gradiv', en: 'Asset Collection' }, description: { si: 'Vi zagotovite slike ali posnetke izdelkov — za ostalo poskrbimo mi.', en: 'You provide product images/video; we handle the rest.' } },
  { number: '03', title: { si: 'AI produkcija', en: 'AI Production' }, description: { si: 'Ustvarimo scenarije, vizuale, glasovne posnetke in montažo.', en: 'Generate scripts, visuals, voiceovers, and edits.' } },
  { number: '04', title: { si: 'Človeška dodelava', en: 'Human Refinement' }, description: { si: 'Kreativni direktor pregleda in uskladi z vašo blagovno znamko.', en: 'Creative director review and brand alignment.' } },
  { number: '05', title: { si: 'Dostava in optimizacija', en: 'Delivery & Optimization' }, description: { si: 'Datoteke pripravljene za objavo + priporočila za boljše rezultate.', en: 'Platform-ready files + performance recommendations.' } },
];

const useCases = [
  { icon: '📱', title: { si: 'Meta in Instagram', en: 'Meta & Instagram Ads' }, description: { si: 'Video oglasi optimizirani za feed, zgodbe in reelse.', en: 'Video ads optimized for feed, stories and reels.' } },
  { icon: '🎯', title: { si: 'Google in YouTube', en: 'Google & YouTube' }, description: { si: 'Pre-roll in bumper oglasi za širši doseg.', en: 'Pre-roll and bumper ads for maximum reach.' } },
  { icon: '🎵', title: { si: 'TikTok oglasi', en: 'TikTok Ads' }, description: { si: 'Nativni vertikalni video oglasi za TikTok.', en: 'Native vertical video ads for TikTok platform.' } },
  { icon: '📺', title: { si: 'CTV in programatsko', en: 'CTV & Programmatic' }, description: { si: 'Oglasi za pametne televizije in programatsko oglaševanje.', en: 'Connected TV ads for broader reach.' } },
];

const faqItems = [
  { question: { si: 'Kako dolgi so video oglasi?', en: 'How long are the video ads?' }, answer: { si: 'Ustvarjamo videe dolžin 6 s, 15 s, 30 s in 60 s — odvisno od platforme in cilja kampanje.', en: 'We create videos in 6s, 15s, 30s and 60s lengths, depending on platform and campaign goal.' } },
  { question: { si: 'Lahko uporabim svojo celostno grafično podobo?', en: 'Can I use my own branding?' }, answer: { si: 'Seveda! Vse videe prilagodimo vaši blagovni znamki — barvam, logotipu in tonu komunikacije.', en: 'Absolutely! All videos are customized to your brand – colors, logo, tone of voice.' } },
  { question: { si: 'Kako hitro dobim končni video?', en: 'How long does production take?' }, answer: { si: 'Običajna dostava je 24–48 ur. Za nujne projekte ponujamo tudi hitro dostavo.', en: 'Standard delivery is 24-48 hours. For urgent projects we also offer express delivery.' } },
  { question: { si: 'V kakšnih formatih dobim video?', en: 'What formats do I receive?' }, answer: { si: 'MP4 v vseh potrebnih razmerjih (9:16, 1:1, 16:9), optimizirano za vsako platformo.', en: 'MP4 in all needed aspect ratios (9:16, 1:1, 16:9) optimized for each platform.' } },
];

const AIVideoAds = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ServiceHero
      eyebrow={{ si: 'AI video oglasi', en: 'AI Video Ads' }}
      title={{ si: 'AI video oglasi, ki prepričajo in prodajajo', en: 'Scroll-Stopping AI Video Ads That Convert' }}
      subtitle={{ si: 'Profesionalni video oglasi, ustvarjeni v urah, ne tednih. Optimizirani za Meta, TikTok, YouTube in CTV.', en: 'Professional video ads generated in hours, not weeks. Optimized for Meta, TikTok, YouTube, and CTV.' }}
      gradient="blue"
      ctaText={{ si: 'Preizkusite prvi AI video oglas brezplačno →', en: 'Get Your First AI Video Ad Free →' }}
    />
    <ValueProps title={{ si: 'Ključne prednosti', en: 'Key Value Propositions' }} items={valueProps} />
    <VideoShowcase placeholderCount={3} />
    <UseCasesGrid title={{ si: 'Primeri uporabe', en: 'Use Cases' }} cases={useCases} />
    <ProcessSteps steps={steps} />
    <ServiceFAQ items={faqItems} />
    <BookingCTA />
    <Footer />
  </div>
);

export default AIVideoAds;
