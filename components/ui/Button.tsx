import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/ui/icons";

const variantStyles: Record<string, string> = {
  primary:
    "bg-court text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:brightness-95 hover:shadow-[0_6px_14px_-4px_rgba(0,0,0,0.18)] focus-visible:outline-court",
  secondary:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink/[0.03] focus-visible:outline-ink",
  light:
    "bg-paper text-canvas shadow-[0_1px_2px_rgba(0,0,0,0.08)] hover:bg-paper/95 hover:shadow-[0_6px_14px_-4px_rgba(0,0,0,0.22)] focus-visible:outline-paper",
  onDark:
    "border border-paper/30 text-paper hover:border-court hover:text-court hover:bg-paper/[0.04] focus-visible:outline-paper",
};

export function Button({
  href,
  variant = "primary",
  withArrow = false,
  children,
  className = "",
}: {
  href: string;
  variant?: "primary" | "secondary" | "onDark" | "light";
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
}) {
  const base =
    "group/btn inline-flex items-center justify-center gap-2 rounded-[3px] px-5 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,box-shadow,color,filter] duration-200 ease-[var(--ease-out-hover)] will-change-transform hover:-translate-y-[1px] active:translate-y-[1px] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles = variantStyles[variant];
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {withArrow ? (
        <ArrowRight className="size-4 translate-x-0 transition-transform duration-200 ease-[var(--ease-out-hover)] group-hover/btn:translate-x-[3px]" />
      ) : null}
    </Link>
  );
}
