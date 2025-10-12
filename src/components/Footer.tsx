import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
// import { Logo } from './Logo';

import FacebookIcon from '@mui/icons-material/Facebook';

import TwitterIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// ye 2 icons react-icons se hain or upr waley mui se hain
import { FaTiktok } from 'react-icons/fa6';
import { FaSnapchat } from 'react-icons/fa6';

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  const isRTL = i18n.language === 'ar';

  const quickLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.portfolio'), href: '#portfolio' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const services = [
    t('services.webDev.title'),
    t('services.customSoftware.title'),
    t('services.mobileApps.title'),
    t('services.uiux.title'),
  ];

  const socialLinks = [
    { name: 'Facebook', icon:  <FacebookIcon />, href: 'https://www.facebook.com/people/Rakeez-Solutions/61581383070987/' },
    { name: 'Twitter', icon:<TwitterIcon/> , href: 'https://x.com/RakeezSolutions' },
    { name: 'LinkedIn', icon:<LinkedInIcon/> , href: 'https://www.linkedin.com/in/rakeez-rakeez-b792a2389/' },
    { name: 'Instagram', icon:<InstagramIcon/> , href: 'https://www.instagram.com/rakeez_solutions/' },
    { name: 'Snapchat', icon: <FaSnapchat/>, href: 'https://www.snapchat.com/add/rakeezsolutions?share_id=VCa8jhfFgvU&locale=en-US' },
    { name: 'Tiktok', icon: <FaTiktok/>, href: 'https://www.tiktok.com/@rakeezconsultations'},
    { name: 'Whatsapp', icon: <WhatsAppIcon/>, href: 'https://wa.me/966536499916'},
  ];
  

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {/* <Logo className="w-12 h-12" /> */}
              <div>
                <h3 className="text-xl font-bold text-white">{t('footer.company')}</h3>
                <p className="text-sm text-primary-400 font-medium">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2"
                    whileHover={{ x: isRTL ? -5 : 5 }}
                  >
                    <span className="text-primary-500">→</span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <motion.div
                    className="text-secondary-300 hover:text-primary-400 transition-colors cursor-pointer text-sm flex items-center gap-2"
                    whileHover={{ x: isRTL ? -5 : 5 }}
                  >
                    <span className="text-primary-500">✦</span>
                    {service}
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">{t('footer.social')}</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"                     
                  rel="noopener noreferrer"    
                  className="w-11 h-11 rounded-xl flex items-center justify-center hover:bg-primary-500 hover:border-primary-400 transition-all"
                   whileHover={{ scale: 1.1, y: -3 }}
                   whileTap={{ scale: 0.95 }}
                   aria-label={social.name}
                   >
                    {/* bg-secondary-700/50 backdrop-blur-sm border border-secondary-600   */}
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
            <div className="space-y-3 text-sm text-secondary-300">
              <p className="flex items-center gap-2">
                <span className="text-primary-500">✉</span>
                {/* info@rakeez.com */}
                 <a
                  href="it@rakeezsolutions.sa"
                  className="hover:text-primary-400 transition-colors"
                  >
                  it@rakeezsolutions.sa
                  </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary-500">📞</span>
                {/* +966 536499916 */}
                <a
                href="tel:+966536499916"
                className="hover:text-primary-400 transition-colors"
                >
                +966 536499916
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm">
              {t('footer.copyright', { year: currentYear })}
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                {t('footer.termsOfService')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
