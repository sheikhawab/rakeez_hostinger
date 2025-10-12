import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cn } from "../lib/utils"; // Assuming cn is a utility for tailwindcss class merging

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr"; // Update direction globally for RTL languages
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className={cn(
        "relative flex items-center",
        "w-24 h-10 px-1 rounded-full", // Adjusted width and height for better appearance
        "bg-gray-200 dark:bg-gray-700", // Neutral background, adaptable for dark mode
        "shadow-inner transition-all duration-300", // Subtle inner shadow
        "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50" // Focus styling
      )}
    >
      {/* Sliding indicator */}
      <motion.div
        layout
        animate={{
          x: currentLang === "en" ? 0 : "calc(100% - 2.5rem)", // Adjust x position based on new width
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className={cn(
          "absolute z-10 flex items-center justify-center",
          "w-9 h-9 rounded-full", // Slightly smaller than button height
          "bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 font-bold text-sm",
          "shadow-md"
        )}
      >
        {currentLang === "en" ? "EN" : "ع"}
      </motion.div>

      {/* Language labels on the track */}
      <div
        className={cn(
          "absolute inset-0 flex justify-between items-center",
          "px-3 text-sm font-semibold",
          "pointer-events-none" // Prevents clicks on the text itself
        )}
      >
        <span
          className={cn(
            "text-gray-600 dark:text-gray-400",
            currentLang === "ar" && "opacity-50",
            currentLang === "en" && "text-orange-600 dark:text-orange-400" // Highlight active language
          )}
        >
          EN
        </span>
        <span
          className={cn(
            "text-gray-600 dark:text-gray-400",
            currentLang === "en" && "opacity-50",
            currentLang === "ar" && "text-orange-600 dark:text-orange-400" // Highlight active language
          )}
        >
          ع
        </span>
      </div>
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
