import { categories, customRequestCategory } from "@/lib/categories";
import CategoryCard from "./CategoryCard";

export default function CategoryList() {
  return (
    <div className="flex flex-col">
      {categories.map((c, i) => (
        <CategoryCard
          key={c.slug}
          index={i + 1}
          slug={c.slug}
          label={c.navLabel}
          blurb={c.homeBlurb}
          href={`/${c.slug}`}
          delay={Math.min(i * 40, 200)}
        />
      ))}
      <CategoryCard
        index={categories.length + 1}
        slug="custom-request"
        label={customRequestCategory.navLabel}
        blurb={customRequestCategory.homeBlurb}
        href="/custom-request"
        delay={Math.min(categories.length * 40, 200)}
      />
      <div className="bv-hairline" />
    </div>
  );
}
