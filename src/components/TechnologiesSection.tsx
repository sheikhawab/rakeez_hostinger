import { motion } from 'framer-motion';

export default function TechnologiesSection() {
 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Placeholder for tech logos - you'll add your actual logos here
  const technologies = [
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Node.js', logo: '/logos/nodejs.svg' },
    { name: 'TypeScript', logo: '/logos/typescript.svg' },
    { name: 'Python', logo: '/logos/python.svg' },
    { name: 'MongoDB', logo: '/logos/mongodb.svg' },
    { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
    { name: 'AWS', logo: '/logos/aws.svg' },
    { name: 'Docker', logo: '/logos/docker.svg' },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-secondary-50 to-white overflow-hidden">
      {/* Grid Background with Fading Lines */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 158, 11, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Technologies We{' '}
            <span className="text-primary-500">Master</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
            Cutting-edge tools and technologies we use to build robust, scalable solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-secondary-100 hover:border-primary-300"
            >
              {/* Logo Container */}
              <div className="flex items-center justify-center h-20 md:h-24">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain group-hover:grayscale transition-all duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="text-4xl font-bold text-primary-500">${tech.name.charAt(0)}</div>`;
                  }}
                />
              </div>

              {/* Tech Name */}
              <div className="mt-4 text-center">
                <p className="text-sm md:text-base font-semibold text-secondary-700 group-hover:text-primary-600 transition-colors">
                  {tech.name}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
