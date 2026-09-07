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
