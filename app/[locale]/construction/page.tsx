import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const slug = "construction";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: `categories.${slug}` });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
  };
}

export default async function ConstructionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CategoryPageTemplate slug={slug} />;
}
