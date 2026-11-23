type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-steel">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-heading text-3xl font-semibold text-charcoal sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-steel sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
