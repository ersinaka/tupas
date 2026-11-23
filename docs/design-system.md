# Tasarım Sistemi — Industrial Heritage / Modern Authority

## 1. Konumlandırma

Kurumsal, endüstriyel, sakin otorite. Startup SaaS, cam morphism, neon, aşırı yuvarlatılmış kart ızgaraları ve jenerik AI stok görünümü yasak.

Brief ile çelişen genel landing-page alışkanlıkları (ör. tek tipface zorunluluğu) bu projede **brief kazanır**: Manrope + Inter, Lucide, verilen palet.

## 2. Renk

| Token | Hex | Kullanım |
|---|---|---|
| `charcoal` | `#252525` | Ana metin, koyu yüzeyler, footer |
| `ivory` | `#F2EFE8` | Sayfa zemini, sıcak boşluk |
| `crimson` | `#8F1D22` | CTA, marka vurgusu (seyrek) |
| `steel` | `#777873` | İkincil metin, ince çizgiler |
| `white` | `#FFFFFF` | Kart / panel yüzeyi |

Kurallar:

- Kırmızı yalnızca birincil CTA, aktif nav göstergesi, kritik vurgu.
- Arka planlarda gradient yok; doku için çok düşük opaklıkta çizgisel / nokta deseni veya fotoğraf.
- Yeterli kontrast: charcoal/ivory ve white/charcoal birincil metin çiftleri.

## 3. Tipografi

- **Başlık:** Manrope (600–700; 900 yok)
- **Gövde:** Inter (400–500)
- Ölçek: Tailwind varsayılan `text-sm` … `text-5xl` (keyfi px yok)
- Başlıklarda `text-wrap: balance`, gövdede `pretty`
- Cümle içi gereksiz tirelerden kaçın; Türkçe tipografide kısa çizgi gerektiğinde kontrollü kullan

## 4. Boşluk ve ızgara

- İçerik max genişlik: ~1120–1200px
- Bölüm dikey ritmi: 64 / 80 / 96px
- Kenar boşluğu mobil: 16–24px
- Hizalama: editöryal sütunlar (2/3 + 1/3), simetrik kart ormanından kaçın

## 5. Bileşen dili

- **Buton:** köşeler `rounded-sm` veya `rounded` (aşırı pill yok); birincil dolu crimson, ikincil charcoal outline
- **Kart:** varsayılan kartsız; etkileşim/liste gerektiğinde ince border (`steel/30`), gölge yok veya tek katman çok hafif
- **Hero:** tam genişlik endüstriyel görsel düzlem + sol metin bloğu; yüzen badge / sticker yok
- **İkon:** Lucide, ince stroke, küçük boyut; ikon ızgarası dekoratif amaçlı şişirilmez
- **Form:** net etiket, görünür odak halkası, hata metni

## 6. Hareket

- Az ve işlevsel: hover opacity/transform, sayfa girişi yok veya çok hafif
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`, süre ~300–500ms
- `prefers-reduced-motion` saygı

## 7. Logo

- Wordmark: **TÜPAŞ** (Manrope, tracking kontrollü); alev / jenerik ikon yok
- Orijinal logo `public/images/brand/logo-original.jpg` arşiv; şirket isterse sonra değiştirilir

## 8. Fotoğraf

- Endüstriyel yangın güvenliği, depo, fabrika ekipmanı, teknik inceleme, gerçek ürün
- Uydurma tesis / çalışan / sertifika yok
- Placeholder dosya adı: `placeholder-*.jpg` + görünür “yer tutucu” notu gerektiğinde

## 9. Sayfa şablonları

1. **Ana sayfa:** hero → kurumsal → çözümler → ürün vitrini → hizmetler → neden TÜPAŞ → (doğrulanmışsa belgeler) → CTA → footer
2. **İç sayfa:** sayfa başlığı şeridi + dar içerik sütunu + yan CTA
3. **Katalog:** filtre çubuğu + sonuç listesi (yoğun grid yerine düzenli satır/kolon)
4. **Ürün detay:** galeri + özet + teknik tablo + teklif CTA

## 10. Erişilebilirlik

- Semantik landmark’lar (`header`, `nav`, `main`, `footer`)
- Skip link
- Odak görünür (`outline` crimson/charcoal)
- Form `label` / `aria-describedby`
- Görsellerde anlamlı `alt` (dekoratifse boş alt)
