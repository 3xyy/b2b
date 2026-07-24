import { cn } from "@/lib/cn";

/**
 * A single value/label statistic. Used in hero strips and impact rows.
 * (Animated counting is layered on top in the impact section, Phase 3.)
 */
export default function StatTile({
  value,
  label,
  className,
}: {
  value: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl md:text-4xl font-bold text-brand">{value}</div>
      <div className="mt-1 text-sm text-white/50">{label}</div>
    </div>
  );
}
