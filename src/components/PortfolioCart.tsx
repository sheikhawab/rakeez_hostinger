import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useTranslation } from "react-i18next";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  client: string;
  category: string;
  technologies: string[];
  image: string;
  descriptionKey: string;
  index?: number;
}

export function PortfolioCart({
  title,
  client,
  category,
  technologies,
  image,
  descriptionKey,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* 🔶 Main Card Container */}
      <CardContainer className="inter-var">
        <CardBody
          className="bg-white  border border-amber-200
          rounded-2xl shadow-sm hover:shadow-lg hover:shadow-orange-200
          transition-all duration-500 flex flex-col overflow-hidden min-h-[560px] sm:min-h-[580px]"
        >
          {/* 🔶 Image Section (Premium Hover / Tap Effect) */}
          <div
            className="relative w-full h-56 sm:h-64 overflow-hidden rounded-t-2xl group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered((prev) => !prev)} // ✅ Enables touch hover effect
          >
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover rounded-t-2xl transform transition-all duration-700 ease-out 
                ${hovered ? "scale-110" : "scale-100"}`}
            />

            {/* 🔸 Gradient overlay (subtle orange glow on hover) */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent 
              transition-opacity duration-700 ${hovered ? "opacity-100" : "opacity-0"}`}
            ></div>

            {/* 🔸 Floating info text on hover */}
            <div
              className={`absolute bottom-3 left-3 transition-all duration-700 
              ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
            >
              <p className="text-white font-semibold text-lg drop-shadow-md">{title}</p>
              <p className="text-gray-200 text-xs">{client}</p>
            </div>
          </div>

          {/* 🔶 Content Section */}
          <div className="flex flex-col gap-3 p-4 sm:p-6 flex-grow">
            {/* Title */}
            <CardItem className="text-lg sm:text-xl font-semibold text-neutral-800 dark:text-white">
              {title}
            </CardItem>

            {/* Client and Category */}
            <CardItem
              as="p"
              className="text-neutral-500 text-xs sm:text-sm dark:text-neutral-300"
            >
              {client} • {category}
            </CardItem>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
              {technologies.map((tech) => (
                <CardItem
                  key={tech}
                  className="px-2 py-1 text-[10px] sm:text-xs rounded-md bg-gray-100 dark:bg-gray-800 
                  text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </CardItem>
              ))}
            </div>

            {/* Description */}
            <CardItem className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mt-2 sm:mt-3 flex-grow">
              {t(descriptionKey)}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}

// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// interface ProjectCardProps {title: string;client: string;category: string;technologies: string[];
//   image: string; descriptionKey: string;index?: number;}

// export function PortfolioCart({title,client,category,technologies,image,descriptionKey,}: ProjectCardProps) {
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "ar";
//   return (
//     <>
//       <CardContainer className="inter-var">
//         <CardBody
//           className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
//         dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
//         w-full h-full min-h-[520px] rounded-xl p-6 border flex flex-col border border-amber-200 hover:shadow-orange-300  hover:shadow-2xl"
//         >
//           {/* className="flex flex-col justify-between bg-white  rounded-3xl   p-10 transition-all duration-300" */}
//           {/* // w-full sm:w-[26rem] h-auto rounded-xl p-6 border " */}
//           <CardItem translateZ="100" className="w-full mt-4">
//             <img
//               src={image}
//               className="h-52 w-full object-cover rounded-lg group-hover/card:shadow-xl pt-0"
//               alt={title}
//             />
//           </CardItem>

//           <CardItem
//             translateZ="50"
//             className="text-xl font-bold text-neutral-700 dark:text-white"
//           >
//             {title}
//           </CardItem>
          


//           {/* Client and Category */}
//           <CardItem
//             as="p"
//             translateZ="60"
//             className="text-neutral-500 text-sm mt-1 dark:text-neutral-300"
//           >
//             {client} • {category}
//           </CardItem>


//           {/* Technologies */}
//           <div className="flex flex-wrap gap-2 mt-6">
//             {technologies.map((tech) => (
//               <CardItem
//                 key={tech}
//                 translateZ={20}
//                 className="px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700"
//               >
//                 {tech}
//               </CardItem>
//             ))}
//           </div>

//           {/* Description */}
//           <CardItem
//             className="text-secondary-600 text-sm leading-relaxed mb-4 flex-grow mt-4"
//             translateZ={40}
//           >
//             {t(descriptionKey)}
//           </CardItem>

//           <br />
//           {/* <br />
//           <br /> */}
//           {/* View Case Study Link */}
//           {/* <motion.a
//             href="#"
//             className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm hover:text-primary-600 group/link mt-auto"
//             whileHover={{ x: isRTL ? -3 : 3 }}
//           >
//             {t("portfolio.viewCaseStudy")}
//             <span className="group-hover/link:translate-x-1 transition-transform">
//               {isRTL ? "←" : "→"}
//             </span>
//           </motion.a> */}
//         </CardBody>
//       </CardContainer>
//     </>
//   );
// }
