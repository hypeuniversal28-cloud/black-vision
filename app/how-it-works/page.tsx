import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { whatWeHandle } from "@/lib/process";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | How It Works" },
  description:
    "From request to delivery — how BLACK VISION sources, verifies and coordinates procurement across China and Dubai.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="PROCESS" title={"FROM REQUEST\nTO DELIVERY."} sub="Every request follows the same disciplined process, from first message to final delivery." />

      <section className="py-20 md:py-28">
        <Container>
          <ProcessSteps />
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="SCOPE"
            title="What we handle"
            sub="Only what we can genuinely deliver — nothing promised beyond that."
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
