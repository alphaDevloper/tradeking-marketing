// src/components/sections/SeoPricing.tsx
// "Roofing SEO Pricing" section.
// Composition:
//   • Wide rounded card container with dark background and subtle red radial glow
//   • Left column: centered pricing display ($1K–$5K, PER MONTH)
//   • Right column: body paragraph with bold white emphasis + red gradient CTA button

export default function SeoPricing() {
  return (
    <section className="seo-pricing" aria-label="Roofing SEO pricing">
      <div className="seo-pricing__container">

        {/* Card container with subtle red radial glow */}
        <div className="seo-pricing__card">
          <div className="seo-pricing__card-glow" aria-hidden="true" />

          {/* Left column: pricing display */}
          <div className="seo-pricing__left">
            <span className="seo-pricing__eyebrow">ROOFING SEO PRICING</span>
            <div className="seo-pricing__price" aria-label="Price: 1,000 to 5,000 dollars">
              $1K–$5K
            </div>
            <span className="seo-pricing__period">PER MONTH</span>
          </div>

          {/* Right column: body copy & CTA */}
          <div className="seo-pricing__right">
            <p className="seo-pricing__desc">
              Most roofing SEO engagements run between $1,000 and $5,000 per month
              depending on your market, competition, and goals. Unlike paid ads that stop
              the second you stop paying,{' '}
              <strong className="seo-pricing__bold">
                SEO builds long-term equity that keeps generating leads for years.
              </strong>
            </p>

            <a
              href="/contact"
              className="seo-pricing__cta"
              id="seo-pricing-cta"
            >
              GET YOUR FREE SEO STRATEGY
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
