import type { SolutionPage } from "@/types/content";

export const solutions: SolutionPage[] = [
  {
    slug: "yangin-sondurme-sistemleri",
    title: "Yangın Söndürme Sistemleri",
    summary:
      "Sabit ve gazlı/sulu söndürme yaklaşımları ile yapı ve proses riskine uygun sistem kurgusu.",
    body: [
      "Yangın söndürme sistemleri; risk sınıfı, mahal kullanımı ve mevcut altyapıya göre planlanır. TÜPAŞ, portatif ekipmandan sabit sistem bileşenlerine uzanan katalog ve keşif süreci ile kurumsal projelere destek verir.",
      "Gazlı ve sulu (sprinkler) söndürme başlıkları eski katalogda yer alır. Her proje için bileşen seçimi, hidrolik / hacim hesabı ve uygulama detayları keşif sonrasında netleştirilir.",
      "Teknik garanti süreleri, marka listeleri ve uygulama referansları şirket onaylı doküman seti ile yayınlanacaktır. Bu sayfada uydurma performans iddiası bulunmaz.",
    ],
    relatedCategorySlugs: [
      "yangin-sondurme-cihazlari",
      "yangin-dolaplari",
      "yangin-hidrant",
    ],
    meta: {
      status: "provisional",
      notes: "Genel anlatım; proje referansları onay sonrası eklenecek.",
    },
  },
  {
    slug: "yangin-algilama-sistemleri",
    title: "Yangın Algılama Sistemleri",
    summary:
      "Adresli ve konvansiyonel yangın algılama sistemleri için keşif, ürün ve teklif süreci.",
    body: [
      "Yangın algılama sistemleri erken uyarı ve tahliye süreçlerinin omurgasıdır. Adresli ve konvansiyonel çözümler, bina ölçeği ve izleme ihtiyacına göre değerlendirilir.",
      "Detektör, buton, siren ve panel seçimleri saha keşfi ile belirlenir. Stok SKU yerine sistem paketi olarak tekliflendirilmesi önerilir.",
      "Belge, marka ve uyumluluk listeleri şirket teknik ekibinin onayından sonra ürün sayfalarına bağlanacaktır.",
    ],
    relatedCategorySlugs: ["yangin-algilama"],
    meta: { status: "provisional" },
  },
  {
    slug: "davlumbaz-sondurme-sistemleri",
    title: "Davlumbaz Söndürme Sistemleri",
    summary:
      "Mutfak ve endüstriyel davlumbaz hatlarında yağ yangınına yönelik söndürme çözümleri.",
    body: [
      "Davlumbaz söndürme sistemleri; ocak, ızgara ve egzoz kanallarındaki yağ yangını riskine karşı planlanır. Eski sitede ayrı bir hizmet / çözüm başlığı olarak yer alır.",
      "Uygulama öncesi keşif ile davlumbaz boyutu, yakıt tipi ve mevcut algılama altyapısı incelenir. Montaj ve periyodik bakım kapsamı teklifte belirtilir.",
      "Sistem markası, kimyasal ajan tipi ve sertifika dosyaları şirket onaylı içerik gelene kadar bu sayfada iddia olarak listelenmez.",
    ],
    relatedCategorySlugs: [],
    meta: {
      status: "needs-confirmation",
      notes: "Detaylı teknik içerik ve görseller şirket onayına bağlı.",
    },
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
