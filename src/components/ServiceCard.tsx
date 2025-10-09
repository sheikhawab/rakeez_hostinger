import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Card3D } from "./ui/Card3D";
import { HoverBorder } from "./ui/HoverBorder";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  index: number;
  slug?: string;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  features,
  index,
  slug,
}: ServiceCardProps) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <motion.div
      // className="h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card3D className="h-full">
        <HoverBorder containerClassName="h-full" className="h-full">
          <div className="h-full p-8 bg-white border border-secondary-200 rounded-2xl group-hover:border-primary-400 transition-all duration-300 shadow-sm hover:shadow-xl">
          {/* <div className="h-full flex flex-col justify-between p-8 bg-white border border-secondary-200 rounded-2xl group-hover:border-primary-400 transition-all duration-300 shadow-sm hover:shadow-xl"> */}

            {/* Icon */}
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              whileHover={{ rotate: [0, -30, 30, -30, 0], scale: 1.4 }} // awab edited
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl filter drop-shadow-sm">{icon}</span>
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-secondary-600 leading-relaxed mb-6">
              {description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-6">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-secondary-700 "
                  initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <span className="text-primary-500 mt-0.5">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Learn More Link */}
            {slug ? (
              <Link to={`/services/${slug}`}>
                <motion.div
                  className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 group/link"
                  whileHover={{ x: isRTL ? -5 : 5 }}
                >
                  {t("cta.learnMore")}
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    {isRTL ? "←" : "→"}
                  </motion.span>
                </motion.div>
              </Link>
            ) : (
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 group/link"
                whileHover={{ x: isRTL ? -5 : 5 }}
              >
                {t("cta.learnMore")}
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {isRTL ? "←" : "→"}
                </motion.span>
              </motion.a>
            )}
          </div>
        </HoverBorder>
      </Card3D>
    </motion.div>
  );
};
