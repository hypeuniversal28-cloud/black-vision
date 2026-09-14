import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import RequestForm from "@/components/RequestForm";
import TrustPoints from "@/components/TrustPoints";
import { getCategory } from "@/lib/categories";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.customRequest" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
  };
}

export default async function CustomRequestPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const sp = await searchParams;
  const preset = sp.category ? getCategory(sp.category) : undefined;

  return (
    <>
      <section className="relative border-b border-line py-20 md:py-24">
        <Container className="flex flex-col gap-6">
          <Reveal>
            <span className="bv-eyebrow">{t("pages.customRequest.eyebrow")}</span>
          </Reveal>
          <RevealText
            text={t("pages.customRequest.title")}
            delay={60}
            className="max-w-[16ch] text-[clamp(2.5rem,7vw,4rem)] font-semibold leading-[1.02] tracking-tight text-ink"
          />
          <Reveal delay={220}>
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink-dim">
              {t("pages.customRequest.sub")}
            </p>
          </Reveal>
        </Container>
      </section>

      <TrustPoints compact />

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <RequestForm defaultCategory={preset?.slug} />
        </Container>
      </section>
    </>
  );
}
