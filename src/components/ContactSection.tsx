// // ContactSection.tsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useTranslation } from 'react-i18next';

// import { FloatingLabelInput } from './ui/FloatingLabelInput';
// import emailjs from '@emailjs/browser'; // 👈 added

// export const ContactSection = () => {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.name.trim()) newErrors.name = t('contact.form.errors.name');
//     if (!formData.email.trim()) {
//       newErrors.email = t('contact.form.errors.email');
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = t('contact.form.errors.emailInvalid');
//     }
//     if (!formData.message.trim()) newErrors.message = t('contact.form.errors.message');
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // 👇 EmailJS integration added here
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setErrors({});

//     try {
//       await emailjs.send(
//         "service_gwdgjge", // Rakeez service id
//         "template_f4y3kaw", // Rakeez template id
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           phone: formData.phone,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         'knE8Uzpq_5-EwbADs'   // Rakeez public key
//       );

//       setIsSuccess(true);
//       setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
//     } catch (err) {
//       console.error('EmailJS Error:', err);
//       setErrors({ global: 'Failed to send message. Try again later.' });
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setIsSuccess(false), 5000);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: '📍',
//       label: t('contact.info.address'),
//       value: 'Riyadh, Saudi Arabia',
//     },
//     {
//       icon: '📧',
//       label: t('contact.info.email'),
//       value: 'it@rakeezsolutions.sa',
//     },
//     {
//       icon: '📞',

//       label: t('contact.info.phone'),
//       value: '+966 536499916',
//     },
//     {
//       icon: '🕐',
//       label: t('contact.info.hours'),
//       value: t('contact.info.hoursValue'),
//     },
//   ];

//   return (
//     <section id="contact" className="relative pb-20 bg-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(245, 158, 11, 0.2) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
//             `,
//             backgroundSize: '60px 60px'
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Contact Content - Single Row Layout */}
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Contact Info - Left Side */}
//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Header with Icon */}
//             <div>
//               <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
//                 <span className="text-3xl">📧</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
//                 {t('contact.title')}
//               </h2>
//               <p className="text-lg text-secondary-600 mb-8">
//                 {t('contact.subtitle')}
//               </p>
//             </div>

//             {/* Contact Info List */}
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start gap-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <div className="text-2xl">{info.icon}</div>
//                   <div>
//                     <p className="text-secondary-600 text-sm">{info.label}</p>
//                     <p className="text-secondary-900 font-medium">{info.value}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Contact Form - Right Side */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-secondary-50 rounded-3xl shadow-xl p-8 md:p-10 border border-secondary-200">
//               <form onSubmit={handleSubmit} className="space-y-5">
//               <FloatingLabelInput
//                 label={t('contact.form.name')}
//                 value={formData.name}
//                 onChange={(value) => setFormData({ ...formData, name: value })}
//                 error={errors.name}
//                 required
//               />

//               <FloatingLabelInput
//                 label={t('contact.form.email')}
//                 type="email"
//                 value={formData.email}
//                 onChange={(value) => setFormData({ ...formData, email: value })}
//                 error={errors.email}
//                 required
//               />

//               <FloatingLabelInput
//                 label={t('contact.form.phone')}
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(value) => setFormData({ ...formData, phone: value })}
//               />

//               <FloatingLabelInput
//                 label={t('contact.form.subject')}
//                 value={formData.subject}
//                 onChange={(value) => setFormData({ ...formData, subject: value })}
//               />

//               <FloatingLabelInput
//                 label={t('contact.form.message')}
//                 value={formData.message}
//                 onChange={(value) => setFormData({ ...formData, message: value })}
//                 error={errors.message}
//                 required
//                 multiline
//                 rows={4}
//               />

//               {/* Submit Button */}
//               <motion.button
//                 type="submit"
//                 className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                 whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                 whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
//               </motion.button>

//               {/* Success Message */}
//               {isSuccess && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
//                 >
//                   {t('contact.form.success')}
//                 </motion.div>
//               )}

//               {/* Global Error */}
//               {errors.global && (
//                 <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-center rounded-lg">
//                   {errors.global}
//                 </div>
//               )}
//             </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { FloatingLabelInput } from "./ui/FloatingLabelInput";
// import emailjs from "@emailjs/browser";

