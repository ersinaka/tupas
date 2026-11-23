import Link from "next/link";
import { company, provisionalBanner } from "@/content/company";
import { footerNavigation } from "@/content/navigation";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const hq = company.contact.headquarters;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel/20 bg-charcoal text-ivory">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-heading text-2xl font-semibold tracking-[0.08em]">
              TÜPAŞ
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/75">
              {company.tagline}
            </p>
            <p className="mt-6 text-xs leading-6 text-ivory/55">
              {provisionalBanner}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            {footerNavigation.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory/90">
                  {group.label}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.children?.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-ivory/70 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory/90">
              İletişim
            </p>
            <address className="mt-4 space-y-3 text-sm not-italic leading-7 text-ivory/75">
              <p>
                {hq.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                {hq.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="block hover:text-white"
                  >
                    {phone}
                  </a>
                ))}
              </p>
              <p>
                {hq.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block hover:text-white"
                  >
                    {email}
                  </a>
                ))}
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.shortName}. Tüm hakları saklıdır.
          </p>
          <p>İletişim bilgileri geçici kayıttır — yayın öncesi doğrulanmalıdır.</p>
        </div>
      </Container>
    </footer>
  );
}
