import type { ProductCategory } from "@/types/content";

export const categories: ProductCategory[] = [
  {
    slug: "yangin-sondurme-cihazlari",
    name: "Yangın Söndürme Cihazları",
    group: "yangin",
    description:
      "Portatif ve tekerlekli yangın söndürme cihazları. Alt tipler ihtiyaca göre seçilir; teknik değerler şirket onaylı veri ile tamamlanır.",
    featured: true,
    legacyPaths: [
      "/tr/tupas-urunler/16/yangin-sondurme-cihazlari-yangin-tupu",
    ],
    meta: { status: "provisional" },
  },
  {
    slug: "kuru-kimyevi-tozlu",
    name: "Kuru Kimyevi Tozlu Söndürücüler",
    group: "yangin",
    parentSlug: "yangin-sondurme-cihazlari",
    description: "ABC sınıfı kuru kimyevi tozlu yangın söndürme cihazları.",
    legacyPaths: [
      "/tr/tupas-urunler/17/kuru-kimyevi-tozlu-yangin-sondurme-cihazlari",
    ],
    meta: { status: "provisional" },
  },
  {
    slug: "co2-gazli",
    name: "Karbondioksit (CO2) Gazlı Söndürücüler",
    group: "yangin",
    parentSlug: "yangin-sondurme-cihazlari",
    description: "CO2 gazlı yangın söndürme cihazları.",
    legacyPaths: [
      "/tr/tupas-urunler/18/karbondioksit-co2-gazli-yangin-sondurme-cihazlari",
    ],
    meta: { status: "provisional" },
  },
  {
    slug: "kopuklu",
    name: "Köpüklü Söndürücüler",
    group: "yangin",
    parentSlug: "yangin-sondurme-cihazlari",
    description: "Köpüklü yangın söndürme cihazları.",
    legacyPaths: ["/tr/tupas-urunler/19/kopuklu-yangin-sondurme-cihazlari"],
    meta: { status: "provisional" },
  },
  {
    slug: "yangin-dolaplari",
    name: "Yangın Dolapları",
    group: "yangin",
    description: "Sulu ve kuru sistem yangın dolapları ile ekipman dolapları.",
    featured: true,
    legacyPaths: ["/tr/tupas-urunler/25/yangin-dolaplari"],
    meta: { status: "provisional" },
  },
  {
    slug: "hortum-makaralari",
    name: "Yangın Hortum Makaraları",
    group: "yangin",
    description: "Sabit ve hareketli hortum makaraları.",
    legacyPaths: ["/tr/tupas-urunler/30/yangin-hortum-makaralari"],
    meta: { status: "provisional" },
  },
  {
    slug: "yangin-algilama",
    name: "Yangın Algılama Sistemleri",
    group: "sistem",
    description:
      "Adresli ve konvansiyonel yangın algılama sistem bileşenleri. Proje bazlı tekliflendirilir.",
    featured: true,
    legacyPaths: ["/tr/tupas-urunler/54/yangin-algilama-sistemleri"],
    meta: { status: "provisional" },
  },
  {
    slug: "acil-aydinlatma",
    name: "Acil Aydınlatma ve Yönlendirme",
    group: "yangin",
    description: "Acil aydınlatma armatürleri ve çıkış yönlendirme levhaları.",
    legacyPaths: [
      "/tr/tupas-urunler/50/acil--aydinlatma-armaturleri",
      "/tr/tupas-urunler/51/acil--cikis--yonlendirme-levhalari---led-cikis-exit-tabelalari",
    ],
    meta: { status: "provisional" },
  },
  {
    slug: "yangin-battaniyeleri",
    name: "Yangın Battaniyeleri",
    group: "is-guvenligi",
    description: "Farklı ölçülerde yangın ve kaynak battaniyeleri.",
    featured: true,
    legacyPaths: ["/tr/tupas-is-guvenligi/1/yangin-battaniyeleri"],
    meta: { status: "provisional" },
  },
  {
    slug: "itfaiyeci-elbiseleri",
    name: "İtfaiyeci Elbiseleri",
    group: "is-guvenligi",
    description: "İtfaiyeci ve yangına yaklaşma elbiseleri.",
    legacyPaths: ["/tr/tupas-is-guvenligi/2/itfaiyeci-elbiseleri-"],
    meta: { status: "provisional" },
  },
  {
    slug: "solunum-koruma",
    name: "Solunum Koruma",
    group: "is-guvenligi",
    description: "Tam yüz maskeleri, filtreler ve temiz hava solunum setleri.",
    legacyPaths: [
      "/tr/tupas-is-guvenligi/7/tam-yuz-gaz-maskeleri",
      "/tr/tupas-is-guvenligi/9/temiz-hava-solunum-setleri-%e2%80%93-temiz-hava-solunum-cihazi",
    ],
    meta: { status: "provisional" },
  },
  {
    slug: "yangin-hidrant",
    name: "Yangın Hidrantı ve Sistemi",
    group: "yangin",
    description: "Hidrant ve hidrant sistemi bileşenleri.",
    legacyPaths: [
      "/tr/tupas-urunler/35/yangin-hidranti-ve-yangin-hidrant-sistemi",
    ],
    meta: { status: "provisional" },
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getFeaturedCategories() {
  return categories.filter((c) => c.featured);
}

export function getRootCategories() {
  return categories.filter((c) => !c.parentSlug);
}

export function getChildCategories(parentSlug: string) {
  return categories.filter((c) => c.parentSlug === parentSlug);
}
