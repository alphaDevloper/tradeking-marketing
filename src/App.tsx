import './App.css'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <>
      <Navbar />
      {/* Page content goes here — sections will be added progressively */}
      <main>
        <section className="section" style={{ minHeight: '100vh' }}>
          <div className="container-site" style={{ paddingTop: '3rem' }}>
            <span className="accent-bar" />
            <h1 style={{ marginTop: '1rem' }}>
              Websites Built for <span className="text-accent">Local Service Businesses</span>
            </h1>
            <p style={{ marginTop: '1rem', maxWidth: '560px' }}>
              TradeKing Marketing builds high-converting websites for roofers, HVAC companies,
              plumbers, and other local service businesses ready to dominate their market.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn-primary">Get a Free Quote</a>
              <a href="/portfolio" className="btn-secondary">View Our Work</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App