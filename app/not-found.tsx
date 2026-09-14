import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import HeroGlow from "@/components/graphics/HeroGlow";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | Page Not Found" },
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden">
      <HeroGlow />
      <Container className="relative flex flex-col items-start gap-6">
        <Reveal>
          <span className="bv-eyebrow">404</span>
        </Reveal>
        <RevealText
          text={"THIS PAGE\nISN'T HERE."}
          delay={60}
          className="text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-ink"
        />
        <Reveal delay={220}>
          <p className="max-w-[42ch] text-lg leading-relaxed text-ink-dim">
            It may have moved, or the address may be incorrect. Tell us what
            you&apos;re looking for and we&apos;ll take it from there.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Magnetic>
              <Link
                href="/custom-request"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-7 py-4 text-sm font-semibold tracking-[0.14em] text-bg transition-transform duration-300 hover:scale-[1.02]"
              >
                SEND A REQUEST →
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/"
                className="bv-btn-sweep inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-7 py-4 text-sm font-semibold tracking-[0.14em] text-ink"
              >
                BACK HOME →
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
