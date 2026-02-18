import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    q: { si: 'Koliko stane projekt AI vsebine?', en: 'How much does an AI content project cost?' },
    a: { si: 'Cene se začnejo pri €149 za AI produktno fotografijo in €299 za AI video oglase. Točna cena je odvisna od obsega projekta, števila različic in specifičnih zahtev. Kontaktirajte nas za brezplačno ponudbo.', en: 'Prices start at €149 for AI product photography and €299 for AI video ads. The exact price depends on project scope, number of variants and specific requirements. Contact us for a free quote.' },
  },
  {
    q: { si: 'Kako dolgo traja dostava?', en: 'How long does delivery take?' },
    a: { si: 'Standardna dostava je 24 ur od potrditve projekta. Za kompleksnejše projekte ali večje količine vsebine se rok lahko podaljša na 3-5 dni. Vedno vas obvestimo o točnem roku pred začetkom dela.', en: 'Standard delivery is 24 hours from project confirmation. For more complex projects or larger volumes, the deadline may extend to 3-5 days. We always inform you of the exact timeline before starting.' },
  },
  {
    q: { si: 'Ali lahko vidim primere vašega dela?', en: 'Can I see examples of your work?' },
    a: { si: 'Seveda! Naša portfolijo stran prikazuje različne projekte iz različnih industrij. Prav tako lahko zahtevate primere iz specifične industrije, ki vas zanima. Kontaktirajte nas za dostop do polnega portfolija.', en: 'Of course! Our portfolio page showcases various projects from different industries. You can also request examples from your specific industry. Contact us for full portfolio access.' },
  },
  {
    q: { si: 'Kaj potrebujem, da začnem projekt?', en: 'What do I need to start a project?' },
    a: { si: 'Za video oglase potrebujemo osnovni opis vašega produkta/storitve, ciljno občinstvo in želene rezultate. Za fotografijo zadostujejo osnovne produktne fotografije ali opisi. Vse ostalo uredimo mi!', en: 'For video ads we need a basic description of your product/service, target audience and desired results. For photography, basic product photos or descriptions are enough. We handle everything else!' },
  },
  {
    q: { si: 'Ali ponujate revizije?', en: 'Do you offer revisions?' },
    a: { si: 'Da! V ceno projekta je vključenih do 2 brezplačnih revizij. Tako zagotovimo, da je končni rezultat popolnoma v skladu z vašimi pričakovanji. Dodatne revizije so na voljo po ugodni ceni.', en: 'Yes! Up to 2 free revisions are included in the project price. This ensures the final result perfectly matches your expectations. Additional revisions are available at a fair price.' },
  },
  {
    q: { si: 'V katerih formatih dobim vsebino?', en: 'In which formats do I receive content?' },
    a: { si: 'Video vsebino dostavimo v MP4, MOV ali kateremkoli drugem formatu, ki ga potrebujete. Fotografije v PNG, JPG ali RAW. Vse v visoki ločljivosti, pripravljeno za uporabo na katerikoli platformi.', en: 'We deliver video content in MP4, MOV or any other format you need. Photos in PNG, JPG or RAW. All in high resolution, ready for use on any platform.' },
  },
  {
    q: { si: 'Ali delate tudi z mednarodnimi strankami?', en: 'Do you work with international clients?' },
    a: { si: 'Da! Čeprav smo slovensko podjetje, delamo s strankami po vsej Evropi. Komunikacija poteka v slovenščini ali angleščini, proces pa je popolnoma digitalen in enostaven.', en: 'Yes! Although we\'re a Slovenian company, we work with clients across Europe. Communication is in Slovenian or English, and the process is fully digital and simple.' },
  },
  {
    q: { si: 'Kaj če nisem zadovoljen z rezultatom?', en: 'What if I\'m not satisfied with the result?' },
    a: { si: 'Vaše zadovoljstvo je naša prioriteta. Če rezultat ne ustreza vašim pričakovanjem, bomo projekt popravili do vaše popolne zadovoljnosti ali vam vrnili denar. Brez skritih stroškov.', en: 'Your satisfaction is our priority. If the result doesn\'t meet your expectations, we\'ll revise the project until you\'re fully satisfied or refund your money. No hidden costs.' },
  },
];

const HomeFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-[120px] bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[900px] relative z-10">
        {/* Header */}
        <motion.h2
          className="font-heading font-bold text-3xl md:text-[48px] md:leading-tight text-primary-foreground text-center mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {t('POGOSTA VPRAŠANJA', 'FREQUENTLY ASKED QUESTIONS')}
        </motion.h2>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === i ? 'border-primary/50' : 'border-badge-border'} bg-badge-bg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 px-8 text-left hover:bg-badge-bg/80 transition-colors cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-lg text-primary-foreground pr-6">
                  {t(item.q.si, item.q.en)}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-8 pb-6 text-hero-muted text-base leading-[1.7]">
                      {t(item.a.si, item.a.en)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still questions CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-hero-muted mb-6">
            {t('Imate še vedno vprašanja? Tu smo, da vam pomagamo.', 'Still have questions? We\'re here to help.')}
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold rounded-xl bg-primary text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            {t('_REZERVIRAJ KLIC', '_BOOK A CALL')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQ;
