import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import TrustPoints from "@/components/TrustPoints";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { englishTitle } from "@/i18n/englishTitle";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.howItWorks" });
  return {
    title: { absolute: englishTitle("pages.howItWorks.metaTitle") },
    description: t("metaDescription"),
  };
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const whatWeHandle = t.raw("process.whatWeHandle") as string[];

  return (
    <>
      <PageHero
        eyebrow={t("pages.howItWorks.heroEyebrow")}
        title={t("pages.howItWorks.heroTitle")}
        sub={t("pages.howItWorks.heroSub")}
      />

      <TrustPoints compact />

      <section className="py-20 md:py-28">
        <Container>
          <ProcessSteps />
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={t("pages.howItWorks.scopeEyebrow")}
            title={t("pages.howItWorks.scopeTitle")}
            sub={t("pages.howItWorks.scopeSub")}
          />
          <ul className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
            {whatWeHandle.map((item, i) => (
              <Reveal key={item} delay={i * 40} as="li">
                <span className="flex items-center gap-3 border-t border-line py-4 text-base text-ink">
                  <span className="h-px w-4 bg-ink-faint" />
                  {item}
                </span>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
