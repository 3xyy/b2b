import Card from "@/components/ui/Card";

/**
 * Large centered emoji + value + label panel used as the visual anchor on the
 * Bounce Back and Eco-filament program pages.
 */
export default function StatBadgeCard({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <Card className="flex aspect-square items-center justify-center overflow-hidden bg-brand/10 p-8">
      <div className="text-center">
        <div className="mb-4 text-8xl md:text-9xl">{icon}</div>
        <div className="text-3xl font-bold text-white md:text-4xl">{value}</div>
        <div className="mt-1 text-white/60">{label}</div>
      </div>
    </Card>
  );
}
