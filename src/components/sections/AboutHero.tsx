// src/components/sections/AboutHero.tsx
// About page hero — dark dramatic composition matching the reference design.
// Composition (top → bottom):
//   • "OUR STORY" pill badge (red border, red text)
//   • Large headline with red→orange gradient on "#1 CHOICE"
//   • Supporting subtitle
//   • Industry badges row (Roofing / HVAC / Plumbing / Solar)
//   • Social proof row (4 avatars + Facebook + 5.0 ★ + tagline)
//   • Primary CTA (red→orange gradient)
//   • Two tilted laptop mockups anchored at bottom corners emerging from rubble

import { CheckCircle2, Star } from 'lucide-react';
import laptopDemo from '../../assets/laptop demo.png';
import laptop from '../../assets/laptop.png';

// ── Data ──────────────────────────────────────────────────────────────────────

const aboutHeroData = {
  eyebrow: 'OUR STORY',
  // Headline is a single H1. The visual wrap is handled in markup (two lines).
  // White text everywhere except "#1 CHOICE" which uses a red→orange gradient.
  headlineLine1: 'WE BUILD AI WEBSITES THAT MAKE',
  headlineLine2Lead: 'CONTRACTORS THE',
  headlineAccent: '#1 CHOICE',
  headlineLine2Tail: 'IN THEIR MARKET',
  description: 'More traffic. Better lead quality. Sell more roofs.',
  industries: ['Roofing', 'HVAC', 'Plumbing', 'Solar'],
  ctaLabel: 'GET YOUR FREE CUSTOM DESIGN',
  ctaHref: '/contact',
};

const avatars = [
  { initials: 'JD', color: '#e67e22' },
  { initials: 'AL', color: '#27ae60' },
  { initials: 'MR', color: '#c0392b' },
  { initials: 'BK', color: '#2980b9' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function IndustryBadge({ label }: { label: string }) {
  return (
    <span className="hero-badge">
      <CheckCircle2 size={15} strokeWidth={2.5} className="hero-badge__icon" aria-hidden="true" />
      {label}
    </span>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span className="hero-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} size={16} fill="#F5A623" stroke="none" aria-hidden="true" />
      ))}
    </span>
  );
}

// ── AboutHero ────────────────────────────────────────────────────────────────

export default function AboutHero() {
  return (
    <section className="hero hero--about" aria-label="About hero section">

      {/* ── Centered background glow ── */}
      <div className="hero__glow" aria-hidden="true" />

      {/* ── Three-column grid (left mockup / content / right mockup) ── */}
      <div className="hero__grid">

        {/* Left mockup — emerges from rubble */}
        <div className="hero__side hero__side--left" aria-hidden="true">
          <img
            src={laptopDemo}
            alt=""
            className="hero__mockup hero__mockup--left"
            loading="eager"
          />
        </div>

        {/* Centre content */}
        <div className="hero__body">

          {/* "OUR STORY" pill */}
          {aboutHeroData.eyebrow && (
            <span className="hero__eyebrow">{aboutHeroData.eyebrow}</span>
          )}

          {/* Headline — wraps to two visual lines */}
          <h1 className="hero__headline">
            <span className="hero__hl-line">{aboutHeroData.headlineLine1}</span>
            <span className="hero__hl-line">
              {aboutHeroData.headlineLine2Lead}{' '}
              <em className="hero__hl-accent">{aboutHeroData.headlineAccent}</em>
              {' '}{aboutHeroData.headlineLine2Tail}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero__desc">{aboutHeroData.description}</p>

          {/* Industry list */}
          <div className="hero__industries" role="list" aria-label="Industries we serve">
            {aboutHeroData.industries.map((ind) => (
              <div key={ind} role="listitem">
                <IndustryBadge label={ind} />
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="hero__proof">
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

            {/* Rating */}
            <div className="hero__rating">
              <div className="hero__rating-top">
                <span className="hero__rating-score">5.0</span>
                <Stars count={5} />
              </div>
              <span className="hero__rating-sub">Trusted by 200 Contractors Nationwide</span>
            </div>
          </div>

          {/* CTA */}
          <a href={aboutHeroData.ctaHref} className="hero__cta" id="hero-cta">
            {aboutHeroData.ctaLabel}
          </a>
        </div>

        {/* Right mockup — emerges from rubble */}
        <div className="hero__side hero__side--right" aria-hidden="true">
          <img
            src={laptop}
            alt=""
            className="hero__mockup hero__mockup--right"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
