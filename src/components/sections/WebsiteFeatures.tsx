// src/components/sections/WebsiteFeatures.tsx
// "What's Included In Every Website We Build" feature grid section.
// Composition:
//   • Left-aligned red eyebrow label + bold two-line headline
//   • 2×2 feature card grid with icon tiles
//   • Full-width red highlight banner with trophy icon

// ── Data ──────────────────────────────────────────────────────────────────────

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 'seo-pages',
    title: 'SEO-WRITTEN SERVICE PAGES',
    description:
      'Every service page is written and optimized for local SEO in your city and surrounding areas.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: 'brand-design',
    title: 'CUSTOM BRAND DESIGN',
    description: 'A custom design built around your brand from scratch.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
  },
  {
    id: 'mobile-fast',
    title: 'MOBILE-FIRST & FAST',
    description:
      'Mobile-first development that loads fast and ranks higher on Google.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: 'lead-capture',
    title: 'LEAD CAPTURE BUILT IN',
    description:
      'Click-to-call, contact forms, and lead capture built into every page.',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

// ── Trophy Icon ───────────────────────────────────────────────────────────────

function TrophyIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="wf-banner__icon"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

// ── Feature Card ──────────────────────────────────────────────────────────────

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="wf-card" id={`wf-card-${feature.id}`}>
      <div className="wf-card__icon-tile" aria-hidden="true">
        {feature.icon}
      </div>
      <div className="wf-card__content">
        <h3 className="wf-card__title">{feature.title}</h3>
        <p className="wf-card__desc">{feature.description}</p>
      </div>
    </div>
  );
}

// ── WebsiteFeatures ───────────────────────────────────────────────────────────

export default function WebsiteFeatures() {
  return (
    <section
      className="wf"
      aria-label="What's included in every website we build"
    >
      <div className="wf__container">
        {/* ── Header ── */}
        <div className="wf__header">
          <span className="wf__eyebrow">WHAT YOU GET</span>
          <h2 className="wf__headline">
            <span className="wf__hl-line">WHAT'S INCLUDED IN</span>
            <span className="wf__hl-line">
              <em className="wf__hl-gradient">EVERY WEBSITE</em> WE BUILD
            </span>
          </h2>
        </div>

        {/* ── 2×2 Feature Grid ── */}
        <div className="wf__grid">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>

        {/* ── Highlight Banner ── */}
        <div className="wf-banner">
          <TrophyIcon />
          <p className="wf-banner__text">
            A WEBSITE YOUR COMPETITORS WILL SPEND THE NEXT YEAR TRYING TO CATCH
            UP TO.
          </p>
        </div>
      </div>
    </section>
  );
}
