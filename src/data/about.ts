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

export interface AboutStat {
  value: string;
  label: string;
  Icon: LucideIcon;
}

export const aboutStats: AboutStat[] = [
  { value: '200+', label: 'Websites Launched', Icon: Trophy },
  { value: '50', label: 'States Served', Icon: Building2 },
  { value: '100%', label: 'Satisfaction Rate', Icon: Percent },
  { value: '5.0', label: 'Star Rating', Icon: Star },
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
