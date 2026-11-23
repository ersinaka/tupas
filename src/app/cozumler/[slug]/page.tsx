import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/content/categories";
import { getSolution, solutions } from "@/content/solutions";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) {
    return buildMetadata({
      title: "Çözüm bulunamadı",
      description: "İstenen çözüm sayfası mevcut değil.",
      path: `/cozumler/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: solution.title,
    description: solution.summary,
    path: `/cozumler/${solution.slug}`,
  });
}

export default async function CozumDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const relatedCategories = solution.relatedCategorySlugs
    .map((categorySlug) => getCategoryBySlug(categorySlug))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Çözümler"
        title={solution.title}
        description={solution.summary}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {solution.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-steel">
                {paragraph}
              </p>
            ))}
          </div>
          <StatusNote
            status={solution.meta.status}
            notes={solution.meta.notes}
            className="mt-10"
          />
        </Container>
      </section>

      {relatedCategories.length > 0 ? (
        <section className="border-t border-steel/20 bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="İlgili ürün grupları"
              title="Katalog bağlantıları"
              description="Bu çözümle ilişkilendirilen ürün kategorileri."
            />
            <ul className="mt-10 divide-y divide-steel/20 border-y border-steel/20">
              {relatedCategories.map((category) => (
                <li key={category!.slug}>
                  <Link
                    href={`/urunler?kategori=${category!.slug}`}
                    className="flex flex-wrap items-center justify-between gap-4 py-5 text-charcoal transition-colors hover:text-crimson"
                  >
                    <span className="font-heading text-lg font-semibold">
                      {category!.name}
                    </span>
                    <span className="text-sm text-steel">Ürünleri gör</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-steel/20 py-12">
        <Container className="flex flex-wrap gap-3">
          <Button href="/cozumler" variant="secondary">
            Tüm çözümler
          </Button>
          <Button href="/teklif-al" variant="primary">
            Teklif alın
          </Button>
        </Container>
      </section>
    </>
  );
}