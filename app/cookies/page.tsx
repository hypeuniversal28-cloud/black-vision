import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | Cookies" },
  description: "How BLACK VISION uses cookies on this website.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Cookies" sub="Last updated — to be confirmed before launch." />
      <section className="py-16 md:py-24">
        <Container className="flex max-w-3xl flex-col gap-10 text-[1.0625rem] leading-relaxed text-ink-dim">
          <Section title="Essential cookies">
            We use a minimal set of cookies required for this website to
            function correctly.
          </Section>
          <Section title="Analytics">
            If analytics tools are added in future, this page will be updated
            to describe what is collected and how to opt out.
          </Section>
          <p className="text-sm text-ink-faint">
            This page is a placeholder and should be reviewed by legal counsel
            before launch to reflect BLACK VISION&apos;s actual use of
            cookies and applicable law.
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
