import { motion } from 'framer-motion';

export const FloatingElements = () => {
  const elements = Array.from({ length: 5 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        >
          <div
            className="w-16 h-16 border border-primary-300/30"
            style={{
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
