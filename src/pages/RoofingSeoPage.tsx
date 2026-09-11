// src/pages/RoofingSeoPage.tsx
// Roofing SEO Services page.

import RoofingSeoHero from '../components/sections/RoofingSeoHero';
import SeoIntro from '../components/sections/SeoIntro';
import WhySeo from '../components/sections/WhySeo';
import SeoServices from '../components/sections/SeoServices';
import SeoProcess from '../components/sections/SeoProcess';
import Footer from '../components/layout/Footer';

export default function RoofingSeoPage() {
  return (
    <main className="page page--roofing-seo" aria-label="Roofing SEO services">
      <RoofingSeoHero />
      <SeoIntro />
      <WhySeo />
      <SeoServices />
      <SeoProcess />
      <Footer />
    </main>
  );
}
