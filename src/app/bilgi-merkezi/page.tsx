import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { infoArticles } from "@/content/info";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusNote } from "@/components/ui/StatusNote";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bilgi Merkezi",
  description:
    "Yangın güvenliği, teklif süreci ve sık sorulan sorular hakkında bilgilendirme yazıları.",
  path: "/bilgi-merkezi",
});

export default function BilgiMerkeziPage() {
  return (
    <>
      <PageHero
        eyebrow="Kaynak"
        title="Bilgi Merkezi"
        description="Genel bilgilendirme içerikleri. Tesisinize özel karar için keşif ve teklif sürecini kullanın."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            title="Makaleler"
            description="Konu başına kısa okuma notları."
          />

          <div className="mt-12 divide-y divide-steel/20 border-y border-steel/20">
            {infoArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/bilgi-merkezi/${article.slug}`}
                className="group flex flex-wrap items-start justify-between gap-4 py-8 transition-colors hover:bg-ivory/60 sm:px-2"
              >
                <div className="max-w-2xl">
                  <h2 className="font-heading text-xl font-semibold text-charcoal group-hover:text-crimson">
                    {article.title}
                  </h2>
                  <p className="mt-2 text-base leading-7 text-steel">
                    {article.summary}
                  </p>
                </div>
                <ArrowUpRight
                  className="size-5 shrink-0 text-steel transition-transform group-hover:text-crimson"
                  aria-hidden
                />
              </Link>
            ))}
          </div>

          <StatusNote
            status="provisional"
            notes="Bilgi merkezi içerikleri hukuki tavsiye değildir; güncel mevzuat için resmi kaynaklara başvurun."
            className="mt-12"
          />
        </Container>
      </section>
    </>
  );
}