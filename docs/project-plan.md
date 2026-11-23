# TÜPAŞ Kurumsal Web Sitesi — Proje Planı

**Tarih:** 2026-11-23  
**Durum:** V1 uygulama  
**Dil:** Türkçe (tek dil)  
**Tasarım yönü:** Industrial Heritage — Modern Authority

## 1. Amaç

Uzun soluklu bir yangın güvenlik firması için kurumsal güven, mühendislik yetkinliği ve istikrar duygusu veren; ürün keşfi ile teklif dönüşümünü destekleyen üretim kalitesinde bir web sitesi.

Öncelik sırası:

1. Kurumsal kimlik ve güven
2. Çözüm / hizmet anlatımı
3. Ürün kataloğu ve teklif alma
4. İletişim

## 2. Mevcut durum özeti

| Madde | Bulgu |
|---|---|
| Depo | Boş workspace; sıfırdan Next.js App Router kurulumu |
| Eski site | https://www.tupas.com.tr/ erişilebilir (ASP.NET benzeri, TR/ENG, çok ürünlü) |
| Logo | `images/SiteLayout/logo_tupas.jpg` — alevli dikey marka; V1’de wordmark tercih edilecek, orijinal arşivlenecek |
| Hakkımızda | 1983 Mehmet Yerlikaya kuruluş metni mevcut; ISO 9001:2000 tarihi geçerlilik doğrulaması bekliyor |
| İletişim | Yenibosna adresi + telefon/e-posta çekildi — **yayın öncesi doğrulama zorunlu** |
| Hizmet sayfaları | URL’ler var; gövde metinleri eski sitede zayıf / şablon |
| Ürünler | Yüzlerce ürün; iki ağaç: `tupas-urunler` + `tupas-is-guvenligi` / detay slug’ları |

## 3. Teknik kararlar

- **Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Lucide, Zod
- **İçerik:** Typed TS/JSON (`src/content`) — CMS’e taşınabilir
- **Formlar:** Route Handlers + Zod + basit rate limit; e-posta sağlayıcıdan bağımsız soyutlama
- **Veritabanı / CMS / e-ticaret:** V1’de yok
- **Hosting:** Karar verilmedi; Docker + standart Node.js uyumu

## 4. Uygulama fazları

| Faz | Çıktı | Durum |
|---|---|---|
| 1 | Envanter + site incelemesi | Tamamlandı |
| 2 | `project-plan`, `content-inventory`, `url-migration`, `design-system` | Tamamlandı |
| 3 | Mimari, tokenlar, layout, nav, footer | Tamamlandı |
| 4 | Ana sayfa + ortak bileşenler | Tamamlandı |
| 5 | Kurumsal, çözümler, hizmetler, bilgi | Tamamlandı |
| 6 | Ürün kataloğu, arama, filtre, detay | Tamamlandı |
| 7 | İletişim / teklif formları | Tamamlandı |
| 8 | SEO, yönlendirmeler, a11y, Docker, README | Tamamlandı |
| 9 | Lint, typecheck, production build | Tamamlandı (2026-11-23) |

## 5. Bilinçli kapsam sınırları (V1)

- İngilizce dil sürümü yok (eski ENG menü korunmayacak; gerekirse sonra)
- İ.K. / iş başvurusu sayfası yok (eski `/tr/tupas-insan-kaynaklari` — ihtiyaç doğrulanacak)
- Haberler / blog tam migrasyonu yok; Bilgi Merkezi iskeleti + onay bekleyen içerik
- Fiyat, stok, uydurma teknik rating yok
- Tüm eski ürünlerin birebir göçü yerine: kategori mimarisi + temsilî ürün seti + kolay genişletme

## 6. Şirket onayı gerektiren konular

Ayrıntılar `content-inventory.md` içinde. Özet:

- Güncel iletişim bilgileri ve WhatsApp numarası
- ISO / TSE / CE belge geçerliliği ve dosyaları
- “4 yıl garanti” iddiasının güncelliği
- Referans müşteri listesi / logolar (yayın için yazılı izin)
- Hakkımızda metninin güncel kurumsal onaylı sürümü
- Ürün görselleri ve teknik şartnamelerin resmi seti
- İtfaiye ruhsatı hizmetinin V1’de yer alıp almayacağı

## 7. Başarı ölçütleri

- Tüm sitemap rotaları anlamlı içerik veya net placeholder ile dolu
- Production build hatasız
- Formlar yapılandırılmamış e-postada başarı iddiası yapmaz
- Eski kritik URL’ler için 301 haritası hazır
- Erişilebilirlik: semantik HTML, odak halkası, etiketli formlar, yeterli kontrast
