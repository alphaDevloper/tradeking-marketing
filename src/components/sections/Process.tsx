// src/components/sections/Process.tsx
// "How We Build Your Website" — 4-step process section with hover-to-dark cards.

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    description:
      'We research your market, your competitors, and the exact keywords homeowners in your city are searching for. Before we design anything we know exactly what it takes to make you number one.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'DESIGN',
    description:
      'Your homepage gets built first. You approve it before we touch anything else. No surprises. No back and forth. Just a site you\'re proud to show off.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'DEVELOP',
    description:
      'Every service page. Every location page. Every inner page built out, written, and optimized for search engines and conversions. Nothing gets skipped.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'LAUNCH',
    description:
      'Full quality assurance before anything goes live. When we launch it\'s ready. Clean. Fast. Ranking.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="process section" id="process" aria-label="Our process">
      <div className="container-site process__container">

        {/* ── Header — left-aligned ── */}
        <header className="process__header">
          <span className="process__eyebrow">PROCESS</span>
          <h2 className="process__heading">
            HOW WE BUILD{' '}
            <span className="process__heading-accent">YOUR WEBSITE</span>
          </h2>
        </header>

        {/* ── 4-column process grid ── */}
        <div className="process__grid" role="list">
          {steps.map((step) => (
            <article
              key={step.number}
              className="process__card"
              role="listitem"
            >
              <div className="process__card-top">
                <span className="process__card-number">{step.number}</span>
                <span className="process__card-icon">{step.icon}</span>
              </div>
              <h3 className="process__card-title">{step.title}</h3>
              <p className="process__card-desc">{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
