import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import VideoShowcase from '@/components/services/VideoShowcase';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import TechSpecs from '@/components/services/TechSpecs';
import ProcessSteps from '@/components/services/ProcessSteps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import PricingGuide from '@/components/services/PricingGuide';
import BookingForm from '@/components/services/BookingForm';

const videoUseCases = [
  {
    icon: '📱',
    title: { si: 'Oglasi za Socialna Omrežja', en: 'Social Media Ads' },
    description: { si: 'Kratki, dinamični video oglasi za Instagram, TikTok, Facebook in YouTube.', en: 'Short, dynamic video ads for Instagram, TikTok, Facebook and YouTube.' },
  },
  {
    icon: '🎬',
    title: { si: 'Produktne Predstavitve', en: 'Product Demos' },
    description: { si: 'Profesionalne predstavitve produktov z 3D animacijami in vizualnimi učinki.', en: 'Professional product presentations with 3D animations and visual effects.' },
  },
  {
    icon: '🏢',
    title: { si: 'Brand Video', en: 'Brand Videos' },
    description: { si: 'Celostna video identiteta vaše blagovne znamke za vse kanale.', en: 'Complete video identity for your brand across all channels.' },
  },
  {
    icon: '💡',
    title: { si: 'Razlagalni Videi', en: 'Explainer Videos' },
    description: { si: 'Jasni in prepričljivi videi, ki razložijo vaš produkt ali storitev.', en: 'Clear and compelling videos that explain your product or service.' },
  },
];

const videoSpecs = [
  { label: { si: 'Resolucije', en: 'Resolutions' }, value: { si: '1080p, 4K UHD', en: '1080p, 4K UHD' } },
  { label: { si: 'Formati', en: 'Formats' }, value: { si: 'MP4, MOV, WebM', en: 'MP4, MOV, WebM' } },
  { label: { si: 'Razmerja', en: 'Aspect Ratios' }, value: { si: '16:9, 9:16, 1:1, 4:5', en: '16:9, 9:16, 1:1, 4:5' } },
  { label: { si: 'Dolžina', en: 'Duration' }, value: { si: '15s - 120s', en: '15s - 120s' } },
  { label: { si: 'FPS', en: 'FPS' }, value: { si: '30 / 60 fps', en: '30 / 60 fps' } },
  { label: { si: 'Prilagoditve', en: 'Customization' }, value: { si: 'Barve, tipografija, glasba, voiceover', en: 'Colors, typography, music, voiceover' } },
];

const videoProcess = [
  { number: '01', title: { si: 'Brezplačno Posvetovanje', en: 'Free Consultation' }, description: { si: 'Pogovorimo se o vaših ciljih, ciljni publiki in viziji za video vsebino.', en: 'We discuss your goals, target audience and vision for video content.' } },
  { number: '02', title: { si: 'Kreativni Brief', en: 'Creative Brief' }, description: { si: 'Pripravimo podroben kreativni brief s scenarijem, storyboardom in vizualnim konceptom.', en: 'We prepare a detailed creative brief with script, storyboard and visual concept.' } },
  { number: '03', title: { si: 'AI Produkcija', en: 'AI Production' }, description: { si: 'Z naprednimi AI orodji ustvarimo visokokakovostno video vsebino po vašem briefu.', en: 'Using advanced AI tools, we create high-quality video content based on your brief.' } },
  { number: '04', title: { si: 'Revizija & Popravki', en: 'Review & Revisions' }, description: { si: 'Pregledate rezultat in nam sporočite morebitne popravke. Vključeni 2 kroga revizij.', en: 'You review the result and let us know any changes. 2 rounds of revisions included.' } },
  { number: '05', title: { si: 'Dostava & Podpora', en: 'Delivery & Support' }, description: { si: 'Prejmete končne datoteke v vseh formatih in resolucijah. Stalna podpora vključena.', en: 'You receive final files in all formats and resolutions. Ongoing support included.' } },
];

