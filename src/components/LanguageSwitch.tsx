import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-100 hover:bg-secondary-200 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <motion.div
        className="flex items-center gap-2"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-sm font-medium text-secondary-700">
          {currentLang === 'en' ? 'EN' : 'عربي'}
        </span>
        <motion.div
          className="w-10 h-6 bg-primary-400 rounded-full p-1 flex items-center"
          animate={{
            justifyContent: currentLang === 'ar' ? 'flex-start' : 'flex-end',
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <motion.div
            className={cn(
              'w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center text-xs'
            )}
            layout
          >
            {currentLang === 'en' ? '🇬🇧' : '🇸🇦'}
          </motion.div>
        </motion.div>
      </motion.div>
    </button>
  );
};
