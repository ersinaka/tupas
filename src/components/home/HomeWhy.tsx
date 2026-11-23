import { company } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";

export function HomeWhy() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Neden TÜPAŞ"
          title="Doğrulanabilir güçlü yanlar"
          description="Yalnızca kaynakta karşılığı olan maddeler listelenir. Belge ve referans iddiaları onay sonrası eklenir."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {company.strengths.map((item) => (
            <article
              key={item.title}
              className="border-t border-charcoal pt-6"
            >
              <h3 className="font-heading text-xl font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-steel">
                {item.description}
              </p>
              <StatusNote
                status={item.meta.status}
                notes={item.meta.notes}
                className="mt-4"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
