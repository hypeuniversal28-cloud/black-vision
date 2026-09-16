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
    telegram: "",
    email: "",
    instagram: "",
    snapchat: "",
  },
  locations: ["CHINA", "DUBAI"],
};

export type ContactChannelKey = "whatsapp" | "telegram" | "instagram" | "snapchat" | "email";
export type ContactChannel = { key: ContactChannelKey; label: string; href: string };

/** Only the channels that are actually configured. */
export function getContactChannels(): ContactChannel[] {
  const { whatsapp, telegram, email, instagram, snapchat } = site.contact;
  const channels: ContactChannel[] = [
    { key: "whatsapp", label: "WhatsApp", href: whatsapp },
    { key: "telegram", label: "Telegram", href: telegram },
    { key: "instagram", label: "Instagram", href: instagram },
    { key: "snapchat", label: "Snapchat", href: snapchat },
    { key: "email", label: "Email", href: email ? `mailto:${email}` : "" },
  ];
  return channels.filter((channel) => channel.href !== "");
}

/** The subset of channels meant for instant chat (used by the homepage quick-contact block). */
export function getDirectChannels(): ContactChannel[] {
  return getContactChannels().filter((c) => c.key === "whatsapp" || c.key === "telegram");
}
