import Link from "next/link";
import Container from "./Container";
import Reveal from "./Reveal";
import RevealText from "./RevealText";
import Magnetic from "./Magnetic";

export default function CTASection({
  lines = ["YOU NEED IT.", "WE SOURCE IT."],
  ctaLabel = "SEND YOUR REQUEST →",
  ctaHref = "/custom-request",
}: {
  lines?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="border-t border-line bg-bg py-24 md:py-32">
      <Container className="flex flex-col items-center gap-10 text-center">
        <RevealText
          as="h2"
          text={lines.join("\n")}
          className="text-[clamp(2.25rem,8vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-ink"
        />
        <Reveal delay={160}>
          <Magnetic>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-sm bg-ink px-8 py-4 text-sm font-semibold tracking-[0.14em] text-bg transition-transform duration-300 hover:scale-[1.02]"
            >
              {ctaLabel}
            </Link>
          </Magnetic>
        </Reveal>
      </Container>
    </section>
  );
}
