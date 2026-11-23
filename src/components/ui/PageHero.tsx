import { Container } from "@/components/ui/Container";

type Props = {
  title: string;
  description?: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: Props) {
  return (
    <section className="border-b border-steel/20 bg-white">
      <Container className="py-16 sm:py-20">
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-steel">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">
            {description}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
