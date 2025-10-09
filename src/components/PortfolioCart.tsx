
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
interface ProjectCardProps {title: string;client: string;category: string;technologies: string[];
  image: string; descriptionKey: string;index?: number;}

export function PortfolioCart({title,client,category,technologies,image,descriptionKey,}: ProjectCardProps) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  return (
    <>
      <CardContainer className="inter-var">
        <CardBody
          className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
        dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] 
        w-full h-full min-h-[520px] rounded-xl p-6 border flex flex-col"
        >
          {/* // w-full sm:w-[26rem] h-auto rounded-xl p-6 border " */}
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-700 dark:text-white"
          >
            {title}
          </CardItem>
          

          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={image}
              className="h-52 w-full object-cover rounded-lg group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>

          {/* Client and Category */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm mt-1 dark:text-neutral-300"
          >
            {client} • {category}
          </CardItem>


          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-6">
            {technologies.map((tech) => (
              <CardItem
                key={tech}
                translateZ={20}
                className="px-2 py-1 text-xs rounded-md bg-gray-200 dark:bg-gray-700"
              >
                {tech}
              </CardItem>
            ))}
          </div>

          {/* Description */}
          <CardItem
            className="text-secondary-600 text-sm leading-relaxed mb-4 flex-grow mt-4"
            translateZ={40}
          >
            {t(descriptionKey)}
          </CardItem>

          <br />
          {/* <br />
          <br /> */}
          {/* View Case Study Link */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm hover:text-primary-600 group/link mt-auto"
            whileHover={{ x: isRTL ? -3 : 3 }}
          >
            {t("portfolio.viewCaseStudy")}
            <span className="group-hover/link:translate-x-1 transition-transform">
              {isRTL ? "←" : "→"}
            </span>
          </motion.a>
        </CardBody>
      </CardContainer>
    </>
  );
}
