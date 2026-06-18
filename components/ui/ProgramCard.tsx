import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function ProgramCard({ title, blurb, href }: { title: string; blurb: string; href: string }) {
  return (
    <Card className="flex flex-col">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm text-ink/70">{blurb}</p>
      <Link href={href} className="mt-4 text-sm font-semibold text-emerald hover:text-clay transition-colors">
        Learn more →
      </Link>
    </Card>
  );
}
