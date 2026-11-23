import type { InfoArticle } from "@/types/content";

export const infoArticles: InfoArticle[] = [
  {
    slug: "yangin-tupleri-hakkinda",
    title: "Yangın Söndürme Cihazları Hakkında",
    summary:
      "Portatif söndürücü seçiminde dikkat edilmesi gereken temel başlıklar.",
    body: [
      "Yangın söndürme cihazı seçimi; yangın sınıfı, mahal tipi ve kullanım kolaylığına göre yapılır. ABC tozlu, CO2 ve köpüklü cihazlar farklı risk profillerine hitap eder.",
      "Cihazların görünür yerde, erişilebilir ve etiketleri okunabilir durumda tutulması önemlidir. Dolum ve bakım periyotları üretici / mevzuat gereklerine göre izlenmelidir.",
      "Bu metin genel bilgilendirmedir; tesisinize özel seçim için keşif ve teklif sürecini kullanın.",
    ],
    meta: { status: "provisional" },
  },
  {
    slug: "itfaiye-ruhsati-bilgilendirme",
    title: "İtfaiye Ruhsatı — Bilgilendirme",
    summary:
      "Eski sitede yer alan itfaiye ruhsatı başlığı için kısa bilgilendirme.",
    body: [
      "İtfaiye ruhsatı süreçleri belediye ve ilgili itfaiye biriminin güncel mevzuatına tabidir. TÜPAŞ eski sitesinde bu başlığı hizmet olarak listelemiştir.",
      "V1’de ayrı bir satış vaadi sayfası açılmamıştır. Güncel hizmet kapsamı şirket onayı sonrası Hizmetler bölümüne eklenebilir.",
      "Resmi başvuru ve onay mercileri kurumunuzun bağlı olduğu idari birimlerdir.",
    ],
    meta: {
      status: "needs-confirmation",
      notes: "Hizmetin devam edip etmediği netleştirilmeli.",
    },
  },
  {
    slug: "siklikla-sorulanlar",
    title: "Sık Sorulan Sorular",
    summary: "Teklif, keşif ve ürün süreci hakkında kısa yanıtlar.",
    body: [
      "Teklif nasıl alınır? Ürün veya proje sayfasındaki Teklif Al formunu doldurmanız yeterlidir. E-posta altyapısı yapılandırıldığında talebiniz ilgili adrese iletilir.",
      "Keşif ücretsiz midir? Eski sitede ücretsiz keşif vurgulanmıştır. Güncel koşullar şirket tarafından doğrulanacaktır.",
      "Fiyatlar neden listelenmiyor? Bu site bir e-ticaret vitrini değildir; fiyatlandırma kapasite, standart ve proje kapsamına göre yapılır.",
    ],
    meta: { status: "provisional" },
  },
];

export function getInfoArticle(slug: string) {
  return infoArticles.find((a) => a.slug === slug);
}
