// src/components/sections/PortfolioBrandCta.tsx
// "Your Brand Could Be Right Here" portfolio CTA section.
// Composition:
//   • Two-column layout inside a large rounded card with a red dashed border on black background
//   • Left column: Satisfaction guarantee seal image with subtle red glow
//   • Right column:
//     - 2-line headline: "YOUR BRAND COULD BE" (white) + "RIGHT HERE." (red-to-orange gradient italic) (38.4px, weight 800)
//     - Body copy: 14px, weight 400, light gray

import satisfactionSeal from '../../assets/tradeking_satisfaction.png';

export default function PortfolioBrandCta() {
  return (
    <section className="portfolio-brand" aria-label="Your Brand Could Be Right Here">
      <div className="portfolio-brand__container">
        <div className="portfolio-brand__card">
          {/* Subtle red radial glow inside card */}
          <div className="portfolio-brand__glow" aria-hidden="true" />

          {/* ── Left Column: Badge Image ── */}
          <div className="portfolio-brand__media">
            <div className="portfolio-brand__media-glow" aria-hidden="true" />
            <img
              src={satisfactionSeal}
              alt="TradeKing Marketing Satisfaction Guaranteed Seal"
              className="portfolio-brand__badge"
              loading="lazy"
            />
          </div>

          {/* ── Right Column: Text Content ── */}
          <div className="portfolio-brand__content">
            <h2 className="portfolio-brand__headline">
              <span className="portfolio-brand__hl-line">YOUR BRAND COULD</span>
              <span className="portfolio-brand__hl-line">
                BE <span className="portfolio-brand__accent">RIGHT HERE.</span>
              </span>
            </h2>

            <p className="portfolio-brand__desc">
              200+ contractors trusted us to build their online presence. The ones you see above are
              ranking higher, generating more leads, and closing more jobs because of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
