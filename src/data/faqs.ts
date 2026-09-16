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
    id: 'cost',
    question: 'How much does it cost to design a website in Canada?',
    answer:
      'Every project is customized around your business goals, so pricing varies. Our custom website design packages for Canadian businesses start at competitive rates and scale based on the number of pages, features, and integrations your business needs. We provide a detailed quote after your free strategy call so there are no surprises.',
  },
  {
    id: 'timeline',
    question: 'How long does it take to build a website?',
    answer:
      'Most custom websites are designed and launched within 3 to 5 weeks from the kickoff call. The exact timeline depends on the size of the project, how quickly you provide content and feedback, and any custom features your business requires. We move fast without sacrificing quality.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign my existing website?',
    answer:
      'Absolutely. We redesign websites for Canadian businesses that are outdated, slow, or not generating leads. We audit your current site, preserve what works, and rebuild around a modern, conversion-focused design so your website starts working harder for your business.',
  },
  {
    id: 'seo',
    question: 'Do you offer SEO services for Canadian businesses?',
    answer:
      'Yes. Our SEO services for Canadian businesses cover technical SEO, local search optimization, Google Business Profile setup, content strategy, and ongoing rank tracking. We help your website get found by the right customers in your city and across Canada.',
  },
  {
    id: 'process',
    question: 'What is your web design process?',
    answer:
      'Our process starts with a free strategy call where we learn about your business, goals, and target customers. From there, we research your market, plan the website structure, design high-fidelity mockups, develop a responsive site, and launch once everything is tested and approved. You have full visibility and sign-off at every stage.',
  },
  {
    id: 'maintenance',
    question: 'Do you provide website hosting and ongoing maintenance?',
    answer:
      'Yes. We offer reliable hosting and ongoing website maintenance packages so your site stays fast, secure, and up to date after launch. Our maintenance plans include performance monitoring, security updates, content updates, and technical support — so you can focus on running your business.',
  },
];

