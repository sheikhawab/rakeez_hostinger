import { motion } from 'framer-motion';

interface ProjectPlaceholderProps {
  pattern?: 'gradient' | 'geometric' | 'minimal';
}

export const ProjectPlaceholder = ({ pattern = 'gradient' }: ProjectPlaceholderProps) => {
  if (pattern === 'gradient') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-primary-400/20 via-primary-500/10 to-secondary-100/20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-primary-400/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white/50 to-transparent" />
      </div>
    );
  }

  if (pattern === 'geometric') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-secondary-50 to-secondary-100 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-500" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-secondary-50 via-white to-secondary-100/50 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 border-2 border-primary-400/30 rounded-2xl transform rotate-12" />
        <div className="absolute w-20 h-20 border-2 border-primary-500/20 rounded-2xl transform -rotate-12" />
      </div>
    </div>
  );
};
