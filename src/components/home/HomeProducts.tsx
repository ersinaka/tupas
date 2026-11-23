import Image from "next/image";
import Link from "next/link";
import { getFeaturedCategories } from "@/content/categories";
import { getFeaturedProducts } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeProducts() {
  const categories = getFeaturedCategories();
  const featured = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Ürünler"
            title="Katalogdan seçilmiş başlıklar"
            description="Fiyat ve stok yerine teknik uygunluk ve teklif odaklı katalog."
          />
          <Button href="/urunler" variant="secondary">
            Tüm ürünler
          </Button>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/urunler?kategori=${category.slug}`}
              className="border border-steel/25 bg-white px-5 py-6 transition-colors duration-300 ease-industrial hover:border-crimson"
            >
              <h3 className="font-heading text-lg font-semibold text-charcoal">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-steel">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {featured.map((product) => {
            const image = product.images[0];
            return (
              <Link
                key={product.slug}
                href={`/urunler/${product.slug}`}
                className="group grid overflow-hidden border border-steel/20 bg-white sm:grid-cols-5"
              >
                <div className="relative aspect-[4/3] bg-ivory sm:col-span-2 sm:aspect-auto">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                    sizes="(max-width:640px) 100vw, 40vw"
                  />
                  {image.isPlaceholder ? (
                    <span className="absolute bottom-2 left-2 bg-charcoal/80 px-2 py-1 text-xs text-ivory">
                      Yer tutucu
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col justify-center px-6 py-6 sm:col-span-3">
                  <h3 className="font-heading text-xl font-semibold text-charcoal group-hover:text-crimson">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-steel">
                    {product.summary}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
