// src/data/faqs.ts
// FAQ section data — accordion items addressing common contractor questions

export interface FAQItem {
  /** Stable id used for the button + aria-controls linkage */
  id: string;
  /** The question shown in the accordion header */
  question: string;
  /** The answer shown when the item is expanded */
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'services',
    question: 'What services does TradeKing Marketing Agency offer?',
    answer:
      'TradeKing Marketing Agency is your go-to full-service web design partner. Our services include website design using our ULTIMATE TESTED BLUEPRINT, development, hosting, maintenance, and strategic online marketing solutions such as SEO and social media management.',
  },
  {
    id: 'process',
    question: 'How does the website design process work with TradeKing Marketing Agency?',
    answer:
      'Our proven process begins with a free strategy call to understand your business, goals, and customers. We then research your market, plan the website structure, design high-fidelity mockups, and develop a fully responsive site. You approve each stage before we move forward, and we launch only when everything is ready to convert.',
  },
  {
    id: 'timeline',
    question: 'How long does it take to design a website?',
    answer:
      'Most contractor websites are launched within 3 to 5 weeks from the kickoff call. The exact timeline depends on the size of the project, how quickly content and feedback are provided, and any custom features your business needs. We move fast without sacrificing quality.',
  },
  {
    id: 'redesign',
    question: 'Can you help me update my existing website?',
    answer:
      'Absolutely. We redesign and modernize existing contractor websites that are outdated, slow, or not generating leads. We preserve what works, fix what does not, and rebuild around a conversion-focused blueprint so your site starts working harder for your business.',
  },
];
