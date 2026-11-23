import { Suspense } from "react";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Ürünler",
  description:
    "TÜPAŞ yangın söndürme cihazları, dolaplar, algılama sistemleri ve koruyucu ekipman kataloğu.",
  path: "/urunler",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Katalog"
        title="Ürünler"
        description="Profesyonel ürün kataloğu. Fiyat ve stok yerine teknik uygunluk ve teklif odaklı yapı. Eksik teknik tablolar şirket onayından sonra tamamlanır."
      />
      <section className="py-12 sm:py-16">
        <Container>
          <Suspense fallback={<p className="text-sm text-steel">Ürünler yükleniyor…</p>}>
            <ProductsCatalog />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
