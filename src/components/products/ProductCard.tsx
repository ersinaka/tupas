import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/content";
import { getCategoryForProduct } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0];
  const category = getCategoryForProduct(product);

  return (
    <article className="grid border border-steel/20 bg-white sm:grid-cols-12">
      <Link
        href={`/urunler/${product.slug}`}
        className="relative aspect-[4/3] bg-ivory sm:col-span-4 sm:aspect-auto sm:min-h-40"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, 30vw"
        />
        {image.isPlaceholder ? (
          <span className="absolute bottom-2 left-2 bg-charcoal/80 px-2 py-1 text-xs text-ivory">
            Yer tutucu görsel
          </span>
        ) : null}
      </Link>
      <div className="flex flex-col justify-center gap-3 px-5 py-5 sm:col-span-8">
        {category ? (
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-steel">
            {category.name}
          </p>
        ) : null}
        <h2 className="font-heading text-xl font-semibold text-charcoal">
          <Link href={`/urunler/${product.slug}`} className="hover:text-crimson">
            {product.name}
          </Link>
        </h2>
        <p className="text-sm leading-7 text-steel">{product.summary}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <Link
            href={`/urunler/${product.slug}`}
            className="text-sm font-semibold text-crimson hover:underline"
          >
            Detay
          </Link>
          {product.quoteEnabled ? (
            <Link
              href={`/teklif-al?urun=${product.slug}`}
              className="text-sm font-semibold text-charcoal hover:underline"
            >
              Teklif Al
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
