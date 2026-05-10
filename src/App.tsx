import { Suspense, lazy } from "react";
import { MainLayout } from "./components/MainLayout";
const HeroSection = lazy(() => import("./components/HeroSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const AboutSection = lazy(() => import("./components/AboutSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const ContactSection = lazy(() => import("./components/ContactSection"));
const TechnologiesSection = lazy(
  () => import("./components/TechnologiesSection")
);
const ClientsSection = lazy(() => import("./components/ClientsSection"));
import "./App.css";
const Faq = lazy(() => import("./components/Faq"));
const WhatsAppFloating = lazy(() => import("./components/WhatsApp"));
const VoiceWidget = lazy(() => import("./components/VoiceWidget"));
const Team = lazy(() => import("./components/TeamPhotos"));
const Price = lazy(() => import("./components/Price"));

function App() {
  return (
    <>
      {/* ✅ React 19 Dynamic Head Tags */}

      <title>
        Rakeez Solutions | Website & App Development in Saudi Arabia
      </title>
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
        <Suspense fallback={<div />}>
          {" "}
          {/* keep fallback lightweight to avoid pulling heavy libs */}
          <TechnologiesSection />
          <ServicesSection />
          <ClientsSection />
          <AboutSection />
          <FeaturesSection />
          <PortfolioSection />
          <Faq />
          <Team />
          <Price />
          <ContactSection />
          <WhatsAppFloating />
          <VoiceWidget />
        </Suspense>
      </MainLayout>
    </>
  );
}

export default App;
