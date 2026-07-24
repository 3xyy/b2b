import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-surface-950 hover:bg-brand-light hover:-translate-y-0.5",
  secondary:
    "border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5 backdrop-blur-sm",
  ghost: "text-white/80 hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-lg",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = CommonProps & {
  href?: string | null;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

/**
 * One button style used everywhere. Renders a Next <Link> for internal routes,
 * an <a> (new tab) for external URLs, and a plain <span>-styled anchor when
 * href is null/absent (decorative CTA). Keeps CTA styling perfectly consistent.
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (!href) {
    return (
      <span className={classes} {...rest}>
        {children}
      </span>
    );
  }

  const isExternal = /^https?:\/\/|^mailto:|^tel:/.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
