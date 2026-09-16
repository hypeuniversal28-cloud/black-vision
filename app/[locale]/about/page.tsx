import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";
import { englishTitle } from "@/i18n/englishTitle";

type Pillar = { title: string; body: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return {
    title: { absolute: englishTitle("pages.about.metaTitle") },
    description: t("metaDescription"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.about");
  const pillars = t.raw("pillars") as Pillar[];

  return (
    <>
      <PageHero
        eyebrow={t("heroEyebrow")}
        title={t("heroTitle")}
        sub={t("heroSub")}
      />

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow={t("ideaEyebrow")}
            title={t("ideaTitle")}
            sub={t("ideaSub")}
          />
          <Reveal delay={100} className="flex flex-col gap-6 pt-1 text-[1.0625rem] leading-relaxed text-ink-dim">
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow={t("approachEyebrow")} title={t("approachTitle")} />
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} as="div">
                <div className="flex flex-col gap-3 border-t border-line py-6">
                  <span className="text-sm font-semibold tracking-[0.14em] text-ink">
                    {p.title}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TrustBar />
      <CTASection />
    </>
  );
}
