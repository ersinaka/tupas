"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { primaryNavigation } from "@/content/navigation";
import { company } from "@/content/company";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const phone = company.contact.headquarters.phones[0];

  return (
    <header className="sticky top-0 z-50 border-b border-steel/20 bg-ivory/95 backdrop-blur-sm">
      <div className="border-b border-steel/15 bg-charcoal text-ivory">
        <Container className="flex items-center justify-between gap-4 py-2 text-sm">
          <span
            className="font-signature text-lg leading-none text-ivory/90 sm:text-xl"
            title="Kurucu Mehmet Yerlikaya anısına"
            aria-label="Kurucu Mehmet Yerlikaya anısına"
          >
            M. Yerlikaya
          </span>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 text-ivory hover:text-white"
          >
            <Phone className="size-4" aria-hidden />
            <span>{phone}</span>
            <span className="sr-only"> (geçici numara, doğrulama bekliyor)</span>
          </a>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-[0.08em] text-charcoal"
          aria-label="TÜPAŞ ana sayfa"
        >
          TÜPAŞ
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {primaryNavigation.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ease-industrial ${
                  isActive(pathname, item.href)
                    ? "text-crimson"
                    : "text-charcoal hover:text-crimson"
                }`}
              >
                {item.label}
              </Link>
              {item.children?.length ? (
                <div className="invisible absolute left-0 top-full z-20 min-w-56 border border-steel/20 bg-white opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-ivory hover:text-crimson"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/teklif-al" className="hidden sm:inline-flex">
            Teklif Al
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center border border-charcoal p-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menüyü aç/kapat</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-steel/20 bg-white lg:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-2 py-3 text-base font-medium text-charcoal"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <ul className="mb-2 ml-3 border-l border-steel/20">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-3 py-2 text-sm text-steel"
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <Button href="/teklif-al" className="mt-4 w-full" onClick={() => setOpen(false)}>
              Teklif Al
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
