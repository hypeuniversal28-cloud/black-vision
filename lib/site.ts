export const site = {
  name: "BLACK VISION",
  positioning: "PRIVATE ACCESS",
  statement: ["YOU NEED IT.", "WE SOURCE IT."],
  // Feeds metadata, sitemap.xml, robots.txt and social share previews.
  url: "https://primevgency.com",
  description:
    "Access to products, suppliers and opportunities across China and Dubai.",
  contact: {
    // Leave a channel as an empty string until the real account exists —
    // empty channels are hidden across the site rather than linking nowhere.
    whatsapp: "https://wa.me/message/LTKIH6UACS7VO1",
    email: "",
    instagram: "",
    snapchat: "",
  },
  locations: ["CHINA", "DUBAI"],
};

export type ContactChannel = { label: string; href: string };

/** Only the channels that are actually configured. */
export function getContactChannels(): ContactChannel[] {
  const { whatsapp, email, instagram, snapchat } = site.contact;
  return [
    { label: "WhatsApp", href: whatsapp },
    { label: "Instagram", href: instagram },
    { label: "Snapchat", href: snapchat },
    { label: "Email", href: email ? `mailto:${email}` : "" },
  ].filter((channel) => channel.href !== "");
}
