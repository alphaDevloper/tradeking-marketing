// src/components/sections/OurMission.tsx
// "Our Mission / The Most Trusted Name in Contractor Marketing" section.
// Centered header block (eyebrows + headline + subtitle) followed by a
// three-row feature list (BUILD / GROW / DOMINATE). Each row uses a
// number + icon-tile + label on the left and description + pill tags on
// the right, separated by thin horizontal dividers.

import { missionHeading, missionRows } from '../../data/about';

export default function OurMission() {
  return (
    <section className="mission" aria-label="Our mission">
      <div className="mission__container">

        {/* ── Header block ── */}
        <header className="mission__header">
          <span className="mission__eyebrow mission__eyebrow--red">
            {missionHeading.eyebrowRed}
          </span>
          <span className="mission__eyebrow mission__eyebrow--white">
            {missionHeading.eyebrowWhite}
          </span>

          <h2 className="mission__headline">
            <span className="mission__hl-line">{missionHeading.headlineLine1}{' '}
              <em className="mission__hl-accent">{missionHeading.headlineAccent}</em>
            </span>
            <span className="mission__hl-line">{missionHeading.headlineLine2}</span>
          </h2>

          <p className="mission__desc">
            {missionHeading.descriptionLine1}{' '}
            <strong className="mission__desc-emphasis">
              {missionHeading.descriptionEmphasis}
            </strong>{' '}
            {missionHeading.descriptionLine3}
          </p>
        </header>

        {/* ── Feature rows ── */}
        <div className="mission__rows" role="list">
          {missionRows.map((row) => {
            const Icon = row.Icon;
            return (
              <div className="mission__row" role="listitem" key={row.number}>
                {/* Left: number + icon-tile + label */}
                <div className="mission__row-left">
                  <span className="mission__row-number">{row.number}</span>
                  <div className="mission__row-label-group">
                    <span className="mission__row-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <span className="mission__row-label">{row.title}</span>
                  </div>
                </div>

                {/* Right: description + tags */}
                <div className="mission__row-right">
                  <p className="mission__row-desc">{row.description}</p>
                  <ul className="mission__row-tags" aria-label={`${row.title} capabilities`}>
                    {row.tags.map((tag) => (
                      <li key={tag} className="mission__tag">{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}