import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-steel">
          404
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold text-charcoal">
          Sayfa bulunamadı
        </h1>
        <p className="mt-4 text-base leading-7 text-steel">
          Aradığınız sayfa taşınmış veya henüz yayınlanmamış olabilir.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Ana sayfa</Button>
          <Button href="/urunler" variant="secondary">
            Ürünler
          </Button>
        </div>
      </Container>
    </section>
  );
}
