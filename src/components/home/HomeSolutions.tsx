import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/content/solutions";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HomeSolutions() {
  return (
    <section className="border-y border-steel/20 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Çözümler"
          title="Ana yangın koruma hatları"
          description="Söndürme, algılama ve davlumbaz sistemleri için proje odaklı yaklaşım."
        />
        <div className="mt-12 divide-y divide-steel/20 border-y border-steel/20">
          {solutions.map((solution, index) => (
            <Link
              key={solution.slug}
              href={`/cozumler/${solution.slug}`}
              className="group grid gap-4 py-8 transition-colors duration-300 ease-industrial hover:bg-ivory/60 sm:grid-cols-12 sm:items-start sm:gap-8 sm:px-2"
            >
              <span className="font-heading text-sm text-steel sm:col-span-1">
                0{index + 1}
              </span>
              <div className="sm:col-span-4">
                <h3 className="font-heading text-2xl font-semibold text-charcoal group-hover:text-crimson">
                  {solution.title}
                </h3>
              </div>
              <p className="text-base leading-7 text-steel sm:col-span-6">
                {solution.summary}
              </p>
              <span className="sm:col-span-1 sm:justify-self-end">
                <ArrowUpRight
                  className="size-5 text-steel transition-transform duration-300 ease-industrial group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-crimson"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
