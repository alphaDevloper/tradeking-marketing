// src/components/sections/MyStory.tsx
// "Meet The Founder / My Story, Your Results" — two-column section.
// Left: eyebrow + headline + multi-paragraph story + founder signature row.
// Right: large rounded-corner photo of the founder.

import { founderStory } from '../../data/about';

export default function MyStory() {
  const {
    eyebrow,
    headlineLead,
    headlineAccent,
    paragraphs,
    sealImage,
    sealAlt,
    founderName,
    founderRole,
    photo,
    photoAlt,
  } = founderStory;

  return (
    <section className="mystory" aria-label="Meet the founder">
      <div className="mystory__container">
        <div className="mystory__grid">

          {/* ── Left column: text content ── */}
          <div className="mystory__body">
            {eyebrow && <span className="mystory__eyebrow">{eyebrow}</span>}

            <h2 className="mystory__headline">
              <span className="mystory__hl-lead">{headlineLead}</span>
              <span className="mystory__hl-accent">{headlineAccent}</span>
            </h2>

            <div className="mystory__copy">
              {paragraphs.map((p, i) => {
                if (p.kind === 'p-emphasis') {
                  return (
                    <p key={i} className="mystory__p mystory__p--emphasis">
                      {p.text}
                    </p>
                  );
                }
                if (p.kind === 'p-short') {
                  return (
                    <p key={i} className="mystory__p mystory__p--short">
                      {p.text}
                    </p>
                  );
                }
                return (
                  <p key={i} className="mystory__p">
                    {p.text}
                  </p>
                );
              })}
            </div>

            <div className="mystory__signature">
              <img
                src={sealImage}
                alt={sealAlt}
                className="mystory__seal"
                loading="lazy"
              />
              <div className="mystory__signature-text">
                <span className="mystory__signature-name">{founderName}</span>
                <span className="mystory__signature-role">{founderRole}</span>
              </div>
            </div>
          </div>

          {/* ── Right column: founder photo ── */}
          <div className="mystory__media">
            <img
              src={photo}
              alt={photoAlt}
              className="mystory__photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
