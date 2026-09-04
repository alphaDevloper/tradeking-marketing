// src/data/whyChooseUs.ts
// Why Choose Us section data — benefits + supporting content

import type { LucideIcon } from 'lucide-react';
import {
  HardHat,
  MonitorSmartphone,
  IdCard,
  Users,
} from 'lucide-react';

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface WhyChooseUsData {
  headingLead: string;        // first line before accent
  headingAccent: string;      // italic accent word(s)
  headingTail: string;        // remaining word(s) on the first line
  headingLine2: string;       // second line of heading
  description: string;
  benefits: Benefit[];
}

export const whyChooseUs: WhyChooseUsData = {
  headingLead: 'WHY ',
  headingAccent: 'CONTRACTORS',
  headingTail: ' TRUST',
  headingLine2: 'TRADEKING AGENCY',
  description:
    "Contractors choose us because we understand their world, we respect their reputation, and we build brands that actually move the needle. Here's what sets us apart:",
  benefits: [
    {
      title: 'WE SPECIALIZE IN CONTRACTORS.',
      description:
        'Roofing, Remodeling, HVAC, Concrete, Construction. We know homeowners, the buying journey, and what makes a contractor look trustworthy online.',
      icon: HardHat,
    },
    {
      title: 'WE BUILD CUSTOM, PREMIUM BRANDS.',
      description:
        'Every website is designed from scratch to position your business as the #1 choice in your city.',
      icon: MonitorSmartphone,
    },
    {
      title: 'WE PUT OUR NAME ON IT.',
      description:
        "My name and reputation are tied to every project. If it isn't something we'd proudly attach our name to, it doesn't go live.",
      icon: IdCard,
    },
    {
      title: 'WE GUARANTEE SATISFACTION.',
      description:
        "Our Satisfaction Guarantee is simple: We work for free until you're satisfied. No one else in the industry makes that promise.",
      icon: Users,
    },
  ],
};