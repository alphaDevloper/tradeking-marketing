// src/components/sections/ContractorMap.tsx
// "Trusted By Contractors In All 50 States" map/coverage section.
// Composition:
//   • Light gray background (#F2F2F2)
//   • LEFT COLUMN:
//       - Eyebrow: "COAST TO COAST" (11.52px / 700 / red)
//       - Headline: "TRUSTED BY" / "CONTRACTORS" / "IN ALL 50 STATES" (38.4px / 800)
//       - Body paragraph: 14px / 400 in medium gray
//       - Stat blocks: 200+ / 50 / 24h (40px / 800) with labels (10.88px / 700)
//   • RIGHT COLUMN (Interactive map):
//       - Satellite view Google Maps embed
//       - Floating info card overlay (King Contractor Agency, 4.3 ★ (16))
//       - Prominent red location pin in central/eastern US
//       - Standard Google Maps UI controls (toggle button, fullscreen, attribution bar)

import { Star, Info, ExternalLink, Maximize2 } from 'lucide-react';

export default function ContractorMap() {
  return (
    <section className="contractor-map" id="coverage-map" aria-label="Trusted By Contractors In All 50 States">
      <div className="contractor-map__container">

        {/* ── LEFT COLUMN: Text Content & Stats ── */}
        <div className="contractor-map__left">
          <span className="contractor-map__eyebrow">COAST TO COAST</span>

          <h2 className="contractor-map__heading">
            <span className="contractor-map__heading-line">TRUSTED BY</span>
            <span className="contractor-map__heading-line">CONTRACTORS</span>
            <span className="contractor-map__heading-line">
              IN <span className="contractor-map__heading-accent">ALL 50 STATES</span>
            </span>
          </h2>

          <p className="contractor-map__paragraph">
            From coast to coast, we've built brands for roofing, HVAC, plumbing, solar, and construction companies. Wherever you are, we can make you the name homeowners call first.
          </p>

          <div className="contractor-map__stats">
            <div className="contractor-map__stat">
              <span className="contractor-map__stat-number">200+</span>
              <span className="contractor-map__stat-label">BRANDS BUILT</span>
            </div>

            <div className="contractor-map__stat">
              <span className="contractor-map__stat-number">50</span>
              <span className="contractor-map__stat-label">STATES SERVED</span>
            </div>

            <div className="contractor-map__stat">
              <span className="contractor-map__stat-number">24h</span>
              <span className="contractor-map__stat-label">RESPONSE TIME</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Satellite Map Embed with Overlays ── */}
        <div className="contractor-map__right">
          <div className="contractor-map__map-card">
            {/* Google Maps Satellite Embed iframe */}
            <iframe
              title="Google Map Satellite View of United States"
              src="https://maps.google.com/maps?q=39.5,-98.35&z=4&t=k&output=embed"
              className="contractor-map__iframe"
              loading="lazy"
              allowFullScreen
            />

            {/* Floating Info Card Overlay (Top-Left) */}
            <div className="contractor-map__info-card">
              <div className="contractor-map__info-card-header">
                <span className="contractor-map__info-title">King Contractor Agency</span>
                <a
                  href="https://maps.google.com/?q=King+Contractor+Agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contractor-map__info-link"
                  aria-label="Open in Google Maps"
                >
                  <ExternalLink size={14} strokeWidth={2.2} />
                </a>
              </div>
              <div className="contractor-map__info-rating">
                <span className="contractor-map__rating-val">4.3</span>
                <Star size={13} fill="#F59E0B" stroke="#F59E0B" aria-hidden="true" />
                <a
                  href="https://maps.google.com/?q=King+Contractor+Agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contractor-map__review-link"
                >
                  (16)
                </a>
                <Info size={13} className="contractor-map__info-icon" aria-hidden="true" />
              </div>
            </div>

            {/* Red Location Pin in Central/Eastern US */}
            <div className="contractor-map__pin-container" aria-hidden="true">
              <div className="contractor-map__pin-pulse" />
              <svg
                viewBox="0 0 24 24"
                className="contractor-map__pin-svg"
                fill="#EF4444"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C7.58 0 4 3.58 4 8c0 5.25 8 16 8 16s8-10.75 8-16c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
              </svg>
            </div>

            {/* Map Toggle Thumbnail Button (Bottom-Left) */}
            <button
              type="button"
              className="contractor-map__toggle-btn"
              aria-label="Toggle map view"
            >
              <div className="contractor-map__toggle-inner" />
            </button>

            {/* Fullscreen / Zoom Control (Bottom-Right) */}
            <button
              type="button"
              className="contractor-map__ctrl-btn"
              aria-label="Toggle fullscreen"
            >
              <Maximize2 size={16} strokeWidth={2.2} />
            </button>

            {/* Map Bottom Attribution Bar */}
            <div className="contractor-map__attribution-bar" aria-hidden="true">
              <span className="contractor-map__attribution-google">Google</span>
              <div className="contractor-map__attribution-links">
                <span>Keyboard shortcuts</span>
                <span>Map data ©2026 Google Imagery ©2026 NASA</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
