import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from '@/components/services/ServiceHero';
import ProcessSteps from '@/components/services/ProcessSteps';
import UseCasesGrid from '@/components/services/UseCasesGrid';
import ValueProps from '@/components/services/ValueProps';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import BookingCTA from '@/components/services/BookingCTA';

const valueProps = [
  { si: 'Po meri oblikovan avatar, ki odraža osebnost vaše znamke', en: 'Custom-designed avatar based on your brand personality' },
  { si: 'Sinhronizacija ustnic v 50+ jezikih brez ponovnega snemanja', en: 'Lip-sync video in 50+ languages without re-recording' },
  { si: 'Dosleden lik na vseh vaših komunikacijskih kanalih', en: 'Consistent character across all marketing touchpoints' },
  { si: 'Brez honorarjev za nastopajočih, brez terminskih zapletov, brez težav s pravicami', en: 'No talent fees, no scheduling conflicts, no usage rights issues' },
  { si: 'Avatar je v celoti vaš — lastite si vse pravice', en: 'Own your avatar IP—it\'s yours exclusively' },
];

const applications = [
  { icon: '🎬', title: { si: 'Video oglasi', en: 'Video Ad Spokesperson' }, description: { si: 'Govorec v video oglasih za vašo blagovno znamko.', en: 'Spokesperson/host in video ads for your brand.' } },
  { icon: '📱', title: { si: 'Družbena omrežja', en: 'Social Media Character' }, description: { si: 'Prepoznaven lik za vsebine na družbenih omrežjih.', en: 'Consistent character for social media content.' } },
  { icon: '🤝', title: { si: 'Personalizirani prodajni videi', en: 'Personalized Sales Videos' }, description: { si: 'Videi 1:1 za neposreden stik s strankami.', en: '1:1 personalized sales outreach videos.' } },
  { icon: '🎓', title: { si: 'Podpora in izobraževanje', en: 'Support & Training' }, description: { si: 'Videi za podporo strankam, uvajanje in interno usposabljanje.', en: 'Customer support, onboarding and internal training videos.' } },
  { icon: '🎤', title: { si: 'Virtualni dogodki', en: 'Virtual Events' }, description: { si: 'Spletni dogodki in webinarji z vašim avatarjem.', en: 'Virtual events and webinars with your avatar.' } },
  { icon: '🏢', title: { si: 'Interne komunikacije', en: 'Internal Communications' }, description: { si: 'Interno usposabljanje in komunikacija z zaposlenimi.', en: 'Internal training and employee communications.' } },
];

const avatarStyles = [
  { icon: '👤', title: { si: 'Fotorealistični avatar', en: 'Photorealistic Human' }, description: { si: 'Različne starosti, narodnosti in slogi.', en: 'Diverse ages, ethnicities, and styles.' } },
  { icon: '🎨', title: { si: 'Animirani liki', en: 'Animated/Illustrated' }, description: { si: 'Po meri oblikovani animirani ali ilustrirani liki.', en: 'Custom animated or illustrated characters.' } },
  { icon: '🐾', title: { si: 'Maskota znamke', en: 'Brand Mascot' }, description: { si: 'Vaša maskota, oživljena z AI.', en: 'Your brand mascot brought to life.' } },
  { icon: '👔', title: { si: 'Digitalni dvojnik direktorja', en: 'CEO Digital Twin' }, description: { si: 'Digitalni dvojnik direktorja ali vodje (z dovoljenjem).', en: 'Executive/CEO digital twin (with permission).' } },
];

const steps = [
  { number: '01', title: { si: 'Oblikovanje lika', en: 'Character Design' }, description: { si: 'Opredelimo osebnost, videz, glas in manire.', en: 'Define personality, appearance, voice, and mannerisms.' } },
  { number: '02', title: { si: 'Učenje AI modela', en: 'AI Training' }, description: { si: 'Zgradimo in izpopolnimo vaš prilagojen AI avatar.', en: 'Build and refine your custom avatar model.' } },
  { number: '03', title: { si: 'Glas in jeziki', en: 'Voice & Language Setup' }, description: { si: 'Posnemite osnovni glas ali izberite sintetičnega.', en: 'Record base voice or select synthetic voice.' } },
  { number: '04', title: { si: 'Priprava predlog', en: 'Template Creation' }, description: { si: 'Pripravimo predloge za ponovno uporabo v različnih formatih.', en: 'Build reusable video formats and scenes.' } },
  { number: '05', title: { si: 'Uvedba', en: 'Deployment' }, description: { si: 'Integracija v vaše marketinške kanale z navodili za uporabo.', en: 'Integrate across your marketing channels with training.' } },
];

const faqItems = [
  { question: { si: 'Koliko časa traja izdelava avatarja?', en: 'How long does avatar creation take?' }, answer: { si: 'Običajno 2–3 tedne od začetnega oblikovanja do končnega avatarja, pripravljenega za uporabo.', en: 'Typically 2-3 weeks from initial design to final avatar ready for use.' } },
  { question: { si: 'Lahko avatar govori v več jezikih?', en: 'Can the avatar speak multiple languages?' }, answer: { si: 'Da, podpiramo sinhronizacijo ustnic v več kot 50 jezikih brez ponovnega snemanja.', en: 'Yes, we support lip-sync in 50+ languages without re-recording.' } },
  { question: { si: 'Komu pripada avatar?', en: 'Who owns the avatar?' }, answer: { si: 'Vi ste izključni lastnik vseh pravic — avatar je v celoti vaš.', en: 'You are the exclusive owner of the avatar IP—it\'s entirely yours.' } },
];

const AIAvatarCreation = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <ServiceHero
      eyebrow={{ si: 'AI avatarji', en: 'AI Avatar Creation' }}
      title={{ si: 'Vaš AI avatar: virtualni ambasador vaše znamke', en: "Your Custom AI Avatar: Your Brand's Virtual Ambassador" }}
      subtitle={{ si: 'Dosleden, vedno na voljo digitalni predstavnik vaše blagovne znamke na vsakem kanalu. Brez omejitev, vedno dosleden.', en: 'A consistent, always-on digital spokesperson that represents your brand across every channel. Infinitely scalable, infinitely consistent.' }}
      gradient="blue"
      ctaText={{ si: 'Brezplačno oblikovanje avatarja →', en: 'Free Avatar Design - Pay Only When You Love It →' }}
    />
    <ValueProps title={{ si: 'Ključne prednosti', en: 'Key Value Propositions' }} items={valueProps} />
    <UseCasesGrid title={{ si: 'Uporaba avatarjev', en: 'Avatar Applications' }} cases={applications} />
    <UseCasesGrid title={{ si: 'Slogi avatarjev', en: 'Avatar Styles' }} cases={avatarStyles} />
    <ProcessSteps steps={steps} />
    <ServiceFAQ items={faqItems} />
    <BookingCTA />
    <Footer />
  </div>
);

export default AIAvatarCreation;
