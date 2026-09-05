import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import WhyChooseUs from './components/sections/WhyChooseUs'
import FeaturedWork from './components/sections/FeaturedWork'
import FAQ from './components/sections/FAQ'
import Footer from './components/layout/Footer'

export default function App() {
  const [activePage, setActivePage] = useState('/')

  function navigate(href: string) {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setActivePage(href)
  }

  return (
    <>
      <Navbar activeHref={activePage} onNavigate={navigate} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedWork />
      <FAQ />
      <Footer />
    </>
  )
}