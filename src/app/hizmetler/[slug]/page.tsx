import { notFound } from "next/navigation";
import { getService, services } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return buildMetadata({
      title: "Hizmet bulunamadı",
      description: "İstenen hizmet sayfası mevcut değil.",
      path: `/hizmetler/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: service.title,
    description: service.summary,
    path: `/hizmetler/${service.slug}`,
  });
}

export default async function HizmetDetayPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title={service.title}
        description={service.summary}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="space-y-6">
            {service.body.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-steel">
                {paragraph}
              </p>
            ))}
          </div>
          <StatusNote
            status={service.meta.status}
            notes={service.meta.notes}
            className="mt-10"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={service.ctaHref}>{service.ctaLabel}</Button>
            <Button href="/hizmetler" variant="secondary">
              Tüm hizmetler
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}