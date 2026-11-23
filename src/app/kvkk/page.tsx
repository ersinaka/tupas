import { company } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni taslağı.",
  path: "/kvkk",
});

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="KVKK Aydınlatma Metni"
        description="Kişisel verilerin işlenmesine ilişkin bilgilendirme taslağı."
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <StatusNote
            status="placeholder"
            notes="Bu metin hukuki inceleme ve şirket onayı olmadan bağlayıcı sayılmaz. Yayın öncesi avukat / KVKK sorumlusu tarafından güncellenmesi zorunludur."
            className="mb-10"
          />

          <div className="space-y-8 text-base leading-8 text-steel">
            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                1. Veri sorumlusu
              </h2>
              <p className="mt-3">
                Veri sorumlusu: {company.legalName} ({siteConfig.baseUrl}). İletişim:
                info@tupas.com.tr — adres bilgileri iletişim sayfasında yer alır;
                yayın öncesi doğrulanır.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                2. İşlenen veri kategorileri
              </h2>
              <p className="mt-3">
                Web sitesi üzerinden iletilen teklif / iletişim formları
                aracılığıyla ad, soyad, telefon, e-posta, firma adı ve mesaj
                içeriği gibi veriler işlenebilir. Hangi alanların zorunlu
                olduğu form tasarımında belirtilecektir.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                3. İşleme amaçları ve hukuki sebep
              </h2>
              <p className="mt-3">
                Talep yönetimi, teklif hazırlığı, sözleşme öncesi iletişim ve
                mevzuattan doğan yükümlülüklerin yerine getirilmesi amaçlarıyla;
                KVKK m. 5 ve 6 kapsamında ilgili şartlara dayanılarak işlenecektir.
                Kesin metin hukuk danışmanlığı ile tamamlanacaktır.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                4. Aktarım ve saklama
              </h2>
              <p className="mt-3">
                Verilerin yurt içi / yurt dışı aktarımı, saklama süreleri ve
                imha politikası şirket kayıt saklama prosedürü ile eşleşecek
                şekilde buraya eklenecektir.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-charcoal">
                5. İlgili kişi hakları
              </h2>
              <p className="mt-3">
                KVKK m. 11 kapsamındaki başvuru yöntemi ve yanıt süreleri,
                şirketin KVKK başvuru prosedürü yayınlandığında bu bölümde
                ayrıntılandırılacaktır.
              </p>
            </div>
          </div>

          <StatusNote
            status="needs-confirmation"
            notes="KVKK metni, çerez ve gizlilik politikaları ile birlikte tek paket halinde onaylanmalıdır."
            className="mt-10"
          />
        </Container>
      </section>
    </>
  );
}