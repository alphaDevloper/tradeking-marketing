// src/components/sections/ServicesHero.tsx
// Services page hero — dark dramatic composition matching the reference design.
// Composition (top → bottom):
//   • "OUR SERVICES" pill badge (red border, red text)
//   • Large headline: line 1 white, line 2 red→orange gradient
//   • Supporting subtitle in light gray
//   • Industry badges row (Roofing / HVAC / Plumbing / Solar)
//   • Social proof row (4 avatars + Facebook + 5.0 ★ + tagline)
//   • Primary CTA (red→orange gradient)
//   • Two tilted laptop mockups anchored at bottom corners emerging from rubble

import { CheckCircle2, Star } from 'lucide-react';
import laptopDemo from '../../assets/laptop demo.png';
import laptop from '../../assets/laptop.png';

// ── Data ──────────────────────────────────────────────────────────────────────

const servicesHeroData = {
  eyebrow: 'OUR SERVICES',
  headlineLine1: 'WEBSITES & MARKETING SYSTEMS BUILT FOR',
  headlineAccent: "AMERICA'S TOP CONTRACTORS",
  description:
    "We help contractors build brands that look better, convert better, and dominate their local markets, whether you're established or just getting started.",
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

// ── ServicesHero ──────────────────────────────────────────────────────────────

export default function ServicesHero() {
  return (
    <section className="hero hero--services" aria-label="Services hero section">

      {/* ── Centered background glow — bottom-center for services ── */}
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

          {/* "OUR SERVICES" pill */}
          <span className="hero__eyebrow hero__eyebrow--services">
            {servicesHeroData.eyebrow}
          </span>

          {/* Headline — two visual lines */}
          <h1 className="hero__headline hero__headline--services">
            <span className="hero__hl-line hero__hl-line--services">
              {servicesHeroData.headlineLine1}
            </span>
            <span className="hero__hl-line hero__hl-accent--services">
              {servicesHeroData.headlineAccent}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero__desc hero__desc--services">
            {servicesHeroData.description}
          </p>

          {/* Industry list */}
          <div className="hero__industries" role="list" aria-label="Industries we serve">
            {servicesHeroData.industries.map((ind) => (
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
          <a
            href={servicesHeroData.ctaHref}
            className="hero__cta hero__cta--services"
            id="services-hero-cta"
          >
            {servicesHeroData.ctaLabel}
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
