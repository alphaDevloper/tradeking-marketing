import { CheckCircle2, Star } from 'lucide-react';
import laptopDemo from '../../assets/laptop demo.png';
import laptop from '../../assets/laptop.png';

// ── Data ──────────────────────────────────────────────────────────────────────

const defaultIndustries = ['Roofing', 'HVAC', 'Plumbing', 'Landscaping'];

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

export interface HeroData {
  eyebrow?: string;
  headlineTop: string;
  headlineMid: string;
  headlineAccent: string;
  headlineTail: string;
  description: string;
  industries: string[];
  ctaLabel: string;
  ctaHref: string;
}

const defaultHeroData: HeroData = {
  headlineTop: 'The #1 Web Design & Marketing',
  headlineMid: 'Agency For',
  headlineAccent: 'Canadian Businesses',
  headlineTail: '',
  description:
    'Custom-built websites and proven growth systems designed to help Canadian businesses attract more customers and dominate their local market.',
  industries: defaultIndustries,
  ctaLabel: 'GET YOUR FREE CUSTOM DESIGN',
  ctaHref: '/contact',
};

export default function Hero({ data = defaultHeroData }: { data?: HeroData }) {
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
            alt="Custom web design for a Canadian roofing company displayed on a laptop"
            className="hero__mockup hero__mockup--left"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Centre content */}
        <div className="hero__body">

          {/* H1 — 2-line layout matching the reference */}
          {data.eyebrow && (
            <span className="hero__eyebrow">{data.eyebrow}</span>
          )}

          <h1 className="hero__headline">
            <span className="hero__hl-top">
              {data.headlineTop}
            </span>
            <span className="hero__hl-bottom">
              {data.headlineMid}{' '}
              <em className="hero__hl-accent">{data.headlineAccent}</em>
              {data.headlineTail && <> {data.headlineTail}</>}
            </span>
          </h1>

          {/* Description */}
          <p className="hero__desc">
            {data.description}
          </p>

          {/* Industry list */}
          <div className="hero__industries" role="list" aria-label="Industries we serve">
            {data.industries.map((ind) => (
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
              <span className="hero__rating-sub">Trusted by Businesses Across Canada</span>
            </div>
          </div>

          {/* CTA */}
          <a href={data.ctaHref} className="hero__cta" id="hero-cta">
            {data.ctaLabel}
          </a>
        </div>

        {/* Right mockup */}
        <div className="hero__side hero__side--right" aria-hidden="true">
          <img
            src={laptop}
            alt="Responsive website design for a Canadian service business on a laptop"
            className="hero__mockup hero__mockup--right"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
