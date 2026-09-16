import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { routing, rtlLocales, type Locale } from "@/i18n/routing";
import { englishTitle } from "@/i18n/englishTitle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${site.url}${l === routing.defaultLocale ? "" : `/${l}`}/`;
  }
  languages["x-default"] = `${site.url}/`;

  return {
    metadataBase: new URL(site.url),
    title: {
      default: englishTitle("meta.titleDefault"),
      template: englishTitle("meta.titleTemplate"),
    },
    description: t("siteDescription"),
    alternates: { languages },
    openGraph: {
      title: t("titleDefault"),
      description: t("siteDescription"),
      url: site.url,
      siteName: site.name,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("titleDefault"),
      description: t("siteDescription"),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "common" });
  const dir = rtlLocales.includes(locale as Locale) ? "rtl" : "ltr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    areaServed: ["China", "United Arab Emirates", "Worldwide"],
  };

  return (
    <html lang={locale} dir={dir} data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <div className="bv-grain" />
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
          >
            {t("skipToContent")}
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
