// src/pages/LocalServiceAdsPage.tsx
// Local Service Ads service page.

import LocalServiceAdsHero from '../components/sections/LocalServiceAdsHero';
import Footer from '../components/layout/Footer';

export default function LocalServiceAdsPage() {
  return (
    <main className="page page--local-ads" aria-label="Local Service Ads">
      <LocalServiceAdsHero />
      <Footer />
    </main>
  );
}
