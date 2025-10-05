import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({ className, fill = '#F59E0B' }: SpotlightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className={cn('pointer-events-none absolute', className)}
    >
      <svg
        className="absolute inset-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="spotlight-gradient">
            <stop offset="0%" stopColor={fill} stopOpacity="0.6" />
            <stop offset="50%" stopColor={fill} stopOpacity="0.3" />
            <stop offset="100%" stopColor={fill} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="500" cy="500" r="500" fill="url(#spotlight-gradient)" />
      </svg>
    </motion.div>
  );
};
