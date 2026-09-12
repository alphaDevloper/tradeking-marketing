// src/components/sections/LsaPackages.tsx
// "LSA Management Packages" pricing section.
// Composition:
//   • Centered header: "PACKAGES" eyebrow (11.52px, 700) + "LSA MANAGEMENT PACKAGES" (38.4px, 800)
//   • 2-column pricing card grid on black background (#000000)
//   • Card 01 (Standard): dark badge "GET STARTED", "LOCAL ADVERTISING ACCELERATOR" (28px, 800), 6 features, outlined button
//   • Card 02 (Highlighted): floating "MOST POPULAR" tag (10.24px, 700), red border + glow, red pill "FULL MARKET",
//     "LOCAL PRESENCE BOOST" (28px, 800), 6 features, description, solid red button

import { CheckCircle2 } from 'lucide-react';

interface PackageItem {
  id: string;
  pillText: string;
  pillVariant: 'dark' | 'red';
  title: string;
  features: string[];
  description?: string;
  highlighted?: boolean;
  tag?: string;
  buttonVariant: 'outlined' | 'solid';
  buttonText: string;
}

const packages: PackageItem[] = [
  {
    id: 'accelerator',
    pillText: 'GET STARTED',
    pillVariant: 'dark',
    title: 'LOCAL ADVERTISING ACCELERATOR',
    features: [
      'LSA setup, geo-targeting & ROI optimization',
      'Local SEO essentials: audit & keyword optimization',
      'Local link building campaign',
      'Online reputation management',
      'Monthly analytics & reporting',
      'Homepage, About, Blog & Contact pages',
    ],
    buttonVariant: 'outlined',
    buttonText: 'GET STARTED',
  },
  {
    id: 'boost',
    pillText: 'FULL MARKET',
    pillVariant: 'red',
    title: 'LOCAL PRESENCE BOOST',
    highlighted: true,
    tag: 'MOST POPULAR',
    features: [
      'Everything in the Accelerator',
      'Full Google Business Profile optimization',
      'Social media localization',
      'Complete website build with silo pages, live in 24-72 hours',
      '10-20 service pages',
      '20-30 location pages',
    ],
    description: 'The full package for contractors ready to dominate their entire market.',
    buttonVariant: 'solid',
    buttonText: 'GET STARTED',
  },
];

export default function LsaPackages() {
  return (
    <section className="lsa-packages" id="lsa-packages" aria-label="LSA Management Packages">
      <div className="lsa-packages__container">

        {/* ── Centered Header ── */}
        <header className="lsa-packages__header">
          <span className="lsa-packages__eyebrow">PACKAGES</span>
          <h2 className="lsa-packages__headline">
            LSA MANAGEMENT <span className="lsa-packages__accent">PACKAGES</span>
          </h2>
        </header>

        {/* ── 2-Column Pricing Cards Grid ── */}
        <div className="lsa-packages__grid">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`lsa-packages__card${pkg.highlighted ? ' lsa-packages__card--highlighted' : ''}`}
              aria-label={pkg.title}
            >
              {/* Floating "MOST POPULAR" Badge */}
              {pkg.tag && (
                <span className="lsa-packages__tag" aria-label="Most popular package">
                  {pkg.tag}
                </span>
              )}

              <div className="lsa-packages__card-body">
                {/* Pill Badge at Top */}
                <div className="lsa-packages__pill-wrapper">
                  <span
                    className={`lsa-packages__pill lsa-packages__pill--${pkg.pillVariant}`}
                  >
                    {pkg.pillText}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="lsa-packages__card-title">{pkg.title}</h3>

                {/* Feature List */}
                <ul className="lsa-packages__features" role="list">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="lsa-packages__feature-item">
                      <CheckCircle2
                        size={17}
                        strokeWidth={2.4}
                        className="lsa-packages__check"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Optional Description */}
                {pkg.description && (
                  <p className="lsa-packages__card-desc">{pkg.description}</p>
                )}
              </div>

              {/* Bottom CTA Button */}
              <a
                href="/contact"
                className={`lsa-packages__btn lsa-packages__btn--${pkg.buttonVariant}`}
                id={`lsa-pkg-btn-${pkg.id}`}
              >
                {pkg.buttonText}
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
