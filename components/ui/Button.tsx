import Link from "next/link";
import type { ReactNode } from "react";

const variantStyles: Record<string, string> = {
  primary:
    "bg-court text-ink hover:brightness-95 focus-visible:outline-court",
  secondary:
    "border border-ink/25 text-ink hover:border-ink focus-visible:outline-ink",
  light:
    "bg-paper text-canvas hover:bg-paper/90 focus-visible:outline-paper",
  onDark:
    "border border-paper/30 text-paper hover:border-court hover:text-court focus-visible:outline-paper",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: "primary" | "secondary" | "onDark" | "light";
  children: ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[3px] px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles = variantStyles[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
