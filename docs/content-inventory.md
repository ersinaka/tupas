# İçerik Envanteri — tupas.com.tr

**Kaynak inceleme tarihi:** 2026-11-23  
**Kaynak:** https://www.tupas.com.tr/ (canlı site erişildi)

## 1. Kurumsal kimlik

| Öğe | Kaynak | Durum | Not |
|---|---|---|---|
| Marka adı | Site geneli | Kullanılabilir | TÜPAŞ / Tüpaş Yangın Söndürme Cihazları |
| Logo | `/images/SiteLayout/logo_tupas.jpg` (72×104, alevli dikey) | Arşivlendi | V1 wordmark; alevli logo yerine tipografik marka (brief) |
| İmza / “M. Yerlikaya” | Header görseli | Kullanılmayacak | Kurumsal wordmark ile değiştirilecek |
| Footer copyright | “TÜPAŞ 2013…” | Güncellenecek | Yıl doğrulanacak |

## 2. Hakkımızda (doğrulanan metin özeti)

Eski `/tr/tupas-hakkimizda` sayfasından çekilen metin (özet, yeniden yazılacak):

- 1983’te Mehmet Yerlikaya tarafından kurulduğu belirtiliyor.
- Yangın söndürme cihazları, algılama, otomatik söndürme, dolaplar, davlumbaz sistemleri vb. hizmet alanları listeleniyor.
- “7 gün 24 saat” hizmet iddiası var → **onay gerekli**.
- “25 Mayıs 2003’te ISO 9001:2000 belgesi alındı” → **belge geçerliliği ve güncel standardı onay gerekli** (9001:2000 güncel değildir).
- “Firmamızda pazarlamacı bulundurmamak” iddiası → **ton / yayın onayı gerekli**.
- “30 yılı aşan deneyim” ifadesi tarihsel olarak eski; 1983’e göre ~40+ yıl → metin yenilenecek, abartılı süperlatifler yumuşatılacak.

**V1 yaklaşımı:** Kuruluş yılı ve faaliyet alanlarını koru; doğrulanmamış ISO/liderlik/garanti iddialarını yayınlamadan önce `[ŞİRKET ONAYI GEREKLİ]` işaretle veya gizle.

## 3. İletişim (geçici — yayın öncesi doğrulama zorunlu)

Kaynak: `/tr/tupas-iletisim-bilgileri`

| Alan | Değer | Doğrulama |
|---|---|---|
| Genel merkez adresi | Doğu Sanayi Sitesi 14. Blok No:18 Yenibosna / İstanbul | `[DOĞRULAMA]` |
| Fabrika adresi | Aynı adres listelenmiş | `[DOĞRULAMA]` — ayrı fabrika adresi var mı? |
| Telefon (merkez) | 0 212 551 71 71, 0 212 552 56 28, 0 212 552 65 95 | `[DOĞRULAMA]` |
| Telefon (fabrika) | 0 212 551 54 70, 0 212 551 90 27 | `[DOĞRULAMA]` |
| Faks | 0 212 503 12 71 | `[DOĞRULAMA]` |
| E-posta | info@tupas.com.tr, bahar@tupas.com.tr, satis@tupas.com.tr | `[DOĞRULAMA]` |
| Teklif e-posta | bahar@tupas.com.tr | `[DOĞRULAMA]` |
| Instagram | https://www.instagram.com/tupas_yangin | `[DOĞRULAMA]` |
| WhatsApp | Eski sitede belirgin numara bulunamadı | `[EKSİK — şirketten istenecek]` |
| Harita | “Haritadan inceleyin” linki | Koordinat / Maps URL onaylanacak |

## 4. Ana navigasyon (eski)

- Anasayfa → `/tr/tupas-anasayfa`
- Hakkımızda → `/tr/tupas-hakkimizda`
- İş Güvenliği Malz. → `/tr/tupas-is-guvenligi` (+ alt kategoriler)
- Ürünler → `/tr/tupas-urunler` (+ alt kategoriler)
- Davlumbaz Söndürme → `/tr/tupas-hizmetler/3/davlumbazlar`
- Yangın Algılama → ürün kategorisi `/tr/tupas-urunler/54/...`
- İ.K. → `/tr/tupas-insan-kaynaklari` (V1 dışı, onay)
- İletişim → `/tr/tupas-iletisim-bilgileri` (+ iletişim formu)
- Haberler → `/tr/tupas-haberler`

## 5. Hizmetler (eski URL’ler)

