import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface TextHighlightProps {
  children: ReactNode;
  className?: string;
  highlightColor?: string;
}

export const TextHighlight = ({
  children,
  className,
  highlightColor = 'bg-primary-400/20',
}: TextHighlightProps) => {
  return (
    <motion.span
      className={cn('relative inline-block', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        className={cn('absolute inset-0 -skew-x-12', highlightColor)}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <span className="relative">{children}</span>
    </motion.span>
  );
};
