import Link from "next/link";
import type { ReactNode } from "react";

const variantStyles: Record<string, string> = {
  primary: "bg-emerald text-paper hover:bg-emerald/90 focus-visible:outline-emerald",
  secondary: "border-2 border-emerald text-emerald hover:bg-emerald/10 focus-visible:outline-emerald",
  light: "bg-paper text-emerald hover:bg-paper/90 focus-visible:outline-paper",
  onDark: "border-2 border-paper/70 text-paper hover:bg-paper/10 focus-visible:outline-paper",
};

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary" | "light" | "onDark";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles = variantStyles[variant];
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
