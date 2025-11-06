  import { useState } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { useTranslation } from 'react-i18next';
  // import { ProjectCard } from './ProjectCard';
  import { PortfolioCart } from './PortfolioCart';

  

  export const PortfolioSection = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('all');
    const [showMore] = useState(false);

    const projects = [
      {
        id: 1,
        title: 'E-Commerce Platform',
        client: 'RetailCo',
        category: t('portfolio.categories.webDev'),
        pattern: 'gradient' as const,
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
        descriptionKey: 'portfolio.projects.ecommerce.description',
        src:"/portfolio/e-commerce.webp",
      },
      {
        id: 2,
        title: 'Healthcare Mobile App',
        client: 'MedHealth',
        category: t('portfolio.categories.mobile'),
        pattern: 'geometric' as const,
        technologies: ['React Native', 'Firebase', 'TypeScript', 'Redux'],
        descriptionKey: 'portfolio.projects.healthcare.description',
        src: "/portfolio/health.webp",
      },
      {
        id: 3,
        title: 'Financial Dashboard',
        client: 'FinTech Solutions',
        category: t('portfolio.categories.software'),
        pattern: 'minimal' as const,
        technologies: ['Next.js', 'Python', 'PostgreSQL', 'D3.js'],
        descriptionKey: 'portfolio.projects.financial.description',
        src: "/portfolio/finance.webp",
      },
      {
        id: 4,
        title: 'Design System',
        client: 'TechCorp',
        category: t('portfolio.categories.uiux'),
        pattern: 'gradient' as const,
        technologies: ['Figma', 'React', 'Storybook', 'Tailwind CSS'],
        descriptionKey: 'portfolio.projects.designSystem.description',
        src: "/portfolio/designnn.webp",
      },
      {
        id: 5,
        title: 'Food Delivery Platform',
        client: 'FoodHub',
        category: t('portfolio.categories.mobile'),
        pattern: 'geometric' as const,
        technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
        descriptionKey: 'portfolio.projects.foodDelivery.description',
        src: "/portfolio/food delovery.webp",
      },
      {
        id: 6,
        title: 'SaaS Platform',
        client: 'CloudSync',
        category: t('portfolio.categories.software'),
        pattern: 'minimal' as const,
        technologies: ['Vue.js', 'Laravel', 'AWS', 'Docker', 'Redis'],
        descriptionKey: 'portfolio.projects.saas.description',
        src: "/portfolio/saas platform.webp",
      },
    ];

    const categories = [
      { key: 'all', label: t('portfolio.filters.all') },
      { key: 'webDev', label: t('portfolio.filters.webDev') },
      { key: 'mobile', label: t('portfolio.filters.mobile') },
      { key: 'software', label: t('portfolio.filters.software') },
      { key: 'uiux', label: t('portfolio.filters.uiux') },
    ];

    const filteredProjects = activeFilter === 'all'
      ? projects
      : projects.filter(project => {
          const filterLabel = categories.find(cat => cat.key === activeFilter)?.label;
          return project.category === filterLabel;
        });

    return (
      // py-24
      <section id="portfolio"
      //  className="relative  bg-white overflow-hidden"
      className="px-4 sm:px-8 md:px-12 py-8"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}  
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
              {t('portfolio.title')}
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              {t('portfolio.subtitle')}
            </p>
          </motion.div>

          {/* Filter Tabs - Elegant Design */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`relative px-6 py-2.5 font-medium transition-all duration-300 ${
                  activeFilter === category.key
                    ? 'text-primary-600'
                    : 'text-secondary-600 hover:text-secondary-900'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {category.label}
                {activeFilter === category.key && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

        
          <motion.div
            layout
            // className="grid md:grid-cols-2 lg:grid-cols-3 gap-18 mb-12"
            //  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center"
            
          >
            <AnimatePresence mode="popLayout">
              {(showMore ? filteredProjects : filteredProjects.slice(0, 6)).map((project, index) => (
                // <ProjectCard key={project.id} project={project} index={index} />
                  <PortfolioCart  
                  key={project.id || index} // 👈 ye add kar
                  title={project.title}
                  client={project.client}
                  category={project.category}
                  technologies={project.technologies}
                  image={project.src || ''} // agar image hai to pass karo, nahi to ''
                  descriptionKey={project.descriptionKey}
                  index={index} // optional, ab allowed hai 
                  />
                  ))
                }
            </AnimatePresence>
          </motion.div>

          {/* Load More / View All Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* {filteredProjects.length > 6 && !showMore ? (
              <motion.button
                onClick={() => setShowMore(true)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-secondary-300 text-secondary-900 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-600 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('portfolio.loadMore')}
                <span>↓</span>
              </motion.button>
            ) : (
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('portfolio.viewAll')}
                <span>→</span>
              </motion.a>
            )} */}
          </motion.div>
        </div>
      </section>


    );
  };
