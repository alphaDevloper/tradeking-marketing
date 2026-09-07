// src/pages/Home.tsx
// Home page — composes the existing home page sections.

import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeaturedWork from '../components/sections/FeaturedWork';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main className="page page--home" aria-label="TradeKing Marketing home">
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedWork />
      <FAQ />
      <Footer />
    </main>
  );
}
