export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "REQUEST", description: "Tell us what you need." },
  { number: "02", title: "SOURCE", description: "We search our network." },
  {
    number: "03",
    title: "VERIFY",
    description: "We verify the relevant details and suppliers.",
  },
  {
    number: "04",
    title: "QUOTE",
    description: "You receive a clear quotation.",
  },
  {
    number: "05",
    title: "PROCURE",
    description: "We coordinate the purchase.",
  },
  {
    number: "06",
    title: "DELIVER",
    description: "We coordinate delivery.",
  },
];

export const whatWeHandle: string[] = [
  "Supplier discovery",
  "Product research",
  "Negotiation",
  "Verification",
  "Purchase coordination",
  "Quality checks when requested",
  "Logistics coordination",
  "Worldwide delivery coordination",
];
