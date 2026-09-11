// src/components/sections/SeoIntro.tsx
// Two-column SEO intro section: bold headline on left, body copy on right.
// Background: Solid black (#000000). No images required.

export default function SeoIntro() {
  return (
    <section className="seo-intro" aria-label="The most visible contractor wins every time">
      <div className="seo-intro__container">
        <div className="seo-intro__grid">

          {/* Left column — headline */}
          <div className="seo-intro__left">
            <h2 className="seo-intro__headline">
              <span className="seo-intro__hl-line">THE MOST VISIBLE</span>
              <span className="seo-intro__hl-line">CONTRACTOR</span>
              <span className="seo-intro__hl-line">
                WINS.{' '}
                <span className="seo-intro__accent">EVERY TIME.</span>
              </span>
            </h2>
          </div>

          {/* Right column — body copy */}
          <div className="seo-intro__right">
            <p className="seo-intro__paragraph">
              The best crews don't always get the most calls, the most visible ones do.
              When a homeowner's roof is leaking, they go straight to Google and call
              whoever shows up first. Not the second result. Not the third.{' '}
              <strong className="seo-intro__bold">The first.</strong>
            </p>
            <p className="seo-intro__paragraph">
              We're not a generalist agency that dabbles in roofing. We're a contractor-specific
              SEO agency that has helped 200+ home service companies rank higher, generate
              more leads, and grow revenue. This is all we do.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
