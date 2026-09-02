import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import PortfolioPage from './pages/PortfolioPage'

export default function App() {
  const [activePage, setActivePage] = useState('/')

  function navigate(href: string) {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setActivePage(href)
  }

  return (
    <>
      <Navbar activeHref={activePage} onNavigate={navigate} />
      {activePage === '/portfolio' ? (
        <PortfolioPage />
      ) : (
        <>
          <Hero />
        </>
      )}
    </>
  )
}