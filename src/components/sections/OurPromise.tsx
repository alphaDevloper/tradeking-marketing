// src/components/sections/OurPromise.tsx
// "Our Promise / Satisfaction Guarantee" section — two-column layout inside a
// large rounded card with a subtle red radial glow behind the gold seal badge.
// Left column holds the gold satisfaction guarantee seal; right column holds
// the eyebrow label, two-line headline (white + red), and supporting copy.

import { promiseContent } from '../../data/about';

export default function OurPromise() {
  const { badge, eyebrow, headlineLead, headlineAccent, body1, body2 } = promiseContent;

  return (
    <section className="promise" aria-label="Our promise and satisfaction guarantee">
      <div className="promise__container">
        <div className="promise__card">

          {/* ── Left column: gold satisfaction guarantee badge ── */}
          <div className="promise__media">
            <div className="promise__media-glow" aria-hidden="true" />
            <img
              src={badge.src}
              alt={badge.alt}
              className="promise__badge"
              loading="lazy"
            />
          </div>

          {/* ── Right column: text content ── */}
          <div className="promise__body">
            <span className="promise__eyebrow">{eyebrow}</span>

            <h2 className="promise__headline">
              <span className="promise__hl-lead">{headlineLead}</span>
              <span className="promise__hl-accent">{headlineAccent}</span>
            </h2>

            <p className="promise__p">{body1}</p>
            <p className="promise__p">{body2}</p>
          </div>

        </div>
      </div>
    </section>
  );
}