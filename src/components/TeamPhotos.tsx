import { motion } from "framer-motion";
import { t } from "i18next";

const OurTeamSection: React.FC = () => {
  const teamMembers = [
    {
      src: "/images/abuhassan.jpg",
      name: "Mr. Ezz El-Din Abu Radwan",
      designation: "CEO & Financial Consultant",
    },
    {
      src: "/images/ahmed.jpg",
      name: "Ahmed Ali",
      designation: "Software Engineer",
    },
    {
      src: "/images/ameen.png",
      name: "Amine Bouzidi",
      designation: "Digital Marketing Manager",
    },
    {
      src: "/images/awab.jpg",
      name: "Awab Shoukat",
      designation: "Software Engineer",
    },
  ];

  return (
    <section id="our-team" className="relative bg-white overflow-hidden py-16 sm:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <motion.div
            className="inline-block px-4 py-2 bg-orange-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-orange-300 font-semibold text-sm">
              Our Team
            </span>
          </motion.div> */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
            {t('team.title')} 
          </h2>
          <p className="text-base sm:text-lg text-secondary-600 max-w-2xl sm:max-w-3xl mx-auto">
            {/* A team of creative minds and technical experts working together to
            build modern web solutions. */}
                 {t('team.description')}  
          </p>
        </motion.div>

        {/* 🔹 Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {teamMembers.map(({ src, name, designation }, index) => (
            <motion.div
              key={index}
              className="relative group w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] transition-transform duration-500 hover:scale-105"
              whileHover={{ scale: 1.08 }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-[280px] sm:h-[300px] md:h-[320px] object-cover rounded-xl"
                />
              </div>

              {/* Name + Designation */}
              <div className="bg-orange-100 rounded-b-xl shadow-sm px-3 py-3 text-center w-full -mt-1">
                <h3 className="text-black font-semibold text-base sm:text-lg">
                  {name}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  {designation}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeamSection;
