import { getTranslations } from "next-intl/server";
import Container from "./Container";
import Reveal from "./Reveal";
import RouteMap from "./graphics/RouteMap";

export default async function TrustBar() {
  const t = await getTranslations("trustBar");

  return (
    <section className="relative overflow-hidden border-t border-line bg-surface py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-ink">
        <RouteMap className="h-full w-full max-w-4xl" />
      </div>
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="bv-eyebrow">{t("eyebrow")}</span>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex items-center gap-6 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            <span>🇨🇳 {t("china")}</span>
            <span className="h-6 w-px bg-line-strong" />
            <span>🇦🇪 {t("dubai")}</span>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <p className="max-w-[36ch] text-[1.0625rem] text-ink-dim">{t("tagline")}</p>
        </Reveal>
      </Container>
    </section>
  );
}
