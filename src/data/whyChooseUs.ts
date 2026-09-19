// src/data/whyChooseUs.ts
// Why Choose Us section data — benefits + supporting content

import type { LucideIcon } from 'lucide-react';
import {
  MapPin,
  MonitorSmartphone,
  TrendingUp,
  Zap,
  ShieldCheck,
  Handshake,
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
  headingAccent: 'CANADIAN BUSINESSES',
  headingTail: ' TRUST',
  headingLine2: 'TRADEKING AGENCY',
  description:
    "Canadian business owners choose TradeKing because we understand their market, respect their reputation, and build brands that drive real results. Here's what sets us apart:",
  benefits: [
    {
      title: 'DIRECT ACCESS TO THE FOUNDER',
      description:
        'We work with businesses in every province — from Toronto and Vancouver to Calgary, Montreal, Ottawa, and everywhere in between. Wherever your business operates in Canada, we deliver.',
      icon: MapPin,
    },
    {
      title: '100% CUSTOM DESIGNS',
      description:
        'No templates. No cookie-cutter layouts. Every website is designed from scratch to match your brand, your market, and your customers\' expectations.',
      icon: MonitorSmartphone,
    },
    {
      title: 'BUILT TO CONVERT',
      description:
        'A good-looking website isn\'t enough. We engineer every page around a proven conversion blueprint so your site turns visitors into leads and estimate requests.',
      icon: TrendingUp,
    },
    {
      title: 'TRANSPARENT PRICING, NO SURPRISES',
      description:
        'Most projects launch within 3–5 weeks. We move quickly without cutting corners, so your business starts generating results sooner.',
      icon: Zap,
    },
    {
      title: 'SATISFACTION GUARANTEE',
      description:
        "We work until you're completely satisfied. If you're not happy, we keep working — no additional cost. That's a promise we stand behind on every project.",
      icon: ShieldCheck,
    },
    {
      title: 'DEDICATED SUPPORT',
      description:
        'You get a dedicated point of contact from day one. No ticket queues, no chatbots — just direct access to the team building your website.',
      icon: Handshake,
    },
  ],
};