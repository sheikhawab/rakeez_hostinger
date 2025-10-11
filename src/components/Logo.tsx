import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

export const Logo = ({ className = '', animate = false }: LogoProps) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: 'easeInOut' as any },
        opacity: { duration: 0.5 },
      },
    },
  };

  const Path = motion.path;

  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Geometric building shape - modern architecture */}
      <Path
        d="M100 20 L160 50 L160 150 L140 160 L140 80 L100 60 L60 80 L60 160 L40 150 L40 50 Z"
        stroke="url(#gradient)"
        strokeWidth="4"
        fill="url(#fillGradient)"
        variants={animate ? pathVariants : undefined}
        initial={animate ? 'hidden' : undefined}
        animate={animate ? 'visible' : undefined}
      />

      {/* Inner architectural detail */}
      <Path
        d="M100 60 L100 140 M80 90 L120 90 M80 110 L120 110 M80 130 L120 130"
        stroke="url(#gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        variants={animate ? pathVariants : undefined}
        initial={animate ? 'hidden' : undefined}
        animate={animate ? 'visible' : undefined}
      />

      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="fillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
};
