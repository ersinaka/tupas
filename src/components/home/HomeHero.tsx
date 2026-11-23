import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/content/company";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/yangin-sondurme.jpg"
          alt="Yangın söndürme cihazları — TÜPAŞ katalog görseli"
          fill
          priority
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/55" />
      </div>

      <Container className="flex min-h-[78vh] flex-col justify-center py-20 sm:py-24">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-ivory/70">
          {company.foundedYear}’ten bugüne
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Yangın güvenliğinde
          <br />
          güçlü birikim.
          <br />
          Güvenilir çözümler.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/80">
          Kurumsal müşteriler, bayiler ve iş ortakları için yangın söndürme,
          algılama ve teknik hizmetlerde sade, ciddi ve izlenebilir bir iş
          ortağı.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/urunler" className="min-w-40">
            Ürünleri İncele
          </Button>
          <Button
            href="/teklif-al"
            variant="secondary"
            className="min-w-40 border-ivory text-ivory hover:bg-ivory hover:text-charcoal"
          >
            Teklif Al
          </Button>
        </div>
      </Container>
    </section>
  );
}
