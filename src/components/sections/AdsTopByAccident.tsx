// src/components/sections/AdsTopByAccident.tsx
// "The Contractors At The Top Of Google Aren't There By Accident" intro section.
// Composition:
//   • Two-column layout on solid light gray (#F2F2F2) background
//   • Left column: 3-line bold headline (38.4px, weight 700) with "BY ACCIDENT." in red-orange gradient
//   • Right column: 3 paragraphs (14px):
//       - Para 1: medium gray (weight 400)
//       - Para 2: bold black emphasis (weight 600)
//       - Para 3: medium gray (weight 400)

export default function AdsTopByAccident() {
  return (
    <section className="ads-accident" aria-label="The contractors at the top of Google aren't there by accident">
      <div className="ads-accident__container">
        <div className="ads-accident__grid">

          {/* Left column — 3-line headline */}
          <div className="ads-accident__left">
            <h2 className="ads-accident__headline">
              <span className="ads-accident__hl-line">THE CONTRACTORS AT THE</span>
              <span className="ads-accident__hl-line">TOP OF GOOGLE AREN'T</span>
              <span className="ads-accident__hl-line">
                THERE <span className="ads-accident__accent">BY ACCIDENT.</span>
              </span>
            </h2>
          </div>

          {/* Right column — body copy */}
          <div className="ads-accident__right">
            <p className="ads-accident__p">
              When a homeowner types “roofing contractor near me” into Google, the first thing they
              see isn't a website. It's a Local Service Ad. Three contractors. Google Guaranteed
              badges. A phone number. That's it.
            </p>

            <p className="ads-accident__p ads-accident__p--bold">
              If you're not in those three spots, you're invisible, and the leads are going to
              someone else right now.
            </p>

            <p className="ads-accident__p">
              We manage LSA campaigns exclusively for contractors, handling setup, verification,
              optimization, and ongoing management so you show up first and pay only for the
              leads that actually call you.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
