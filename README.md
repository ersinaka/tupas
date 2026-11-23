# TÜPAŞ Kurumsal Web Sitesi

Industrial Heritage — Modern Authority tasarım yönünde, Next.js App Router ile geliştirilmiş Türkçe kurumsal web sitesi.

## Teknoloji

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Lucide ikonlar
- Zod (sunucu tarafı form doğrulama)

Veritabanı, CMS, kullanıcı hesabı ve e-ticaret **yok** (V1).

## Yerel geliştirme

```bash
cp .env.example .env.local
npm install
npm run dev
```

http://localhost:3000

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm run start` | Production sunucu |
| `npm run lint` | ESLint |

## Ortam değişkenleri

`.env.example` dosyasına bakın.

- `NEXT_PUBLIC_SITE_URL` — kanonik URL (sitemap, OG, metadata)
- `EMAIL_PROVIDER` — `webhook` \| `smtp` \| `log`
- `EMAIL_FROM` / `EMAIL_TO`
- Webhook için `EMAIL_WEBHOOK_URL` (+ opsiyonel `EMAIL_API_KEY`)

E-posta yapılandırılmamışsa formlar **başarı iddiası yapmaz**; kullanıcıya açık hata döner.

## İçerik düzenleme

İçerik `src/content/` altındadır:

| Dosya | İçerik |
|---|---|
| `company.ts` | Firma, iletişim, güçlü yanlar |
| `categories.ts` | Ürün kategorileri |
| `products.ts` | Ürün kataloğu |
| `solutions.ts` | Çözüm sayfaları |
| `services.ts` | Hizmet sayfaları |
| `info.ts` | Bilgi merkezi |
| `navigation.ts` | Menü |

Ürün modeli (`src/types/content.ts`): `slug`, `name`, `categorySlug`, `description`, `images`, `specifications`, `documents`, `quoteEnabled`, `meta`.

**Kural:** Fiyat, stok, belge ve teknik rating uydurulmaz. Eksik alanlar `StatusNote` / yer tutucu ile işaretlenir.

Proje dokümanları: `docs/project-plan.md`, `docs/content-inventory.md`, `docs/url-migration.md`, `docs/design-system.md`.

## GitHub Pages

Statik dışa aktarım ile yayınlanır (`npm run build:pages` → `out/`).

- `main` dalına push sonrası `.github/workflows/deploy-pages.yml` otomatik deploy eder
- Site: `https://<kullanici>.github.io/tupas/`
- Form API’leri GitHub Pages’te çalışmaz (statik hosting); Node/Docker veya e-posta webhook gerekir
- Yerel üretim (Node): `npm run build` → `standalone`

## Docker

```bash
docker build -t tupas-web --build-arg NEXT_PUBLIC_SITE_URL=https://ornek.tld .
docker run --rm -p 3000:3000 --env-file .env.local tupas-web
```

`output: "standalone"` kullanır (GitHub Pages dışındaki kurulumlar).

### Hosting önkoşulları

- Node.js 22+ veya Docker
- HTTPS sonlandırma (ters vekil / load balancer)
- Ortam değişkenleri (özellikle `NEXT_PUBLIC_SITE_URL` ve e-posta)
- Statik varlıklar image içinde (`public/`)

## SEO ve yönlendirmeler

- Sayfa bazlı metadata + Open Graph
- `sitemap.xml`, `robots.txt`
- Eski `tupas.com.tr` URL’leri için 301 (`next.config.ts`)

## Güvenlik notları

- Formlarda honeypot + bellek içi rate limit
- Hassas müşteri verisi loglanmaz
- Gizler Git’e girmez (`.env*`)

## Yayın öncesi şirket onayı

- İletişim telefon / e-posta / adres / WhatsApp
- ISO / TSE / CE belge dosyaları ve geçerlilik
- Ürün görselleri ve teknik şartnameler
- Referans logoları (izinli)
- Yasal metinler (KVKK, gizlilik, çerez)
