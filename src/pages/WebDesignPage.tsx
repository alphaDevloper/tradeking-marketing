// src/pages/WebDesignPage.tsx
// Website Design & Development service page.

import WebDesignHero from '../components/sections/WebDesignHero';
import RoofingIntro from '../components/sections/RoofingIntro';
import WebsiteFeatures from '../components/sections/WebsiteFeatures';
import Process from '../components/sections/Process';


export default function WebDesignPage() {
  return (
    <main className="page page--webdesign" aria-label="Website design and development">
      <WebDesignHero />
      <RoofingIntro />
      <WebsiteFeatures />
      <Process />
    </main>
  );
}
