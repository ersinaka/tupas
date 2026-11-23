import { notFound } from "next/navigation";
import { getInfoArticle, infoArticles } from "@/content/info";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return infoArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getInfoArticle(slug);
  if (!article) {
    return buildMetadata({
      title: "Makale bulunamadı",
      description: "İstenen bilgi merkezi sayfası mevcut değil.",
      path: `/bilgi-merkezi/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: article.title,
    description: article.summary,
    path: `/bilgi-merkezi/${article.slug}`,
  });
}

export default async function BilgiMerkeziDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getInfoArticle(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow="Bilgi Merkezi"
        title={article.title}
        description={article.summary}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-steel">
                {paragraph}
              </p>
            ))}
          </div>
          <StatusNote
            status={article.meta.status}
            notes={article.meta.notes}
            className="mt-10"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/teklif-al">Teklif alın</Button>
            <Button href="/bilgi-merkezi" variant="secondary">
              Tüm makaleler
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}