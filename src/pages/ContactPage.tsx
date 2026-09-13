// src/pages/ContactPage.tsx
// Contact page.

import ContactHero from '../components/sections/ContactHero';
import GetInTouch from '../components/sections/GetInTouch';
import Footer from '../components/layout/Footer';

export default function ContactPage() {
  return (
    <main className="page page--contact" aria-label="Contact Us">
      <ContactHero />
      <GetInTouch />
      <Footer />
    </main>
  );
}
