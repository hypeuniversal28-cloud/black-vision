import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import HeroGlow from "@/components/graphics/HeroGlow";
import SectionHeading from "@/components/SectionHeading";
import CategoryList from "@/components/CategoryList";
import TrustBar from "@/components/TrustBar";
import TrustPoints from "@/components/TrustPoints";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: { absolute: t("titleDefault") },
    description: t("siteDescription"),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <section className="relative flex min-h-[92svh] items-center overflow-hidden border-b border-line">
        <HeroGlow />
        <Container className="relative flex flex-col items-start gap-8 py-24 md:py-32">
          <Reveal>
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={72}
              height={56}
              aria-hidden="true"
              priority
              className="h-auto w-auto opacity-90"
            />
          </Reveal>
          <RevealText
            text={site.name}
            delay={60}
            className="text-[clamp(3rem,11vw,6.5rem)] font-semibold leading-[0.94] tracking-tight text-ink"
          />
          <Reveal delay={260}>
            <p className="bv-eyebrow text-ink">{t("home.heroEyebrow")}</p>
          </Reveal>
          <Reveal delay={320}>
            <p className="max-w-[36ch] text-lg leading-relaxed text-ink-dim md:text-xl">
              {t("home.heroLead")}
            </p>
          </Reveal>
          <Reveal delay={380}>
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
                <a
                  href="#discover"
                  className="bv-btn-sweep inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-7 py-4 text-sm font-semibold tracking-[0.14em] text-ink"
                >
                  {t("home.explore")}
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="discover" className="scroll-mt-16 py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow={t("home.discoverEyebrow")} title={t("home.discoverTitle")} />
          <CategoryList />
        </Container>
      </section>

      <TrustBar />
      <TrustPoints compact />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow={t("home.processEyebrow")}
            title={t("home.processTitle")}
            sub={t("home.processSub")}
          />
          <ProcessSteps />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
