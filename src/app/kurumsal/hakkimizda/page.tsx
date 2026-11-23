import { company, provisionalBanner } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Hakkımızda",
  description:
    "TÜPAŞ yangın söndürme ve yangın güvenliği alanındaki kurumsal kimlik, faaliyet kapsamı ve çalışma ilkeleri.",
  path: "/kurumsal/hakkimizda",
});

export default function HakkimizdaPage() {
  return (
  <>
    <PageHero
      eyebrow="Kurumsal"
      title="Hakkımızda"
      description={company.tagline}
    />

    <section className="py-16 sm:py-20">
      <Container>
        <StatusNote
          status="provisional"
          notes={provisionalBanner}
          className="mb-10"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              title={company.legalName}
              description={`${company.foundedYear} yılından bu yana yangın güvenliği odaklı faaliyet.`}
            />
            <ul className="mt-8 space-y-3 border-t border-steel/20 pt-8 text-sm text-steel">
              <li>
                <span className="font-medium text-charcoal">Ticari ünvan: </span>
                {company.legalName}
              </li>
              <li>
                <span className="font-medium text-charcoal">Kısa ad: </span>
                {company.shortName}
              </li>
              <li>
                <span className="font-medium text-charcoal">Kuruluş: </span>
                {company.foundedYear}
              </li>
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-7">
            {company.aboutSummary.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-steel">
                {paragraph}
              </p>
            ))}
            <StatusNote status={company.meta.status} notes={company.meta.notes} />
          </div>
        </div>
      </Container>
    </section>

    <section className="border-y border-steel/20 bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Yetkinlikler"
          title="Öne çıkan çalışma alanları"
          description="Aşağıdaki başlıklar eski site ve mevcut içerik kaynağından derlenmiştir; abartılı iddia içermez."
        />

        <div className="mt-12 divide-y divide-steel/20 border-y border-steel/20">
          {company.strengths.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 py-8 sm:grid-cols-12 sm:gap-8 sm:px-2"
            >
              <span className="font-heading text-sm text-steel sm:col-span-1">
                0{index + 1}
              </span>
              <div className="sm:col-span-4">
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  {item.title}
                </h3>
              </div>
              <div className="space-y-4 sm:col-span-7">
                <p className="text-base leading-7 text-steel">{item.description}</p>
                <StatusNote status={item.meta.status} notes={item.meta.notes} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 border border-steel/20 px-6 py-8 sm:px-8">
          <div className="max-w-xl">
            <h2 className="font-heading text-2xl font-semibold text-charcoal">
              Tarihçe ve belgeler
            </h2>
            <p className="mt-2 text-base leading-7 text-steel">
              Kurumsal geçmiş ve kalite belgeleri için ayrı sayfaları inceleyin;
              belgeler yalnızca doğrulandıktan sonra yayınlanır.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/kurumsal/tarihce" variant="secondary">
              Tarihçe
            </Button>
            <Button href="/kurumsal/kalite-belgeleri" variant="ghost">
              Kalite belgeleri
            </Button>
          </div>
        </div>
      </Container>
    </section>
  </>
  );
}