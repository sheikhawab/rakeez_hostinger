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
          // 🛠️ FIX: Added dark mode background + reduced shadow for better visibility on mobile
          className="bg-white  border border-amber-200
          rounded-2xl shadow-sm hover:shadow-lg hover:shadow-orange-200
          transition-all duration-500 flex flex-col overflow-hidden
          min-h-[520px] sm:min-h-[560px]"
        >
          {/* 🔶 Image Section */}
          <div
            className="relative w-full h-48 sm:h-60 overflow-hidden rounded-t-2xl group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered((prev) => !prev)} // ✅ Mobile hover fix
          >
            <img
              src={image}
              alt={title}
              // 🛠️ FIX: Better scaling & smooth transition
              className={`w-full h-full object-cover rounded-t-2xl transform transition-all duration-700 ease-out 
                ${hovered ? "scale-110" : "scale-100"}`}
            />

            {/* 🛠️ FIX: Darker overlay for mobile visibility */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
              transition-opacity duration-700 ${
                hovered ? "opacity-100" : "opacity-0"
              }`}
            ></div>

            {/* Floating info text on hover */}
            <div
              className={`absolute bottom-3 left-3 transition-all duration-700
              ${
                hovered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              {/* 🛠️ FIX: Text color made brighter for visibility */}
              <p className="text-white font-semibold text-base sm:text-lg drop-shadow-md">
                {title}
              </p>
              <p className=" text-xs">{client}</p>
            </div>
          </div>

          {/* 🔶 Content Section */}
          <div className="flex flex-col gap-3 p-4 sm:p-6 flex-grow">
            {/* 🛠️ FIX: Font sizes & contrast adjusted */}
            <CardItem className="text-base sm:text-lg font-semibold  ">
              {title}
            </CardItem>

            <CardItem
              as="p"
              className=" text-xs sm:text-sm "
            >
              {client} • {category}
            </CardItem>

            {/* 🧩 Tech Tags - soft readable look */}
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
              {technologies.map((tech) => (
                <CardItem
                  key={tech}
                  className="px-2 py-1 text-[10px] sm:text-xs rounded-md 
                bg-gray-100 text-gray-700 border border-gray-200"
                >
                  {tech}
                </CardItem>
              ))}
            </div>

            {/* 🛠️ FIX: Description text color adjusted for visibility */}
            <CardItem className=" text-sm leading-relaxed mt-2 sm:mt-3 flex-grow">
              {t(descriptionKey)}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
