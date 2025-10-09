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
// import { PortfolioGrid } from './components/PortfolioGrid'


function App() {
  return (
/**   <MainLayout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </MainLayout> */
<>
   <MainLayout>
      <HeroSection />
       <MacbookScrollDemo/>
       {/* <LampDemo/> */}
      <ServicesSection />
      {/* <AboutSection /> */}
      <FeaturesSection />
      <PortfolioSection />
      {/* <PortfolioGrid/> */}
      <TestimonialsSection />
      <ContactSection />
   </MainLayout>
</>
  )
}

export default App
