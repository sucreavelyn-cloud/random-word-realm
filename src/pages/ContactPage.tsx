import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Obvezno polje').max(100),
  email: z.string().trim().email('Neveljaven e-mail').max(255),
  phone: z.string().trim().max(30).optional(),
  service: z.string().min(1, 'Izberite storitev'),
  description: z.string().trim().min(1, 'Obvezno polje').max(2000),
  contactMethod: z.string().min(1, 'Izberite način'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const faqItems = [
  { q: { si: 'Koliko stane projekt?', en: 'How much does a project cost?' }, a: { si: 'Cene se začnejo od €149 za osnovni paket. Za natančno ponudbo nas kontaktirajte za brezplačno posvetovanje.', en: 'Prices start from €149 for a basic package. For an exact quote, contact us for a free consultation.' } },
  { q: { si: 'Kako dolgo traja dostava?', en: 'How long does delivery take?' }, a: { si: 'Večina projektov je končanih v 24 urah. Kompleksnejši projekti lahko trajajo do 5 delovnih dni.', en: 'Most projects are completed in 24 hours. More complex projects can take up to 5 business days.' } },
  { q: { si: 'Ali lahko vidim primere vaših del?', en: 'Can I see examples of your work?' }, a: { si: 'Seveda! Oglejte si naš portfolio z več kot 50 uspešno zaključenimi projekti.', en: 'Of course! Check out our portfolio with over 50 successfully completed projects.' } },
  { q: { si: 'Kakšen je postopek naročanja?', en: 'What is the ordering process?' }, a: { si: '1. Brezplačno posvetovanje → 2. Kreativni brief → 3. AI produkcija → 4. Revizije → 5. Dostava. Preprosto!', en: '1. Free consultation → 2. Creative brief → 3. AI production → 4. Revisions → 5. Delivery. Simple!' } },
];

const ContactPage = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', service: '', description: '', contactMethod: '' },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', { ...data, email: '[redacted]' });
    setSubmitted(true);
  };

  return (
    <main className="bg-background">
      <Header />

      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            {t('Začnimo Sodelovanje', 'Let\'s Start Working Together')}
          </motion.h1>
          <motion.p className="text-lg text-hero-muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6, ease }}>
            {t('Pošljite nam povpraševanje in odgovorimo v 2 urah.', 'Send us an inquiry and we\'ll respond within 2 hours.')}
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              {submitted ? (
                <div className="p-12 rounded-2xl bg-card border border-border text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    {t('Hvala za sporočilo!', 'Thank you for your message!')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('Odgovorimo v 2 urah.', 'We\'ll respond within 2 hours.')}
                  </p>
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-card border border-border">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('Ime in priimek', 'Full name')}</FormLabel>
                          <FormControl><Input placeholder={t('Vaše ime', 'Your name')} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid md:grid-cols-2 gap-5">
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl><Input type="email" placeholder="email@primer.si" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('Telefon', 'Phone')}</FormLabel>
                            <FormControl><Input type="tel" placeholder="+386 ..." {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="service" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('Storitev', 'Service')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder={t('Izberite storitev', 'Select service')} /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="video">{t('AI Video Oglasi', 'AI Video Ads')}</SelectItem>
                              <SelectItem value="foto">{t('AI Produktna Fotografija', 'AI Product Photography')}</SelectItem>
                              <SelectItem value="oba">{t('Oboje', 'Both')}</SelectItem>
                              <SelectItem value="drugo">{t('Drugo', 'Other')}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="description" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('Opis projekta', 'Project description')}</FormLabel>
                          <FormControl><Textarea placeholder={t('Opišite vaš projekt...', 'Describe your project...')} rows={4} {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="contactMethod" render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('Želeni način kontakta', 'Preferred contact method')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder={t('Izberite', 'Select')} /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="email">E-mail</SelectItem>
                              <SelectItem value="phone">{t('Telefon', 'Phone')}</SelectItem>
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold rounded-xl">
                        {t('Pošlji Povpraševanje →', 'Send Inquiry →')}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              <div className="p-6 rounded-2xl bg-card border border-border space-y-5">
                <h3 className="font-heading font-bold text-lg text-foreground">{t('Kontaktni Podatki', 'Contact Info')}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📧</span>
                    <div>
                      <div className="text-muted-foreground">E-mail</div>
                      <div className="text-foreground font-medium">info@aioglasi.si</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📱</span>
                    <div>
                      <div className="text-muted-foreground">{t('Telefon', 'Phone')}</div>
                      <div className="text-foreground font-medium">+386 1 234 5678</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-lg">📍</span>
                    <div>
                      <div className="text-muted-foreground">{t('Lokacija', 'Location')}</div>
                      <div className="text-foreground font-medium">Ljubljana, Slovenija</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg">⏱️</span>
                  <h4 className="font-heading font-bold text-foreground">{t('Hiter odziv', 'Quick Response')}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('Odgovorimo v 2 urah med delovnim časom. Za nujne projekte nas pokličite.', 'We respond within 2 hours during business hours. For urgent projects, give us a call.')}
                </p>
              </div>

              <a
                href={`https://wa.me/38612345678?text=${encodeURIComponent('Pozdravljeni, zanima me AI vsebina.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[hsl(142_70%_45%)] text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                💬 WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="font-heading font-bold text-2xl text-foreground text-center mb-8">
            {t('Pogosta Vprašanja', 'Frequently Asked Questions')}
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-5">
                <AccordionTrigger className="text-foreground font-medium text-left">
                  {t(item.q.si, item.q.en)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(item.a.si, item.a.en)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
