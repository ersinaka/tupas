import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-crimson text-white hover:bg-[#7a181c] border border-crimson",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost:
    "bg-transparent text-charcoal border border-transparent hover:border-steel/40",
};

type Common = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = Common &
  Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

type ButtonAsLink = Common &
  Omit<ComponentProps<typeof Link>, "className" | "children" | "href"> & {
    href: string;
  };

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = `inline-flex items-center justify-center gap-2 px-3 py-2 text-base font-semibold transition-colors duration-300 ease-industrial ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
