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

// ── Hero ──────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">

      {/* ── Centered background glow — spans the full section ── */}
      <div className="hero__glow" aria-hidden="true" />

      {/* ── Three-column grid ── */}
      <div className="hero__grid">

        {/* Left mockup */}
        <div className="hero__side hero__side--left" aria-hidden="true">
          {/* <div className="w-96 h-96 bg-accent blur-[200px]  absolute" /> */}
          <img
            src={laptopDemo}
            alt=""
            className="hero__mockup hero__mockup--left"
            loading="eager"
          />
        </div>

        {/* Centre content */}
        <div className="hero__body">

          {/* H1 — 2-line layout matching the reference */}
          <h1 className="hero__headline">
            <span className="hero__hl-top">
              The #1 Marketing Agency For
            </span>
            <span className="hero__hl-bottom">
              Home{' '}
              <em className="hero__hl-accent">Service Brands</em>
            </span>
          </h1>

          {/* Description */}
          <p className="hero__desc">
            Custom-built brands and proven growth systems designed to help
            contractors dominate their local market within 24&ndash;72 hours.
          </p>

          {/* Industry list */}
          <div className="hero__industries" role="list" aria-label="Industries we serve">
            {industries.map((ind) => (
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
          <a href="/contact" className="hero__cta" id="hero-cta">
            GET YOUR FREE CUSTOM DESIGN
          </a>
        </div>

        {/* Right mockup */}
        <div className="hero__side hero__side--right" aria-hidden="true">
          <img
            src={laptop}
            alt=""
            className="hero__mockup hero__mockup--right"
            style={{
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.8)) drop-shadow(0 4px 16px rgba(0,0,0,0.6))',
              transform: 'perspective(1400px) rotateY(-8deg) rotateX(2deg)',
              transformOrigin: 'left bottom',
            }}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
