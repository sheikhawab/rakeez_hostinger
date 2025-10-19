import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSwitch } from './LanguageSwitch';
import { MobileMenu } from './MobileMenu';
import { cn } from '../lib/utils';
import { Logo } from './Logo';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isRTL = i18n.language === 'ar';

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-secondary-100'
            : 'bg-white/50 backdrop-blur-sm'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="relative flex items-center justify-between">
            {/* Logo with fixed size */}
            <Link to="/">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Logo className="absolute w-32 h-32" width={128} height={128} />
                <div className="flex flex-col ml-36">
                  <span className="text-lg font-bold text-secondary-900 leading-tight">
                    {t('hero.title')}
                  </span>
                  <span className="text-xs text-primary-500 font-medium">
                    {isRTL ? 'حلول رقمية' : 'Digital Solutions'}
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}  // Use handleScroll function here
                  className="text-sm font-medium text-secondary-700 hover:text-primary-500 transition-colors relative group py-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <div className="w-px h-6 bg-secondary-200" />
              <LanguageSwitch />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <LanguageSwitch />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-secondary-900 p-2 hover:bg-secondary-100 rounded-lg transition-colors"
                aria-label={t('common.menu')}
              >
                <motion.div
                  animate={isMobileMenuOpen ? 'open' : 'closed'}
                  className="flex flex-col gap-1.5 w-6"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 8 },
                    }}
                    className="w-full h-0.5 bg-secondary-900 rounded-full transition-all"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 },
                    }}
                    className="w-full h-0.5 bg-secondary-900 rounded-full transition-all"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -8 },
                    }}
                    className="w-full h-0.5 bg-secondary-900 rounded-full transition-all"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />
    </>
  );
};


// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
// import { LanguageSwitch } from './LanguageSwitch';
// import { MobileMenu } from './MobileMenu';
// import { cn } from '../lib/utils';
// import { Logo } from './Logo';

// export const Header = () => {
//   const { t, i18n } = useTranslation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const isRTL = i18n.language === 'ar';

//   const navItems = [
//     { label: t('nav.home'), href: '/' },
//     { label: t('nav.services'), href: '/#services' },
//     { label: t('nav.about'), href: '/about' },
//     { label: t('nav.portfolio'), href: '/portfolio' },
//     { label: t('nav.contact'), href: '/#contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.header
//         className={cn(
//           'fixed top-0 w-full z-40 transition-all duration-300',
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-secondary-100'
//             : 'bg-white/50 backdrop-blur-sm'
//         )}
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
//           <div className="relative flex items-center justify-between">
//             {/* Logo with fixed size */}
//             <Link to="/">
//               <motion.div
//                 className="flex items-center gap-3"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {/* Logo with larger size */}
//                 <Logo className="absolute w-32 h-32" width={128} height={128} />  {/* Large Logo */}
//                 <div className="flex flex-col ml-36"> {/* Add margin-left to adjust text position */}
//                   <span className="text-lg font-bold text-secondary-900 leading-tight">
//                     {t('hero.title')}
//                   </span>
//                   <span className="text-xs text-primary-500 font-medium">
//                     {isRTL ? 'حلول رقمية' : 'Digital Solutions'}
//                   </span>
//                 </div>
//               </motion.div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-10">
//               {navItems.map((item, index) => (
//                 <motion.a
//                   key={item.href}
//                   href={item.href}
//                   className="text-sm font-medium text-secondary-700 hover:text-primary-500 transition-colors relative group py-2"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   {item.label}
//                   <motion.span
//                     className="absolute -bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
//                     initial={{ scaleX: 0 }}
//                     whileHover={{ scaleX: 1 }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </motion.a>
//               ))}
//               <div className="w-px h-6 bg-secondary-200" />
//               <LanguageSwitch />
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="lg:hidden flex items-center gap-4">
//               <LanguageSwitch />
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="text-secondary-900 p-2 hover:bg-secondary-100 rounded-lg transition-colors"
//                 aria-label={t('common.menu')}
//               >
//                 <motion.div
//                   animate={isMobileMenuOpen ? 'open' : 'closed'}
//                   className="flex flex-col gap-1.5 w-6"
//                 >
//                   <motion.span
//                     variants={{
//                       closed: { rotate: 0, y: 0 },
//                       open: { rotate: 45, y: 8 },
//                     }}
//                     className="w-full h-0.5 bg-secondary-900 rounded-full transition-all"
//                   />
//                   <motion.span
//                     variants={{
//                       closed: { opacity: 1 },
//                       open: { opacity: 0 },
//                     }}
//                     className="w-full h-0.5 bg-secondary-900 rounded-full transition-all"
//                   />
//                   <motion.span
//                     variants={{
//                       closed: { rotate: 0, y: 0 },
//                       open: { rotate: -45, y: -8 },
//                     }}
//                     className="w-full h-0.5 bg-secondary-900 rounded-full transition-all"
//                   />
//                 </motion.div>
//               </button>
//             </div>
//           </div>
//         </nav>
//       </motion.header>

//       {/* Mobile Menu */}
//       <MobileMenu
//         isOpen={isMobileMenuOpen}
//         onClose={() => setIsMobileMenuOpen(false)}
//         navItems={navItems}
//       />
//     </>
//   );
// };

