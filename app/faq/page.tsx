import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { faqItems } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | FAQ" },
  description: "Answers to common questions about sourcing, pricing, payment and delivery with BLACK VISION.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero eyebrow="FAQ" title="Questions, answered." sub="Short, direct answers — no invented guarantees." />
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <FAQAccordion items={faqItems} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
