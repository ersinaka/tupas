import type { ServicePage } from "@/types/content";

export const services: ServicePage[] = [
  {
    slug: "dolum-ve-bakim",
    title: "Dolum ve Bakım",
    summary:
      "Yangın söndürme cihazlarının dolum, bakım ve kullanıma hazır tutulması.",
    body: [
      "Yangın söndürme cihazlarının düzenli dolum ve bakımı, müdahale anında doğru çalışmanın temelidir. TÜPAŞ, eski sitesinde dolum ve bakım hizmetini ayrı bir başlık olarak sunmaktadır.",
      "Cihaz tipi, ajan cinsi ve mevcut etiket bilgisi keşif / kabul sırasında kontrol edilir. İşlem kapsamı ve teslim süresi teklif formunda netleştirilir.",
      "Yasal periyotlar ve etiketleme kuralları güncel mevzuata göre uygulanır; bu sayfada kesin süre garantisi verilmez.",
    ],
    ctaHref: "/teklif-al",
    ctaLabel: "Dolum / bakım teklifi isteyin",
    meta: { status: "provisional" },
  },
  {
    slug: "periyodik-kontrol",
    title: "Periyodik Kontrol",
    summary:
      "Yangın güvenlik ekipmanlarının periyodik kontrol ve gözden geçirme süreci.",
    body: [
      "Periyodik kontrol; portatif söndürücüler, dolaplar ve ilgili ekipmanın görünür durum, basınç göstergesi ve etiket uygunluğunun gözden geçirilmesini kapsar.",
      "Eski sitede ayrı bir URL net olarak ayrılmamış olsa da hizmet portföyünün doğal parçasıdır. Kontrol sıklığı ve rapor formatı şirket prosedürü ile onaylanacaktır.",
      "Bu sayfa yapısal bir hizmet anlatımıdır; denetim yetkisi veya resmi rapor şablonu iddiası içermez.",
    ],
    ctaHref: "/teklif-al",
    ctaLabel: "Periyodik kontrol için iletişime geçin",
    meta: {
      status: "needs-confirmation",
      notes: "Kapsam ve raporlama detayı şirket onayı bekliyor.",
    },
  },
  {
    slug: "ucretsiz-kesif",
    title: "Ücretsiz Keşif",
    summary:
      "Saha keşfi ile ihtiyaç analizi ve teklif hazırlığı.",
    body: [
      "Ücretsiz keşif, eski sitede öne çıkan hizmetlerden biridir. Amaç; mahal riskini yerinde görüp uygun ürün / sistem önerisi hazırlamaktır.",
      "Keşif kapsamı (adres, bina tipi, mevcut ekipman) talep formunda belirtilir. Keşfin ücretsiz sunulduğu bölgeler ve koşullar şirket tarafından güncellenebilir.",
      "Keşif sonucu bağlayıcı sözleşme değildir; teklif ayrıca iletilir.",
    ],
    ctaHref: "/teklif-al",
    ctaLabel: "Keşif talebi oluşturun",
    meta: {
      status: "provisional",
      notes: "Ücretsiz koşulun güncel geçerliliği doğrulanmalı.",
    },
  },
  {
    slug: "yangin-tatbikati",
    title: "Yangın Tatbikatı",
    summary:
      "Tahliye ve müdahale bilincini güçlendiren yangın tatbikatı desteği.",
    body: [
      "Yangın tatbikatı; çalışanların alarm, tahliye ve ilk müdahale adımlarını deneyimlemesi için planlanır. Eski sitede ayrı hizmet sayfası olarak listelenir.",
      "Tatbikat senaryosu, katılımcı sayısı ve süre teklif aşamasında belirlenir. Eğitim içeriği ve sertifika formatı şirket onaylı dokümanla yayınlanacaktır.",
      "Bu sayfa genel bilgilendirme amaçlıdır; yasal zorunluluk kapsamı işyerinin kendi risk değerlendirmesine bağlıdır.",
    ],
    ctaHref: "/teklif-al",
    ctaLabel: "Tatbikat için teklif alın",
    meta: { status: "provisional" },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
