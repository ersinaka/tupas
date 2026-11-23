import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StatusNote } from "@/components/ui/StatusNote";
import {
  getAllProducts,
  getCategoryForProduct,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return buildMetadata({
      title: "Ürün bulunamadı",
      description: "İstenen ürün kaydı bulunamadı.",
      path: `/urunler/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: product.name,
    description: product.summary,
    path: `/urunler/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryForProduct(product);
  const related = getRelatedProducts(product);

  return (
    <>
      <section className="border-b border-steel/20 bg-white">
        <Container className="py-10 sm:py-14">
          <nav className="mb-6 text-sm text-steel" aria-label="Breadcrumb">
            <Link href="/urunler" className="hover:text-crimson">
              Ürünler
            </Link>
            {category ? (
              <>
                <span className="mx-2">/</span>
                <Link
                  href={`/urunler?kategori=${category.slug}`}
                  className="hover:text-crimson"
                >
                  {category.name}
                </Link>
              </>
            ) : null}
          </nav>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] border border-steel/20 bg-ivory">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
                {product.images[0].isPlaceholder ? (
                  <span className="absolute bottom-3 left-3 bg-charcoal/85 px-2 py-1 text-xs text-ivory">
                    Yer tutucu görsel — şirket fotoğrafı ile değiştirilecek
                  </span>
                ) : null}
              </div>
              {product.images.length > 1 ? (
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {product.images.slice(1).map((image) => (
                    <div
                      key={image.src}
                      className="relative aspect-square border border-steel/20"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-6">
              {category ? (
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.12em] text-steel">
                  {category.name}
                </p>
              ) : null}
              <h1 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-steel">{product.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {product.quoteEnabled ? (
                  <Button href={`/teklif-al?urun=${product.slug}`}>
                    Teklif Al
                  </Button>
                ) : null}
                <Button href="/iletisim" variant="secondary">
                  İletişime Geç
                </Button>
              </div>
              <StatusNote
                status={product.meta.status}
                notes={product.meta.notes}
                className="mt-8"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            <h2 className="font-heading text-2xl font-semibold">Ürün açıklaması</h2>
            <p className="text-base leading-8 text-steel">{product.description}</p>
          </div>
          <div className="lg:col-span-5">
            <h2 className="font-heading text-2xl font-semibold">Teknik bilgiler</h2>
            {product.specifications.length > 0 ? (
              <table className="mt-5 w-full border-collapse text-sm">
                <tbody>
                  {product.specifications.map((spec) => (
                    <tr key={spec.label} className="border-b border-steel/20">
                      <th className="py-3 pr-4 text-left font-medium text-charcoal">
                        {spec.label}
                      </th>
                      <td className="py-3 text-steel">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="mt-4 text-sm leading-7 text-steel">
                Teknik tablo şirket onaylı veri ile eklenecektir. Bu alanda uydurma
                değer yayınlanmaz.
              </p>
            )}

            <h3 className="mt-10 font-heading text-xl font-semibold">Dokümanlar</h3>
            {product.documents.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {product.documents.map((doc) => (
                  <li key={doc.href}>
                    <a
                      href={doc.href}
                      className="text-sm font-semibold text-crimson hover:underline"
                    >
                      {doc.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-steel">
                İndirilebilir doküman henüz eklenmedi.
              </p>
            )}
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-steel/20 bg-white py-14">
          <Container>
            <h2 className="font-heading text-2xl font-semibold">İlgili ürünler</h2>
            <ul className="mt-6 divide-y divide-steel/20 border-y border-steel/20">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/urunler/${item.slug}`}
                    className="flex items-center justify-between gap-4 py-4 text-charcoal hover:text-crimson"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-steel">Detay</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
