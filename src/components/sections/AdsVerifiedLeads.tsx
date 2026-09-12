// src/components/sections/AdsVerifiedLeads.tsx
// "Verified Leads, Every Single Day" intro section for Local Service Ads page.
// Composition:
//   • Two-column layout on black background
//   • Left column: Google Guaranteed badge with subtle green radial glow
//   • Right column: "RESULTS" eyebrow, headline with "EVERY SINGLE DAY." in red-orange gradient, body copy

import googleSeal from '../../assets/google-guarantee-badge.png';

export default function AdsVerifiedLeads() {
  return (
    <section className="ads-verified" aria-label="Google Guaranteed verified leads">
      <div className="ads-verified__container">
        
        {/* Left column: Google Guaranteed seal badge with green radial glow */}
        <div className="ads-verified__left">
          <div className="ads-verified__badge-wrapper">
            <div className="ads-verified__glow" aria-hidden="true" />
            <img
              src={googleSeal}
              alt="Google Guaranteed Service Provider seal"
              className="ads-verified__badge-img"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right column: text content */}
        <div className="ads-verified__right">
          <span className="ads-verified__eyebrow">RESULTS</span>
          
          <h2 className="ads-verified__headline">
            VERIFIED LEADS,{' '}
            <span className="ads-verified__accent">EVERY SINGLE DAY.</span>
          </h2>

          <p className="ads-verified__paragraph">
            Being a Google Guaranteed service provider is the single most powerful trust
            signal a contractor can have online. Almost every client we work with traces
            their best leads directly back to LSA.
          </p>
        </div>

      </div>
    </section>
  );
}
