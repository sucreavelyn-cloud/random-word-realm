import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import GalleryGrid from '@/components/services/GalleryGrid';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import TechSpecs from '@/components/services/TechSpecs';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import PricingGuide from '@/components/services/PricingGuide';
import BookingForm from '@/components/services/BookingForm';

const photoUseCases = [
  {
    icon: '🛒',
    title: { si: 'E-commerce', en: 'E-commerce' },
    description: { si: 'Profesionalne produktne fotografije za spletne trgovine, ki povečajo konverzije.', en: 'Professional product photography for online stores that increase conversions.' },
  },
  {
    icon: '📖',
    title: { si: 'Katalogi', en: 'Catalogs' },
    description: { si: 'Konsistentne, visokokakovostne slike za tiskane in digitalne kataloge.', en: 'Consistent, high-quality images for print and digital catalogs.' },
  },
  {
    icon: '📱',
    title: { si: 'Socialna Omrežja', en: 'Social Media' },
    description: { si: 'Privlačne vizualne vsebine za Instagram, Facebook in Pinterest.', en: 'Engaging visual content for Instagram, Facebook and Pinterest.' },
  },
  {
    icon: '📢',
    title: { si: 'Marketinški Materiali', en: 'Marketing Materials' },
    description: { si: 'Slike za oglase, spletne strani, brošure in predstavitve.', en: 'Images for ads, websites, brochures and presentations.' },
  },
];

const photoSpecs = [
  { label: { si: 'Resolucija', en: 'Resolution' }, value: { si: 'Do 8K (7680×4320)', en: 'Up to 8K (7680×4320)' } },
  { label: { si: 'Formati', en: 'Formats' }, value: { si: 'PNG, JPEG, WebP, TIFF', en: 'PNG, JPEG, WebP, TIFF' } },
  { label: { si: 'Barvni Profili', en: 'Color Profiles' }, value: { si: 'sRGB, Adobe RGB, CMYK', en: 'sRGB, Adobe RGB, CMYK' } },
  { label: { si: 'Ozadje', en: 'Backgrounds' }, value: { si: 'Belo, transparentno, po meri', en: 'White, transparent, custom' } },
  { label: { si: 'Retuširanje', en: 'Retouching' }, value: { si: 'AI odstranjevanje ozadja, senčenje, odsevi', en: 'AI background removal, shadows, reflections' } },
  { label: { si: 'Dostava', en: 'Delivery' }, value: { si: 'ZIP paket, oblak, API', en: 'ZIP package, cloud, API' } },
];

const photoProcess = [
  { number: '01', title: { si: 'Oddaja Produktov', en: 'Product Submission' }, description: { si: 'Pošljete nam svoje produkte ali referenčne slike. Lahko uporabite tudi 3D modele.', en: 'Send us your products or reference images. You can also use 3D models.' } },
  { number: '02', title: { si: 'Stilski Brief', en: 'Style Brief' }, description: { si: 'Določimo stil, ozadje, kote in kompozicijo za vaše fotografije.', en: 'We determine style, background, angles and composition for your photos.' } },
  { number: '03', title: { si: 'AI Generacija', en: 'AI Generation' }, description: { si: 'Z AI orodji ustvarimo fotorealistične produktne fotografije visoke kakovosti.', en: 'Using AI tools, we create photorealistic high-quality product photography.' } },
  { number: '04', title: { si: 'Post-Produkcija', en: 'Post-Production' }, description: { si: 'Retuširanje, barvna korekcija, odstranjevanje ozadja in priprava za objavo.', en: 'Retouching, color correction, background removal and preparation for publishing.' } },
  { number: '05', title: { si: 'Dostava Datotek', en: 'File Delivery' }, description: { si: 'Prejmete vse datoteke v izbranih formatih, pripravljene za takojšnjo uporabo.', en: 'You receive all files in chosen formats, ready for immediate use.' } },
];

