import { getTranslations } from "next-intl/server";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type TrustPoint = { title: string; body: string };

export default async function TrustPoints({ compact = false }: { compact?: boolean }) {
  const t = await getTranslations("trust");
  const points = t.raw("points") as TrustPoint[];

  return (
    <section className={`border-t border-line py-20 md:py-28 ${compact ? "" : "bg-surface"}`}>
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
        <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 50} as="div">
              <div className="flex flex-col gap-2 border-t border-line py-6">
                <span className="text-sm font-semibold tracking-[0.1em] text-ink">
                  {p.title}
                </span>
                <p className="max-w-[46ch] text-sm leading-relaxed text-ink-dim">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
