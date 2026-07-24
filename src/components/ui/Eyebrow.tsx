import { cn } from "@/lib/cn";

/**
 * Small uppercase label above a heading — the recurring brand-green kicker.
 */
export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block text-brand text-sm font-semibold tracking-widest uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
