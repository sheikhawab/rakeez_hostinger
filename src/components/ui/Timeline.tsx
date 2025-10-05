import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';

interface TimelineItem {
  year: string;
  titleKey: string;
  descriptionKey: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div className="relative">
      {/* Center Line */}
      <div className={cn(
        'absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600',
        isRTL ? 'right-6 md:right-1/2' : 'left-6 md:left-1/2'
      )} />

      {items.map((item, index) => (
        <motion.div
          key={index}
          className={cn(
            'relative mb-12 md:mb-16',
            index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
          )}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className={cn(
            'flex gap-6 md:gap-8 items-center',
            isRTL ? 'flex-row-reverse' : '',
            index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'md:text-left'
          )}>
            {/* Year Badge */}
            <motion.div
              className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg relative z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-white font-bold text-lg">{item.year}</span>
            </motion.div>

            {/* Content */}
            <div className={cn(
              'flex-1 bg-white border border-secondary-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow',
              index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
            )}>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-secondary-600">
                {t(item.descriptionKey)}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
