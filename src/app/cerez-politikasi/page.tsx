import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Çerez Politikası",
  description:
    "Web sitesinde kullanılan çerez türleri ve tercih yönetimi hakkında bilgilendirme taslağı.",
  path: "/cerez-politikasi",
});

export default function CerezPolitikasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Çerez Politikası"
        description="Çerez kullanımı ve tercih yönetimi — yayın öncesi hukuki onay beklenir."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <StatusNote
            status="placeholder"
            notes="Çerez envanteri ve onay bannerı yapılandırılmadan bu metin yürürlüğe girmez. Kullanılmayan çerez kategorileri listelenmeyecektir."
            className="mb-10"
          />

          <div className="space-y-8 text-base leading-8 text-steel">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Çerez nedir?
              </h2>
              <p className="mt-3">
                Çerezler, {siteConfig.baseUrl} ziyaretiniz sırasında tarayıcınıza
                kaydedilen küçük metin dosyalarıdır. Zorunlu çerezler sitenin
                çalışması için gerekebilir; analitik veya pazarlama çerezleri yalnızca
                açıkça tanımlandığında ve onay mekanizması kurulduğunda kullanılır.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Kullanılan çerez kategorileri (taslak)
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-charcoal">Zorunlu:</span>{" "}
                  Oturum ve güvenlik amaçlı teknik çerezler (envanter onay
                  sonrası güncellenecek).
                </li>
                <li>
                  <span className="font-medium text-charcoal">İsteğe bağlı:</span>{" "}
                  Analitik veya üçüncü taraf çerezleri şu an tanımlı değildir;
                  devreye alınırsa bu sayfa ve banner güncellenir.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Tercihlerinizi yönetme
              </h2>
              <p className="mt-3">
                Çerez tercih paneli ve tarayıcı ayarları üzerinden silme /
                engelleme yöntemleri, teknik uygulama tamamlandığında burada
                adım adım açıklanacaktır.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                İlgili politikalar
              </h2>
              <p className="mt-3">
                Kişisel verilerin işlenmesi için{" "}
                <Link
                  href="/kvkk"
                  className="font-medium text-charcoal underline decoration-steel/40 underline-offset-2 hover:text-crimson"
                >
                  KVKK aydınlatma metni
                </Link>{" "}
                ve{" "}
                <Link
                  href="/gizlilik-politikasi"
                  className="font-medium text-charcoal underline decoration-steel/40 underline-offset-2 hover:text-crimson"
                >
                  gizlilik politikası
                </Link>{" "}
                sayfalarına bakın.
              </p>
            </div>
          </div>

          <StatusNote
            status="needs-confirmation"
            notes="Çerez politikası şirket hukuk incelemesi ve teknik çerez taraması ile birlikte onaylanmalıdır."
            className="mt-10"
          />
        </Container>
      </section>
    </>
  );
}