// export const ContactSection = () => {
//   const { t } = useTranslation();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     if (!formData.name.trim()) newErrors.name = t("contact.form.errors.name");
//     if (!formData.email.trim()) {
//       newErrors.email = t("contact.form.errors.email");
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = t("contact.form.errors.emailInvalid");
//     }
//     if (!formData.message.trim())
//       newErrors.message = t("contact.form.errors.message");
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setErrors({});

//     try {
//       await emailjs.send(
//         "service_gwdgjge",
//         "template_f4y3kaw",
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           phone: formData.phone,
//           subject: formData.subject,
//           message: formData.message,
//         },
//         "knE8Uzpq_5-EwbADs"
//       );

//       setIsSuccess(true);
//       setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//     } catch (err) {
//       console.error("EmailJS Error:", err);
//       setErrors({ global: "Failed to send message. Try again later." });
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setIsSuccess(false), 5000);
//     }
//   };

//   // ✅ Email & phone now clickable
//   const contactInfo = [
//     {
//       icon: "📍",
//       label: t("contact.info.address"),
//       value: "Riyadh, Saudi Arabia",
//     },
//     {
//       icon: "📧",
//       label: t("contact.info.email"),
//       value: (
//         <a
//           href="mailto:it@rakeezsolutions.sa"
//           // className="text-primary-600 hover:text-primary-800 transition-colors"
//         >
//           it@rakeezsolutions.sa
//         </a>
//       ),
//     },
//     {
//       icon: "📞",
//       label: t("contact.info.phone"),
//       value: (
//         <a
//           href="tel:+966536499916"
//           // className="text-primary-600 hover:text-primary-800 transition-colors"
//         >
//           +966 536499916
//         </a>
//       ),
//     },
//     {
//       icon: "🕐",
//       label: t("contact.info.hours"),
//       value: t("contact.info.hoursValue"),
//     },
//   ];

//   return (
//     <section id="contact" className="relative pb-20 bg-white overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(245, 158, 11, 0.2) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Left - Info */}
//           <motion.div
//             className="space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div>
//               <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
//                 <span className="text-3xl">📧</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
//                 {t("contact.title")}
//               </h2>
//               <p className="text-lg text-secondary-600 mb-8">
//                 {t("contact.subtitle")}
//               </p>
//             </div>

//             {/* Contact Info */}
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex items-start gap-4"
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <div className="text-2xl">{info.icon}</div>
//                   <div>
//                     <p className="text-secondary-600 text-sm">{info.label}</p>
//                     <p className="text-secondary-900 font-medium">
//                       {info.value}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right - Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-secondary-50 rounded-3xl shadow-xl p-8 md:p-10 border border-secondary-200">
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <FloatingLabelInput
//                   label={t("contact.form.name")}
//                   value={formData.name}
//                   onChange={(value) =>
//                     setFormData({ ...formData, name: value })
//                   }
//                   error={errors.name}
//                   required
//                 />

//                 <FloatingLabelInput
//                   label={t("contact.form.email")}
//                   type="email"
//                   value={formData.email}
//                   onChange={(value) =>
//                     setFormData({ ...formData, email: value })
//                   }
//                   error={errors.email}
//                   required
//                 />

//                 <FloatingLabelInput
//                   label={t("contact.form.phone")}
//                   type="tel"
//                   value={formData.phone}
//                   onChange={(value) =>
//                     setFormData({ ...formData, phone: value })
//                   }
//                 />

//                 <FloatingLabelInput
//                   label={t("contact.form.subject")}
//                   value={formData.subject}
//                   onChange={(value) =>
//                     setFormData({ ...formData, subject: value })
//                   }
//                 />

//                 <FloatingLabelInput
//                   label={t("contact.form.message")}
//                   value={formData.message}
//                   onChange={(value) =>
//                     setFormData({ ...formData, message: value })
//                   }
//                   error={errors.message}
//                   required
//                   multiline
//                   rows={4}
//                 />

