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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-secondary-50 to-primary-50/30 w-full pt-16">
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
  className="text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-900 mb-6 leading-tight"
  variants={itemVariants}
>
  {isRTL ? (
    // 🇸🇦 Arabic Version
    <>
      <TextHighlight className="text-primary-500">شركة ركـيـز</TextHighlight>{' '}
      لتصميم وتطوير{' '}
      <TextHighlight className="text-primary-500">المواقع</TextHighlight>{' '}
      والتطبيقات في{' '}
      <TextHighlight className="text-primary-500">السعودية</TextHighlight>
    </>
  ) : (
    // 🇬🇧 English Version
        <>
      Fueling Your <TextHighlight className="text-primary-500">Business Growth</TextHighlight>
      <br className="hidden md:block" />
      Through Cutting-Edge <TextHighlight className="text-primary-500">Web & App </TextHighlight> Solutions.
    </>
  )}
</motion.h1>


          {/* <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-secondary-900 mb-6"
            variants={itemVariants}
          >
            {t('hero.title').split(' ').slice(0, 1).join(' ')}{' '}
            <TextHighlight className="text-primary-500">
              {isRTL ? 'رقمية' : 'Digital'}
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
          </motion.h1> */}

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.a
              href="#contact"
              className="group relative px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold text-base overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
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
          </motion.div>

          {/* Dashboard Preview Section */}
          <motion.div
            className="mt-16 md:mt-20 relative w-full"
            variants={itemVariants}
          >
            {/* Main Image Container - Full Width */}
            <div className="relative w-full group">
              <motion.div
                className="relative rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <img
                  src="/hero-dashboard.webp"
                  alt="Dashboard Preview"
                  loading='lazy'
                  className="w-full h-auto object-cover"
                   
                />

                {/* Bottom Fade Overlay Effect - Darker */}
                <div
                  className="absolute inset-0 pointer-events-none z-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(to bottom,
                        transparent 0%,
                        transparent 40%,
                        rgba(0,0,0,0.5) 70%,
                        rgba(0,0,0,0.8) 85%,
                        rgba(0,0,0,0.95) 100%
                      )
                    `
                  }}
                />
              </motion.div>

              {/* Floating Stat Card - Bottom Left Corner */}
              <motion.div
                className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 bg-gradient-to-br from-primary-50 to-primary-100 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 rounded-lg shadow-lg border border-primary-200 z-20"
                initial={{ opacity: 0, x: -20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-xs md:text-sm text-secondary-600 font-medium leading-tight">Completed<br/>Projects</div>
                </div>
              </motion.div>

              {/* Floating Stat Card - Top Right Corner */}
              <motion.div
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-gradient-to-br from-secondary-800 to-secondary-900 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 rounded-lg shadow-lg border border-secondary-700 z-20"
                initial={{ opacity: 0, x: 20, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl md:text-3xl font-bold text-primary-400">98%</div>
                  <div className="text-xs md:text-sm text-secondary-300 font-medium leading-tight">Client<br/>Satisfaction</div>
                </div>
              </motion.div>

              {/* Additional Stat Card - Bottom Right Corner */}
              <motion.div
                className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-gradient-to-br from-primary-500 to-primary-600 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4 rounded-lg shadow-lg border border-primary-400 z-20 hidden sm:block"
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl md:text-3xl font-bold text-white">15+</div>
                  <div className="text-xs md:text-sm text-white/90 font-medium leading-tight">Years<br/>Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};