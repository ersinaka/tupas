import type { NavItem } from "@/types/content";

export const primaryNavigation: NavItem[] = [
  {
    label: "Kurumsal",
    href: "/kurumsal/hakkimizda",
    children: [
      { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { label: "Tarihçe", href: "/kurumsal/tarihce" },
      { label: "Kalite Belgeleri", href: "/kurumsal/kalite-belgeleri" },
    ],
  },
  {
    label: "Çözümler",
    href: "/cozumler",
    children: [
      {
        label: "Yangın Söndürme Sistemleri",
        href: "/cozumler/yangin-sondurme-sistemleri",
      },
      {
        label: "Yangın Algılama Sistemleri",
        href: "/cozumler/yangin-algilama-sistemleri",
      },
      {
        label: "Davlumbaz Söndürme Sistemleri",
        href: "/cozumler/davlumbaz-sondurme-sistemleri",
      },
    ],
  },
  { label: "Ürünler", href: "/urunler" },
  {
    label: "Hizmetler",
    href: "/hizmetler",
    children: [
      { label: "Dolum ve Bakım", href: "/hizmetler/dolum-ve-bakim" },
      { label: "Periyodik Kontrol", href: "/hizmetler/periyodik-kontrol" },
      { label: "Ücretsiz Keşif", href: "/hizmetler/ucretsiz-kesif" },
      { label: "Yangın Tatbikatı", href: "/hizmetler/yangin-tatbikati" },
    ],
  },
  { label: "Bilgi Merkezi", href: "/bilgi-merkezi" },
  { label: "İletişim", href: "/iletisim" },
];

export const footerNavigation: NavItem[] = [
  {
    label: "Kurumsal",
    href: "/kurumsal/hakkimizda",
    children: [
      { label: "Hakkımızda", href: "/kurumsal/hakkimizda" },
      { label: "Tarihçe", href: "/kurumsal/tarihce" },
      { label: "Kalite Belgeleri", href: "/kurumsal/kalite-belgeleri" },
    ],
  },
  {
    label: "Ürün ve çözümler",
    href: "/urunler",
    children: [
      { label: "Ürünler", href: "/urunler" },
      { label: "Çözümler", href: "/cozumler" },
      { label: "Hizmetler", href: "/hizmetler" },
      { label: "Teklif Al", href: "/teklif-al" },
    ],
  },
  {
    label: "Yasal",
    href: "/kvkk",
    children: [
      { label: "KVKK", href: "/kvkk" },
      { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
      { label: "Çerez Politikası", href: "/cerez-politikasi" },
    ],
  },
];
