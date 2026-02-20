import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ProcessSteps from '@/components/services/ProcessSteps';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import ValueProps from '@/components/services/ValueProps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import BookingCTA from '@/components/services/BookingCTA';

const valueProps = [
  { si: 'Dnevni vsebinski načrt: objave, zgodbe, reelsi, carouseli', en: 'Daily content calendar: Posts, stories, reels, carousels' },
  { si: 'AI prilagojen vašemu glasu — zveni kot vi, ne generično', en: 'Brand voice trained AI—sounds like you, not generic' },
  { si: 'Prilagojeno za vsako platformo: Instagram, TikTok, LinkedIn, X, Pinterest', en: 'Platform-optimized: Instagram, TikTok, LinkedIn, X, Pinterest' },
  { si: 'Vsebinska strategija: izobraževalno, zabavno, promocijsko, UGC-stil', en: 'Content pillars strategy: Educational, entertaining, promotional, UGC-style' },
  { si: 'Raziskava in optimizacija ključnikov vključena', en: 'Hashtag research and optimization included' },
];

const contentTypes = [
  { icon: '🖼️', title: { si: 'Statične objave in carouseli', en: 'Static Posts & Carousels' }, description: { si: 'Vizualno privlačne objave in carousel formati.', en: 'Visually appealing static posts and carousel formats.' } },
  { icon: '🎬', title: { si: 'Kratki videi', en: 'Short-form Video' }, description: { si: 'Reelsi, TikToki, Shorts za največji doseg.', en: 'Reels, TikToks, Shorts for maximum reach.' } },
  { icon: '📖', title: { si: 'Serije zgodb', en: 'Story Sequences' }, description: { si: 'Serije zgodb in poudarki za večjo angažiranost.', en: 'Story sequences and highlights for engagement.' } },
  { icon: '👥', title: { si: 'Vsebina v UGC slogu', en: 'UGC-Style Content' }, description: { si: 'Objave v slogu uporabniško ustvarjenih vsebin.', en: 'User-generated content style posts.' } },
  { icon: '🎓', title: { si: 'Izobraževalne vsebine', en: 'Educational Content' }, description: { si: 'Avtoritativne vsebine za gradnjo strokovne prepoznavnosti.', en: 'Authority content for building expertise.' } },
  { icon: '🚀', title: { si: 'Promocijske vsebine', en: 'Promotional Content' }, description: { si: 'Vsebine za lansiranja izdelkov in akcije.', en: 'Launch and promotional content.' } },
];

const steps = [
  { number: '01', title: { si: 'Spoznavanje vaše znamke', en: 'Brand Voice Training' }, description: { si: 'Analiziramo vašo blagovno znamko in prilagodimo AI.', en: 'We analyze your brand and train our AI.' } },
  { number: '02', title: { si: 'Vsebinska strategija', en: 'Content Strategy' }, description: { si: 'Mesečni vsebinski stebri in načrtovanje kampanj.', en: 'Monthly content pillars and campaign planning.' } },
  { number: '03', title: { si: 'AI kreacija', en: 'AI Creation' }, description: { si: 'Ustvarimo opise, vizuale in video vsebine.', en: 'Generate captions, visuals, and video content.' } },
  { number: '04', title: { si: 'Človeški pregled', en: 'Human Review' }, description: { si: 'Preverjanje skladnosti z znamko in kontrola kakovosti.', en: 'Brand alignment and quality check.' } },
  { number: '05', title: { si: 'Razporejanje in objava', en: 'Scheduling & Publishing' }, description: { si: 'Neposredno na vaše platforme ali v potrditev.', en: 'Direct to your platforms or delivery for approval.' } },
];

const faqItems = [
  { question: { si: 'Koliko objav na mesec pripravite?', en: 'How many posts per month do you prepare?' }, answer: { si: 'Odvisno od paketa — od 12 do 60+ objav mesečno, vključno z zgodbami in reelsi.', en: 'Depends on the package – from 12 to 60+ posts monthly, including stories and reels.' } },
  { question: { si: 'Poskrbite tudi za besedila?', en: 'Do you also cover copy/text?' }, answer: { si: 'Da, AI ustvari tudi besedila, prilagojena vaši znamki in ciljnemu občinstvu.', en: 'Yes, AI also generates text tailored to your brand and target audience.' } },
  { question: { si: 'Za katere platforme ustvarjate?', en: 'Which platforms do you create for?' }, answer: { si: 'Instagram, Facebook, TikTok, LinkedIn, X (Twitter) in Pinterest.', en: 'Instagram, Facebook, TikTok, LinkedIn, X (Twitter) and Pinterest.' } },
];

const SocialMediaContent = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ServiceHero
      eyebrow={{ si: 'Vsebine za družbena omrežja', en: 'Social Media Content' }}
      title={{ si: 'Dosledna, prepoznavna vsebina — pripravljena za vas', en: 'Consistent, On-Brand Social Content—Done For You' }}
      subtitle={{ si: 'AI vsebine za družbena omrežja, ki pritegnejo pozornost in krepijo vašo znamko. Dnevne objave, zgodbe, reelsi in carouseli. Nikoli več brez svežih vsebin.', en: 'AI-powered social media content that captures attention and builds your brand. Daily posts, stories, reels, and carousels. Never run out of content again.' }}
      gradient="blue"
    />
    <ValueProps title={{ si: 'Ključne prednosti', en: 'Key Value Propositions' }} items={valueProps} />
    <UseCasesGrid title={{ si: 'Vrste vsebin', en: 'Content Types' }} cases={contentTypes} />
    <ProcessSteps steps={steps} />
    <ServiceFAQ items={faqItems} />
    <BookingCTA />
    <Footer />
  </div>
);

export default SocialMediaContent;
