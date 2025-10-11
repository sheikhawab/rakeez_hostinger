import  { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";

const faqData = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
  { qKey: "faq.q6", aKey: "faq.a6" },
  { qKey: "faq.q7", aKey: "faq.a7" },
  { qKey: "faq.q8", aKey: "faq.a8" },
  { qKey: "faq.q9", aKey: "faq.a9" },
  { qKey: "faq.q10", aKey: "faq.a10" },
];

export const Faq = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3); // Show 3 questions initially

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, faqData.length));
  };

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("faq.title")}
        </motion.h2>

        <div className="space-y-4">
          {faqData.slice(0, visibleCount).map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={item.qKey}
                className="bg-white border border-gray-200 shadow-sm overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  borderColor: "#F97316",
                  scale: 1.01,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Left Orange Border */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400"
                  layout
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                {/* Question */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-secondary-900 hover:text-primary-600 transition-colors relative z-10"
                >
                  <span>{t(item.qKey)}</span>
                  <span className="text-primary-500 text-xl">
                    {isOpen ? <Remove /> : <Add />}
                  </span>
                </button>

                {/* Answer */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 pb-4 text-secondary-700 text-base"
                >
                  {t(item.aKey)}
                </motion.div>
              </motion.div>
            );
          })}

          {/* Show More Button */}
          {visibleCount < faqData.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={showMore}
                className="px-6 py-3 bg-primary-500 text-white font-semibold rounded shadow hover:bg-primary-600 transition-colors"
              >
                {isRTL ? "المزيد من الأسئلة" : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import Add from "@mui/icons-material/Add";
// import Remove from "@mui/icons-material/Remove";

// const faqData = [
//   { qKey: "faq.q1", aKey: "faq.a1" },
//   { qKey: "faq.q2", aKey: "faq.a2" },
//   { qKey: "faq.q3", aKey: "faq.a3" },
//   { qKey: "faq.q4", aKey: "faq.a4" },
//   { qKey: "faq.q5", aKey: "faq.a5" },
//   { qKey: "faq.q6", aKey: "faq.a6" },
//   { qKey: "faq.q7", aKey: "faq.a7" },
//   { qKey: "faq.q8", aKey: "faq.a8" },
//   { qKey: "faq.q9", aKey: "faq.a9" },
//   { qKey: "faq.q10", aKey: "faq.a10" },
// ];

// export const Faq = () => {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";

//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [visibleCount, setVisibleCount] = useState(3); // Initial 3 questions

//   const toggleIndex = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const showMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 3, faqData.length));
//   };

//   return (
//     <section className="relative py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           {t("faq.title")}
//         </motion.h2>

//         <div className="space-y-0">
//           {faqData.slice(0, visibleCount).map((item, idx) => {
//             const isOpen = openIndex === idx;
//             return (
//               <motion.div
//                 key={item.qKey}
//                 className="bg-white border border-gray-200 shadow-sm overflow-hidden"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.5, delay: idx * 0.05 }}
//               >
//                 {/* Question */}
//                 <button
//                   onClick={() => toggleIndex(idx)}
//                   className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-secondary-900 hover:text-primary-600 transition-colors relative"
//                 >
//                   <span>{t(item.qKey)}</span>
//                   <span className="text-primary-500 text-xl">
//                     {isOpen ? <Remove /> : <Add />}
//                   </span>

//                   {/* Orange indicator animated like ServiceCard */}
//                   <motion.div
//                     className="absolute left-0 top-0 bottom-0 w-1 bg-orange-400"
//                     layout
//                     initial={{ height: 0 }}
//                     animate={{ height: isOpen ? "100%" : 0 }}
//                     transition={{ type: "spring", stiffness: 500, damping: 30 }}
//                   />
//                 </button>

//                 {/* Answer */}
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{
//                     height: isOpen ? "auto" : 0,
//                     opacity: isOpen ? 1 : 0,
//                   }}
//                   transition={{ duration: 0.4, ease: "easeInOut" }}
//                   className="px-6 pb-4 text-secondary-700 text-base"
//                 >
//                   {t(item.aKey)}
//                 </motion.div>
//               </motion.div>
//             );
//           })}

//           {/* Show More Button */}
//           {visibleCount < faqData.length && (
//             <div className="flex justify-center mt-6">
//               <button
//                 onClick={showMore}
//                 className="px-6 py-3 bg-primary-500 text-white font-semibold rounded shadow hover:bg-primary-600 transition-colors"
//               >
//                 {isRTL ? "المزيد من الأسئلة" : "Show More"}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };
