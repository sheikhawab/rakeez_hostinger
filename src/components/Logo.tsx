import { motion } from 'framer-motion';

// ✅ Use WebP (convert logo.transparent.png → logo.webp in /public)
export const Logo = ({
  className = '',
  width = 128,
  height = 112, // proportional to original 535x466 aspect ratio
  animate = true,
}: {
  className?: string;
  width?: number;
  height?: number;
  animate?: boolean;
}) => {
  const MotionImage = animate ? motion.img : 'img';

  return (
    <MotionImage
      src="/logo.transparent.webp"
      alt="Rakeez Solutions Logo"
      className={`w-[${width}px] h-auto ${className}`}
      width={width}
      height={height}
      loading="eager" // 👈 eager for logo (above-the-fold)
      decoding="async"
      whileHover={animate ? { scale: 1.05 } : undefined}
      transition={{ type: 'spring', stiffness: 250 }}
    />
  );
};

// import { motion } from 'framer-motion';
// import logo from "/logo.transparent.png"
// interface LogoProps {
//   className?: string;
//   animate?: boolean;
//   width?: number;
//   height?: number;
// }

// export const Logo = ({ className = '',  width = 36, height = 36 }: LogoProps) => {
//   return (
//     <motion.img
//       src= {logo}   // Public folder se logo image
//       alt="Rakeez Solutions Logo"
//       className={className}
//       width={width}  // Default width
//       height={height}  // Default height
//       whileHover={{ scale: 1.1 }}  // Animation effect on hover
//     />
//   );
// };


