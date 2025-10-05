import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface InfiniteMovingCardsProps {
  items: ReactNode[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const [duplicatedItems, setDuplicatedItems] = useState<ReactNode[]>([]);

  useEffect(() => {
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  const getDuration = () => {
    switch (speed) {
      case 'fast':
        return '20s';
      case 'slow':
        return '60s';
      default:
        return '40s';
    }
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="flex gap-6"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: parseFloat(getDuration()),
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          width: 'fit-content',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
