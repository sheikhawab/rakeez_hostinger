import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { cn } from '../../lib/utils';

interface HoverBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export const HoverBorder = ({
  children,
  className,
  containerClassName,
}: HoverBorderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      200px circle at ${mouseX}px ${mouseY}px,
      rgba(245, 158, 11, 0.15),
      transparent 80%
    )
  `;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn('group relative', containerClassName)}
    >
      <motion.div
        style={{ background }}
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
      />
      <div className={cn('relative', className)}>{children}</div>
    </div>
  );
};
