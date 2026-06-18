import Link from "next/link";
import type { ReactNode } from "react";

export function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald";
  const styles =
    variant === "primary"
      ? "bg-emerald text-paper hover:bg-emerald/90"
      : "border-2 border-emerald text-emerald hover:bg-emerald/10";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
