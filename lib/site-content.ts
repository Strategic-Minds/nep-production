// Shared marketing content for National Epoxy Pros.
// Copy adapted from the approved NEP source-build brief (Drive: Active Builds, 2026-07-05).

export const serviceSystems = [
  {
    slug: 'flake-epoxy',
    title: 'Flake Epoxy Flooring Systems',
    eyebrow: 'Garage, shop, retail, and high-traffic floors',
    description:
      'Durable, slip-resistant, and cleanable flooring systems with broadcast flake texture and a sealed protective finish.',
    benefits: ['Durable', 'Slip resistant', 'Easy to clean', 'Custom blends', 'Fast return to use'],
    finishes: ['Domino', 'Gravel', 'Orbit', 'Tuxedo', 'Saddle Tan', 'Night']
  },
  {
    slug: 'metallic-epoxy',
    title: 'Metallic Epoxy Flooring Systems',
    eyebrow: 'Showroom and custom interior floors',
    description:
      'Layered metallic movement for one-of-a-kind interiors, showrooms, studios, salons, and statement floors.',
    benefits: ['3D visual depth', 'Unique finish', 'Seamless surface', 'High gloss', 'Custom colors'],
    finishes: ['Silver Mist', 'Charcoal Swirl', 'Ocean Blue', 'Copper Flow', 'Pearl White', 'Midnight']
  },
  {
    slug: 'polished-concrete',
    title: 'Polished Concrete Flooring Systems',
    eyebrow: 'Commercial, retail, and modern residential floors',
    description:
      'Sleek, modern, long-lasting concrete refinement with low-maintenance performance and high light reflectivity.',
    benefits: ['High reflectivity', 'Low maintenance', 'Long lasting', 'Eco friendly', 'Modern finish'],
    finishes: ['Satin', 'Semi Gloss', 'High Gloss']
  },
  {
    slug: 'stained-concrete',
    title: 'Stained Concrete Systems',
    eyebrow: 'Natural color that lasts',
    description:
      'Rich concrete color systems for interior and exterior floors where character, durability, and tone matter.',
    benefits: ['Natural look', 'UV resistant options', 'Penetrating color', 'Interior or exterior', 'Easy care'],
    finishes: ['Gold', 'Raw Sienna', 'Terra Cotta', 'Chestnut', 'Walnut', 'Onyx']
  },
  {
    slug: 'concrete-countertops',
    title: 'Concrete Countertops',
    eyebrow: 'Custom surfaces for kitchens, bars, and showrooms',
    description:
      'Durable concrete countertop systems with polished, stained, and decorative finish options.',
    benefits: ['Custom design', 'Heat resistant', 'Durable', 'Sealed protection', 'Beautiful finishes'],
    finishes: ['Natural Gray', 'Charcoal', 'Taupe', 'Brown', 'White']
  }
] as const;

export const designCollections = [
  { name: 'Flake Epoxy', tone: '#c8c2b6', detail: 'Broadcast flake texture with sealed protection.' },
  { name: 'Metallic Epoxy', tone: '#6b717a', detail: 'Pearlescent movement and one-of-a-kind depth.' },
  { name: 'Polished Concrete', tone: '#9d9990', detail: 'Clean, modern reflectivity for concrete slabs.' },
  { name: 'Stained Concrete', tone: '#8b4d22', detail: 'Rich earth tones and natural concrete variation.' },
  { name: 'Quartz', tone: '#e4d6be', detail: 'Broadcast texture for demanding commercial spaces.' },
  { name: 'Solid Color', tone: '#343331', detail: 'Uniform industrial coating with clean utility.' }
] as const;

export const locationHighlights = [
  'Pompano Beach', 'Tampa', 'Orlando', 'Dallas', 'Houston', 'Austin',
  'Atlanta', 'Charlotte', 'Nashville', 'Denver', 'Phoenix', 'Las Vegas',
  'Columbus', 'Indianapolis', 'Kansas City', 'Salt Lake City'
];

export const trainingPrograms = [
  {
    name: 'Certified Installer Program',
    detail: 'Hands-on surface prep, mixing, broadcast, and topcoat certification for new crews.'
  },
  {
    name: 'Advanced Metallic & Decorative',
    detail: 'Layered metallic technique, custom veining, and showroom-grade finish control.'
  },
  {
    name: 'Business & Sales Ownership',
    detail: 'Digital bid workflow, pricing models, and territory operating playbook for owners.'
  }
];

export const businessPackages = [
  {
    name: 'Starter Territory',
    detail: 'Single-crew launch package with lead routing, digital bid tools, and starter product kit.'
  },
  {
    name: 'Growth Territory',
    detail: 'Multi-crew operations with dedicated marketing support and expanded product access.'
  },
  {
    name: 'Full License Partner',
    detail: 'Complete brand, systems, and territory license with ongoing intelligence and support.'
  }
];

export const reviews = [
  {
    name: 'Marcus D.',
    location: 'Tampa, FL',
    quote:
      'Bid came back same day, crew was in and out in two days, and the floor looks better than the showroom sample.'
  },
  {
    name: 'Priya S.',
    location: 'Denver, CO',
    quote:
      'We compared three companies. National Epoxy Pros was the only one that showed up with an actual warranty in writing.'
  },
  {
    name: 'James K.',
    location: 'Charlotte, NC',
    quote: 'Metallic finish in our showroom gets compliments from every customer that walks in.'
  }
];

export const proofStats = [
  { value: '70+', label: 'XPS locations nationwide' },
  { value: '30+', label: 'Years of flooring experience' },
  { value: '1,000+', label: 'Trained pros and installers' },
  { value: '24 hr', label: 'Digital bid response target' }
];
