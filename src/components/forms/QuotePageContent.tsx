"use client";

import { useSearchParams } from "next/navigation";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/company";
import { getProductBySlug } from "@/lib/products";

export function QuotePageContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("urun") ?? undefined;
  const product = slug ? getProductBySlug(slug) : undefined;

  return (
    <Container className="grid gap-10 lg:grid-cols-12">
      <div className="space-y-4 lg:col-span-4">
        <h2 className="font-heading text-xl font-semibold">Nasıl ilerler?</h2>
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-7 text-steel">
          <li>Formu doldurun.</li>
          <li>Talebiniz e-posta ile iletilir (yapılandırma varsa).</li>
          <li>Gerekirse keşif planlanır ve teklif hazırlanır.</li>
        </ol>
        <p className="text-sm leading-7 text-steel">
          Doğrudan e-posta:{" "}
          <a
            href={`mailto:${company.contact.quoteEmail}`}
            className="font-semibold text-crimson hover:underline"
          >
            {company.contact.quoteEmail}
          </a>
          <span className="mt-1 block text-xs">
            (geçici kayıt — doğrulama bekliyor)
          </span>
        </p>
        <p className="text-xs leading-6 text-steel">
          Not: GitHub Pages gibi statik hostingde form API’si çalışmaz; Node
          sunucusu veya e-posta webhook yapılandırması gerekir.
        </p>
      </div>
      <div className="border border-steel/20 bg-white p-6 sm:p-8 lg:col-span-8">
        <QuoteForm productSlug={product?.slug} productName={product?.name} />
      </div>
    </Container>
  );
}
