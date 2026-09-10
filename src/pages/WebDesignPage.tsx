// src/pages/WebDesignPage.tsx
// Website Design & Development service page.

import WebDesignHero from '../components/sections/WebDesignHero';
import RoofingIntro from '../components/sections/RoofingIntro';
import WebsiteFeatures from '../components/sections/WebsiteFeatures';
import Process from '../components/sections/Process';
import Packages from '../components/sections/Packages';
import FeaturedWork from '../components/sections/FeaturedWork';
import FinalCTA from '../components/sections/FinalCTA';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/layout/Footer';


export default function WebDesignPage() {
  return (
    <main className="page page--webdesign" aria-label="Website design and development">
      <WebDesignHero />
      <RoofingIntro />
      <WebsiteFeatures />
      <Process />
      <Packages />
      <FeaturedWork/>
      <FinalCTA />
      <FAQ/>
      <Footer/>
    </main>
  );
}
