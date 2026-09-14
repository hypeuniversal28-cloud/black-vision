import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | Terms" },
  description: "The terms governing your use of BLACK VISION's sourcing service.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Terms" sub="Last updated — to be confirmed before launch." />
      <section className="py-16 md:py-24">
        <Container className="flex max-w-3xl flex-col gap-10 text-[1.0625rem] leading-relaxed text-ink-dim">
          <Section title="Our service">
            BLACK VISION sources products, suppliers and opportunities on
            request. Submitting a request does not guarantee availability — we
            confirm what we can source and provide a quotation before anything
            proceeds.
          </Section>
          <Section title="Quotations and payment">
            Quotations are confirmed with you directly and are only valid for
            the period stated at the time. Payment terms are agreed before
            procurement begins.
          </Section>
          <Section title="Delivery">
            Delivery timelines depend on the product, supplier and destination,
            and are communicated once a purchase is confirmed.
          </Section>
          <Section title="Limitation of liability">
            BLACK VISION acts as a sourcing and procurement intermediary. We
            take reasonable care in verifying suppliers and products, but do
            not manufacture the goods we source.
          </Section>
          <p className="text-sm text-ink-faint">
            This page is a placeholder and should be reviewed by legal counsel
            before launch to reflect BLACK VISION&apos;s actual terms of
            service and applicable law.
          </p>
        </Container>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold tracking-tight text-ink">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
