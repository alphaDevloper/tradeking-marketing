// src/pages/WebDesignPage.tsx
// Website Design & Development service page.

import WebDesignHero from '../components/sections/WebDesignHero';
import Footer from '../components/layout/Footer';

export default function WebDesignPage() {
  return (
    <main className="page page--webdesign" aria-label="Website design and development">
      <WebDesignHero />
      <Footer />
    </main>
  );
}
