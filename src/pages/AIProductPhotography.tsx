import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ProcessSteps from '@/components/services/ProcessSteps';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import ValueProps from '@/components/services/ValueProps';
import GalleryGrid from '@/components/services/GalleryGrid';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import BookingCTA from '@/components/services/BookingCTA';

const valueProps = [
  { si: 'Brez fizičnih snemanj — pošljite vzorce ali uporabite obstoječe gradivo', en: 'No physical shoots required—ship us samples or use existing assets' },
  { si: 'AI-generirana ozadja, scene in lifestyle konteksti', en: 'AI-generated backgrounds, scenes, and lifestyle contexts' },
  { si: '360° interaktivni prikazi in dinamične galerije izdelkov', en: '360° interactive spins and dynamic product displays' },
  { si: 'Paketna obdelava: 100+ izdelkov obdelanih hkrati', en: 'Batch processing: 100+ SKUs processed simultaneously' },
  { si: 'Enotna osvetlitev, koti in vizualna identiteta po celotnem katalogu', en: 'Consistent lighting, angles, and brand aesthetics across entire catalog' },
];

const steps = [
  { number: '01', title: { si: 'Prejem izdelkov', en: 'Product Intake' }, description: { si: 'Pošljite izdelke ali naložite obstoječe fotografije.', en: 'Ship products or upload existing photography.' } },
  { number: '02', title: { si: 'Oblikovanje scen', en: 'Scene Design' }, description: { si: 'Pripravimo prilagojena ozadja in kontekste za vašo znamko.', en: 'We design custom backgrounds and contexts for your brand.' } },
  { number: '03', title: { si: 'AI generiranje', en: 'AI Generation' }, description: { si: 'Ustvarimo fotorealistične produktne slike v velikem obsegu.', en: 'Generate photorealistic product images at scale.' } },
  { number: '04', title: { si: 'Retuširanje', en: 'Retouching' }, description: { si: 'Človeška dodelava za popoln rezultat.', en: 'Human refinement for perfection.' } },
  { number: '05', title: { si: 'Dostava formatov', en: 'Format Delivery' }, description: { si: 'Optimizirane datoteke za vsako platformo in namen.', en: 'Optimized files for every platform and use case.' } },
];

const useCases = [
  { icon: '🛍️', title: { si: 'Spletna trgovina', en: 'Ecommerce' }, description: { si: 'Objave za Amazon, Shopify, Walmart in druge tržnice.', en: 'Amazon, Shopify, Walmart marketplace listings.' } },
  { icon: '📱', title: { si: 'Socialna prodaja', en: 'Social Commerce' }, description: { si: 'Instagram Shopping, TikTok Shop in več.', en: 'Instagram Shopping, TikTok Shop and more.' } },
  { icon: '📰', title: { si: 'Katalogi in tisk', en: 'Catalog & Print' }, description: { si: 'Visoka ločljivost za tiskane materiale in kataloge.', en: 'High resolution for printed materials and catalogs.' } },
  { icon: '📧', title: { si: 'E-pošta in oglasi', en: 'Email & Paid Social' }, description: { si: 'Gradiva za e-poštne kampanje in plačane oglase.', en: 'Email and paid social campaign assets.' } },
];

const faqItems = [
  { question: { si: 'Kakšno fotografijo potrebujete od nas?', en: 'What kind of photo do you need from us?' }, answer: { si: 'Zadostuje osnovna slika izdelka na svetlem ozadju, posneta s telefonom. Boljša kot je izhodna slika, boljši bo končni rezultat.', en: 'A basic product photo on a light background taken with a phone is enough. The higher quality, the better the result.' } },
  { question: { si: 'Koliko slik dobim?', en: 'How many images do I get?' }, answer: { si: 'Odvisno od paketa — od 5 do 50+ slik na izdelek z različnimi ozadji in koti.', en: 'Depends on the package – from 5 to 50+ images per product with different backgrounds and angles.' } },
  { question: { si: 'So slike primerne za tisk?', en: 'Are images suitable for print?' }, answer: { si: 'Da, vse slike ustvarimo v visoki ločljivosti (do 4K) in so primerne za tisk.', en: 'Yes, all images are generated in high resolution (up to 4K) and are suitable for print.' } },
];

const AIProductPhotography = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ServiceHero
      eyebrow={{ si: 'AI produktna fotografija', en: 'AI Product Photography' }}
      title={{ si: 'Studijska kakovost brez studia', en: 'Studio-Quality Product Photos Without the Studio' }}
      subtitle={{ si: 'Profesionalne produktne fotografije v minutah, ne dnevih. Ustvarjene z AI, usklajene z vašo znamko, pripravljene za Amazon, Shopify in vse tržnice.', en: 'Professional product photography in minutes, not days. AI-enhanced, brand-consistent, ready for Amazon, Shopify, and every marketplace.' }}
      gradient="orange"
      ctaText={{ si: '5 brezplačnih AI produktnih fotografij →', en: 'Get 5 Free AI Product Photos →' }}
    />
    <ValueProps title={{ si: 'Ključne prednosti', en: 'Key Value Propositions' }} items={valueProps} />
    <GalleryGrid />
    <UseCasesGrid title={{ si: 'Primeri uporabe', en: 'Use Cases' }} cases={useCases} />
    <ProcessSteps steps={steps} />
    <ServiceFAQ items={faqItems} />
    <BookingCTA />
    <Footer />
  </div>
);

export default AIProductPhotography;
