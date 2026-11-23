# URL Göç Haritası

**Kaynak host:** https://www.tupas.com.tr  
**Hedef:** Yeni Next.js uygulaması (hosting kararı yok)

Yönlendirmeler `next.config.ts` içinde `redirects()` ile 301 olarak tanımlanır. Eski site query string’leri genelde yok sayılır.

## 1. Ana sayfalar

| Eski URL | Yeni URL | Tip |
|---|---|---|
| `/` | `/` | Aynı |
| `/tr/tupas-anasayfa` | `/` | 301 |
| `/en/tupas-main-page` | `/` | 301 (V1 TR-only) |
| `/tr/tupas-hakkimizda` | `/kurumsal/hakkimizda` | 301 |
| `/tr/tupas-iletisim-bilgileri` | `/iletisim` | 301 |
| `/tr/tupas-iletisim` | `/iletisim` | 301 |
| `/tr/tupas-urunler` | `/urunler` | 301 |
| `/tr/tupas-is-guvenligi` | `/urunler?grup=is-guvenligi` | 301 |
| `/tr/tupas-insan-kaynaklari` | `/iletisim` | 301 (geçici; İK sayfası V1 yok) |
| `/tr/tupas-haberler` | `/bilgi-merkezi` | 301 |

## 2. Hizmetler ve çözümler

| Eski URL | Yeni URL | Tip |
|---|---|---|
| `/tr/tupas-hizmetler/1/ucretsiz-kesif` | `/hizmetler/ucretsiz-kesif` | 301 |
| `/tr/tupas-hizmetler/2/tatbikat` | `/hizmetler/yangin-tatbikati` | 301 |
| `/tr/tupas-hizmetler/3/davlumbazlar` | `/cozumler/davlumbaz-sondurme-sistemleri` | 301 |
| `/tr/tupas-hizmetler/5/itfaiye-ruhsati` | `/bilgi-merkezi` | 301 |
| `/tr/tupas-hizmetler/6/dolum-ve-bakim` | `/hizmetler/dolum-ve-bakim` | 301 |
| `/tr/tupas-urunler/54/yangin-algilama-sistemleri` | `/cozumler/yangin-algilama-sistemleri` | 301 |
| `/tr/tupas-urunler/67/yangin-sondurme-sistemleri` | `/cozumler/yangin-sondurme-sistemleri` | 301 |
| `/tr/tupas-urunler/63/adresli-yangin-algilama-sistemleri` | `/cozumler/yangin-algilama-sistemleri` | 301 |
| `/tr/tupas-urunler/66/konvansiyonel-yangin-algilama-sistemleri` | `/cozumler/yangin-algilama-sistemleri` | 301 |

## 3. Kategori eşlemeleri (seçilmiş)

| Eski kategori | Yeni kategori slug |
|---|---|
| `/tr/tupas-urunler/16/...` (yangın tüpü üst) | `yangin-sondurme-cihazlari` |
| `/tr/tupas-urunler/17/...` kuru kimyevi | `kuru-kimyevi-tozlu` |
| `/tr/tupas-urunler/18/...` CO2 | `co2-gazli` |
| `/tr/tupas-urunler/19/...` köpüklü | `kopuklu` |
| `/tr/tupas-urunler/25/...` yangın dolapları | `yangin-dolaplari` |
| `/tr/tupas-urunler/30/...` hortum makaraları | `hortum-makaralari` |
| `/tr/tupas-is-guvenligi/1/...` battaniyeler | `yangin-battaniyeleri` |
| `/tr/tupas-is-guvenligi/2/...` itfaiyeci elbiseleri | `itfaiyeci-elbiseleri` |

Tam kategori listesi `src/content/categories.ts` içinde `legacyPaths` alanı ile tutulur; yeni kategori eklendikçe redirect tablosu genişletilir.

## 4. Ürün detay

Eski formatlar:

- `/tr/tupas-urun-detay/{id}/{slug}`
- `/tr/tupas-guvenlik-detay/{id}/{slug}`

Yeni format:

- `/urunler/{slug}`

**V1 stratejisi:** Migrasyonu yapılan ürünlerde `legacyIds` / `legacyPaths` alanına eski path yazılır ve dinamik redirect üretilir. Henüz taşınmayan ID’ler `/urunler` listesine 302/301 ile düşer (kullanıcı kaybını azaltmak için).

Örnek:

| Eski | Yeni |
|---|---|
| `/tr/tupas-urun-detay/10/12-kg-abc-...` | `/urunler/12-kg-abc-kuru-kimyevi-tozlu-yangin-sondurme-cihazi` |

## 5. Yasal sayfalar (yeni)

Eski sitede belirgin KVKK / çerez sayfası tespit edilmedi. Yeni:

- `/kvkk`
- `/gizlilik-politikasi`
- `/cerez-politikasi`

## 6. Yeni rotalar (eski karşılığı yok / birleşik)

- `/kurumsal/tarihce`
- `/kurumsal/kalite-belgeleri`
- `/cozumler`
- `/hizmetler`
- `/teklif-al`
- `/bilgi-merkezi`

## 7. Uygulama notları

1. Hosting seçilince www / apex kanonik URL `.env` `NEXT_PUBLIC_SITE_URL` ile ayarlanacak.
2. Eski `.aspx` / büyük-küçük harf varyasyonları canlı loglardan sonra eklenecek.
3. ENG path’leri TR karşılığına yönlendirilir; ayrı dil V2’de değerlendirilir.
