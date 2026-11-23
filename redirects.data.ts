/**
 * Legacy URL redirects for next.config.ts.
 * Keep this file free of path aliases so Next can load it during config evaluation.
 */
export const legacyRedirects: {
  source: string;
  destination: string;
  permanent: boolean;
}[] = [
  // Categories
  {
    source: "/tr/tupas-urunler/16/yangin-sondurme-cihazlari-yangin-tupu",
    destination: "/urunler?kategori=yangin-sondurme-cihazlari",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/17/kuru-kimyevi-tozlu-yangin-sondurme-cihazlari",
    destination: "/urunler?kategori=kuru-kimyevi-tozlu",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/18/karbondioksit-co2-gazli-yangin-sondurme-cihazlari",
    destination: "/urunler?kategori=co2-gazli",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/19/kopuklu-yangin-sondurme-cihazlari",
    destination: "/urunler?kategori=kopuklu",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/25/yangin-dolaplari",
    destination: "/urunler?kategori=yangin-dolaplari",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/30/yangin-hortum-makaralari",
    destination: "/urunler?kategori=hortum-makaralari",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/35/yangin-hidranti-ve-yangin-hidrant-sistemi",
    destination: "/urunler?kategori=yangin-hidrant",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/50/acil--aydinlatma-armaturleri",
    destination: "/urunler?kategori=acil-aydinlatma",
    permanent: true,
  },
  {
    source: "/tr/tupas-is-guvenligi/1/yangin-battaniyeleri",
    destination: "/urunler?kategori=yangin-battaniyeleri",
    permanent: true,
  },
  {
    source: "/tr/tupas-is-guvenligi/2/itfaiyeci-elbiseleri-",
    destination: "/urunler?kategori=itfaiyeci-elbiseleri",
    permanent: true,
  },
  // Products
  {
    source:
      "/tr/tupas-urun-detay/10/12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    destination: "/urunler/12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    permanent: true,
  },
  {
    source:
      "/tr/tupas-urun-detay/11/25-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    destination: "/urunler/25-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    permanent: true,
  },
  {
    source:
      "/tr/tupas-urun-detay/12/50-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    destination: "/urunler/50-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi",
    permanent: true,
  },
  {
    source: "/tr/tupas-urun-detay/49/duvar-tipi-sabit-makara",
    destination: "/urunler/duvar-tipi-sabit-makara",
    permanent: true,
  },
  {
    source: "/tr/tupas-urun-detay/50/duvar-tipi-hareketli-makara",
    destination: "/urunler/duvar-tipi-hareketli-makara",
    permanent: true,
  },
  {
    source: "/tr/tupas-urun-detay/59/yerustu-yangin-hidranti",
    destination: "/urunler/yerustu-yangin-hidranti",
    permanent: true,
  },
  {
    source: "/tr/tupas-urun-detay/60/yangin-hidrant-sistemi",
    destination: "/urunler/yangin-hidrant-sistemi",
    permanent: true,
  },
  {
    source:
      "/tr/tupas-urun-detay/109/yangin-battaniyesi-180x180cm-yangin-battaniyesi",
    destination: "/urunler/yangin-battaniyesi-180x180",
    permanent: true,
  },
  {
    source:
      "/tr/tupas-guvenlik-detay/5/180x180-cm-yangin-battaniyesi",
    destination: "/urunler/yangin-battaniyesi-180x180",
    permanent: true,
  },
  {
    source:
      "/tr/tupas-urun-detay/110/yangina-yaklasma-itfaiye-elbisesi-itfaiyeci-elbisesi",
    destination: "/urunler/yangina-yaklasma-itfaiyeci-elbisesi",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/63/adresli-yangin-algilama-sistemleri",
    destination: "/urunler/adresli-yangin-algilama-sistemi",
    permanent: true,
  },
  {
    source: "/tr/tupas-urunler/66/konvansiyonel-yangin-algilama-sistemleri",
    destination: "/urunler/konvansiyonel-yangin-algilama-sistemi",
    permanent: true,
  },
  {
    source: "/tr/tupas-urun-detay/124/versalite-acil-aydinlatma-iki-spotlu",
    destination: "/urunler/versalite-acil-aydinlatma-iki-spotlu",
    permanent: true,
  },
];
