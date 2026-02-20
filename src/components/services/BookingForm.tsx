import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(1).max(1000),
});

const BookingForm = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputClass =
    'w-full h-12 px-4 rounded-xl bg-badge-bg border border-badge-border text-primary-foreground placeholder:text-hero-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all';

  return (
    <section id="booking" className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 grain-overlay animate-grain pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.h2
          className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('Rezervirajte posvet', 'Book a Consultation')}
        </motion.h2>
        <motion.p
          className="text-hero-muted text-center mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('Brezplačen 30-minutni pogovor o vašem projektu.', 'Free 30-minute consultation about your project.')}
        </motion.p>

        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {submitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <span className="text-5xl mb-4 block">✅</span>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2">
                {t('Hvala!', 'Thank you!')}
              </h3>
              <p className="text-hero-muted">
                {t('Javili se vam bomo v 24 urah.', 'We will contact you within 24 hours.')}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t('Vaše ime *', 'Your name *')}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t('E-naslov *', 'Email *')}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t('Podjetje (neobvezno)', 'Company (optional)')}
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <textarea
                  placeholder={t('Opišite vaš projekt *', 'Describe your project *')}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className={`${inputClass} h-auto py-3 resize-none`}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <motion.button
                type="submit"
                className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-glow-primary"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {t('Pošljite povpraševanje →', 'Send Inquiry →')}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingForm;
