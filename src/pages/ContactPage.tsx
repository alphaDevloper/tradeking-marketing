// src/pages/ContactPage.tsx
// Contact page.

import ContactHero from '../components/sections/ContactHero';
import GetInTouch from '../components/sections/GetInTouch';
import ContractorMap from '../components/sections/ContractorMap';
import Footer from '../components/layout/Footer';
import FAQ from '../components/sections/FAQ';

export default function ContactPage() {
  return (
    <main className="page page--contact" aria-label="Contact Us">
      <ContactHero />
      <GetInTouch />
      <ContractorMap />
      <FAQ/>
      <Footer />
    </main>
  );
}
