import { Link } from "@/i18n/navigation";
import Container from "./Container";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import Magnetic from "./Magnetic";
import HeroGlow from "./graphics/HeroGlow";

export default function PageHero({
  eyebrow,
  title,
  sub,
  ctaLabel,
  ctaHref,
}: {
  eyebrow?: string;
  title: string;
  sub: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line py-20 md:py-28">
      <HeroGlow />
      <Container className="relative flex flex-col gap-6">
        {eyebrow && (
          <Reveal>
            <span className="bv-eyebrow">{eyebrow}</span>
          </Reveal>
        )}
        <RevealText
          text={title}
          delay={60}
          className="text-[clamp(2.75rem,9vw,5rem)] font-semibold leading-[0.98] tracking-tight text-ink"
        />
        <Reveal delay={220}>
          <p className="max-w-[48ch] text-[1.0625rem] leading-relaxed text-ink-dim md:text-lg">
            {sub}
          </p>
        </Reveal>
        {ctaLabel && ctaHref && (
          <Reveal delay={300}>
            <Magnetic className="mt-2">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-7 py-3.5 text-sm font-semibold tracking-[0.14em] text-bg transition-transform duration-300 hover:scale-[1.02]"
              >
                {ctaLabel}
              </Link>
            </Magnetic>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
