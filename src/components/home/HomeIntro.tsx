import Link from "next/link";
import { company } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";

export function HomeIntro() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Kurumsal"
              title="Endüstriyel disiplinde yangın güvenliği."
              description={`${company.foundedYear} yılında kurulan TÜPAŞ; söndürme, algılama ve koruyucu ekipman alanında kurumsal güveni önceleyen bir iş modeliyle çalışır.`}
            />
            <Link
              href="/kurumsal/hakkimizda"
              className="mt-8 inline-flex text-sm font-semibold text-crimson hover:underline"
            >
              Kurumsal kimliği inceleyin
            </Link>
          </div>
          <div className="space-y-5 lg:col-span-7">
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
  );
}
