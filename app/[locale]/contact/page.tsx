import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import HeroGlow from "@/components/graphics/HeroGlow";
import { ArrowIcon } from "@/components/icons";
import { getContactChannels } from "@/lib/site";
import { Link } from "@/i18n/navigation";

const options = getContactChannels();

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <HeroGlow />
      <Container className="relative flex flex-col gap-14">
        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="bv-eyebrow">{t("pages.contact.eyebrow")}</span>
          </Reveal>
          <RevealText
            text={t("pages.contact.title")}
            delay={60}
            className="text-[clamp(2.75rem,9vw,5rem)] font-semibold leading-[0.98] tracking-tight text-ink"
          />
          <Reveal delay={220}>
            <Magnetic className="mt-2">
              <Link
                href="/custom-request"
                className="inline-flex w-fit items-center gap-2 rounded-sm bg-ink px-7 py-4 text-sm font-semibold tracking-[0.14em] text-bg transition-transform duration-300 hover:scale-[1.02]"
              >
                {t("common.sendARequest")} →
              </Link>
            </Magnetic>
          </Reveal>
        </div>

        <div className="flex flex-col">
          <div className="bv-hairline" />
          {options.map((o, i) => (
            <Reveal key={o.label} delay={i * 40} as="div">
              <a
                href={o.href}
                target={o.href.startsWith("http") ? "_blank" : undefined}
                rel={o.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between border-b border-line py-6 text-xl font-medium tracking-tight text-ink md:text-2xl"
              >
                {o.label}
                <ArrowIcon className="size-5 -translate-x-1 text-ink-dim opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
