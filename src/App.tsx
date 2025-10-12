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
