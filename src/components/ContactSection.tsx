// ContactSection.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { FloatingLabelInput } from './ui/FloatingLabelInput';
import emailjs from '@emailjs/browser'; // 👈 added

export const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('contact.form.errors.name');
    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }
    if (!formData.message.trim()) newErrors.message = t('contact.form.errors.message');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 👇 EmailJS integration added here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await emailjs.send(
        "service_gwdgjge", // Rakeez service id
        "template_f4y3kaw", // Rakeez template id
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'knE8Uzpq_5-EwbADs'   // Rakeez public key
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setErrors({ global: 'Failed to send message. Try again later.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      label: t('contact.info.address'),
      value: 'Riyadh, Saudi Arabia',
    },
    {
      icon: '📧',
      label: t('contact.info.email'),
      value: 'it@rakeezsolutions.sa',
    },
    {
      icon: '📞',
      label: t('contact.info.phone'),
      value: '+966 536499916',
    },
    {
      icon: '🕐',
      label: t('contact.info.hours'),
      value: t('contact.info.hoursValue'),
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
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
              {t('contact.badge')}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <FloatingLabelInput
                label={t('contact.form.name')}
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                error={errors.name}
                required
              />

              <FloatingLabelInput
                label={t('contact.form.email')}
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                error={errors.email}
                required
              />

              <FloatingLabelInput
                label={t('contact.form.phone')}
                type="tel"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
              />

              <FloatingLabelInput
                label={t('contact.form.subject')}
                value={formData.subject}
                onChange={(value) => setFormData({ ...formData, subject: value })}
              />

              <FloatingLabelInput
                label={t('contact.form.message')}
                value={formData.message}
                onChange={(value) => setFormData({ ...formData, message: value })}
                error={errors.message}
                required
                multiline
                rows={6}
              />

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </motion.button>

              {/* Success Message */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
                >
                  {t('contact.form.success')}
                </motion.div>
              )}

              {/* Global Error (optional) */}
              {errors.global && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-center rounded-lg">
                  {errors.global}
                </div>
              )}
            </form>
          </motion.div>

          {/* Right-side contact info and map (unchanged) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-secondary-50 rounded-xl border border-secondary-200 hover:border-primary-400 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">{info.label}</h3>
                    <p className="text-secondary-600">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="h-64 bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-xl border border-secondary-200 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.160678039637!2d46.74585527515068!3d24.82417817795286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efff9eaae1b97%3A0x567d68a0d1df6b33!2zUmFrZWV6IFNvbHV0aW9ucyAtINix2YPZitiyINin2YTYrdmE2YjZhA!5e0!3m2!1sen!2ssa!4v1759932411104!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
