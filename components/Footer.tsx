import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Container from "./Container";
import Mark from "./Mark";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  footerCategoryLinks,
  footerCompanyLinks,
  footerLegalLinks,
} from "@/lib/nav";
import { getContactChannels, site } from "@/lib/site";

const socialLinks = getContactChannels();

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="border-t border-line bg-bg">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-8">
          <div className="col-span-2 flex flex-col gap-4 md:col-span-2">
            <Mark size={26} />
            <p className="bv-eyebrow text-ink-dim">{t("footer.tagline")}</p>
            <p className="text-sm text-ink-faint">
              {site.locations.join(" • ")} • {t("common.worldwide")}
            </p>
          </div>

          <FooterColumn
            title={t("footer.sourcingHeading")}
            links={footerCategoryLinks.map((l) => ({
              href: l.href,
              label: l.slug ? t(`categories.${l.slug}.navLabel`) : t(`common.${l.key}`),
            }))}
          />
          <FooterColumn
            title={t("footer.companyHeading")}
            links={footerCompanyLinks.map((l) => ({ href: l.href, label: t(`nav.${l.key}`) }))}
          />

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="bv-eyebrow text-ink-faint">{t("footer.connectHeading")}</p>
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
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-14 bv-hairline" />

        <div className="mt-8 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} {site.name}. {t("footer.rights")}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-ink-faint bv-link-underline hover:text-ink-dim"
              >
                {t(`pages.${l.key}.heroTitle`)}
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
