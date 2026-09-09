// src/pages/WebDesignPage.tsx
// Website Design & Development service page.

import WebDesignHero from '../components/sections/WebDesignHero';
import RoofingIntro from '../components/sections/RoofingIntro';
import WebsiteFeatures from '../components/sections/WebsiteFeatures';


export default function WebDesignPage() {
  return (
    <main className="page page--webdesign" aria-label="Website design and development">
      <WebDesignHero />
      <RoofingIntro />
      <WebsiteFeatures />
    </main>
  );
}
