import type { Product, ProductImage } from "@/types/content";

function companyImg(src: string, alt: string): ProductImage {
  return { src, alt };
}

function stockImg(src: string, alt: string): ProductImage {
  return {
    src,
    alt: `${alt} (temsili stok görsel — şirket fotoğrafı ile değiştirilebilir)`,
    isPlaceholder: true,
  };
}

/**
 * Representative catalog migrated from publicly listed product names on tupas.com.tr.
 * Images: primarily company assets from the existing site; a few CC/stock stand-ins marked as placeholders.
 */
export const products: Product[] = [
  {
    slug: "6-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    name: "6 kg ABC Kuru Kimyevi Tozlu Yangın Söndürme Cihazı",
    categorySlug: "kuru-kimyevi-tozlu",
    summary:
      "Portatif ABC kuru kimyevi tozlu söndürücü. Kapasite ve teknik tablolar şirket onaylı veri ile tamamlanacaktır.",
    description:
      "Eski katalogda listelenen 6 kg ABC kuru kimyevi tozlu yangın söndürme cihazı. Detaylı teknik şartname, basınç sınıfı ve belge numaraları şirket tarafından doğrulanmadan yayınlanmaz.",
    images: [
      companyImg(
        "/images/products/abc-6kg.jpg",
        "6 kg ABC kuru kimyevi tozlu yangın söndürme cihazı",
      ),
      companyImg(
        "/images/products/abc-6kg-alt.jpg",
        "6 kg ABC yangın söndürme cihazı alternatif açı",
      ),
    ],
    specifications: [
      { label: "Tip", value: "ABC kuru kimyevi tozlu" },
      { label: "Kapasite", value: "6 kg (katalog adı)" },
      {
        label: "Teknik tablo",
        value: "Şirket onayından sonra eklenecek",
      },
    ],
    documents: [],
    relatedSlugs: [
      "12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
      "25-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    ],
    quoteEnabled: true,
    featured: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/6/6-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    ],
    legacyIds: [6],
    meta: {
      status: "provisional",
      notes: "Görsel eski tupas.com.tr kataloğundan; teknik tablo onayı bekliyor.",
    },
  },
  {
    slug: "12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    name: "12 kg ABC Kuru Kimyevi Tozlu Yangın Söndürme Cihazı",
    categorySlug: "kuru-kimyevi-tozlu",
    summary: "12 kg kapasiteli ABC kuru kimyevi tozlu yangın söndürme cihazı.",
    description:
      "Katalogda yer alan 12 kg ABC kuru kimyevi tozlu model. Teklif ve stok için iletişime geçiniz.",
    images: [
      companyImg(
        "/images/products/abc-12kg.jpg",
        "12 kg ABC kuru kimyevi tozlu yangın söndürme cihazı",
      ),
      companyImg(
        "/images/products/abc-12kg-alt.jpg",
        "12 kg ABC yangın söndürme cihazı saha görseli",
      ),
    ],
    specifications: [
      { label: "Tip", value: "ABC kuru kimyevi tozlu" },
      { label: "Kapasite", value: "12 kg (katalog adı)" },
    ],
    documents: [],
    relatedSlugs: [
      "6-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
      "25-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    ],
    quoteEnabled: true,
    featured: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/10/12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    ],
    legacyIds: [10],
    meta: { status: "provisional" },
  },
  {
    slug: "25-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    name: "25 kg ABC Kuru Kimyevi Tozlu Yangın Söndürme Cihazı",
    categorySlug: "kuru-kimyevi-tozlu",
    summary: "25 kg kapasiteli ABC kuru kimyevi tozlu yangın söndürme cihazı.",
    description:
      "Endüstriyel alanlar için katalogda listelenen 25 kg ABC tozlu söndürücü.",
    images: [
      companyImg(
        "/images/products/abc-25kg.jpg",
        "25 kg ABC kuru kimyevi tozlu yangın söndürme cihazı",
      ),
      companyImg(
        "/images/products/abc-25kg-alt.jpg",
        "25 kg ABC yangın söndürme cihazı alternatif görsel",
      ),
    ],
    specifications: [
      { label: "Tip", value: "ABC kuru kimyevi tozlu" },
      { label: "Kapasite", value: "25 kg (katalog adı)" },
    ],
    documents: [],
    relatedSlugs: [
      "12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
      "50-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    ],
    quoteEnabled: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/11/25-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    ],
    legacyIds: [11],
    meta: { status: "provisional" },
  },
  {
    slug: "50-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    name: "50 kg ABC Kuru Kimyevi Tozlu Yangın Söndürme Cihazı",
    categorySlug: "kuru-kimyevi-tozlu",
    summary: "50 kg kapasiteli tekerlekli / büyük hacimli ABC tozlu söndürücü.",
    description:
      "Katalog adı 50 kg ABC kuru kimyevi tozlu yangın söndürme cihazı. Taşıma tipi ve teknik değerler onay sonrası eklenecek.",
    images: [
      companyImg(
        "/images/products/abc-50kg.jpg",
        "50 kg ABC kuru kimyevi tozlu yangın söndürme cihazı",
      ),
      companyImg(
        "/images/products/abc-25kg-alt.jpg",
        "Büyük hacimli ABC yangın söndürme cihazı görseli",
      ),
    ],
    specifications: [
      { label: "Tip", value: "ABC kuru kimyevi tozlu" },
      { label: "Kapasite", value: "50 kg (katalog adı)" },
    ],
    documents: [],
    relatedSlugs: ["25-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi"],
    quoteEnabled: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/12/50-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    ],
    legacyIds: [12],
    meta: { status: "provisional" },
  },
  {
    slug: "5-kg-co2-gazli-yangin-sondurme-cihazi",
    name: "5 kg CO2 Gazlı Yangın Söndürme Cihazı",
    categorySlug: "co2-gazli",
    summary: "Karbondioksit gazlı portatif yangın söndürme cihazı.",
    description:
      "CO2 gazlı söndürücü kategorisinde listelenen 5 kg model. Kullanım alanı ve teknik değerler proje / teklif sürecinde netleştirilir.",
    images: [
      companyImg(
        "/images/products/co2-5kg.jpg",
        "5 kg CO2 gazlı yangın söndürme cihazı",
      ),
      companyImg(
        "/images/products/co2-5kg-alt.jpg",
        "5 kg CO2 yangın söndürme cihazı alternatif açı",
      ),
      stockImg(
        "/images/products/stock-co2-alt.jpg",
        "CO2 tipi yangın söndürücü temsili görsel",
      ),
    ],
    specifications: [
      { label: "Tip", value: "CO2 gazlı" },
      { label: "Kapasite", value: "5 kg (katalog adı)" },
    ],
    documents: [],
    relatedSlugs: ["12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi"],
    quoteEnabled: true,
    featured: true,
    meta: { status: "provisional" },
  },
  {
    slug: "duvar-tipi-sabit-makara",
    name: "Duvar Tipi Sabit Makara",
    categorySlug: "hortum-makaralari",
    summary: "Duvar tipi sabit yangın hortum makarası.",
    description:
      "Eski katalog ürün adı: Duvar tipi sabit makara. Hortum boyu ve bağlantı ölçüleri onaylı teknik fişte yer alacaktır.",
    images: [
      companyImg(
        "/images/products/makara-sabit.jpg",
        "Duvar tipi sabit yangın hortum makarası",
      ),
      companyImg(
        "/images/products/makara-sabit-2.jpg",
        "Duvar tipi sabit makara detay",
      ),
      stockImg(
        "/images/products/stock-hose-reel.jpg",
        "Yangın hortum makarası temsili görsel",
      ),
    ],
    specifications: [{ label: "Tip", value: "Duvar tipi sabit makara" }],
    documents: [],
    relatedSlugs: ["duvar-tipi-hareketli-makara"],
    quoteEnabled: true,
    legacyPaths: ["/tr/tupas-urun-detay/49/duvar-tipi-sabit-makara"],
    legacyIds: [49],
    meta: { status: "provisional" },
  },
  {
    slug: "duvar-tipi-hareketli-makara",
    name: "Duvar Tipi Hareketli Makara",
    categorySlug: "hortum-makaralari",
    summary: "Duvar tipi hareketli yangın hortum makarası.",
    description: "Eski katalog ürün adı: Duvar tipi hareketli makara.",
    images: [
      companyImg(
        "/images/products/makara-hareketli.jpg",
        "Duvar tipi hareketli yangın hortum makarası",
      ),
    ],
    specifications: [{ label: "Tip", value: "Duvar tipi hareketli makara" }],
    documents: [],
    relatedSlugs: ["duvar-tipi-sabit-makara"],
    quoteEnabled: true,
    legacyPaths: ["/tr/tupas-urun-detay/50/duvar-tipi-hareketli-makara"],
    legacyIds: [50],
    meta: { status: "provisional" },
  },
  {
    slug: "yerustu-yangin-hidranti",
    name: "Yerüstü Yangın Hidrantı",
    categorySlug: "yangin-hidrant",
    summary: "Yerüstü yangın hidrantı.",
    description:
      "Katalogda listelenen yerüstü yangın hidrantı. Çap, çıkış adedi ve standart bilgisi şirket onaylı dokümanda yayınlanacak.",
    images: [
      companyImg(
        "/images/products/hidrant.jpg",
        "Yerüstü yangın hidrantı",
      ),
      companyImg(
        "/images/products/hidrant-2.jpg",
        "Yangın hidrantı alternatif görsel",
      ),
    ],
    specifications: [{ label: "Tip", value: "Yerüstü yangın hidrantı" }],
    documents: [],
    relatedSlugs: ["yangin-hidrant-sistemi"],
    quoteEnabled: true,
    legacyPaths: ["/tr/tupas-urun-detay/59/yerustu-yangin-hidranti"],
    legacyIds: [59],
    meta: { status: "provisional" },
  },
  {
    slug: "yangin-hidrant-sistemi",
    name: "Yangın Hidrant Sistemi",
    categorySlug: "yangin-hidrant",
    summary: "Yangın hidrant sistemi — proje bazlı.",
    description:
      "Hidrant sistemi çözümleri keşif ve proje sonrası tekliflendirilir. Bu kayıt katalog başlığıdır.",
    images: [
      companyImg(
        "/images/products/hidrant-2.jpg",
        "Yangın hidrant sistemi bileşeni",
      ),
      companyImg(
        "/images/products/hidrant.jpg",
        "Yangın hidrantı",
      ),
    ],
    specifications: [],
    documents: [],
    relatedSlugs: ["yerustu-yangin-hidranti"],
    quoteEnabled: true,
    legacyPaths: ["/tr/tupas-urun-detay/60/yangin-hidrant-sistemi"],
    legacyIds: [60],
    meta: { status: "provisional" },
  },
  {
    slug: "yangin-battaniyesi-180x180",
    name: "Yangın Battaniyesi 180x180 cm",
    categorySlug: "yangin-battaniyeleri",
    summary: "180x180 cm yangın battaniyesi.",
    description:
      "Eski sitede görseli bulunan 180x180 cm yangın battaniyesi. Belge / standart numarası şirket onaylı dokümanla eklenecektir.",
    images: [
      companyImg(
        "/images/products/yangin-battaniyesi.jpg",
        "180x180 cm yangın battaniyesi",
      ),
    ],
    specifications: [{ label: "Ölçü", value: "180x180 cm (katalog adı)" }],
    documents: [],
    relatedSlugs: ["ekonomik-yangin-battaniyesi-160x180"],
    quoteEnabled: true,
    featured: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/109/yangin-battaniyesi-180x180cm-yangin-battaniyesi",
      "/tr/tupas-guvenlik-detay/5/180x180-cm-yangin-battaniyesi",
    ],
    legacyIds: [109, 5],
    meta: { status: "provisional" },
  },
  {
    slug: "ekonomik-yangin-battaniyesi-160x180",
    name: "Ekonomik Yangın Battaniyesi 160x180 cm",
    categorySlug: "yangin-battaniyeleri",
    summary: "160x180 cm ekonomik yangın battaniyesi.",
    description: "Katalog adı: Ekonomik Yangın Battaniyesi (160x180 cm).",
    images: [
      companyImg(
        "/images/products/battaniye-ekonomik.jpg",
        "Ekonomik yangın battaniyesi",
      ),
    ],
    specifications: [{ label: "Ölçü", value: "160x180 cm (katalog adı)" }],
    documents: [],
    relatedSlugs: ["yangin-battaniyesi-180x180"],
    quoteEnabled: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/324/ekonomik-yangin-battaniyesi-160x180-cm-yanmaz-battaniye",
    ],
    legacyIds: [324],
    meta: { status: "provisional" },
  },
  {
    slug: "yangina-yaklasma-itfaiyeci-elbisesi",
    name: "Yangına Yaklaşma İtfaiyeci Elbisesi",
    categorySlug: "itfaiyeci-elbiseleri",
    summary: "Yangına yaklaşma itfaiyeci elbisesi.",
    description:
      "Katalogda yer alan yangına yaklaşma / itfaiyeci elbise başlığı. Marka ve standard detayı onay sonrası netleştirilir.",
    images: [
      companyImg(
        "/images/products/itfaiyeci-elbise.jpg",
        "Yangına yaklaşma itfaiyeci elbisesi",
      ),
    ],
    specifications: [],
    documents: [],
    relatedSlugs: [],
    quoteEnabled: true,
    featured: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/110/yangina-yaklasma-itfaiye-elbisesi-itfaiyeci-elbisesi",
    ],
    legacyIds: [110],
    meta: { status: "provisional" },
  },
  {
    slug: "adresli-yangin-algilama-sistemi",
    name: "Adresli Yangın Algılama Sistemi",
    categorySlug: "yangin-algilama",
    summary: "Adresli yangın algılama sistemi — proje bazlı teklif.",
    description:
      "Adresli algılama sistemleri keşif, panel kapasitesi ve saha şartlarına göre yapılandırılır. Bu kayıt çözüm / katalog girişidir; tek bir stok SKU değildir.",
    images: [
      companyImg(
        "/images/products/yangin-butonu.jpg",
        "Yangın ihbar butonu — algılama sistemi bileşeni",
      ),
      stockImg(
        "/images/products/smoke-detector.jpg",
        "Duman dedektörü temsili görsel",
      ),
      companyImg(
        "/images/products/siren.jpg",
        "Yangın alarm sireni",
      ),
    ],
    specifications: [],
    documents: [],
    relatedSlugs: ["konvansiyonel-yangin-algilama-sistemi"],
    quoteEnabled: true,
    featured: true,
    legacyPaths: ["/tr/tupas-urunler/63/adresli-yangin-algilama-sistemleri"],
    meta: {
      status: "provisional",
      notes: "Sistem görselleri bileşen örnekleridir; proje paneli ayrıca tekliflenir.",
    },
  },
  {
    slug: "konvansiyonel-yangin-algilama-sistemi",
    name: "Konvansiyonel Yangın Algılama Sistemi",
    categorySlug: "yangin-algilama",
    summary: "Konvansiyonel yangın algılama sistemi — proje bazlı teklif.",
    description:
      "Konvansiyonel algılama sistemleri için katalog girişi. Bileşen listesi ve marka seçenekleri teklif aşamasında paylaşılır.",
    images: [
      stockImg(
        "/images/products/smoke-detector-alt.jpg",
        "Duman dedektörü temsili görsel",
      ),
      companyImg(
        "/images/products/yangin-butonu.jpg",
        "Yangın ihbar butonu",
      ),
      companyImg(
        "/images/products/siren.jpg",
        "Yangın alarm sireni",
      ),
    ],
    specifications: [],
    documents: [],
    relatedSlugs: ["adresli-yangin-algilama-sistemi"],
    quoteEnabled: true,
    legacyPaths: [
      "/tr/tupas-urunler/66/konvansiyonel-yangin-algilama-sistemleri",
    ],
    meta: { status: "provisional" },
  },
  {
    slug: "versalite-acil-aydinlatma-iki-spotlu",
    name: "Versalite Acil Aydınlatma (İki Spotlu)",
    categorySlug: "acil-aydinlatma",
    summary: "İki spotlu acil aydınlatma armatürü (katalog adı).",
    description:
      "Eski katalog ürün adı. Teknik lumen / süre değerleri uydurulmadan bırakılmıştır.",
    images: [
      companyImg(
        "/images/products/acil-aydinlatma.jpg",
        "İki spotlu acil aydınlatma armatürü",
      ),
    ],
    specifications: [{ label: "Tip", value: "İki spotlu acil aydınlatma" }],
    documents: [],
    relatedSlugs: [],
    quoteEnabled: true,
    legacyPaths: [
      "/tr/tupas-urun-detay/124/versalite-acil-aydinlatma-iki-spotlu",
    ],
    legacyIds: [124],
    meta: { status: "provisional" },
  },
];
