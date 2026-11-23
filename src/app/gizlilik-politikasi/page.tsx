import { company } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Gizlilik Politikası",
  description:
    "Web sitesi ziyaretçilerinin gizliliğine ilişkin politika taslağı.",
  path: "/gizlilik-politikasi",
});

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        description={`${company.shortName} web sitesi gizlilik ilkeleri — taslak metin.`}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <StatusNote
            status="placeholder"
            notes="Bu gizlilik politikası şirket hukuk departmanı / dış danışman incelemesi sonrası yürürlüğe girecektir."
            className="mb-10"
          />

          <div className="space-y-8 text-base leading-8 text-steel">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Kapsam
              </h2>
              <p className="mt-3">
                Bu politika, {siteConfig.baseUrl} alan adı üzerinden sunulan
                hizmetler sırasında toplanan bilgilere ilişkindir. E-ticaret veya
                çevrim içi ödeme bu sitede hedeflenmemektedir.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Toplanan bilgiler
              </h2>
              <p className="mt-3">
                İletişim ve teklif formları, sunucu günlükleri ve — etkinleştirildiğinde —
                çerezler aracılığıyla teknik ve iletişim verileri işlenebilir. Çerezlere
                ilişkin ayrıntılar Çerez Politikası sayfasında açıklanacaktır.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Kullanım ve paylaşım
              </h2>
              <p className="mt-3">
                Bilgiler; talep yanıtlama, site güvenliği ve yasal yükümlülükler
                çerçevesinde kullanılır. Üçüncü taraflarla paylaşım koşulları
                (barındırma, e-posta servisi vb.) sözleşme listesiyle buraya
                eklenecektir.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Güvenlik
              </h2>
              <p className="mt-3">
                Teknik ve idari tedbirler şirket bilgi güvenliği prosedürüyle
                uyumlu olacak şekilde tanımlanacaktır. Bu taslak somut teknik
                iddialar içermez.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                Değişiklikler ve iletişim
              </h2>
              <p className="mt-3">
                Politika güncellendiğinde yayın tarihi bu sayfada belirtilecektir.
                Sorularınız için info@tupas.com.tr adresi kullanılabilir; yayın
                öncesi doğrulanır.
              </p>
            </div>
          </div>

          <StatusNote
            status="needs-confirmation"
            notes="KVKK aydınlatma metni ve çerez politikası ile çapraz referanslar hukuk ekibi tarafından kontrol edilmelidir."
            className="mt-10"
          />
        </Container>
      </section>
    </>
  );
}