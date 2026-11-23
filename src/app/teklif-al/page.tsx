import { Suspense } from "react";
import { QuotePageContent } from "@/components/forms/QuotePageContent";
import { PageHero } from "@/components/ui/PageHero";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Teklif Al",
  description:
    "Ürün veya proje için TÜPAŞ teklif formu. Keşif ve teknik değerlendirme talebi oluşturun.",
  path: "/teklif-al",
});

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Teklif"
        title="Teklif talebi oluşturun"
        description="Ürün, sistem veya hizmet ihtiyacınızı kısaca anlatın. E-posta altyapısı hazır olduğunda talebiniz ilgili adrese iletilir."
      />
      <section className="py-14 sm:py-16">
        <Suspense fallback={<p className="px-4 text-sm text-steel">Form yükleniyor…</p>}>
          <QuotePageContent />
        </Suspense>
      </section>
    </>
  );
}
