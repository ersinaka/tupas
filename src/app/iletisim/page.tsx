import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StatusNote } from "@/components/ui/StatusNote";
import { company, provisionalBanner } from "@/content/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "İletişim",
  description:
    "TÜPAŞ iletişim bilgileri ve iletişim formu. Telefon, e-posta ve adres.",
  path: "/iletisim",
});

export default function ContactPage() {
  const hq = company.contact.headquarters;
  const factory = company.contact.factory;

  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize ulaşın"
        description="Kurumsal talepler, bayi ilişkileri ve teknik sorular için iletişim kanallarımız."
      />
      <section className="py-14 sm:py-16">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            <StatusNote status="provisional" notes={provisionalBanner} />
            <div>
              <h2 className="font-heading text-2xl font-semibold">{hq.label}</h2>
              <address className="mt-4 space-y-3 text-base not-italic leading-7 text-steel">
                {hq.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <div className="pt-2">
                  {hq.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-charcoal hover:text-crimson"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <div>
                  {hq.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-charcoal hover:text-crimson"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </address>
              <StatusNote
                status={hq.meta.status}
                notes={hq.meta.notes}
                className="mt-4"
              />
            </div>

            {factory ? (
              <div>
                <h2 className="font-heading text-2xl font-semibold">
                  {factory.label}
                </h2>
                <address className="mt-4 space-y-3 text-base not-italic leading-7 text-steel">
                  {factory.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  {factory.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="block text-charcoal hover:text-crimson"
                    >
                      {phone}
                    </a>
                  ))}
                </address>
                <StatusNote
                  status={factory.meta.status}
                  notes={factory.meta.notes}
                  className="mt-4"
                />
              </div>
            ) : null}

            {company.contact.instagram ? (
              <p className="text-sm text-steel">
                Instagram:{" "}
                <a
                  href={company.contact.instagram}
                  className="font-semibold text-crimson hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @tupas_yangin
                </a>
              </p>
            ) : null}
          </div>

          <div className="border border-steel/20 bg-white p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-heading text-2xl font-semibold">İletişim formu</h2>
            <p className="mt-3 mb-8 text-sm leading-7 text-steel">
              Form gönderimi, e-posta sağlayıcısı yapılandırıldığında iletilir.
              Yapılandırma yoksa başarı mesajı gösterilmez.
            </p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
