import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeContactCta() {
  const phone = company.contact.headquarters.phones[0];
  const whatsapp = company.contact.whatsapp;

  return (
    <section className="border-t border-steel/20 bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-steel">
              İletişim
            </p>
            <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
              Projeniz veya ürün ihtiyacınız için bize ulaşın
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-steel sm:text-lg">
              Telefon, e-posta veya teklif formu üzerinden talebinizi iletebilirsiniz.
              WhatsApp numarası şirket onayından sonra eklenecektir.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <Button href={`tel:${phone.replace(/\s/g, "")}`} variant="secondary">
              <Phone className="size-4" aria-hidden />
              {phone}
            </Button>
            {whatsapp ? (
              <Button
                href={`https://wa.me/${whatsapp}`}
                variant="secondary"
                className="inline-flex"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </Button>
            ) : (
              <span className="inline-flex items-center gap-2 border border-dashed border-steel/40 px-3 py-2 text-sm text-steel">
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp: onay bekliyor
              </span>
            )}
            <Button href="/teklif-al">Teklif Al</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
