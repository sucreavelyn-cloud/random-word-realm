import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Video, Camera, Share2, BarChart3, User, Layers } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const ServicesOverview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Video,
      title: t('AI video oglasi', 'AI Video Ads'),
      description: t(
        'Video oglasi, ki pritegnejo pozornost in prepričajo. Ustvarjeni z AI, optimizirani za vse platforme.',
        'Scroll-stopping AI-generated video ads optimized for conversions across all platforms.'
      ),
      color: 'text-primary',
      glow: 'group-hover:shadow-glow-primary',
      href: '/ai-video-ads',
    },
    {
      icon: Camera,
      title: t('AI produktna fotografija', 'AI Product Photography'),
      description: t(
        'Profesionalne produktne fotografije brez dragih snemanj. Studijska kakovost v nekaj minutah.',
        'Professional product photos without expensive shoots. Studio quality in minutes.'
      ),
      color: 'text-secondary',
      glow: 'group-hover:shadow-glow-secondary',
      href: '/ai-product-photography',
    },
    {
      icon: Share2,
      title: t('Družbena omrežja', 'Social Media Content'),
      description: t(
        'Dosledna in prepoznavna vsebina za vaše kanale, ki izstopa in pritegne občinstvo.',
        'Consistent, on-brand content for your social channels that captures attention.'
      ),
      color: 'text-accent',
      glow: 'group-hover:shadow-glow-accent',
      href: '/social-media-content',
    },
    {
      icon: BarChart3,
      title: t('Digitalni marketing', 'Digital Marketing'),
      description: t(
        'Marketinške kampanje, podprte z AI, za najboljši donos na vseh oglaševalskih platformah.',
        'AI-powered digital marketing campaigns for maximum ROI across all platforms.'
      ),
      color: 'text-primary',
      glow: 'group-hover:shadow-glow-primary',
      href: '/digital-marketing',
    },
    {
      icon: User,
      title: t('AI avatarji', 'AI Avatar Creation'),
      description: t(
        'Vaš lastni digitalni predstavnik blagovne znamke. Brez omejitev, vedno dosleden.',
        'Your custom digital spokesperson for your brand. Infinitely scalable, infinitely consistent.'
      ),
      color: 'text-secondary',
      glow: 'group-hover:shadow-glow-secondary',
      href: '/ai-avatar-creation',
    },
    {
      icon: Layers,
      title: t('AI kreativni paket', 'AI Creative Engine'),
      description: t(
        'Vse v enem: avatar, vsebina in oglasi. Enoten glas vaše znamke, neomejene možnosti.',
        'Complete bundle: Avatar + Content + Ads. One consistent voice, unlimited scale.'
      ),
      color: 'text-accent',
      glow: 'group-hover:shadow-glow-accent',
      href: '/ai-creative-engine',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="absolute inset-0 grain-overlay pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-sm uppercase tracking-[2px] text-accent font-semibold mb-4 block"
            initial={{ opacity: 0, letterSpacing: '0px' }}
            whileInView={{ opacity: 1, letterSpacing: '2px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('Naše storitve', 'Our Services')}
          </motion.span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
            {t('Vse na enem mestu', 'Everything You Need')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
            >
              <Link
                to={service.href}
                className={`group relative flex flex-col h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 ${service.glow}`}
              >
                <service.icon className={`w-10 h-10 ${service.color} mb-5`} />
                <h3 className="font-heading font-bold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                <motion.span
                  className="inline-block mt-4 text-sm font-semibold text-primary"
                  whileHover={{ x: 5 }}
                >
                  {t('Več o tem →', 'Learn more →')}
                </motion.span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
