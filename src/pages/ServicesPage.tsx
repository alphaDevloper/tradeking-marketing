import React from 'react'
import ServicesHero from '../components/sections/ServicesHero'
import Services from '../components/sections/Services'
import Footer from '../components/layout/Footer'

function ServicesPage() {
  return (
    <main className="page page--services" aria-label="TradeKing Marketing services">
      <ServicesHero/>
      <Services/>
      <Footer/>
    </main>
  )
}

export default ServicesPage