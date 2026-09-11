// src/components/sections/SeoMistakes.tsx
// "What's Killing Your Rankings Right Now" mistakes section.
// Composition:
//   • Left-aligned red eyebrow ("MISTAKES") + bold two-line headline ("RANKINGS RIGHT NOW" in red-to-orange gradient)
//   • 2-column x 2-row grid of dark rounded mistake cards with red X-circle icons
//   • Vertically centered icon and text within each card

interface MistakeItem {
  id: string;
  text: string;
}

const mistakes: MistakeItem[] = [
  {
    id: 'contractor-agencies',
    text: 'Hiring agencies that have never worked with a contractor in their life.',
  },
  {
    id: 'keyword-stuffing',
    text: 'Keyword stuffing that reads like spam and tanks your rankings.',
  },
  {
    id: 'duplicate-pages',
    text: 'Duplicate location pages that compete against each other.',
  },
  {
    id: 'unclaimed-gbp',
    text: 'An unclaimed or unoptimized Google Business Profile costing you thousands in missed leads every month.',
  },
];

export default function SeoMistakes() {
  return (
    <section className="seo-mistakes" aria-label="What's killing your rankings right now">
      <div className="seo-mistakes__container">

        {/* Top-left aligned header */}
        <div className="seo-mistakes__header">
          <span className="seo-mistakes__eyebrow">MISTAKES</span>
          <h2 className="seo-mistakes__headline">
            <span className="seo-mistakes__hl-line">WHAT'S KILLING YOUR</span>
            <span className="seo-mistakes__hl-line">
              <span className="seo-mistakes__accent">RANKINGS RIGHT NOW</span>
            </span>
          </h2>
        </div>

        {/* 2-column x 2-row mistakes grid */}
        <div className="seo-mistakes__grid">
          {mistakes.map((item) => (
            <div key={item.id} className="seo-mistakes__card" id={`seo-mistake-${item.id}`}>
              <div className="seo-mistakes__icon-tile" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </div>
              <p className="seo-mistakes__text">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
