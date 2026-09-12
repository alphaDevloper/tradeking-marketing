// src/pages/LocalServiceAdsPage.tsx
// Local Service Ads service page.

import LocalServiceAdsHero from '../components/sections/LocalServiceAdsHero';
import AdsVerifiedLeads from '../components/sections/AdsVerifiedLeads';
import AdsTopByAccident from '../components/sections/AdsTopByAccident';
import WhyLsa from '../components/sections/WhyLsa';
import LsaPackages from '../components/sections/LsaPackages';
import LsaFinalCta from '../components/sections/LsaFinalCta';
import Footer from '../components/layout/Footer';
import FAQ from '../components/sections/FAQ';

export default function LocalServiceAdsPage() {
  return (
    <main className="page page--local-ads" aria-label="Local Service Ads">
      <LocalServiceAdsHero />
      <AdsVerifiedLeads />
      <AdsTopByAccident />
      <WhyLsa />
      <LsaPackages />
      <LsaFinalCta />
      <FAQ/>
      <Footer />
    </main>
  );
}
