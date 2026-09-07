// src/components/sections/TrackRecord.tsx
// "By The Numbers" stats band — full-width saturated red section with
// eyebrow, headline, and four equally-spaced stat columns separated by
// thin vertical dividers. Numbers animate up from 0 on mount.

import { aboutStats, trackRecordHeading } from '../../data/about';
import useCountUp from '../../hooks/useCountUp';

interface StatCellProps {
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  Icon: typeof aboutStats[number]['Icon'];
  iconInline: boolean;
  delay: number;
}

function StatCell({
  target,
  decimals,
  suffix,
  label,
  Icon,
  iconInline,
  delay,
}: StatCellProps) {
  const animated = useCountUp({ target, decimals, delay, duration: 1600 });

  return (
    <div
      className="track__stat"
      role="listitem"
      aria-label={`${target}${suffix} ${label}`}
    >
      <div className="track__stat-value">
        <span aria-hidden="true">
          {animated}
          {suffix}
        </span>
        {iconInline && (
          <Icon
            className="track__stat-star"
            strokeWidth={0}
            fill="currentColor"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="track__stat-label">{label}</div>
    </div>
  );
}

export default function TrackRecord() {
  return (
    <section className="track" aria-label="Track record by the numbers">
      <div className="track__container">
        <span className="track__eyebrow">{trackRecordHeading.eyebrow}</span>
        <h2 className="track__heading">{trackRecordHeading.headline}</h2>

        <div
          className="track__grid"
          role="list"
          aria-label="TradeKing Marketing key statistics"
        >
          {aboutStats.map((stat) => (
            <StatCell
              key={stat.label}
              target={stat.target}
              decimals={stat.decimals ?? 0}
              suffix={stat.suffix ?? ''}
              label={stat.label}
              Icon={stat.Icon}
              iconInline={Boolean(stat.iconInline)}
              delay={stat.delay ?? 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}