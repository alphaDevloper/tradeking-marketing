// src/data/portfolioData.ts
// Portfolio Gallery data — filter tabs and client project cards.

export interface PortfolioCategory {
  id: string;
  label: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  filterCategories: string[];
  image: string;
  imageAlt: string;
}

export interface PortfolioGalleryData {
  categories: PortfolioCategory[];
  projects: PortfolioProject[];
}

export const portfolioGalleryData: PortfolioGalleryData = {
  categories: [
    { id: 'all', label: 'ALL WORK' },
    { id: 'roofing', label: 'ROOFING' },
    { id: 'construction', label: 'CONSTRUCTION' },
    { id: 'exterior', label: 'EXTERIOR' },
  ],
  projects: [
    {
      id: 'colorado-preferred-roofing',
      title: 'COLORADO PREFERRED ROOFING',
      category: 'ROOFING',
      filterCategories: ['all', 'roofing'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Colorado Preferred Roofing website mockup on laptop',
    },
    {
      id: 'horvath-roofing',
      title: 'HORVATH ROOFING',
      category: 'ROOFING',
      filterCategories: ['all', 'roofing'],
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Horvath Roofing website mockup on laptop',
    },
    {
      id: 'new-york-roofers',
      title: 'NEW YORK ROOFERS',
      category: 'EXTERIOR',
      filterCategories: ['all', 'exterior'],
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'New York Roofers website mockup on laptop',
    },
    {
      id: 'nexgen-exteriors',
      title: 'NEXGEN EXTERIORS',
      category: 'ROOFING',
      filterCategories: ['all', 'roofing'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Nexgen Exteriors website mockup on laptop',
    },
    {
      id: 'panther-roofing',
      title: 'PANTHER ROOFING',
      category: 'ROOFING',
      filterCategories: ['all', 'roofing'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Panther Roofing website mockup on laptop',
    },
    {
      id: 'rocky-roofing',
      title: 'ROCKY ROOFING',
      category: 'CONSTRUCTION',
      filterCategories: ['all',  'construction'],
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Rocky Roofing website mockup on laptop',
    },
  ],
};
