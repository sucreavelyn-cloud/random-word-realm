import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    q: { si: 'Koliko stane projekt AI vsebine?', en: 'How much does an AI content project cost?' },
    a: { si: 'Cene se začnejo pri €99 za AI produktno fotografijo in €149 za AI video oglase. Kontaktirajte nas za brezplačno ponudbo.', en: 'Prices start at €99 for AI product photography and €149 for AI video ads. Contact us for a free quote.' },
  },
  {
    q: { si: 'Kako dolgo traja dostava?', en: 'How long does delivery take?' },
    a: { si: 'Standardna dostava je 24 ur. Za kompleksnejše projekte se rok podaljša na 3-5 dni.', en: 'Standard delivery is 24 hours. For more complex projects, the deadline extends to 3-5 days.' },
  },
  {
    q: { si: 'Ali lahko vidim primere vašega dela?', en: 'Can I see examples of your work?' },
    a: { si: 'Seveda! Oglejte si naš portfolio za projekte iz različnih industrij.', en: 'Of course! Check our portfolio for projects across various industries.' },
  },
  {
    q: { si: 'Kaj potrebujem za začetek?', en: 'What do I need to start?' },
    a: { si: 'Za video oglase potrebujemo opis produkta in ciljno občinstvo. Za fotografijo zadostujejo osnovne slike ali opisi.', en: 'For video ads we need a product description and target audience. For photography, basic images or descriptions are enough.' },
  },
  {
    q: { si: 'Ali ponujate revizije?', en: 'Do you offer revisions?' },
    a: { si: 'Da — do 2 brezplačni reviziji sta vključeni. Dodatne revizije so na voljo po ugodni ceni.', en: 'Yes — up to 2 free revisions are included. Additional revisions available at a fair price.' },
  },
  {
    q: { si: 'V katerih formatih dobim vsebino?', en: 'In which formats do I receive content?' },
    a: { si: 'Video v MP4, MOV ali WebM. Fotografije v PNG, JPG ali RAW — vse v visoki ločljivosti.', en: 'Video in MP4, MOV or WebM. Photos in PNG, JPG or RAW — all in high resolution.' },
  },
];

const HomeFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[800px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            className="text-[11px] uppercase tracking-[3px] text-primary font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </motion.p>
          <motion.h2
            className="font-heading font-extrabold text-3xl md:text-[52px] leading-[1.05] tracking-tight text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {t('Pogosta Vprašanja', 'Frequently Asked Questions')}
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              className="border-b border-border"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <span className="font-heading font-semibold text-lg text-foreground pr-8 group-hover:text-primary transition-colors duration-300">
                  {t(item.q.si, item.q.en)}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
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
                    <p className="pb-6 text-muted-foreground leading-relaxed pr-12">
                      {t(item.a.si, item.a.en)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
