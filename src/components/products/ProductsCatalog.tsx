"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { filterProducts } from "@/lib/products";

export function ProductsCatalog() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? undefined;
  const kategori = searchParams.get("kategori") ?? undefined;
  const grup = searchParams.get("grup") ?? undefined;

  const products = useMemo(
    () =>
      filterProducts({
        q,
        category: kategori,
        group: grup,
      }),
    [q, kategori, grup],
  );

  return (
    <div className="space-y-8">
      <ProductFilters q={q} category={kategori} group={grup} />
      <p className="text-sm text-steel">{products.length} ürün listeleniyor</p>
      <div className="space-y-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
        {products.length === 0 ? (
          <p className="border border-steel/20 bg-white px-5 py-8 text-steel">
            Bu filtrelere uygun ürün bulunamadı.
          </p>
        ) : null}
      </div>
    </div>
  );
}
