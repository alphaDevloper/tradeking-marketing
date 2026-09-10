// src/components/sections/FinalCTA.tsx
// "Ready To Have The Best Contractor Website In Your Market?" — final call-to-action section.

export default function FinalCTA() {
  return (
    <section className="final-cta section" id="final-cta" aria-label="Get started">
      {/* Red radial glow background effect */}
      <div className="final-cta__glow" aria-hidden="true" />

      <div className="container-site final-cta__container">
        <h2 className="final-cta__heading">
          READY TO HAVE THE{' '}
          <span className="final-cta__heading-accent">
            BEST CONTRACTOR WEBSITE
          </span>{' '}
          IN YOUR MARKET?
        </h2>

        <p className="final-cta__subtitle">
          Join 200+ roofing and contractor companies across America who trust
          King Contractor Agency for website design, SEO, and digital marketing
          that actually delivers.
        </p>

        <a href="#contact" className="final-cta__button">
          GET YOUR FREE CUSTOM DESIGN
        </a>
      </div>
    </section>
  );
}
