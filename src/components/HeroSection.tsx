import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Spotlight } from './ui/Spotlight';
import { TextHighlight } from './ui/TextHighlight';
import { FloatingElements } from './ui/FloatingElements';

export const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      // transition: { duration: 0.6, ease: 'easeOut' },
      transition: { duration: 0.6, ease: 'easeOut' as any }
      // yahan any is liye kiya k string or object ka jo tareeka hai wo library se handle ho rhahia 

    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-primary-50/30 w-full">
      {/* Spotlight Effect */}
      <Spotlight className="top-0 left-1/4 w-[800px] h-[800px]" />
      <Spotlight className="top-1/2 right-1/4 w-[600px] h-[600px]" fill="#D97706" />

      {/* Floating Geometric Elements */}
      <FloatingElements />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] w-full" />

      {/* Content */}
      <div className="w-full relative z-10 px-4 py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-900 mb-6"
            variants={itemVariants}
          >
            {t('hero.title').split(' ').slice(0, 1).join(' ')}{' '}
            <TextHighlight className="text-primary-500">
              {isRTL ? 'الرقمي' : 'Digital'}
            </TextHighlight>{' '}
            <br className="hidden md:block" />
            {isRTL ? (
              <>
                <TextHighlight className="text-primary-500">الحلول</TextHighlight> التي{' '}
                <TextHighlight className="text-primary-500">تحول</TextHighlight> عملك
              </>
            ) : (
              <>
                <TextHighlight className="text-primary-500">Solutions</TextHighlight> That{' '}
                <TextHighlight className="text-primary-500">Transform</TextHighlight> Your Business
              </>
            )}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-2 justify-center">
                {t('hero.cta.primary')}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {isRTL ? '←' : '→'}
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#portfolio"
              className="group px-8 py-4 border-2 border-secondary-300 text-secondary-700 rounded-full font-semibold text-lg hover:border-primary-500 hover:text-primary-500 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2 justify-center">
                {t('hero.cta.secondary')}
                <motion.span
                  className="inline-block"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  ✦
                </motion.span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};