const videoFAQ = [
  { question: { si: 'Koliko časa traja produkcija videa?', en: 'How long does video production take?' }, answer: { si: 'Večina projektov je končanih v 24 urah. Kompleksnejši projekti lahko trajajo do 5 dni.', en: 'Most projects are completed in 24 hours. More complex projects can take up to 5 days.' } },
  { question: { si: 'Ali lahko prilagodim barve in stil?', en: 'Can I customize colors and style?' }, answer: { si: 'Seveda! Vsi videi so popolnoma prilagodljivi - barve, tipografija, glasba, voiceover in več.', en: 'Absolutely! All videos are fully customizable - colors, typography, music, voiceover and more.' } },
  { question: { si: 'Kakšne formate podpirate?', en: 'What formats do you support?' }, answer: { si: 'Podpiramo MP4, MOV, WebM v resolucijah do 4K UHD, v razmerjih 16:9, 9:16, 1:1 in 4:5.', en: 'We support MP4, MOV, WebM in resolutions up to 4K UHD, in 16:9, 9:16, 1:1 and 4:5 ratios.' } },
  { question: { si: 'Koliko revizij je vključenih?', en: 'How many revisions are included?' }, answer: { si: 'Vsak paket vključuje 2 kroga revizij. Dodatne revizije so na voljo po dogovoru.', en: 'Each package includes 2 rounds of revisions. Additional revisions are available upon agreement.' } },
  { question: { si: 'Ali ponujate voiceover?', en: 'Do you offer voiceover?' }, answer: { si: 'Da, ponujamo profesionalni AI voiceover v slovenščini in angleščini.', en: 'Yes, we offer professional AI voiceover in Slovenian and English.' } },
];

const videoPricing = [
  {
    name: { si: 'Osnovno', en: 'Basic' },
    price: '€149',
    features: [
      { si: '1 video (do 30s)', en: '1 video (up to 30s)' },
      { si: '1080p resolucija', en: '1080p resolution' },
      { si: '1 format', en: '1 format' },
      { si: '1 revizija', en: '1 revision' },
      { si: 'Dostava v 48h', en: 'Delivery in 48h' },
    ],
  },
  {
    name: { si: 'Profesionalno', en: 'Professional' },
    price: '€349',
    highlighted: true,
    features: [
      { si: '3 videi (do 60s)', en: '3 videos (up to 60s)' },
      { si: '4K UHD resolucija', en: '4K UHD resolution' },
      { si: 'Vsi formati', en: 'All formats' },
      { si: '2 reviziji', en: '2 revisions' },
      { si: 'Glasba + voiceover', en: 'Music + voiceover' },
      { si: 'Dostava v 24h', en: 'Delivery in 24h' },
    ],
  },
  {
    name: { si: 'Premium', en: 'Premium' },
    price: '€699',
    features: [
      { si: '10 videov (do 120s)', en: '10 videos (up to 120s)' },
      { si: '4K UHD resolucija', en: '4K UHD resolution' },
      { si: 'Vsi formati + razmerja', en: 'All formats + ratios' },
      { si: 'Neomejene revizije', en: 'Unlimited revisions' },
      { si: 'Prioritetna podpora', en: 'Priority support' },
      { si: 'Mesečno svetovanje', en: 'Monthly consulting' },
    ],
  },
];

const AIVideoPage = () => {
  return (
    <main className="bg-background">
      <Header />
      <ServiceHero
        eyebrow={{ si: 'AI Video Produkcija', en: 'AI Video Production' }}
        title={{ si: 'AI Video Oglasi, Ki Prodajajo', en: 'AI Video Ads That Sell' }}
        subtitle={{ si: 'Profesionalni AI video oglasi za socialna omrežja, produkte in blagovne znamke. Dostava v 24 urah.', en: 'Professional AI video ads for social media, products and brands. Delivery in 24 hours.' }}
        gradient="blue"
      />
      <VideoShowcase />
      <UseCasesGrid
        title={{ si: 'Primeri Uporabe', en: 'Use Cases' }}
        cases={videoUseCases}
      />
      <TechSpecs
        title={{ si: 'Tehnične Specifikacije', en: 'Technical Specifications' }}
        specs={videoSpecs}
      />
      <ProcessSteps steps={videoProcess} />
      <ServiceFAQ items={videoFAQ} />
      <PricingGuide tiers={videoPricing} />
      <BookingForm />
      <Footer />
    </main>
  );
};

export default AIVideoPage;
