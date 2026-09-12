// src/components/sections/LsaFinalCta.tsx
// "Ready To Start Getting Google Guaranteed Leads Tomorrow?" final CTA section for Local Service Ads page.
// Composition:
//   • Centered layout on black background with subtle red radial glow behind CTA
//   • Headline: "READY TO START GETTING GOOGLE / GUARANTEED LEADS TOMORROW?" (38.4px, weight 800, "GOOGLE GUARANTEED LEADS" red-to-orange gradient italic)
//   • Subtitle: 14px, weight 400, light gray
//   • CTA button: 13px, weight 700, uppercase, red-to-orange gradient with glow

export default function LsaFinalCta() {
  return (
    <section className="lsa-final-cta" aria-label="Book your free strategy call">
      {/* Red radial glow centered behind the CTA button */}
      <div className="lsa-final-cta__glow" aria-hidden="true" />

      <div className="lsa-final-cta__container">
        <h2 className="lsa-final-cta__heading">
          <span className="lsa-final-cta__hl-line">
            READY TO START GETTING{' '}
            <span className="lsa-final-cta__accent">GOOGLE</span>
          </span>
          <span className="lsa-final-cta__hl-line">
            <span className="lsa-final-cta__accent">GUARANTEED LEADS</span>{' '}
            TOMORROW?
          </span>
        </h2>

        <p className="lsa-final-cta__subtitle">
          Join 200+ contractors across America who trust King Contractor Agency to run their LSA
          campaigns, manage their Google presence, and generate leads that actually convert into
          booked jobs.
        </p>

        <a
          href="/contact"
          className="lsa-final-cta__btn"
          id="lsa-final-cta-btn"
        >
          BOOK YOUR FREE STRATEGY CALL
        </a>
      </div>
    </section>
  );
}
