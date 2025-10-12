import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const flagSrc = currentLang === "en" ?  "/flag/saudi.svg":"/flag/usa.svg" ;
  const altText = currentLang === "en" ?  "English Flag" : "Saudi Flag"  ;

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="relative inline-flex items-center justify-center w-12 h-12  bg-transparent hover:opacity-80 transition-opacity duration-200"
    >
      <motion.img
        key={currentLang}
        src={flagSrc}
        alt={altText}
        width={40}
        height={40}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
// import { cn } from '../lib/utils';

// export const LanguageSwitch = () => {
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language;

//   const toggleLanguage = () => {
//     const newLang = currentLang === 'en' ? 'ar' : 'en';
//     i18n.changeLanguage(newLang);
//   };

//   return (
//     <button
//       onClick={toggleLanguage}
//       className="relative inline-flex items-center gap-1 px-2 py-1 rounded-full  hover:bg-secondary-100 transition-colors duration-200"
//       aria-label="Toggle language"
//     >
//       {/* <motion.div
//         className="flex items-center gap-2"
//         initial={false}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.2 }}
//       > */}
//         {/* <span className="text-sm font-medium text-secondary-700">
//           {currentLang === 'en' ?  'عربي':'EN' }
//         </span> */}
//         <motion.div
//           className=" bg-primary-400 rounded-full p-1 flex items-center px-2.5"
//           animate={{
//             justifyContent: currentLang === 'ar' ? 'flex-start' : 'flex-end',
//           }}
//           transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//         >
//           <motion.div
//             className={cn(
//               'bg-white rounded-full shadow-md flex items-center justify-center text-xs pt-1 pr-0 pb-1 pl-2 '
//               // px-2 pt-[1px] pb-1
//             )}
//             layout
//           >
//             {/* {currentLang === 'en' ? 'EN': 'عربي'  } */}
//             <span className="text-sm font-medium text-secondary-700">
//           {currentLang === 'en' ?  'عربي':'EN' }
//         </span>
//           </motion.div>
//         </motion.div>
//       {/* </motion.div> */}
//     </button>
//   );
// };
