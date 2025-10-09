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
import Team from './components/TeamMembes'

// import { PortfolioGrid } from './components/PortfolioGrid'


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
      <Team/>
      <ContactSection />
      <WhatsAppFloating/>
   </MainLayout>
</>
  )
}

export default App

