// src/data/services.ts
// Services section data — content + visual configuration for each service card

import type { LucideIcon } from 'lucide-react';
import {
  PenLine,
  Target,
  Eye,
  Edit3,
  BarChart3,
  Megaphone,
  Calendar,
  Users,
} from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceHighlight {
  badge: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export interface Service {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  features: ServiceFeature[];
  highlight?: ServiceHighlight;
}

export const services: Service[] = [
  {
    id: 'custom-websites',
    title: 'Custom Built Websites',
    image: 'https://picsum.photos/seed/laptop-roofing/800/520',
    imageAlt: 'Custom roofing website displayed on a laptop',
    highlight: {
      badge: 'Most Popular',
      label: 'AI Smart Website',
      description: 'Built using smart technology to convert more visitors.',
      icon: Target,
    },
    features: [
      {
        title: 'Ultimate Contractor Website',
        description: '100% custom designs that represent your brand.',
        icon: PenLine,
      },
      {
        title: 'Simple Elite Website',
        description: 'Built to turn visitors into high-quality leads.',
        icon: Target,
      },
      {
        title: 'Premium Brand Identity',
        description: 'Cohesive visuals that earn trust and authority.',
        icon: Eye,
      },
    ],
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    image: 'https://picsum.photos/seed/google-rankings/800/520',
    imageAlt: 'Google ranking chart showing position 1 for roofers near me',
    features: [
      {
        title: 'Technical SEO',
        description: 'Optimize your website for speed, structure & crawlability.',
        icon: Edit3,
      },
      {
        title: 'Local SEO',
        description: 'Rank higher in local searches and Google Map Pack.',
        icon: Target,
      },
      {
        title: 'Content Marketing',
        description: 'Create content that ranks and brings in qualified leads.',
        icon: BarChart3,
      },
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media Domination',
    image: 'https://picsum.photos/seed/social-storm-damage/800/520',
    imageAlt: 'Storm damage social media marketing posts',
    features: [
      {
        title: 'Content Creation',
        description: 'High-quality posts that build trust and engagement.',
        icon: Megaphone,
      },
      {
        title: 'Scheduling & Posting',
        description: 'Consistent posting to keep your brand active.',
        icon: Calendar,
      },
      {
        title: 'Community Management',
        description: 'Engage with your audience and grow your brand.',
        icon: Users,
      },
    ],
  },
];