// src/components/sections/SeoFinalCta.tsx
// "Ready To Own Page One In Your Market?" — final CTA section for Roofing SEO page.
// Composition:
//   • Centered layout on black background with subtle red radial glow behind CTA
//   • Headline: "READY TO OWN PAGE ONE IN YOUR MARKET?" (38.4px, weight 700, "PAGE ONE" red-to-orange gradient)
//   • Subtitle: 14px, weight 400, light gray
//   • CTA button: 13px, weight 700, uppercase, red-to-orange gradient with glow

export default function SeoFinalCta() {
  return (
    <section className="seo-final-cta" aria-label="Book your free strategy call">
      {/* Red radial glow centered behind the CTA button */}
      <div className="seo-final-cta__glow" aria-hidden="true" />

      <div className="seo-final-cta__container">
        <h2 className="seo-final-cta__heading">
          READY TO OWN{' '}
          <span className="seo-final-cta__accent">PAGE ONE</span>{' '}
          IN YOUR MARKET?
        </h2>

        <p className="seo-final-cta__subtitle">
          Join 200+ contractors across America who trust King Contractor Agency to handle
          their SEO, build their authority, and generate leads that actually convert.
        </p>

        <a
          href="/contact"
          className="seo-final-cta__btn"
          id="seo-final-cta-btn"
        >
          BOOK YOUR FREE STRATEGY CALL
        </a>
      </div>
    </section>
  );
}
