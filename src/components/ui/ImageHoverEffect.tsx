import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ImageHoverEffectProps {
  children: ReactNode;
  className?: string;
}

export const ImageHoverEffect = ({ children, className }: ImageHoverEffectProps) => {
  return (
    <motion.div
      className={cn('relative overflow-hidden rounded-2xl', className)}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/50 to-transparent"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