| Hizmet | Eski URL | Yeni rota | İçerik durumu |
|---|---|---|---|
| Ücretsiz keşif | `/tr/tupas-hizmetler/1/ucretsiz-kesif` | `/hizmetler/ucretsiz-kesif` | Gövde metni zayıf → yapısal placeholder + genel anlatım |
| Yangın tatbikatı | `/tr/tupas-hizmetler/2/tatbikat` | `/hizmetler/yangin-tatbikati` | Aynı |
| Davlumbaz | `/tr/tupas-hizmetler/3/davlumbazlar` | `/cozumler/davlumbaz-sondurme-sistemleri` | Çözüm sayfasına taşınacak |
| İtfaiye ruhsatı | `/tr/tupas-hizmetler/5/itfaiye-ruhsati` | Bilgi / hizmet notu | V1’de bilgi merkezinde kısa madde; tam sayfa onayı |
| Dolum ve bakım | `/tr/tupas-hizmetler/6/dolum-ve-bakim` | `/hizmetler/dolum-ve-bakim` | Yapısal içerik |
| Periyodik kontrol | (ayrı URL net değil) | `/hizmetler/periyodik-kontrol` | Yeni yapı; şirket metni gerekli |

## 6. Ürün / kategori ağacı (özet)

### A) Yangın ürünleri (`/tr/tupas-urunler/...`)

Üst kategoriler (doğrulanan isimler):

- Yangın söndürme cihazları (ABC toz, CO2, köpük, halokarbon, sprinklerli, sulu, metal toz, nikelaj)
- Yangın dolapları
- Hortum makaraları / makara arabaları / hortumlar
- Mobil köpük üniteleri
- Hidrant ve hidrant sistemi
- İtfaiye malzemeleri (lans, nozul, vana, rakor vb.)
- Yangından koruyucu / iş güvenliği (çapraz bağ)
- Acil aydınlatma, exit levhaları, tepe lambaları
- Yangın algılama (adresli / konvansiyonel)
- Yangın köşesi, fosforlu levhalar
- Yangın kapısı / merdiveni
- Gazlı / sulu söndürme sistemleri
- Römorklu köpük topu
- Yangın tüpü aksesuarları

### B) İş güvenliği (`/tr/tupas-is-guvenligi/...`)

~45 alt kategori (battaniye, itfaiyeci elbisesi, solunum, gaz ölçüm, eldiven, baret vb.). Detay URL’leri: `/tr/tupas-guvenlik-detay/{id}/{slug}`

### C) Ürün detay

- `/tr/tupas-urun-detay/{id}/{slug}` — örnek sayım: ürünler listesinde ~179+ detay linki; güvenlik ağacında yüzlerce ek ürün
- Teknik şartname tabloları ürün bazında değişken; **uydurma spec yazılmayacak**
- Görseller: `/images/uploads/...` — şirket varlıkları; V1’de seçilmiş görseller + `[PLACEHOLDER]` işaretli alanlar

## 7. Belgeler / sertifikalar

| Öğe | Kaynak kanıtı | Yayın kararı |
|---|---|---|
| CE / ISO / TSE banner ikonları | Ana sayfa slayt | Dosya ve geçerlilik olmadan logo şeridi **yayınlanmayacak** |
| ISO 9001:2000 (2003) | Hakkımızda metni | Güncel belge yoksa sayfada “onay bekliyor” |
| TS EN 1869 battaniye | Ürün adında geçiyor | Ürün adı korunabilir; belge PDF yoksa indirme linki yok |
| “4 yıl garanti” | Banner | `[ŞİRKET ONAYI]` olmadan ana CTA iddiası yapılmayacak |

## 8. Görseller / medya

İndirilen / arşivlenen:

- `public/images/brand/logo-original.jpg`

Ana sayfa upload örnekleri (eski CDN):

- yangın söndürme / koruyucu malzeme banner’ları `/images/uploads/*.jpg`

**Politika:** Mevcut şirket görselleri tercih; uydurma tesis / personel / sertifika görseli yok. Stock kullanılacaksa dosya adında `placeholder-` öneki ve alt metinde işaret.

## 9. Yinelenen / eski / düşük öncelik

- ENG dil sürümü (V1 dışı)
- Haber arşivi (kısmen güncel değil)
- TTR Bilişim footer logosu
- “Pazarlamacı bulundurmama” pazarlama cümlesi (yeniden yazım)
- Çift adres (merkez=fabrika) tutarsızlığı

## 10. V1 içerik stratejisi

1. Doğrulanan iletişim + kuruluş yılı + faaliyet alanları
2. Çözüm / hizmet sayfalarında genel endüstri dili (garanti / sayı iddiası yok)
3. Kataloğa temsilî ürünler (isim/slug eski siteden); boş spec/doküman alanları
4. Eksik her şey UI’da “İçerik şirket onayından sonra yayınlanacaktır” notu
