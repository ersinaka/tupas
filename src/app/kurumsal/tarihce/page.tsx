import { company } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Tarihçe",
  description:
    "TÜPAŞ kuruluşundan günümüze kronolojik özet. Ara dönem yılları şirket doğrulaması beklemektedir.",
  path: "/kurumsal/tarihce",
});

const timeline = [
  {
    year: "1983",
    title: "Kuruluş",
    description:
      "Mehmet Yerlikaya tarafından yangın söndürme ve yangın güvenliği alanında faaliyet başlatılması. Kuruluş yılı eski kurumsal siteden doğrulanmıştır.",
    status: "verified" as const,
  },
  {
    year: "1984 – günümüz",
    title: "Operasyonel birikim",
    description:
      "Ürün katalogu, teknik hizmet hattı ve kurumsal müşteri ilişkilerinin yıllar içinde genişlemesi. Bu döneme ait yıl yıl kilometre taşları arşivden henüz aktarılmamıştır.",
    status: "needs-confirmation" as const,
    notes:
      "Eksik yıllar ve olaylar şirket içi kayıtlarla netleştirilmeden bu sayfaya eklenmeyecektir.",
  },
];

export default function TarihcePage() {
  return (
    <>
      <PageHero
        eyebrow="Kurumsal"
        title="Tarihçe"
        description={`${company.shortName}, ${company.foundedYear} yılından bu yana İstanbul merkezli yangın güvenliği faaliyeti yürütmektedir.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <StatusNote
            status="needs-confirmation"
            notes="Kronoloji taslağıdır. 1983 sonrası yıllara ait detaylı tarihçe şirket onayı ve arşiv taraması tamamlanana kadar genişletilmez."
            className="mb-12"
          />

          <SectionHeading
            title="Zaman çizelgesi"
            description="Yayınlanan her madde doğrulanabilir kaynağa dayanır; eksik dönemler kasıtlı olarak boş bırakılmıştır."
          />

          <ol className="mt-12 border-l border-steel/30">
            {timeline.map((entry) => (
              <li
                key={entry.year}
                className="relative border-b border-steel/20 py-10 pl-8 sm:pl-12"
              >
                <span
                  className="absolute -left-px top-10 h-3 w-3 -translate-x-1/2 bg-crimson"
                  aria-hidden
                />
                <p className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-crimson">
                  {entry.year}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-semibold text-charcoal">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-8 text-steel">
                  {entry.description}
                </p>
                <StatusNote
                  status={entry.status}
                  notes={"notes" in entry ? entry.notes : undefined}
                  className="mt-5 max-w-3xl"
                />
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/kurumsal/hakkimizda" variant="secondary">
              Hakkımızda
            </Button>
            <Button href="/kurumsal/kalite-belgeleri" variant="ghost">
              Kalite belgeleri
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}