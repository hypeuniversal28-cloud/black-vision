import { Category } from "@/lib/categories";
import Container from "./Container";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import ProcessSteps from "./ProcessSteps";
import CTASection from "./CTASection";
import Reveal from "./Reveal";
import { categoryIcons } from "./icons";

export default function CategoryPageTemplate({ category }: { category: Category }) {
  const Icon = categoryIcons[category.slug];
  const ctaHref = `/custom-request?category=${category.slug}`;

  return (
    <>
      <PageHero
        eyebrow="SOURCING"
        title={category.heroTitle}
        sub={category.heroSub}
        ctaLabel={category.ctaLabel}
        ctaHref={ctaHref}
      />

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <div className="flex flex-col gap-8">
            <SectionHeading eyebrow="WHAT WE SOURCE" title={"A private request,\nnot a catalogue."} />
            <Reveal delay={80}>
              <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-dim">
                {category.intro}
              </p>
            </Reveal>
            {category.focus && (
              <Reveal delay={140}>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.focus.map((f) => (
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
              CATEGORIES
            </span>
            <ul className="flex flex-col">
              {category.items.map((item, i) => (
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
          <SectionHeading eyebrow="HOW IT WORKS" title="From request to delivery." />
          <ProcessSteps compact />
        </Container>
      </section>

      <CTASection
        lines={[category.heroTitle, "SOURCED PRIVATELY."]}
        ctaLabel={category.ctaLabel}
        ctaHref={ctaHref}
      />
    </>
  );
}
