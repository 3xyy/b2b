import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  const base =
    tone === "dark"
      ? "border border-paper/15 bg-field text-paper rounded-md p-6"
      : "border border-ink/10 bg-paper text-ink rounded-md p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]";
  return <div className={`${base} ${className}`}>{children}</div>;
}
