
// awab

import { useState } from "react";
import { useTranslation } from "react-i18next";
import picture from "../../public/Technology_in_Daily_Life.webp";
import fooddelovery from "../../public/food delovery.png";
import hospital from "../../public/hospital.webp";
import system from "../../public/system desing.jpg";
import saas from "../../public/saas.jpg";
import financial from "../../public/financial.jpg";

import { PortfolioCart } from "./PortfolioCart";
export function PortfolioGrid() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      client: "RetailCo",
      category: t("portfolio.categories.webDev"),
      //   pattern: 'gradient' as const,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      descriptionKey: "portfolio.projects.ecommerce.description",
      image: picture,
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      client: "MedHealth",
      category: t("portfolio.categories.mobile"),
      //   pattern: 'geometric' as const,
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      descriptionKey: "portfolio.projects.healthcare.description",
      image: hospital,
    },
    {
      id: 3,
      title: "Financial Dashboard",
      client: "FinTech Solutions",
      category: t("portfolio.categories.software"),
      //   pattern: 'minimal' as const,
      technologies: ["Next.js", "Python", "PostgreSQL", "D3.js"],
      descriptionKey: "portfolio.projects.financial.description",
      image: financial,
    },
    {
      id: 4,
      title: "Design System",
      client: "TechCorp",
      category: t("portfolio.categories.uiux"),
      //   pattern: 'gradient' as const,
      technologies: ["Figma", "React", "Storybook", "Tailwind CSS"],
      descriptionKey: "portfolio.projects.designSystem.description",
      image: system,
    },
    {
      id: 5,
      title: "Food Delivery Platform",
      client: "FoodHub",
      category: t("portfolio.categories.mobile"),
      //   pattern: 'geometric' as const,
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      descriptionKey: "portfolio.projects.foodDelivery.description",
      image: fooddelovery,
    },
    {
      id: 6,
      title: "SaaS Platform",
      client: "CloudSync",
      category: t("portfolio.categories.software"),
      //   pattern: 'minimal' as const,
      technologies: ["Vue.js", "Laravel", "AWS", "Docker", "Redis"],
      descriptionKey: "portfolio.projects.saas.description",
      image: saas,
    },
  ];

  const categories = [
    { key: "all", label: t("portfolio.filters.all") },
    { key: "webDev", label: t("portfolio.filters.webDev") },
    { key: "mobile", label: t("portfolio.filters.mobile") },
    { key: "software", label: t("portfolio.filters.software") },
    { key: "uiux", label: t("portfolio.filters.uiux") },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => {
          const filterLabel = categories.find(
            (cat) => cat.key === activeFilter
          )?.label;
          return p.category === filterLabel;
        });

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex gap-3 mb-6 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`px-4 py-1 rounded-full border text-sm ${
              activeFilter === cat.key ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {filteredProjects.map((project) => (
          <PortfolioCart key={project.id} {...project} />
          // <PortfolioCart  title={project.title}
          //       client={project.client}
          //       category={project.category}
          //       technologies={project.technologies}
          //       image={project.image || ''} // agar image hai to pass karo, nahi to ''
          //       descriptionKey={project.descriptionKey}
          //       index={index} // optional, ab allowed hai 
          //       />
                
          
        ))}
      </div>
    </div>
  );
}

