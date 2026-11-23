import type { CompanyInfo } from "@/types/content";

/**
 * Provisional company data migrated from tupas.com.tr (2026-11-23).
 * Fields marked provisional / needs-confirmation must be verified before launch.
 */
export const company: CompanyInfo = {
  legalName: "TÜPAŞ Yangın Söndürme Cihazları",
  shortName: "TÜPAŞ",
  foundedYear: 1983,
  tagline: "Yangın güvenliğinde güçlü birikim. Güvenilir çözümler.",
  aboutSummary: [
    "TÜPAŞ, 1983 yılında Mehmet Yerlikaya tarafından kurulmuş bir yangın söndürme ve yangın güvenlik firmasıdır.",
    "Faaliyet alanı; yangın söndürme cihazları, yangın algılama sistemleri, otomatik söndürme sistemleri, yangın dolapları, davlumbaz söndürme sistemleri ve yangından koruyucu ekipmanları kapsar.",
    "Kurumsal müşteriler, bireysel kullanıcılar, bayiler ve iş ortakları için ürün, sistem ve teknik hizmet sunar.",
  ],
  strengths: [
    {
      title: "1983’ten beri sektörde",
      description:
        "Uzun yıllara dayanan kurumsal birikim ve yangın güvenliği odaklı faaliyet geçmişi.",
      meta: { status: "verified", notes: "Kuruluş yılı eski siteden doğrulandı." },
    },
    {
      title: "Geniş ürün ve sistem yelpazesi",
      description:
        "Portatif söndürücülerden algılama ve sabit sistemlere, dolum bakım hizmetlerine kadar uçtan uca çözüm alanı.",
      meta: {
        status: "provisional",
        notes: "Kapsam eski site kategori ağacından; öncelikli ürün seti şirketle netleştirilecek.",
      },
    },
    {
      title: "Teknik hizmet desteği",
      description:
        "Dolum, bakım, periyodik kontrol, ücretsiz keşif ve yangın tatbikatı hizmetleri.",
      meta: {
        status: "provisional",
        notes: "Hizmet kapsamı ve SLA iddiaları onaylanmadan abartılmamalı.",
      },
    },
    {
      title: "Teklif ve proje odaklı çalışma",
      description:
        "Fiyat listesi yerine ihtiyaca göre teklif ve keşif süreçleri ile ilerleme.",
      meta: { status: "verified" },
    },
  ],
  contact: {
    headquarters: {
      label: "Genel merkez",
      addressLines: [
        "Doğu Sanayi Sitesi 14. Blok No:18",
        "Yenibosna / İstanbul",
      ],
      phones: ["0212 551 71 71", "0212 552 56 28", "0212 552 65 95"],
      fax: ["0212 503 12 71"],
      emails: ["info@tupas.com.tr", "bahar@tupas.com.tr", "satis@tupas.com.tr"],
      meta: {
        status: "provisional",
        notes: "tupas.com.tr/iletisim sayfasından aktarıldı. Yayın öncesi şirket doğrulaması zorunlu.",
      },
    },
    factory: {
      label: "Fabrika",
      addressLines: [
        "Doğu Sanayi Sitesi 14. Blok No:18",
        "Yenibosna / İstanbul",
      ],
      phones: ["0212 551 54 70", "0212 551 90 27"],
      fax: ["0212 503 12 71"],
      emails: ["bahar@tupas.com.tr"],
      meta: {
        status: "needs-confirmation",
        notes: "Eski sitede merkez ile aynı adres görünüyor. Ayrı fabrika adresi netleştirilmeli.",
      },
    },
    instagram: "https://www.instagram.com/tupas_yangin",
    whatsapp: undefined,
    quoteEmail: "bahar@tupas.com.tr",
  },
  meta: {
    status: "provisional",
    notes: "Kurumsal metinler yumuşatılarak aktarıldı; ISO/garanti/referans iddiaları belgeler onaylanana kadar yayınlanmaz.",
  },
};

export const provisionalBanner =
  "Bu sitedeki iletişim ve belge bilgileri geçici olarak eski kaynaktan aktarılmıştır. Yayın öncesi şirket doğrulaması gerekir.";
