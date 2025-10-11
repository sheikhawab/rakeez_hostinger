import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { Timeline } from './ui/Timeline';
import { StatsCounter } from './ui/StatsCounter';

export const AboutSection = () => {
  const { t } = useTranslation();

  const timelineItems = [
    {
      year: '2020',
      titleKey: 'about.timeline.2020.title',
      descriptionKey: 'about.timeline.2020.description',
    },
    {
      year: '2021',
      titleKey: 'about.timeline.2021.title',
      descriptionKey: 'about.timeline.2021.description',
    },
    {
      year: '2023',
      titleKey: 'about.timeline.2023.title',
      descriptionKey: 'about.timeline.2023.description',
    },
    {
      year: '2025',
      titleKey: 'about.timeline.2025.title',
      descriptionKey: 'about.timeline.2025.description',
    },
  ];

  const stats = [
    { value: 150, suffix: '+', label: t('about.stats.projects') },
    { value: 80, suffix: '+', label: t('about.stats.clients') },
    { value: 5, suffix: '+', label: t('about.stats.years') },
    { value: 98, suffix: '%', label: t('about.stats.satisfaction') },
  ];

  const expertise = [
    'React & Next.js',
    'Node.js & Python',
    'Cloud & DevOps',
    'Mobile Development',
    'UI/UX Design',
    'Agile & Scrum',
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TextGenerateEffect
            words={t('about.title')}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6"
          />
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <StatsCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            className="p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              {t('about.mission')}
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              {t('about.missionText')}
            </p>
          </motion.div>

          <motion.div
            className="p-8 bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-secondary-700 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              {t('about.vision')}
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              {t('about.visionText')}
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-secondary-900 mb-16">
            {t('about.journeyTitle')}
          </h3>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
};
