import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export const StatsCounter = ({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
}: StatsCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, count, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
      <div className="text-secondary-600 font-medium">{label}</div>
    </motion.div>
  );
};
