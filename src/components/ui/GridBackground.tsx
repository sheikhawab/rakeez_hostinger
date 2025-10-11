import type { ReactNode } from "react";
import { cn } from '../../lib/utils';

interface GridBackgroundProps {
  children: ReactNode;
  className?: string;
}

export const GridBackground = ({ children, className }: GridBackgroundProps) => {
  return (
    <div className={cn('relative w-full', className)}>
      <div className="absolute inset-0 bg-white bg-grid-pattern opacity-[0.02]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
