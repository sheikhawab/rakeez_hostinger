import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="relative inline-flex items-center rounded-full p-1 bg-orange-400 transition-all duration-300 w-16 h-8 shadow-md overflow-hidden"
    >
      {/* Background label for inactive language */}
      <div className="absolute inset-0 flex justify-between items-center text-sm font-semibold text-white px-2 select-none">
        {/* Left side */}
        <span className={currentLang === "en" ? "opacity-100" : "opacity-50"}>
          {currentLang === "en" ? "عربي" : "EN"}
        </span>
        {/* Right side */}
        <span className={currentLang === "en" ? "opacity-50" : "opacity-100"}>
          {currentLang === "en" ? "EN" : "ع"}
        </span>
      </div>

      {/* Sliding white circle for active language */}
      <motion.div
        className={cn(
          "bg-white rounded-full shadow-md flex items-center justify-center text-xs font-semibold text-orange-500 w-7 h-7"
        )}
        layout
        animate={{
          x: currentLang === "en" ? "calc(100% - 1.75rem)" : "0rem",
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {/* Show active language inside the white circle */}
        {currentLang === "en" ?   "ع" :"EN" }
      </motion.div>
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
