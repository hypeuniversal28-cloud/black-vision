import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import TrustBar from "@/components/TrustBar";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | About" },
  description:
    "BLACK VISION was built around one idea: finding the right product should not require knowing the right people.",
};

const pillars = [
  { title: "ACCESS", body: "A private route into markets that are otherwise closed to outsiders." },
  { title: "NETWORK", body: "Relationships with suppliers, manufacturers and specialists across two continents." },
  { title: "LOCAL PRESENCE", body: "People on the ground in China and Dubai, not a directory of contacts." },
  { title: "EXECUTION", body: "Every request is sourced, verified and coordinated through to delivery." },
  { title: "DISCRETION", body: "Private clients and businesses, handled with the same quiet attention." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title={"ACCESS CHANGES\nEVERYTHING."}
        sub="BLACK VISION was built around one idea: finding the right product should not require knowing the right people."
      />

      <section className="py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow="THE IDEA"
            title="A private access office, not a marketplace."
            sub="Clients don't come to browse. They come to say what they need — and we find it, verify it, and bring it to them."
          />
          <Reveal delay={100} className="flex flex-col gap-6 pt-1 text-[1.0625rem] leading-relaxed text-ink-dim">
            <p>
              We work between China and Dubai — sourcing products, suppliers and
              opportunities for private clients and businesses around the world.
            </p>
            <p>
              That means cars, fashion, watches, interiors, business equipment,
              construction materials and electronics — and anything else a
              client brings to us that falls outside those categories.
            </p>
            <p>
              We work with individuals sourcing a single piece, and with
              companies sourcing at scale. The process is the same either way:
              request, source, verify, quote, procure, deliver.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-surface py-20 md:py-28">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="APPROACH" title="What access means, in practice." />
          <div className="grid grid-cols-1 gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} as="div">
                <div className="flex flex-col gap-3 border-t border-line py-6">
                  <span className="text-sm font-semibold tracking-[0.14em] text-ink">
                    {p.title}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TrustBar />
      <CTASection />
    </>
  );
}
