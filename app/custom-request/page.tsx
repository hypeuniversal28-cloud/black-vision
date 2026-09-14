import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import RequestForm from "@/components/RequestForm";
import { getCategory } from "@/lib/categories";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | Private Sourcing Request" },
  description:
    "Tell BLACK VISION what you're looking for — we'll take it from there.",
};

export default async function CustomRequestPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const preset = params.category ? getCategory(params.category) : undefined;

  return (
    <>
      <section className="relative border-b border-line py-20 md:py-24">
        <Container className="flex flex-col gap-6">
          <Reveal>
            <span className="bv-eyebrow">CUSTOM REQUEST</span>
          </Reveal>
          <RevealText
            text="CAN'T FIND WHAT YOU'RE LOOKING FOR?"
            delay={60}
            className="max-w-[16ch] text-[clamp(2.5rem,7vw,4rem)] font-semibold leading-[1.02] tracking-tight text-ink"
          />
          <Reveal delay={220}>
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink-dim">
              Tell us what you need. We&apos;ll take it from there.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <RequestForm defaultCategory={preset?.slug} />
        </Container>
      </section>
    </>
  );
}
