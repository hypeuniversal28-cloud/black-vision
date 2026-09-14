import type { Metadata } from "next";
import { getCategory } from "@/lib/categories";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

const category = getCategory("electronics")!;

export const metadata: Metadata = {
  title: { absolute: category.metaTitle },
  description: category.metaDescription,
};

export default function ElectronicsPage() {
  return <CategoryPageTemplate category={category} />;
}
