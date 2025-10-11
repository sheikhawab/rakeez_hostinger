import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

export const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <span className="text-3xl">⚡</span>,
      titleKey: 'features.fastDelivery.title',
      descriptionKey: 'features.fastDelivery.description',
      className: 'md:col-span-2',
    },
    {
      icon: <span className="text-3xl">🛡️</span>,
      titleKey: 'features.support247.title',
      descriptionKey: 'features.support247.description',
    },
    {
      icon: <span className="text-3xl">💎</span>,
      titleKey: 'features.modernTech.title',
      descriptionKey: 'features.modernTech.description',
    },
    {
      icon: <span className="text-3xl">📈</span>,
      titleKey: 'features.scalable.title',
      descriptionKey: 'features.scalable.description',
      className: 'md:col-span-2',
    },
    {
      icon: <span className="text-3xl">💰</span>,
      titleKey: 'features.pricing.title',
      descriptionKey: 'features.pricing.description',
      className: 'md:col-span-2',
    },
    {
      icon: <span className="text-3xl">🔄</span>,
      titleKey: 'features.agile.title',
      descriptionKey: 'features.agile.description',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-secondary-50/30 to-white overflow-hidden"> 
    {/*  py-24 */}
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <BentoGridItem
              key={index}
              icon={feature.icon}
              title={t(feature.titleKey)}
              description={t(feature.descriptionKey)}
              className={feature.className}
              index={index}
            />
          ))}
        </BentoGrid>

        {/* Additional Features List
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-secondary-900 mb-8">
            {t('features.additionalTitle')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: '✅', textKey: 'features.additional.quality' },
              { emoji: '🔒', textKey: 'features.additional.security' },
              { emoji: '📊', textKey: 'features.additional.analytics' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-xl border border-secondary-200 hover:border-primary-400 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-semibold text-secondary-900">
                  {t(item.textKey)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
