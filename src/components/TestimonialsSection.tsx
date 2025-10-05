import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      quote: t('testimonials.testimonial1.quote'),
      name: t('testimonials.testimonial1.name'),
      position: t('testimonials.testimonial1.position'),
      company: 'TechCorp',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      id: 2,
      quote: t('testimonials.testimonial2.quote'),
      name: t('testimonials.testimonial2.name'),
      position: t('testimonials.testimonial2.position'),
      company: 'InnovateLab',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 3,
      quote: t('testimonials.testimonial3.quote'),
      name: t('testimonials.testimonial3.name'),
      position: t('testimonials.testimonial3.position'),
      company: 'StartupHub',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      id: 4,
      quote: t('testimonials.testimonial4.quote'),
      name: t('testimonials.testimonial4.name'),
      position: t('testimonials.testimonial4.position'),
      company: 'GlobalRetail',
      rating: 5,
      avatar: '👩‍💼',
    },
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="w-[400px] bg-white rounded-2xl p-8 border border-secondary-200 shadow-lg hover:shadow-xl transition-shadow">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-primary-500 text-lg">★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-secondary-700 leading-relaxed mb-6 text-sm">
        "{testimonial.quote}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-2xl">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
          <p className="text-sm text-secondary-600">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-secondary-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        {/* Section Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <span className="text-primary-700 font-semibold text-sm">
              {t('testimonials.badge')}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>
      </div>

      {/* Infinite Moving Cards */}
      <InfiniteMovingCards
        items={testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
        direction="left"
        speed="slow"
        pauseOnHover={true}
      />
    </section>
  );
};
