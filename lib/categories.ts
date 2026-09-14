export type Category = {
  slug: string;
  navLabel: string;
  heroTitle: string;
  heroSub: string;
  intro: string;
  items: string[];
  focus?: string[];
  notice?: string;
  ctaLabel: string;
  metaTitle: string;
  metaDescription: string;
  homeBlurb: string;
};

export const categories: Category[] = [
  {
    slug: "cars",
    navLabel: "CARS",
    heroTitle: "CARS",
    heroSub: "Private sourcing for vehicles across international markets.",
    intro:
      "This is not a marketplace. There is no inventory to browse and no listed prices — every vehicle is sourced against your specific request, then verified before anything is quoted.",
    items: [
      "Luxury Cars",
      "Supercars",
      "SUVs",
      "Premium Vehicles",
      "Commercial Vehicles",
      "Custom Requests",
    ],
    focus: [
      "Discovery",
      "Sourcing",
      "Availability",
      "Verification",
      "Negotiation",
      "Logistics",
    ],
    ctaLabel: "SOURCE A VEHICLE →",
    metaTitle: "BLACK VISION | Luxury Car Sourcing",
    metaDescription:
      "Private sourcing for luxury cars, supercars and premium vehicles across China, Dubai and international markets.",
    homeBlurb: "Luxury and premium vehicles, sourced and verified.",
  },
  {
    slug: "fashion",
    navLabel: "FASHION",
    heroTitle: "FASHION",
    heroSub:
      "Private sourcing for fashion, accessories and hard-to-find pieces.",
    intro:
      "From runway pieces to items no longer in production, we locate and verify fashion through our network before anything reaches you.",
    items: [
      "Designer Fashion",
      "Clothing",
      "Shoes",
      "Bags",
      "Accessories",
      "Custom Requests",
    ],
    ctaLabel: "REQUEST FASHION →",
    metaTitle: "BLACK VISION | Private Fashion Sourcing",
    metaDescription:
      "Private sourcing for designer fashion, accessories and hard-to-find pieces across China and Dubai.",
    homeBlurb: "Designer pieces and hard-to-find fashion.",
  },
  {
    slug: "watches",
    navLabel: "WATCHES",
    heroTitle: "WATCHES",
    heroSub: "Source exceptional watches through private sourcing.",
    intro:
      "We work against your request — model, condition, documentation — and verify what we find before it is quoted.",
    items: ["Luxury Watches", "Rare Models", "New", "Pre-Owned", "Special Requests"],
    focus: ["Availability", "Condition", "Documentation", "Sourcing", "Verification"],
    ctaLabel: "REQUEST A WATCH →",
    metaTitle: "BLACK VISION | Private Watch Sourcing",
    metaDescription:
      "Private sourcing for luxury, rare and pre-owned watches, with availability, condition and documentation verified.",
    homeBlurb: "Luxury, rare and pre-owned timepieces.",
  },
  {
    slug: "home",
    navLabel: "HOME",
    heroTitle: "HOME",
    heroSub: "Furniture, interiors and products sourced around the world.",
    intro:
      "For private residences and interior projects, we source furniture, fixtures and finishes to a specific brief.",
    items: [
      "Furniture",
      "Lighting",
      "Décor",
      "Kitchens",
      "Bathrooms",
      "Interior Products",
      "Custom Pieces",
    ],
    ctaLabel: "SOURCE FOR MY HOME →",
    metaTitle: "BLACK VISION | Furniture & Interior Sourcing",
    metaDescription:
      "Private sourcing for furniture, lighting, décor and interior products across China and Dubai.",
    homeBlurb: "Furniture, lighting and interior pieces.",
  },
  {
    slug: "business",
    navLabel: "BUSINESS",
    heroTitle: "BUSINESS",
    heroSub: "Source products, equipment and suppliers for your business.",
    intro:
      "For companies sourcing at scale — machinery, OEM production, private label or bulk supply — we coordinate the process end to end.",
    items: [
      "Machinery",
      "Equipment",
      "Commercial Supplies",
      "OEM",
      "Private Label",
      "Packaging",
      "Bulk Orders",
    ],
    ctaLabel: "START A BUSINESS REQUEST →",
    metaTitle: "BLACK VISION | Global Business Sourcing",
    metaDescription:
      "Private sourcing for business equipment, machinery, OEM production and bulk orders across China and Dubai.",
    homeBlurb: "Equipment, OEM and bulk supply for companies.",
  },
  {
    slug: "construction",
    navLabel: "CONSTRUCTION",
    heroTitle: "CONSTRUCTION",
    heroSub: "Source materials, fixtures and equipment for your projects.",
    intro:
      "For contractors, developers and private projects, we source construction materials and building equipment against your specifications.",
    items: [
      "Construction Materials",
      "Architectural Products",
      "Fixtures",
      "Lighting",
      "Sanitary",
      "Building Equipment",
      "Custom Sourcing",
    ],
    ctaLabel: "SOURCE FOR MY PROJECT →",
    metaTitle: "BLACK VISION | Construction Sourcing",
    metaDescription:
      "Private sourcing for construction materials, fixtures and building equipment across China and Dubai.",
    homeBlurb: "Materials and equipment for projects.",
  },
  {
    slug: "electronics",
    navLabel: "ELECTRONICS",
    heroTitle: "ELECTRONICS",
    heroSub: "Source technology and electronic products through global suppliers.",
    intro:
      "From single units to bulk orders, we source consumer and commercial electronics through verified suppliers.",
    items: [
      "Consumer Electronics",
      "Smart Devices",
      "Commercial Electronics",
      "Accessories",
      "OEM",
      "Bulk Orders",
    ],
    ctaLabel: "REQUEST ELECTRONICS →",
    metaTitle: "BLACK VISION | Electronics Sourcing",
    metaDescription:
      "Private sourcing for consumer electronics, smart devices and commercial electronics across China and Dubai.",
    homeBlurb: "Consumer and commercial electronics.",
  },
];

export const customRequestCategory = {
  navLabel: "CUSTOM REQUEST",
  homeBlurb: "Anything else — tell us what you need.",
};

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
