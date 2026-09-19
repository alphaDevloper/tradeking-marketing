// src/data/aboutFaqs.ts
// About-page-specific FAQ data — trust & hiring-objection questions
// targeting long-tail keywords Canadian business owners actually search.
// These are DIFFERENT from the homepage FAQs in faqs.ts.

export interface AboutFAQItem {
  id: string;
  question: string;
  answer: string;
}

export const aboutFaqs: AboutFAQItem[] = [
  {
    id: 'cost',
    question: 'How much does it cost to hire a digital marketing agency in Canada?',
    answer:
      'Every project is scoped around your goals, so pricing varies. We offer transparent, fixed-price proposals — no hidden fees. Book a free strategy call to get a customized quote.',
  },
  {
    id: 'solo-vs-large',
    question: "What's the difference between a solo founder agency and a large marketing firm?",
    answer:
      'With a solo founder agency like TradeKing, you work directly with the person building your website and strategy — no account managers, no handoffs, no communication gaps. You get senior-level attention on every detail.',
  },
  {
    id: 'provinces',
    question: 'Do you work with small businesses across all provinces in Canada?',
    answer:
      'Yes. We work with businesses in every province — Ontario, British Columbia, Alberta, Quebec, and beyond. Everything is handled remotely, so your location never limits the quality of your project.',
  },
  {
    id: 'timeline',
    question: 'How long does it take to design and develop a website for a Canadian business?',
    answer:
      'Most custom websites launch within 3 to 5 weeks. The exact timeline depends on the project scope, content readiness, and feedback turnaround. We provide a clear timeline before any work begins.',
  },
  {
    id: 'seo',
    question: 'What SEO services does TradeKing Marketing offer for Canadian businesses?',
    answer:
      'We offer technical SEO, local search optimization, Google Business Profile setup, on-page optimization, content strategy, and ongoing rank tracking — all tailored to help Canadian businesses get found by the right customers.',
  },
  {
    id: 'examples',
    question: "Can I see examples of websites you've designed for Canadian clients?",
    answer:
      "Absolutely. Visit our portfolio page to see real projects we have designed and developed for businesses across Canada, including the strategy and results behind each one.",
  },
];
