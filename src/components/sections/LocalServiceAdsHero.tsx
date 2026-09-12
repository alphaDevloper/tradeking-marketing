// src/components/sections/LocalServiceAdsHero.tsx
// Local Service Ads page hero section.
// Composition (top → bottom):
//   • "LOCAL SERVICE ADS" pill badge (red border, red text, 11px, weight 700)
//   • 2-line headline with "TOP OF GOOGLE," in red→orange gradient (51px, weight 700)
//   • Supporting subtitle in light gray (15.51px, weight 400)
//   • Horizontal row of 4 industry tags (Roofing, HVAC, Plumbing, Solar) with red check icon
//   • Social proof row (4 avatars + Facebook icon + 5.0 ★ + "Trusted by 200 Contractors Nationwide")
//   • Primary CTA (red-to-orange gradient, white text, 13px, weight 700)
//   • Two tilted laptop mockups at bottom corners emerging from rubble/debris
//   • Dark near-black background with subtle red radial gradient glow

import { CheckCircle2, Star } from 'lucide-react';
import laptopDemo from '../../assets/laptop demo.png';
import laptop from '../../assets/laptop.png';

// ── Data ──────────────────────────────────────────────────────────────────────

const industries = ['Roofing', 'HVAC', 'Plumbing', 'Solar'];

const avatars = [
  { initials: 'JD', color: '#e67e22' },
  { initials: 'AL', color: '#27ae60' },
  { initials: 'MR', color: '#c0392b' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function IndustryBadge({ label }: { label: string }) {
  return (
    <span className="hero-badge">
      <CheckCircle2 size={16} strokeWidth={2.5} className="hero-badge__icon" aria-hidden="true" />
      <span>{label}</span>
    </span>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="hero-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={15} fill="#F5A623" stroke="none" aria-hidden="true" />
      ))}
    </span>
  );
}

// ── LocalServiceAdsHero ───────────────────────────────────────────────────────

export default function LocalServiceAdsHero() {
  return (
    <section className="hero hero--ads" aria-label="Local Service Ads hero section">

      {/* ── Background glow — subtle red radial gradient glow matching home hero & bottom center ── */}
      <div className="hero__glow hero__glow--ads" aria-hidden="true" />

      {/* ── Three-column grid (left mockup / content / right mockup) ── */}
      <div className="hero__grid">

        {/* Left mockup — emerges from rubble */}
        <div className="hero__side hero__side--left" aria-hidden="true">
          <img
            src={laptopDemo}
            alt="Local Service Ads Contractor Website Mockup on Laptop"
            className="hero__mockup hero__mockup--left"
            loading="eager"
          />
        </div>

        {/* Centre content */}
        <div className="hero__body hero__body--ads">

          {/* 1. "LOCAL SERVICE ADS" pill badge */}
          <div className="hero__eyebrow-container">
            <span className="hero__eyebrow hero__eyebrow--ads">
              LOCAL SERVICE ADS
            </span>
          </div>

          {/* 2. Headline — 2 lines: "TOP OF GOOGLE," styled in red-to-orange gradient */}
          <h1 className="hero__headline hero__headline--ads">
            <span className="hero__hl-line hero__hl-line--ads">
              VERIFIED LEADS AT THE{' '}
              <span className="hero__hl-gradient--ads">TOP OF GOOGLE,</span>
            </span>
            <span className="hero__hl-line hero__hl-line--ads">
              ON DAY ONE.
            </span>
          </h1>

          {/* 3. Centered supporting subtitle in light gray */}
          <p className="hero__desc hero__desc--ads">
            Google Guaranteed. Pay per lead. No wasted spend.
          </p>

          {/* 4. Horizontal row of four industry tags */}
          <div className="hero__industries hero__industries--ads" role="list" aria-label="Industries we serve">
            {industries.map((ind) => (
              <div key={ind} role="listitem">
                <IndustryBadge label={ind} />
              </div>
            ))}
          </div>

          {/* 5. Social proof row */}
          <div className="hero__proof hero__proof--ads">
            {/* Avatar stack */}
            <div className="hero__avatars" aria-hidden="true">
              {avatars.map((av) => (
                <span
                  key={av.initials}
                  className="hero__avatar"
                  style={{ background: av.color }}
                >
                  {av.initials}
                </span>
              ))}
            </div>

            {/* Facebook badge */}
            <span className="hero__fb" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073C24 5.41 18.627 0 12 0S0 5.41 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </span>

            {/* 5.0 Star rating + Trusted by text */}
            <div className="hero__rating">
              <div className="hero__rating-top">
                <span className="hero__rating-score">5.0</span>
                <Stars count={5} />
              </div>
              <span className="hero__rating-sub">Trusted by 200 Contractors Nationwide</span>
            </div>
          </div>

          {/* 6. Primary CTA button */}
          <a
            href="/contact"
            className="hero__cta hero__cta--ads"
            id="local-service-ads-hero-cta"
          >
            GET YOUR FREE CUSTOM DESIGN
          </a>
        </div>

        {/* Right mockup — emerges from rubble */}
        <div className="hero__side hero__side--right" aria-hidden="true">
          <img
            src={laptop}
            alt="Construction Website Mockup on Laptop"
            className="hero__mockup hero__mockup--right"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
