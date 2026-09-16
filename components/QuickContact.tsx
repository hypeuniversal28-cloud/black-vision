import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Container from "./Container";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { WhatsAppIcon, TelegramIcon } from "./icons";
import { getDirectChannels, type ContactChannelKey } from "@/lib/site";

const icons: Partial<Record<ContactChannelKey, (p: { className?: string }) => React.ReactElement>> = {
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
};

export default async function QuickContact() {
  const channels = getDirectChannels();
  if (channels.length === 0) return null;

  const t = await getTranslations("quickContact");

  return (
    <section className="relative border-b border-line py-14 md:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <Reveal>
          <div className="flex size-20 items-center justify-center rounded-full border border-line-strong bg-surface md:size-24">
            <Image
              src="/brand/logo-seal.png"
              alt=""
              width={80}
              height={80}
              aria-hidden="true"
              className="h-12 w-12 opacity-95 md:h-14 md:w-14"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-[32ch] text-sm text-ink-dim md:text-base">{t("tagline")}</p>
        </Reveal>
        <Reveal delay={140}>
          <div className="flex w-full max-w-sm flex-col gap-3 pt-2">
            {channels.map((c) => {
              const Icon = icons[c.key];
              return (
                <Magnetic key={c.key} strength={0.1} className="w-full">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bv-btn-sweep flex w-full items-center justify-center gap-2.5 rounded-full border border-ink px-6 py-3.5 text-sm font-semibold tracking-[0.08em] text-ink"
                  >
                    {Icon && <Icon className="size-4" />}
                    {t(`channels.${c.key}`)}
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
