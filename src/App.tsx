import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'

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
    </>
  )
}