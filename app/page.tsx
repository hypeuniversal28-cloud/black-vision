import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import HeroGlow from "@/components/graphics/HeroGlow";
import SectionHeading from "@/components/SectionHeading";
import CategoryList from "@/components/CategoryList";
import TrustBar from "@/components/TrustBar";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import Image from "next/image";

export default function Home() {
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
            text="BLACK VISION"
            delay={60}
            className="text-[clamp(3rem,11vw,6.5rem)] font-semibold leading-[0.94] tracking-tight text-ink"
          />
          <Reveal delay={260}>
            <p className="bv-eyebrow text-ink">PRIVATE ACCESS.</p>
          </Reveal>
          <Reveal delay={320}>
            <p className="max-w-[36ch] text-lg leading-relaxed text-ink-dim md:text-xl">
              Access to products, suppliers and opportunities across China and
              Dubai.
            </p>
          </Reveal>
          <Reveal delay={380}>
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
                <a
                  href="#discover"
                  className="bv-btn-sweep inline-flex items-center justify-center gap-2 rounded-sm border border-ink px-7 py-4 text-sm font-semibold tracking-[0.14em] text-ink"
                >
                  EXPLORE →
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="discover" className="scroll-mt-16 py-20 md:py-28">
        <Container className="flex flex-col gap-10">
          <SectionHeading eyebrow="SOURCING" title="What are you looking for?" />
          <CategoryList />
        </Container>
      </section>

      <TrustBar />

      <section className="py-20 md:py-28">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            eyebrow="PROCESS"
            title="How it works"
            sub="A private request, handled from first message to final delivery."
          />
          <ProcessSteps />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
