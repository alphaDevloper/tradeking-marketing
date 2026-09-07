// src/data/about.ts
// About page section data — founder story, stats, reasons, steps, guarantee

import type { LucideIcon } from 'lucide-react';
import {
  HardHat,
  Trophy,
  Percent,
  Star,
  Building2,
  TrendingUp,
  Crown,
  Headphones,
  ClipboardList,
  Sparkles,
  Monitor,
  LineChart,
  Crosshair,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

import founderPhoto from '../assets/about-owner.png';
import satisfactionSeal from '../assets/tradeking_satisfaction.png';

export interface AboutStat {
  value: string;
  /** Final numeric value used by the count-up animation. */
  target: number;
  /** Decimal places to display (0 for whole numbers, 1 for 5.0 / 100.0). */
  decimals?: number;
  /** Suffix appended after the number, e.g. "+" or "%". */
  suffix?: string;
  label: string;
  Icon: LucideIcon;
  /** When true, the icon is rendered next to the value (not as a separate row). */
  iconInline?: boolean;
  /** Delay (ms) for the count-up animation, used to stagger columns. */
  delay?: number;
}

export const trackRecordHeading = {
  eyebrow: 'BY THE NUMBERS',
  headline: 'A TRACK RECORD CONTRACTORS TRUST',
};

export const aboutStats: AboutStat[] = [
  { value: '200+', target: 200, suffix: '+', label: 'Contractor Brands Built', Icon: Trophy, delay: 320 },
  { value: '50', target: 50, label: 'States Served', Icon: Building2, delay: 400 },
  { value: '100%', target: 100, suffix: '%', decimals: 0, label: 'Custom Built', Icon: Percent, delay: 480 },
  { value: '5.0', target: 5, suffix: '', decimals: 1, label: 'Average Client Rating', Icon: Star, iconInline: true, delay: 560 },
];

export interface ReasonRow {
  number: string;
  title: string;
  Icon: LucideIcon;
  description: string;
}

export const aboutReasons: ReasonRow[] = [
  {
    number: '01',
    title: 'Build',
    Icon: HardHat,
    description:
      'Custom contractor websites designed to convert. We design for the way homeowners actually search, compare, and request estimates. Every page is built around your business, your market, and your customers.',
  },
  {
    number: '02',
    title: 'Grow',
    Icon: TrendingUp,
    description:
      'SEO, PPC, social, and content that compound. SEO, paid ads, and content marketing work together to bring in more qualified estimate requests month after month. We build the system, you run the jobs.',
  },
  {
    number: '03',
    title: 'Dominate',
    Icon: Crown,
    description:
      'Real systems. Real revenue. We build complete digital ecosystems for contractors, so the right customers find you first, trust you faster, and book the job before your competitors ever get a call.',
  },
];

export interface StepCard {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const aboutSteps: StepCard[] = [
  {
    number: '01',
    title: 'Strategy First',
    description:
      'Every project starts with a free strategy call. We get clear on your business, market, and goals, then plan the website and marketing around what actually drives revenue for contractors.',
    Icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Built for Results',
    description:
      'Premium design, conversion-focused copy, fast load times, and a layout that guides visitors toward requesting an estimate. Every element is built to turn traffic into booked jobs.',
    Icon: Sparkles,
  },
  {
    number: '03',
    title: 'Contractors Only',
    description:
      'We only work with contractors. Roofing, HVAC, plumbing, concrete, remodeling, and more. We know your industry, your customers, and the buying journey better than generalist agencies.',
    Icon: HardHat,
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Websites, SEO, ads, and updates all managed under one roof. We keep your brand sharp, your rankings climbing, and your marketing working while you stay focused on running jobs.',
    Icon: Headphones,
  },
];

// ── My Story / Meet The Founder section ─────────────────────────────────────

export interface FounderStory {
  eyebrow: string;
  headlineLead: string;
  headlineAccent: string;
  /** Mixed paragraphs: 'p' for body, 'p-emphasis' for the bold uppercase line,
   *  'p-short' for the short standalone "I decided to fix that." line. */
  paragraphs: Array<{ kind: 'p' | 'p-short' | 'p-emphasis'; text: string }>;
  /** Path to the seal image shown next to the founder's name. */
  sealImage: string;
  sealAlt: string;
  founderName: string;
  founderRole: string;
  photo: string;
  photoAlt: string;
}

export const founderStory: FounderStory = {
  eyebrow: 'MEET THE FOUNDER',
  headlineLead: 'MY STORY,',
  headlineAccent: 'YOUR RESULTS',
  paragraphs: [
    {
      kind: 'p',
      text:
        'I started TradeKing Marketing Agency because I kept seeing the same thing over and over again. Great contractors are getting absolutely burned by marketing agencies that have no idea what they are selling or who they are selling it to.',
    },
    {
      kind: 'p-short',
      text: 'I decided to fix that.',
    },
    {
      kind: 'p',
      text:
        'Over the past five years, I have worked with more than 200 roofing, HVAC, plumbing, and construction companies across the United States. I have been to industry conferences. I have flown out to meet clients on their job sites. I have sat in on sales calls and studied exactly what makes a homeowner choose one contractor over another. This is not something I do from behind a desk. I live in this industry.',
    },
    {
      kind: 'p',
      text:
        'What I have built is not just a web design agency. It is a comprehensive brand system specifically engineered for contractors who are serious about becoming the number-one choice in their market. Every website we launch, every campaign we run, every brand we build is designed with one outcome in mind. More calls. More jobs. More revenue.',
    },
    {
      kind: 'p-emphasis',
      text:
        'MY NAME GOES ON EVERY SINGLE PROJECT WE DELIVER. THAT IS THE STANDARD I HOLD MYSELF AND MY TEAM TO EVERY DAY.',
    },
    {
      kind: 'p',
      text:
        "If you are ready to be the #1 contractor in your city, I am ready to make it happen.",
    },
  ],
  sealImage: satisfactionSeal,
  sealAlt: 'TradeKing Marketing satisfaction guaranteed seal',
  founderName: 'ABDULLAH ALAM',
  founderRole: 'Founder, TradeKing Marketing Agency',
  photo: founderPhoto,
  photoAlt: 'Abdullah Alam, founder of TradeKing Marketing Agency',
};

// ── Our Mission / Most Trusted Name section ────────────────────────────────────

export interface MissionRow {
  number: string;
  title: string;
  Icon: LucideIcon;
  description: string;
  tags: string[];
}

export interface MissionHeading {
  eyebrowRed: string;
  eyebrowWhite: string;
  /** Headline is split into two visual lines, with `accent` rendered in red. */
  headlineLine1: string;
  headlineAccent: string;
  headlineLine2: string;
  /** Description is split into three lines: lead + emphasis + trailing sentence. */
  descriptionLine1: string;
  descriptionEmphasis: string;
  descriptionLine3: string;
}

export const missionHeading: MissionHeading = {
  eyebrowRed: 'THE REASON WE EXIST',
  eyebrowWhite: 'OUR MISSION',
  headlineLine1: 'THE MOST',
  headlineAccent: 'TRUSTED',
  headlineLine2: 'NAME IN CONTRACTOR MARKETING.',
  descriptionLine1:
    'Most agencies treat contractors like any other client. We built King Contractor Agency specifically for this industry.',
  descriptionEmphasis:
    'Every website, every campaign, and every brand we deliver is built around one outcome:',
  descriptionLine3:
    'making you the contractor every homeowner in your city already knows before they even start searching.',
};

export const missionRows: MissionRow[] = [
  {
    number: '01',
    title: 'Build',
    Icon: Monitor,
    description:
      'Custom contractor websites built from scratch. Designed to stop the scroll, earn trust instantly, and turn visitors into booked jobs.',
    tags: ['Custom Design', 'Mobile-First', 'AI Chat Widget', 'Lead Forms'],
  },
  {
    number: '02',
    title: 'Grow',
    Icon: LineChart,
    description:
      'SEO, LSA, and paid advertising systems that put your business in front of homeowners who are actively searching for a contractor in your city right now.',
    tags: ['SEO', 'Google LSA', 'Facebook Ads', 'PPC'],
  },
  {
    number: '03',
    title: 'Dominate',
    Icon: Crown,
    description:
      'Own your market. Outrank every competitor. Become the name homeowners in your area recognize, trust, and call first.',
    tags: ['Google Maps', 'Review Engine', 'Reputation', 'Retargeting'],
  },
];

// ── Our Promise / Satisfaction Guarantee section ─────────────────────────────

export interface PromiseContent {
  badge: {
    src: string;
    alt: string;
  };
  eyebrow: string;
  /** First line of the headline — rendered in white. */
  headlineLead: string;
  /** Second line of the headline — rendered in solid red. */
  headlineAccent: string;
  body1: string;
  body2: string;
}

export const promiseContent: PromiseContent = {
  badge: {
    src: satisfactionSeal,
    alt: 'King Contractor Agency satisfaction guarantee gold seal',
  },
  eyebrow: 'OUR PROMISE',
  headlineLead: 'WE WORK FOR FREE UNTIL',
  headlineAccent: "YOU'RE SATISFIED.",
  body1:
    'Five drafts, ten redesigns, a hundred tweaks, if that’s what it takes to get it right, that’s what we do.',
  body2:
    'No one else in the contractor space makes that promise, and it’s why Dean puts his name on every single project.',
};

// ── What It's Like To Work With Us section ────────────────────────────────────

export interface WorkWithUsHeading {
  /** Headline split into two lines; `accent` is rendered in red. */
  headlineLine1: string;
  headlineAccent: string;
}

export interface WorkWithUsCard {
  number: string;
  title: string;
  Icon: LucideIcon;
  description: string;
}

export const workWithUsHeading: WorkWithUsHeading = {
  headlineLine1: "WHAT IT'S LIKE TO",
  headlineAccent: 'WORK WITH US',
};

export const workWithUsCards: WorkWithUsCard[] = [
  {
    number: '01',
    title: 'Strategy First',
    Icon: Crosshair,
    description:
      'Before we touch a single design element, we get deep into your market, your competitors, and your goals. Everything we build is engineered around winning in your specific city.',
  },
  {
    number: '02',
    title: 'Built for Results',
    Icon: BarChart3,
    description:
      'Every colour, every headline, and every page layout exists for one reason: turning visitors into booked jobs.',
  },
  {
    number: '03',
    title: 'Contractors Only',
    Icon: ShieldCheck,
    description:
      'Roofing, HVAC, plumbing, solar, construction. This is all we do. We know your customers, your buying journey, and what makes homeowners pick up the phone.',
  },
  {
    number: '04',
    title: 'Ongoing Support',
    Icon: Headphones,
    description:
      "We don't hand you a website and go silent. We stay in your corner, updating, optimising, and making sure your site keeps performing long after launch.",
  },
];
