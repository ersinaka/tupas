import { categories, getCategoryBySlug } from "@/content/categories";
import { products } from "@/content/products";
import type { Product, ProductCategory } from "@/types/content";

export type ProductFilters = {
  q?: string;
  category?: string;
  group?: string;
};

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(product: Product) {
  return product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => Boolean(p));
}

export function getProductsByCategory(categorySlug: string) {
  const childSlugs = categories
    .filter((c) => c.parentSlug === categorySlug)
    .map((c) => c.slug);
  const slugs = new Set([categorySlug, ...childSlugs]);
  return products.filter((p) => slugs.has(p.categorySlug));
}

export function filterProducts(filters: ProductFilters): Product[] {
  let result = [...products];

  if (filters.category) {
    result = getProductsByCategory(filters.category);
  }

  if (filters.group) {
    const groupSlugs = new Set(
      categories.filter((c) => c.group === filters.group).map((c) => c.slug),
    );
    result = result.filter((p) => groupSlugs.has(p.categorySlug));
  }

  if (filters.q?.trim()) {
    const q = filters.q.trim().toLocaleLowerCase("tr-TR");
    result = result.filter((p) => {
      const cat = getCategoryBySlug(p.categorySlug);
      const haystack = [
        p.name,
        p.summary,
        p.description,
        cat?.name ?? "",
      ]
        .join(" ")
        .toLocaleLowerCase("tr-TR");
      return haystack.includes(q);
    });
  }

  return result;
}

export function getCategoryForProduct(product: Product): ProductCategory | undefined {
  return getCategoryBySlug(product.categorySlug);
}
