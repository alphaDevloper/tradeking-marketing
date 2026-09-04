// src/data/featuredWork.ts
// Featured Work section data — heading, description, and project cards

export interface ProjectCard {
  id: string;
  /** Project brand name shown in the logo (text fallback if no logo image) */
  name: string;
  /** Industry / category line under the name */
  tagline: string;
  /** Background image of the project card (Unsplash placeholder) */
  image: string;
  /** Alt text for the project image */
  imageAlt: string;
}

export interface FeaturedWorkData {
  headingLead: string;
  headingAccent: string;
  headingTail: string;
  descriptionBefore: string;
  descriptionHighlight: string;
  descriptionAfter: string;
  ctaLabel: string;
  ctaHref: string;
  projects: ProjectCard[];
}

export const featuredWork: FeaturedWorkData = {
  headingLead: 'SEE ',
  headingAccent: 'THE BRANDS',
  headingTail: "\nWE'VE BUILT",
  descriptionBefore:
    'These are just a few of the ',
  descriptionHighlight: '200+ contractor websites',
  descriptionAfter:
    " we've launched across America. We build websites that stop the scroll, earn trust instantly, and position contractors as the clear #1 choice in their market.",
  ctaLabel: 'SCHEDULE YOUR FREE CUSTOM STRATEGY CALL',
  ctaHref: '/contact',
  projects: [
    {
      id: 'nexgen-exteriors',
      name: 'NEXGEN',
      tagline: 'EXTERIORS',
      image:
        'https://images.unsplash.com/photo-1633113213254-ae9b4e8d68b9?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'NexGen Exteriors — roofing contractor website on a laptop',
    },
    {
      id: 'panther-roof',
      name: 'PANTHER ROOF',
      tagline: 'POWERFUL ROOFING SOLUTIONS',
      image:
        'https://images.unsplash.com/photo-1633113213254-ae9b4e8d68b9?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Panther Roof — roofing contractor website on a laptop',
    },
    {
      id: 'apex-builders',
      name: 'APEX BUILDERS',
      tagline: 'CONSTRUCTION & REMODELING',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Apex Builders — construction contractor website on a laptop',
    },
    {
      id: 'ironclad-hvac',
      name: 'IRONCLAD HVAC',
      tagline: 'HEATING & COOLING EXPERTS',
      image:
        'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Ironclad HVAC — heating and cooling website on a laptop',
    },
  ],
};