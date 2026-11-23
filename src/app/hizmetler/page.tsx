import Link from "next/link";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hizmetler",
  description:
    "Dolum, bakım, periyodik kontrol, ücretsiz keşif ve yangın tatbikatı hizmetleri.",
  path: "/hizmetler",
});

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        eyebrow="Teknik destek"
        title="Hizmetler"
        description="Saha odaklı teknik hizmet hattı. Kapsam ve süreler teklif aşamasında netleştirilir."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Hizmet başlıkları"
            description="Her hizmet için ayrıntılı anlatım ve teklif bağlantısı."
          />

          <div className="mt-12 grid gap-px border border-steel/20 bg-steel/20 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className="bg-white p-8 transition-colors duration-300 ease-industrial hover:bg-ivory/80"
              >
                <h2 className="font-heading text-xl font-semibold text-charcoal">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-steel">
                  {service.summary}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-crimson">
                  İncele
                </span>
              </Link>
            ))}
          </div>

          <StatusNote
            status="provisional"
            notes="Hizmet kapsamı ve ücretsiz keşif koşulları şirket tarafından güncellenebilir."
            className="mt-12"
          />
        </Container>
      </section>
    </>
  );
}