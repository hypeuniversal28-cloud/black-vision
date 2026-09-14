import Link from "next/link";
import Container from "./Container";
import Mark from "./Mark";
import {
  footerCategoryLinks,
  footerCompanyLinks,
  footerLegalLinks,
} from "@/lib/nav";
import { getContactChannels, site } from "@/lib/site";

const socialLinks = getContactChannels();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-2">
            <Mark size={26} />
            <p className="bv-eyebrow text-ink-dim">PRIVATE ACCESS.</p>
            <p className="text-sm text-ink-faint">
              {site.locations.join(" • ")} • WORLDWIDE
            </p>
          </div>

          <FooterColumn title="Sourcing" links={footerCategoryLinks} />
          <FooterColumn title="Company" links={footerCompanyLinks} />

          <div className="flex flex-col gap-3">
            <p className="bv-eyebrow text-ink-faint">Connect</p>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bv-link-underline text-sm text-ink-dim hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 bv-hairline" />

        <div className="mt-8 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-ink-faint bv-link-underline hover:text-ink-dim"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="bv-eyebrow text-ink-faint">{title}</p>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="bv-link-underline text-sm text-ink-dim hover:text-ink"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}
