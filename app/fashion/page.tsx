import type { Metadata } from "next";
import { getCategory } from "@/lib/categories";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const category = getCategory("fashion")!;

export const metadata: Metadata = {
  title: { absolute: category.metaTitle },
  description: category.metaDescription,
};

export default function FashionPage() {
  return <CategoryPageTemplate category={category} />;
}
