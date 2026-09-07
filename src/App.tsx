import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'

const ABOUT_PATH = '/about-us'

export default function App() {
  const [activePage, setActivePage] = useState<string>(() => {
    return window.location.pathname === ABOUT_PATH ? ABOUT_PATH : '/'
  })

  // Sync state with browser URL so manual URL changes work
  useEffect(() => {
    function syncFromUrl() {
      if (window.location.pathname === ABOUT_PATH) {
        setActivePage(ABOUT_PATH)
      } else {
        setActivePage('/')
      }
    }
    window.addEventListener('popstate', syncFromUrl)
    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [])

  function navigate(href: string) {
    window.scrollTo({ top: 0, behavior: 'instant' })
    // Only handle pages we've actually built. Everything else stays on Home.
    if (href === '/about' || href === ABOUT_PATH) {
      setActivePage(ABOUT_PATH)
      window.history.pushState({}, '', ABOUT_PATH)
    } else if (href === '/') {
      setActivePage('/')
      window.history.pushState({}, '', '/')
    } else {
      // Not-yet-built pages stay on Home without changing URL
      setActivePage('/')
    }
  }

  return (
    <>
      <Navbar activeHref={activePage} onNavigate={navigate} />
      {activePage === ABOUT_PATH ? <About /> : <Home />}
    </>
  )
}
