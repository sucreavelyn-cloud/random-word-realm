export interface PortfolioItem {
  id: string;
  title: { si: string; en: string };
  industry: { si: string; en: string };
  serviceType: 'video' | 'foto';
  category: string;
  challenge: { si: string; en: string };
  solution: { si: string; en: string };
  results: { label: string; value: string }[];
  testimonial: { quote: { si: string; en: string }; author: string; role: { si: string; en: string } };
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-moda',
    title: { si: 'AI Kampanja za Modno Znamko', en: 'AI Campaign for Fashion Brand' },
    industry: { si: 'Moda', en: 'Fashion' },
    serviceType: 'video',
    category: 'moda',
    challenge: { si: 'Modna znamka je potrebovala hitro in cenovno ugodno produkcijo video oglasov za novo kolekcijo na socialnih omrežjih.', en: 'A fashion brand needed fast and affordable production of video ads for their new collection on social media.' },
    solution: { si: 'Ustvarili smo 12 dinamičnih video oglasov v 4K resoluciji, optimiziranih za Instagram Reels in TikTok, s poudarkom na vizualni identiteti blagovne znamke.', en: 'We created 12 dynamic video ads in 4K resolution, optimized for Instagram Reels and TikTok, emphasizing brand visual identity.' },
    results: [
      { label: 'Engagement', value: '+247%' },
      { label: 'CTR', value: '+180%' },
      { label: 'Čas produkcije', value: '48h' },
      { label: 'Prihranek', value: '5x' },
    ],
    testimonial: {
      quote: { si: 'AI Oglasi so nam omogočili, da smo v 48 urah dobili celotno kampanjo, za katero bi sicer potrebovali 2 tedna.', en: 'AI Oglasi enabled us to get an entire campaign in 48 hours, which would otherwise take 2 weeks.' },
      author: 'Ana Novak',
      role: { si: 'Vodja marketinga, ModaBrand', en: 'Marketing Manager, ModaBrand' },
    },
  },
  {
    id: 'gostinstvo-restavracija',
    title: { si: 'Produktna Fotografija za Restavracijo', en: 'Product Photography for Restaurant' },
    industry: { si: 'Gostinstvo', en: 'Hospitality' },
    serviceType: 'foto',
    category: 'gostinstvo',
    challenge: { si: 'Restavracija je potrebovala profesionalne fotografije jedi za spletno stran in socialna omrežja brez dragega fotografa.', en: 'A restaurant needed professional food photos for website and social media without an expensive photographer.' },
    solution: { si: 'Z AI tehnologijo smo ustvarili 50+ fotorealistčnih fotografij jedi z različnimi ozadji in stilizacijami za spletno in tiskano uporabo.', en: 'Using AI technology, we created 50+ photorealistic food photos with various backgrounds and styling for web and print use.' },
    results: [
      { label: 'Fotografij', value: '50+' },
      { label: 'Spletni obiski', value: '+320%' },
      { label: 'Dostava', value: '24h' },
      { label: 'Prihranek', value: '€2.500' },
    ],
    testimonial: {
      quote: { si: 'Fotografije so neverjetno realistične. Naši gostje pogosto komentirajo, kako profesionalno izgleda naša spletna stran.', en: 'The photos are incredibly realistic. Our guests often comment on how professional our website looks.' },
      author: 'Marko Petrovič',
      role: { si: 'Lastnik, Gostilna Pri Marku', en: 'Owner, Gostilna Pri Marku' },
    },
  },
  {
    id: 'ecommerce-elektronika',
    title: { si: 'Video Oglasi za Spletno Trgovino', en: 'Video Ads for E-commerce Store' },
    industry: { si: 'E-commerce', en: 'E-commerce' },
    serviceType: 'video',
    category: 'ecommerce',
    challenge: { si: 'Spletna trgovina z elektroniko je želela povečati konverzije z video oglasi na Facebooku in YouTubu.', en: 'An electronics e-commerce store wanted to increase conversions with video ads on Facebook and YouTube.' },
    solution: { si: 'Pripravili smo serijo 6 video oglasov s 3D animacijami produktov, primerjalnimi prizori in jasnimi CTA elementi.', en: 'We prepared a series of 6 video ads with 3D product animations, comparison scenes, and clear CTA elements.' },
    results: [
      { label: 'Konverzije', value: '+150%' },
      { label: 'ROAS', value: '4.2x' },
      { label: 'CPA', value: '-40%' },
      { label: 'Prodaja', value: '+€15k/mesec' },
    ],
    testimonial: {
      quote: { si: 'Rezultati so presenetljivi. Video oglasi so najboljša investicija, ki smo jo naredili letos.', en: 'The results are surprising. Video ads are the best investment we made this year.' },
      author: 'Tina Krajnc',
      role: { si: 'Direktorica, TechShop.si', en: 'Director, TechShop.si' },
    },
  },
  {
    id: 'moda-katalog',
    title: { si: 'AI Katalog za Modni Brand', en: 'AI Catalog for Fashion Brand' },
    industry: { si: 'Moda', en: 'Fashion' },
    serviceType: 'foto',
    category: 'moda',
    challenge: { si: 'Modni brand je potreboval 200+ produktnih fotografij za spletni katalog v rekordnem času.', en: 'A fashion brand needed 200+ product photos for online catalog in record time.' },
    solution: { si: 'Z AI generiranjem smo ustvarili celoten katalog z enotnim stilom, različnimi ozadji in lifestyle prizori.', en: 'Using AI generation, we created the entire catalog with consistent style, various backgrounds and lifestyle scenes.' },
    results: [
      { label: 'Fotografij', value: '200+' },
      { label: 'Čas', value: '5 dni' },
      { label: 'Prihranek', value: '€8.000' },
      { label: 'Konverzije', value: '+95%' },
    ],
    testimonial: {
      quote: { si: 'Neverjetno, kako hitro in kakovostno so pripravili celoten katalog. Priporočam vsem.', en: 'Incredible how fast and quality they prepared the entire catalog. I recommend them to everyone.' },
      author: 'Luka Horvat',
      role: { si: 'Ustanovitelj, UrbanWear', en: 'Founder, UrbanWear' },
    },
  },
  {
    id: 'gostinstvo-hotel',
    title: { si: 'Promocijski Video za Hotel', en: 'Promotional Video for Hotel' },
    industry: { si: 'Gostinstvo', en: 'Hospitality' },
    serviceType: 'video',
    category: 'gostinstvo',
    challenge: { si: 'Boutique hotel je želel privlačen promocijski video za svojo spletno stran in booking platforme.', en: 'A boutique hotel wanted an attractive promotional video for their website and booking platforms.' },
    solution: { si: 'Ustvarili smo eleganten 60-sekundni video s cinematic AI prizori, ki prikazuje ambient, sobe in okolico hotela.', en: 'We created an elegant 60-second video with cinematic AI scenes showcasing the ambiance, rooms and hotel surroundings.' },
    results: [
      { label: 'Rezervacije', value: '+85%' },
      { label: 'Ogled videa', value: '50k+' },
      { label: 'Bounce rate', value: '-35%' },
      { label: 'Dostava', value: '36h' },
    ],
    testimonial: {
      quote: { si: 'Video popolnoma zajame duh našega hotela. Gostje nam pogosto rečejo, da so nas odkrili prav zaradi videa.', en: 'The video perfectly captures the spirit of our hotel. Guests often tell us they discovered us because of the video.' },
      author: 'Maja Zupančič',
      role: { si: 'Direktorica, Hotel Alpine', en: 'Director, Hotel Alpine' },
    },
  },
  {
    id: 'ecommerce-kozmetika',
    title: { si: 'Fotografije za Kozmetično Linijo', en: 'Photos for Cosmetics Line' },
    industry: { si: 'E-commerce', en: 'E-commerce' },
    serviceType: 'foto',
    category: 'ecommerce',
    challenge: { si: 'Nova kozmetična znamka je potrebovala profesionalne produktne fotografije za lansiranje spletne trgovine.', en: 'A new cosmetics brand needed professional product photos for their online store launch.' },
    solution: { si: 'Pripravili smo kompletno fotografsko kampanjo z lifestyle, flat-lay in izoliranimi produktnimi fotografijami na belem ozadju.', en: 'We prepared a complete photo campaign with lifestyle, flat-lay and isolated product photos on white background.' },
    results: [
      { label: 'Fotografij', value: '80+' },
      { label: 'Prodaja', value: '+200%' },
      { label: 'Prihranek', value: '€3.000' },
      { label: 'Dostava', value: '48h' },
    ],
    testimonial: {
      quote: { si: 'Naše stranke mislijo, da imamo drago fotografsko ekipo. V resnici pa je vse AI!', en: 'Our customers think we have an expensive photography team. In reality, it\'s all AI!' },
      author: 'Sara Bogataj',
      role: { si: 'Soustanoviteljica, GlowBeauty', en: 'Co-founder, GlowBeauty' },
    },
  },
  {
    id: 'video-explainer',
    title: { si: 'Razlagalni Video za SaaS', en: 'Explainer Video for SaaS' },
    industry: { si: 'Tehnologija', en: 'Technology' },
    serviceType: 'video',
    category: 'ecommerce',
    challenge: { si: 'SaaS podjetje je potrebovalo razlagalni video za svojo novo platformo.', en: 'A SaaS company needed an explainer video for their new platform.' },
    solution: { si: 'Ustvarili smo 90-sekundni animirani razlagalni video s profesionalnim voiceoverjem v slovenščini in angleščini.', en: 'We created a 90-second animated explainer video with professional voiceover in Slovenian and English.' },
    results: [
      { label: 'Registracije', value: '+120%' },
      { label: 'Retention', value: '+45%' },
      { label: 'Demo zahtevki', value: '3x' },
      { label: 'Dostava', value: '48h' },
    ],
    testimonial: {
      quote: { si: 'Video je bistveno izboljšal razumevanje naše platforme pri potencialnih strankah.', en: 'The video significantly improved understanding of our platform among potential customers.' },
      author: 'Jan Kovač',
      role: { si: 'CEO, CloudPlatform.si', en: 'CEO, CloudPlatform.si' },
    },
  },
  {
    id: 'foto-nepremicnine',
    title: { si: 'AI Fotografije Nepremičnin', en: 'AI Real Estate Photos' },
    industry: { si: 'Nepremičnine', en: 'Real Estate' },
    serviceType: 'foto',
    category: 'ecommerce',
    challenge: { si: 'Nepremičninska agencija je želela izboljšati fotografije stanovanj za spletne oglase.', en: 'A real estate agency wanted to improve apartment photos for online listings.' },
    solution: { si: 'Z AI staging smo prazna stanovanja vizualno opremili z modernim pohištvom in dekoracijo.', en: 'Using AI staging, we virtually furnished empty apartments with modern furniture and decoration.' },
    results: [
      { label: 'Ogledi', value: '+160%' },
      { label: 'Čas prodaje', value: '-50%' },
      { label: 'Fotografij', value: '120+' },
      { label: 'Prihranek', value: '€5.000' },
    ],
    testimonial: {
      quote: { si: 'AI staging je revolucioniral naš način prodaje nepremičnin. Stranke se lažje zamislijo v prostoru.', en: 'AI staging revolutionized our way of selling real estate. Customers can more easily imagine themselves in the space.' },
      author: 'Peter Mlinar',
      role: { si: 'Direktor, PremiumDom', en: 'Director, PremiumDom' },
    },
  },
];

export const filterCategories = [
  { key: 'vse', label: { si: 'Vse', en: 'All' } },
  { key: 'video', label: { si: 'Video', en: 'Video' } },
  { key: 'foto', label: { si: 'Fotografija', en: 'Photography' } },
  { key: 'ecommerce', label: { si: 'E-commerce', en: 'E-commerce' } },
  { key: 'gostinstvo', label: { si: 'Gostinstvo', en: 'Hospitality' } },
  { key: 'moda', label: { si: 'Moda', en: 'Fashion' } },
];
