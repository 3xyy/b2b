import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "@/components/ui/icons";

export function ProgramCard({ title, blurb, href }: { title: string; blurb: string; href: string }) {
  return (
    <Card interactive className="group/program flex flex-col">
      <h3 className="text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 flex-1 text-sm text-ink/70">{blurb}</p>
      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald transition-colors hover:text-court focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
      >
        Learn more
        <ArrowRight className="size-4 transition-transform duration-200 ease-[var(--ease-out-hover)] group-hover/program:translate-x-[3px]" />
      </Link>
    </Card>
  );
}
