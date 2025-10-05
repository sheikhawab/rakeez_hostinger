import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn('grid md:grid-cols-3 gap-6', className)}>
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  index: number;
}

export const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  index,
}: BentoGridItemProps) => {
  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-secondary-200 bg-white p-8 hover:border-primary-400 transition-all duration-300 hover:shadow-2xl',
        className
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </motion.div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="relative text-secondary-600 leading-relaxed">
        {description}
      </p>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-primary-500 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
