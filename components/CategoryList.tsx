import { getTranslations } from "next-intl/server";
import { categories } from "@/lib/categories";
import CategoryCard from "./CategoryCard";

export default async function CategoryList() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col">
      {categories.map((c, i) => (
        <CategoryCard
          key={c.slug}
          index={i + 1}
          slug={c.slug}
          label={t(`categories.${c.slug}.navLabel`)}
          blurb={t(`categories.${c.slug}.homeBlurb`)}
          href={`/${c.slug}`}
          delay={Math.min(i * 40, 200)}
        />
      ))}
      <CategoryCard
        index={categories.length + 1}
        slug="custom-request"
        label={t("customRequestCategory.navLabel")}
        blurb={t("customRequestCategory.homeBlurb")}
        href="/custom-request"
        delay={Math.min(categories.length * 40, 200)}
      />
      <div className="bv-hairline" />
    </div>
  );
}
