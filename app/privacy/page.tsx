import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: { absolute: "BLACK VISION | Privacy Policy" },
  description: "How BLACK VISION collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" sub="Last updated — to be confirmed before launch." />
      <section className="py-16 md:py-24">
        <Container className="flex max-w-3xl flex-col gap-10 text-[1.0625rem] leading-relaxed text-ink-dim">
          <Section title="Information we collect">
            When you submit a request or contact us, we collect the details you
            provide — such as your name, email or WhatsApp number, and the
            specifics of what you&apos;re looking for, including any file or
            link you choose to share.
          </Section>
          <Section title="How we use it">
            We use this information to review your request, source and verify
            what you&apos;re looking for, prepare a quotation, and communicate
            with you about your request.
          </Section>
          <Section title="Sharing">
            We share request details with suppliers or partners only as
            necessary to fulfil your request, and do not sell your personal
            information.
          </Section>
          <Section title="Your rights">
            You may ask us to access, correct or delete the information we hold
            about you at any time by contacting us directly.
          </Section>
          <p className="text-sm text-ink-faint">
            This page is a placeholder and should be reviewed by legal counsel
            before launch to reflect BLACK VISION&apos;s actual data practices
            and applicable law.
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
