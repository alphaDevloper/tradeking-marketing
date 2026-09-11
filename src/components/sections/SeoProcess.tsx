// src/components/sections/SeoProcess.tsx
// "Our SEO Process" section — 5-step numbered process list on a light gray background.

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'KEYWORD RESEARCH',
    description: 'We find the exact high-intent searches your future customers are using in your city.',
  },
  {
    number: '02',
    title: 'ON-PAGE OPTIMIZATION',
    description: 'Every service page optimized. Titles, content, structure, all built to rank.',
  },
  {
    number: '03',
    title: 'LOCAL OPTIMIZATION',
    description: 'Your Google Business Profile dialed in. Citations cleaned up. Location pages built.',
  },
  {
    number: '04',
    title: 'CONTENT & AUTHORITY',
    description: 'Blog content and backlinks that make you the most credible roofing company in your market.',
  },
  {
    number: '05',
    title: 'TRACK & REPORT',
    description: 'Every keyword, every call, every form submission tracked and reported. You always know exactly what your SEO is doing for your business.',
  },
];

export default function SeoProcess() {
  return (
    <section className="seo-process" aria-label="Our SEO process">
      <div className="seo-process__container">

        {/* Top-left aligned header */}
        <div className="seo-process__header">
          <span className="seo-process__eyebrow">PROCESS</span>
          <h2 className="seo-process__headline">
            OUR <span className="seo-process__accent">SEO PROCESS</span>
          </h2>
        </div>

        {/* 5-step process list */}
        <div className="seo-process__list" role="list">
          {steps.map((step) => (
            <div key={step.number} className="seo-process__row" role="listitem">
              <span className="seo-process__number">{step.number}</span>
              <h3 className="seo-process__title">{step.title}</h3>
              <p className="seo-process__desc">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