const photoFAQ = [
  { question: { si: 'Ali potrebujem fizični produkt?', en: 'Do I need a physical product?' }, answer: { si: 'Ne vedno. Lahko delamo iz referenčnih slik, 3D modelov ali opisov. Za najboljše rezultate pa priporočamo referenčne fotografije.', en: 'Not always. We can work from reference images, 3D models or descriptions. For best results, we recommend reference photos.' } },
  { question: { si: 'Kakšna je kakovost v primerjavi s tradicionalno fotografijo?', en: 'What is the quality compared to traditional photography?' }, answer: { si: 'AI fotografija dosega fotorealistično kakovost, ki je pogosto nerazločljiva od tradicionalne fotografije, pri veliko nižjih stroških.', en: 'AI photography achieves photorealistic quality that is often indistinguishable from traditional photography, at much lower costs.' } },
  { question: { si: 'Ali lahko odstranim ali zamenjam ozadje?', en: 'Can I remove or replace the background?' }, answer: { si: 'Da! Ponujamo odstranjevanje ozadja, zamenjavo s po meri oblikovanimi scenami, in lifestyle postavitve.', en: 'Yes! We offer background removal, replacement with custom-designed scenes, and lifestyle setups.' } },
  { question: { si: 'Koliko slik dobim?', en: 'How many images do I get?' }, answer: { si: 'Odvisno od paketa - od 5 do 50+ slik. Vsaka slika je na voljo v več formatih in resolucijah.', en: 'Depends on the package - from 5 to 50+ images. Each image is available in multiple formats and resolutions.' } },
];

const photoPricing = [
  {
    name: { si: 'Osnovno', en: 'Basic' },
    price: '€99',
    features: [
      { si: '5 fotografij', en: '5 photos' },
      { si: '2K resolucija', en: '2K resolution' },
      { si: 'Belo ozadje', en: 'White background' },
      { si: '1 revizija', en: '1 revision' },
      { si: 'PNG + JPEG', en: 'PNG + JPEG' },
    ],
  },
  {
    name: { si: 'Profesionalno', en: 'Professional' },
    price: '€249',
    highlighted: true,
    features: [
      { si: '15 fotografij', en: '15 photos' },
      { si: '4K resolucija', en: '4K resolution' },
      { si: 'Odstranjevanje ozadja', en: 'Background removal' },
      { si: '2 reviziji', en: '2 revisions' },
      { si: 'Vsi formati', en: 'All formats' },
      { si: 'Lifestyle scene', en: 'Lifestyle scenes' },
    ],
  },
  {
    name: { si: 'Premium', en: 'Premium' },
    price: '€499',
    features: [
      { si: '50+ fotografij', en: '50+ photos' },
      { si: '8K resolucija', en: '8K resolution' },
      { si: 'Po meri scene', en: 'Custom scenes' },
      { si: 'Neomejene revizije', en: 'Unlimited revisions' },
      { si: 'CMYK za tisk', en: 'CMYK for print' },
      { si: 'Prioritetna podpora', en: 'Priority support' },
    ],
  },
];

const AIPhotoPage = () => {
  return (
    <main className="bg-background">
      <Header />
      <ServiceHero
        eyebrow={{ si: 'AI Produktna Fotografija', en: 'AI Product Photography' }}
        title={{ si: 'AI Fotografija, Ki Prodaja Vaše Produkte', en: 'AI Photography That Sells Your Products' }}
        subtitle={{ si: 'Fotorealistična produktna fotografija z AI. Odstranjevanje ozadja, lifestyle scene in več – vse v 24-48 urah.', en: 'Photorealistic product photography with AI. Background removal, lifestyle scenes and more – all in 24-48 hours.' }}
        gradient="orange"
      />
      <GalleryGrid />
      <UseCasesGrid
        title={{ si: 'Primeri Uporabe', en: 'Use Cases' }}
        cases={photoUseCases}
      />
      <TechSpecs
        title={{ si: 'Tehnične Specifikacije', en: 'Technical Specifications' }}
        specs={photoSpecs}
      />
      <ProcessSteps steps={photoProcess} />
      <ServiceFAQ items={photoFAQ} />
      <PricingGuide tiers={photoPricing} />
      <BookingForm />
      <Footer />
    </main>
  );
};

export default AIPhotoPage;
