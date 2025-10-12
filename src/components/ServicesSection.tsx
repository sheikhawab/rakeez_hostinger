import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: '🌐',
      titleKey: 'webDevelopment',
      features: ['customWebsites', 'ecommerce', 'cms'],
      slug: 'web-development',
    },
    {
      icon: '⚙️',
      titleKey: 'softwareDevelopment',
      features: ['customSoftware', 'mobileApps', 'desktopApps'],
      slug: 'software-development',
    },
    {
      icon: '💰',
      titleKey: 'financialConsulting', // lowercase camelCase
      features: ['transformation', 'strategy', 'businessAnalysis'],
      slug: 'financial-consulting',
    },
    {
      icon: '💼',
      titleKey: 'digitalConsulting',
      features: ['digitalTransformation', 'techStrategy', 'businessAnalysis'],
      slug: 'digital-consulting',
    },
    {
      icon: '🛠️',
      titleKey: 'maintenanceSupport',
      features: ['support247', 'updates', 'optimization'],
      slug: 'maintenance-support',
    },
    {
      icon: '☁️',
      titleKey: 'cloudSolutions',
      features: ['cloudMigration', 'hosting', 'devops'],
      slug: 'cloud-solutions',
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white to-secondary-50/30 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div

          className="text-center mb-16 "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <motion.div
            className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <span className="text-primary-700 font-semibold text-sm">
              {t('services.title')}
            </span>
          </motion.div> */}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
            {t('services.subtitle')}
          </h2>

          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              icon={service.icon}
              title={t(`services.${service.titleKey}.title`)}
              description={t(`services.${service.titleKey}.description`)}
              features={service.features.map((f) =>
                t(`services.${service.titleKey}.${f}`)
              )}
              index={index}
              slug={service.slug}
            />
          ))}
        </div>

        {/* CTA Section */}
        {/* <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-secondary-600 mb-6">
            {t('services.ctaText')}
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta.contactUs')}
            <span>→</span>
          </motion.a>
        </motion.div> */}
      </div>
    </section>
  );
};
