import Link from "next/link";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";

export function HomeServices() {
  return (
    <section className="bg-charcoal py-20 text-ivory sm:py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-ivory/55">
            Hizmetler
          </p>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Teknik hizmet hattı
          </h2>
          <p className="mt-4 text-base leading-7 text-ivory/70 sm:text-lg">
            Dolum, kontrol, keşif ve tatbikat süreçlerinde saha odaklı destek.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/hizmetler/${service.slug}`}
              className="bg-charcoal p-8 transition-colors duration-300 ease-industrial hover:bg-[#2e2e2e]"
            >
              <h3 className="font-heading text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-ivory/70">
                {service.summary}
              </p>
              <span className="mt-6 inline-block text-sm font-semibold text-[#c45a5e]">
                İncele
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
