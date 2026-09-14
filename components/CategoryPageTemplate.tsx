import { getTranslations } from "next-intl/server";
import Container from "./Container";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import ProcessSteps from "./ProcessSteps";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import { categoryIcons } from "./icons";

export default async function CategoryPageTemplate({ slug }: { slug: string }) {
  const t = await getTranslations();
  const c = `categories.${slug}`;
  const Icon = categoryIcons[slug];
  const ctaHref = `/custom-request?category=${slug}`;
  const items = t.raw(`${c}.items`) as string[];
  const focus = t.has(`${c}.focus`) ? (t.raw(`${c}.focus`) as string[]) : undefined;

  return (
    <>
      <PageHero
        eyebrow={t("categoryPage.sourcingEyebrow")}
        title={t(`${c}.heroTitle`)}
        sub={t(`${c}.heroSub`)}
        ctaLabel={t(`${c}.ctaLabel`)}
        ctaHref={ctaHref}
      />

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow={t("categoryPage.whatWeSourceEyebrow")}
              title={t("categoryPage.whatWeSourceTitle")}
            />
            <Reveal delay={80}>
              <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-dim">
                {t(`${c}.intro`)}
              </p>
            </Reveal>
            {focus && (
              <Reveal delay={140}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {focus.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-line px-4 py-2 text-xs font-medium tracking-[0.08em] text-ink-dim"
                    >
                      {f.toUpperCase()}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <div className="flex flex-col">
            <span className="bv-eyebrow mb-4 flex items-center gap-2">
              {Icon && <Icon className="size-4" />}
              {t("categoryPage.categoriesEyebrow")}
            </span>
            <ul className="flex flex-col">
              {items.map((item, i) => (
                <Reveal key={item} delay={i * 40} as="li">
                  <span className="flex items-center justify-between border-t border-line py-4 text-base text-ink last:border-b">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow={t("categoryPage.howItWorksEyebrow")}
            title={t("categoryPage.howItWorksTitle")}
          />
          <ProcessSteps compact />
        </Container>
      </section>

      <CTASection
        lines={[t(`${c}.heroTitle`), t("categoryPage.ctaSuffix")]}
        ctaLabel={t(`${c}.ctaLabel`)}
        ctaHref={ctaHref}
      />
    </>
  );
}
