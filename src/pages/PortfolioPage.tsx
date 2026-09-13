// src/pages/PortfolioPage.tsx
// Portfolio page.

import PortfolioHero from '../components/sections/PortfolioHero';
import PortfolioGallery from '../components/sections/PortfolioGallery';
import PortfolioBrandCta from '../components/sections/PortfolioBrandCta';
import PortfolioContactForm from '../components/sections/PortfolioContactForm';
import Footer from '../components/layout/Footer';
import FAQ from '../components/sections/FAQ';

export default function PortfolioPage() {
  return (
    <main className="page page--portfolio" aria-label="Portfolio">
      <PortfolioHero />
      <PortfolioGallery />
      <PortfolioBrandCta />
      <PortfolioContactForm />
      <FAQ/>
      <Footer />
    </main>
  );
}
