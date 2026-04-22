import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const IMAGE_FALLBACK =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23f3f4f6'/%3E%3Cstop offset='100%25' stop-color='%23e5e7eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='900' fill='url(%23g)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-size='56' font-family='Arial, sans-serif'%3EProject Image%3C/text%3E%3C/svg%3E";

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
        {/* <CardBody
          // 🛠️ FIX: Added dark mode background + reduced shadow for better visibility on mobile
          className="bg-white  border border-amber-200
          rounded-2xl shadow-sm hover:shadow-lg hover:shadow-orange-200
          transition-all duration-500 flex flex-col overflow-hidden
          min-h-[520px] sm:min-h-[560px]"
        > */}
        <CardBody
  className="bg-white border border-amber-200 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-orange-200
  transition-all duration-500 flex flex-col overflow-hidden
  min-h-[430px] sm:min-h-[460px] w-[90vw] sm:w-[320px] md:w-[360px]"
>

          {/* 🔶 Image Section */}
          <div
            className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl group"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onTouchStart={() => setHovered((prev) => !prev)} // ✅ Mobile hover fix
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = IMAGE_FALLBACK;
              }}
              // 🛠️ FIX: Better scaling & smooth transition
              className={`w-full h-full object-cover object-center rounded-t-2xl transform transition-all duration-700 ease-out 
                ${hovered ? "scale-105" : "scale-100"}`}
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
              <p className="text-white font-semibold text-sm sm:text-base tracking-tight drop-shadow-md">
                {title}
              </p>
              <p className="text-[11px] text-white/85 tracking-wide">{client}</p>
            </div>
          </div>

          {/* 🔶 Content Section */}
          <div className="flex flex-col gap-2.5 sm:gap-3 p-4 sm:p-6 flex-grow">
            {/* 🛠️ FIX: Font sizes & contrast adjusted */}
            <CardItem className="text-[1.05rem] sm:text-xl font-semibold tracking-tight text-secondary-900 leading-snug">
              {title}
            </CardItem>

            <CardItem
              as="p"
              className="text-[11px] sm:text-xs md:text-sm font-medium text-secondary-500 tracking-wide"
            >
              {client} • {category}
            </CardItem>

            {/* 🧩 Tech Tags - soft readable look */}
            <div className="flex flex-wrap gap-2 mt-1.5 sm:mt-2.5">
              {technologies.map((tech) => (
                <CardItem
                  key={tech}
                  className="px-2 py-1 text-[10px] sm:text-xs font-medium tracking-wide rounded-md bg-gray-100 text-secondary-600 border border-gray-200"
                >
                  {tech}
                </CardItem>
              ))}
            </div>

            {/* 🛠️ FIX: Description text color adjusted for visibility */}
            <CardItem className="text-sm sm:text-[0.95rem] leading-6 text-secondary-700 mt-2 sm:mt-2.5">
              {t(descriptionKey)}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}
