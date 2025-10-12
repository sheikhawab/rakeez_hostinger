import { MainLayout } from './components/MainLayout'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { AboutSection } from './components/AboutSection'
import { FeaturesSection } from './components/FeaturesSection'
import { PortfolioSection } from './components/PortfolioSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { ContactSection } from './components/ContactSection'
import './App.css'
import {  LampDemo } from './components/Background'
import { MacbookScrollDemo } from './components/MacbookScrollDemo'
import { Faq } from './components/Faq'
import WhatsAppFloating from './components/WhatsApp'
// import Team from './components/TeamMembes'
// import CardGallery from './components/Pictures'
import TeamPhotos from './components/TeamPhotos'






function App() {
  return (

<>
   <MainLayout>
    
      <HeroSection />
       <MacbookScrollDemo/>
       <LampDemo/>
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <PortfolioSection />
      {/* <PortfolioGrid/> */}
      <TestimonialsSection />
      <Faq/>
      {/* <Team/> */}
      {/* <CardGallery/> */}
      {/* <TeamPhotos/> */}
      <TeamPhotos />
      <ContactSection />
      <WhatsAppFloating/>
   </MainLayout>
</>
  )
}

export default App

