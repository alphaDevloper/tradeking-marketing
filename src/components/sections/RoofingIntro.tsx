// src/components/sections/RoofingIntro.tsx
// Two-column intro section: bold headline on left, body copy on right.
// Background: #121212. No images required.

export default function RoofingIntro() {
  return (
    <section className="roofing-intro" aria-label="Professional roofing website design services">
      <div className="roofing-intro__container">
        <div className="roofing-intro__grid">

          {/* Left column — headline */}
          <div className="roofing-intro__left">
            <h2 className="roofing-intro__headline">
              PROFESSIONAL ROOFING WEBSITE DESIGN SERVICES FOR CONTRACTORS WHO WANT TO BE{' '}
              <span className="roofing-intro__accent">#1</span>
            </h2>
          </div>

          {/* Right column — body copy */}
          <div className="roofing-intro__right">
            <p className="roofing-intro__paragraph">
              Most contractor websites are built by generalist agencies that have never set
              foot on a job site. They hand you a template, slap your logo on it, and call it
              done. Your leads suffer. Your rankings suffer. Your reputation suffers.
            </p>
            <p className="roofing-intro__paragraph">
              King Contractor Agency builds custom roofing websites from the ground up. Every
              page is written for SEO. Every design decision made to convert. Every site built
              specifically for contractors who are serious about owning their local market.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
