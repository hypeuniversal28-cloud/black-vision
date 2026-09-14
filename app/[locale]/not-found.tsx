import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import HeroGlow from "@/components/graphics/HeroGlow";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.notFound");
  return { title: { absolute: t("metaTitle") } };
}

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden">
      <HeroGlow />
      <Container className="relative flex flex-col items-start gap-6">
        <Reveal>
          <span className="bv-eyebrow">{t("pages.notFound.eyebrow")}</span>
        </Reveal>
        <RevealText
          text={t("pages.notFound.title")}
          delay={60}
          className="text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-ink"
        />
        <Reveal delay={220}>
          <p className="max-w-[42ch] text-lg leading-relaxed text-ink-dim">
            {t("pages.notFound.sub")}
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Magnetic>
              <Link
                href="/custom-request"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-7 py-4 text-sm font-semibold tracking-[0.14em] text-bg transition-transform duration-300 hover:scale-[1.02]"
              >
                {t("common.sendYourRequest")}
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/"
                className="bv-btn-sweep inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-7 py-4 text-sm font-semibold tracking-[0.14em] text-ink"
              >
                {t("common.backHome")}
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
