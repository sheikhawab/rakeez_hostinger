import { MainLayout } from "./components/MainLayout";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";
import { TechnologiesSection } from "./components/TechnologiesSection";
import { ClientsSection } from "./components/ClientsSection";
import "./App.css";
import { Faq } from "./components/Faq";
import WhatsAppFloating from "./components/WhatsApp";
// import Team from './components/TeamMembes'
// import CardGallery from './components/Picture'

import Team from "./components/TeamPhotos";
import Price from "./components/Price";
// import Team from './components/TeamMembes'

function App() {
  return (
    <> 
          {/* ✅ React 19 Dynamic Head Tags */}

      <title>Rakeez Solutions | Website & App Development in Saudi Arabia</title>
      <meta
        name="description"
        content="Rakeez Solutions builds high-quality websites and mobile apps in Riyadh, empowering businesses across Saudi Arabia with modern digital solutions."
      />
      <meta
        name="keywords"
        content="web development, app development, IT company, Riyadh, Saudi Arabia, digital solutions, Rakeez"
      />
      <link rel="canonical" href="https://rakeezsolutions.sa/" />

      {/* ✅ Open Graph / Social */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta
        property="og:title"
        content="Rakeez Solutions | Professional Web & App Development in Saudi Arabia"
      />
      <meta
        property="og:description"
        content="Trusted by businesses across Riyadh and Jeddah for powerful digital products that drive growth."
      />
      <meta property="og:url" content="https://rakeezsolutions.sa/" />
      <meta property="og:image" content="https://rakeezsolutions.sa/logo.jpg" />
      <meta property="og:site_name" content="Rakeez Solutions" />

      {/* ✅ Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Rakeez Solutions | IT & Web Development Company"
      />
      <meta
        name="twitter:description"
        content="Professional website & app development in Saudi Arabia."
      />
      <meta
        name="twitter:image"
        content="https://rakeezsolutions.sa/twitter-image.jpg"
      />



      <MainLayout>
        <HeroSection />
        <TechnologiesSection />
        <ServicesSection />
        <ClientsSection />
        <AboutSection />
        <FeaturesSection />
        <PortfolioSection />
        {/* <PortfolioGrid/> */}
        <Faq />
        <Team />
        {/* <CardGallery/> */}
        <Price />
        <ContactSection />
        <WhatsAppFloating />
      </MainLayout>
    </>
  );
}

export default App;
