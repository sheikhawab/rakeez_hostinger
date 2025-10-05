import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ProjectPlaceholder } from './ui/ProjectPlaceholder';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  pattern: 'gradient' | 'geometric' | 'minimal';
  technologies: string[];
  descriptionKey: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="relative overflow-hidden rounded-xl bg-white border border-secondary-200 transition-all duration-300 h-full flex flex-col"
        whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
      >
        {/* Project Image/Placeholder */}
        <div className="relative h-56 overflow-hidden">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ProjectPlaceholder pattern={project.pattern} />
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category Badge */}
          <span className="inline-block w-fit px-3 py-1 bg-secondary-100 text-secondary-700 rounded-md text-xs font-medium mb-3">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>

          {/* Client */}
          <p className="text-sm text-secondary-500 mb-3">{project.client}</p>

          {/* Description */}
          <p className="text-secondary-600 text-sm leading-relaxed mb-4 flex-1">
            {t(project.descriptionKey)}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-secondary-50 text-secondary-600 rounded-md text-xs font-medium border border-secondary-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2.5 py-1 bg-secondary-50 text-secondary-500 rounded-md text-xs font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* View Case Study Link */}
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm hover:text-primary-600 group/link mt-auto"
            whileHover={{ x: isRTL ? -3 : 3 }}
          >
            {t('portfolio.viewCaseStudy')}
            <span className="group-hover/link:translate-x-1 transition-transform">
              {isRTL ? '←' : '→'}
            </span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};
