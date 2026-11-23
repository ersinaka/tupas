import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Kalite Belgeleri",
  description:
    "TÜPAŞ kalite ve uygunluk belgeleri yalnızca şirket tarafından doğrulandıktan sonra bu sayfada yayınlanır.",
  path: "/kurumsal/kalite-belgeleri",
});

export default function KaliteBelgeleriPage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Kalite Belgeleri"
        description="Sertifika, ISO ve uygunluk belgeleri doğrulanmadan web sitesinde gösterilmez."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <StatusNote
            status="placeholder"
            notes="Bu sayfa bilinçli olarak boştur. Logo, sertifika görseli veya standart numarası uydurulmaz."
            className="mb-10"
          />

          <SectionHeading
            title="Yayın politikası"
            description="Eski sitede yer alan kalite ve referans iddiaları, eldeki belge taraması tamamlanana kadar yeniden yayınlanmaz."
          />

          <div className="mt-10 space-y-6 text-base leading-8 text-steel">
            <p>
              TÜPAŞ, müşterilerine güvenilir bilgi sunmak için yalnızca şirket
              yetkililerince onaylanmış belgeleri paylaşır. ISO veya benzeri
              akreditasyon statüsü, belge numarası veya geçerlilik tarihi; resmi
              dosya şirkete ulaştığında bu sayfada listelenecektir.
            </p>
            <p>
              Ürün bazlı teknik belgeler (veri sayfası, uygunluk testi vb.)
              ilgili ürün sayfasına bağlanacaktır; burada toplu bir vitrin
              oluşturulmayacaktır.
            </p>
            <p>
              Belge paylaşımı için taleplerinizi{" "}
              <a
                href="mailto:info@tupas.com.tr"
                className="font-medium text-charcoal underline decoration-steel/40 underline-offset-2 hover:text-crimson"
              >
                info@tupas.com.tr
              </a>{" "}
              üzerinden iletebilirsiniz. İletişim bilgisi yayın öncesi şirket
              doğrulamasına tabidir.
            </p>
          </div>

          <StatusNote
            status="needs-confirmation"
            notes="Hukuki ve teknik ekip tarafından belge envanteri oluşturulmalı; ardından bu sayfa güncellenir."
            className="mt-10"
          />
        </Container>
      </section>
    </>
  );
}