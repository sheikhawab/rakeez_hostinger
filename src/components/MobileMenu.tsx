import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const menuVariants = {
    closed: {
      x: isRTL ? '-100%' : '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const itemVariants = {
    closed: { x: isRTL ? -50 : 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-80 bg-white shadow-2xl z-50 p-8`}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col gap-6 mt-20">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-2xl font-medium text-secondary-900 hover:text-primary-500 transition-colors"
                  custom={index}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  onClick={onClose}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
