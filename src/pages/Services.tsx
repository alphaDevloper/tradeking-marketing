// src/pages/Services.tsx
// Services page — composes ServicesHero and shared sections.

import ServicesHero from '../components/sections/ServicesHero';
import Footer from '../components/layout/Footer';

export default function Services() {
  return (
    <main className="page page--services" aria-label="TradeKing Marketing services">
      <ServicesHero />
      <Footer />
    </main>
  );
}
