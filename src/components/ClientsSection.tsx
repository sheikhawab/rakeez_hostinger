import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


export default function ClientsSection() {
  const { t } = useTranslation();

  const clients = [
    { name: 'Client 1', logo: '/clients/admin-ajax-modified.png' },
    { name: 'Client 2', logo: '/clients/admin-ajax (1)-modified.png' },
    { name: 'Client 3', logo: '/clients/admin-ajax (2)-modified.png' },
    { name: 'Client 4', logo: '/clients/admin-ajax (3)-modified.png' },
    { name: 'Client 5', logo: '/clients/admin-ajax (4)-modified.png' },
    { name: 'Client 6', logo: '/clients/admin-ajax (5)-modified.png' },
    { name: 'Client 7', logo: '/clients/admin-ajax (6)-modified.png' },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-secondary-50/30 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            {t('clientsSection.titlePrefix')}{' '}
            <span className="text-primary-500">{t('clientsSection.titleHighlight')}</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
            {t('clientsSection.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Enhanced Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation */}
        <div className="flex overflow-hidden py-4">
          <motion.div
            className="flex gap-10 md:gap-16 items-center"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-36 h-28 md:w-44 md:h-32 flex items-center justify-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-secondary-100/50 hover:border-primary-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="text-2xl font-bold text-secondary-400">${client.name}</div>`;
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

     
    </section>
  );
};
