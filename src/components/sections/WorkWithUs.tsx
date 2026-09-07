// src/components/sections/WorkWithUs.tsx
// "What It's Like To Work With Us" section — 2x2 grid of feature cards on a
// light gray background. Header is top-left aligned and split across two
// lines, with the second line styled in solid red.

import { workWithUsCards, workWithUsHeading } from '../../data/about';

export default function WorkWithUs() {
  return (
    <section
      className="wwu"
      id="work-with-us"
      aria-label="What it is like to work with us"
    >
      <div className="wwu__container">
        {/* ── Header ── */}
        <header className="wwu__header">
          <h2 className="wwu__heading">
            <span className="wwu__hl-line">{workWithUsHeading.headlineLine1}</span>
            <span className="wwu__hl-accent">{workWithUsHeading.headlineAccent}</span>
          </h2>
        </header>

        {/* ── 2x2 card grid ── */}
        <div className="wwu__grid" role="list">
          {workWithUsCards.map((card) => {
            const Icon = card.Icon;
            return (
              <article
                key={card.number}
                className="wwu__card"
                role="listitem"
                aria-label={`${card.number} ${card.title}`}
              >
                <div className="wwu__card-top">
                  <span className="wwu__card-icon" aria-hidden="true">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <span className="wwu__card-number">{card.number}</span>
                </div>
                <h3 className="wwu__card-title">{card.title}</h3>
                <p className="wwu__card-desc">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}