import { cn } from "@/lib/cn";

/**
 * Pill badge — the brand-tinted rounded label (e.g. hero "♻️ Sustainable Future").
 */
export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-brand/30 bg-brand/15 px-4 py-1.5 text-sm font-medium text-brand",
        className,
      )}
    >
      {children}
    </span>
  );
}
