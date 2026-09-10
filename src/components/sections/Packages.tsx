// src/components/sections/Packages.tsx
// "Choose Your Weapon" — 3-column pricing/packages section with highlighted center card.

const packages = [
  {
    id: 'ultimate',
    timeline: '2–4 WEEKS',
    title: 'ULTIMATE CONTRACTOR WEBSITE',
    tagline: 'The full build. The full brand. The full market takeover.',
    description:
      'Every service page. Every location page. Custom designed from scratch around your brand and your city. Written for SEO. Built to convert. Launched to dominate. This is the site your market leader has. Now it\u2019s yours.',
    bestFor:
      'Established contractors ready to become the #1 name in their market.',
    highlighted: false,
  },
  {
    id: 'ai-smart',
    timeline: '24–72 HOURS',
    title: 'AI SMART WEBSITE',
    tagline: 'For new contractors who need to get online fast.',
    description:
      'You need a presence now. Not in 4 weeks. This is a clean, high-converting website built and live within 72 hours on a proven framework \u2014 with AI chat, lead capture, and callback features built in from day one. Under 5 pages. Built to grow with you. Ready to start generating calls immediately.',
    bestFor:
      'New contractors, startups, and businesses testing a new market.',
    highlighted: true,
  },
  {
    id: 'simple-elite',
    timeline: '1–2 WEEKS',
    title: 'SIMPLE ELITE WEBSITE',
    tagline: 'More than a starter. Less than the full build.',
    description:
      'A professional, custom-designed website that covers your core pages, looks premium, and starts ranking locally. The sweet spot for contractors who want quality without the full timeline.',
    bestFor:
      'Growing contractors who want a serious online presence without the wait.',
    highlighted: false,
  },
];

export default function Packages() {
  return (
    <section className="packages section" id="packages" aria-label="Pricing packages">
      <div className="container-site packages__container">

        {/* ── Header — centered ── */}
        <header className="packages__header">
          <span className="packages__eyebrow">PACKAGES</span>
          <h2 className="packages__heading">
            CHOOSE YOUR{' '}
            <span className="packages__heading-accent">WEAPON</span>
          </h2>
        </header>

        {/* ── 3-column pricing grid ── */}
        <div className="packages__grid">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`packages__card${pkg.highlighted ? ' packages__card--highlighted' : ''}`}
              aria-label={pkg.title}
            >
              {/* Most Popular pill (highlighted card only) */}
              {pkg.highlighted && (
                <span className="packages__popular-pill">MOST POPULAR</span>
              )}

              <div className="packages__card-inner">
                {/* Timeline badge */}
                <span
                  className={`packages__timeline${pkg.highlighted ? ' packages__timeline--highlighted' : ''}`}
                >
                  {pkg.timeline}
                </span>

                {/* Title */}
                <h3 className="packages__card-title">{pkg.title}</h3>

                {/* Tagline */}
                <p className="packages__card-tagline">{pkg.tagline}</p>

                {/* Description */}
                <p className="packages__card-desc">{pkg.description}</p>

                {/* Divider */}
                <hr className="packages__divider" />

                {/* Best For */}
                <p className="packages__best-for">
                  <strong className="packages__best-for-label">Best For:</strong>{' '}
                  {pkg.bestFor}
                </p>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`packages__cta${pkg.highlighted ? ' packages__cta--highlighted' : ''}`}
                >
                  GET STARTED
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