//                 <motion.button
//                   type="submit"
//                   className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                   whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
//                   whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting
//                     ? t("contact.form.sending")
//                     : t("contact.form.submit")}
//                 </motion.button>

//                 {isSuccess && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
//                   >
//                     {t("contact.form.success")}
//                   </motion.div>
//                 )}

//                 {errors.global && (
//                   <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-center rounded-lg">
//                     {errors.global}
//                   </div>
//                 )}
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FloatingLabelInput } from "./ui/FloatingLabelInput";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t("contact.form.errors.name");
    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.errors.email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("contact.form.errors.emailInvalid");
    }
    if (!formData.message.trim())
      newErrors.message = t("contact.form.errors.message");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      await emailjs.send(
        "service_gwdgjge",
        "template_f4y3kaw",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "knE8Uzpq_5-EwbADs"
      );

      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setErrors({ global: "Failed to send message. Try again later." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  // ✅ Email, phone clickable — and address opens Google Maps
  const contactInfo = [
    {
      icon: "📍",
      label: t("contact.info.address"),
      value: (
      <a
        href="https://www.google.com/maps?q=24.8241495,46.7484578"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition-colors"
        >
        Riyadh, Saudi Arabia
      </a>
      ),
    },
    {
      icon: "📧",
      label: t("contact.info.email"),
      value: (
        <a href="mailto:it@rakeezsolutions.sa" className=" hover:text-orange-400  transition-colors">
          it@rakeezsolutions.sa
        </a>
      ),
    },
    {
      icon: "📞",
      label: t("contact.info.phone"),
      value: (
        <a href="tel:+966536499916" className=" hover:text-orange-400  transition-colors">
          +966 536499916
        </a>
      ),
    },
    {
      icon: "🕐",
      label: t("contact.info.hours"),
      value: t("contact.info.hoursValue"),
    },
  ];

  return (
    <section id="contact" className="relative pb-20 bg-white overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(245, 158, 11, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6   lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info */}
          <motion.div
            className="space-y-8 pt-16 lg:pt-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              {/* <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">📧</span>
              </div> */}
              <motion.div
                className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: [0, -30, 30, -30, 0], scale: 1.4 }} // ✅ Awab effect added
                transition={{ duration: 0.5 }}
                >
                <span className="text-3xl filter drop-shadow-sm">📧</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
                {t("contact.title")}
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                {t("contact.subtitle")}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <p className="text-secondary-600 text-sm">{info.label}</p>
                    <p className="text-secondary-900 font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ✅ Embedded Google Map */}
            <div className="mt-8 w-full h-[300px] rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14484.646007333278!2d46.748458!3d24.82415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efff9eaae1b97%3A0x567d68a0d1df6b33!2zUmFrZWV6IFNvbHV0aW9ucyAtINix2YPZitiyINin2YTYrdmE2YjZhA!5e0!3m2!1sen!2ssa!4v1760365456274!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary-50 rounded-3xl shadow-xl p-8 md:p-10 mt-36 border border-secondary-200 ">
              <form onSubmit={handleSubmit} className="space-y-7">
                <FloatingLabelInput
                  label={t("contact.form.name")}
                  value={formData.name}
                  onChange={(value) => setFormData({ ...formData, name: value })}
                  error={errors.name}
                  required
                />

                <FloatingLabelInput
                  label={t("contact.form.email")}
                  type="email"
                  value={formData.email}
                  onChange={(value) => setFormData({ ...formData, email: value })}
                  error={errors.email}
                  required
                />

                <FloatingLabelInput
                  label={t("contact.form.phone")}
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => setFormData({ ...formData, phone: value })}
                />

                <FloatingLabelInput
                  label={t("contact.form.subject")}
                  value={formData.subject}
                  onChange={(value) => setFormData({ ...formData, subject: value })}
                />

                <FloatingLabelInput
                  label={t("contact.form.message")}
                  value={formData.message}
                  onChange={(value) => setFormData({ ...formData, message: value })}
                  error={errors.message}
                  required
                  multiline
                  rows={4}
                />

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
                </motion.button>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
                  >
                    {t("contact.form.success")}
                  </motion.div>
                )}

                {errors.global && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-center rounded-lg">
                    {errors.global}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
