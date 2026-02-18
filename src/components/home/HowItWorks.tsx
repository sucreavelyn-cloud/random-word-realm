import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send, Bot, Download } from 'lucide-react';

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Send,
      num: '01',
      title: { si: 'Pošljete Navodila', en: 'Send Instructions' },
      desc: {
        si: 'Povejte nam, kaj potrebujete — vrsto vsebine, stil in ključna sporočila.',
        en: 'Tell us what you need — content type, style and key messages.',
      },
    },
    {
      icon: Bot,
      num: '02',
      title: { si: 'Ustvarjamo z AI', en: 'We Create with AI' },
      desc: {
        si: 'Naša ekipa s pomočjo naprednih AI orodij ustvari vsebino v 24 urah.',
        en: 'Our team uses advanced AI tools to create content in 24 hours.',
      },
    },
    {
      icon: Download,
      num: '03',
      title: { si: 'Prejmete Vsebino', en: 'Receive Content' },
      desc: {
        si: 'Končne datoteke v visoki ločljivosti, pripravljene za takojšnjo uporabo.',
        en: 'Final files in high resolution, ready for immediate use.',
      },
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="text-[11px] uppercase tracking-[3px] text-primary font-semibold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('Proces', 'Process')}
          </motion.p>
          <motion.h2
            className="font-heading font-extrabold text-3xl md:text-[52px] leading-[1.05] tracking-tight text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {t('Tri Korake Do Rezultatov', 'Three Steps To Results')}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative glass-card rounded-2xl p-8 hover-lift"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Step number */}
              <span className="font-heading font-extrabold text-[80px] leading-none text-primary/10 absolute top-4 right-6 select-none">
                {step.num}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3 tracking-tight">
                  {t(step.title.si, step.title.en)}
                </h3>
                <p className="text-hero-muted text-sm leading-relaxed">
                  {t(step.desc.si, step.desc.en)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
