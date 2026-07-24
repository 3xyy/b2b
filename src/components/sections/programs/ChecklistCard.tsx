import Link from "next/link";
import { Check } from "lucide-react";
import Card from "@/components/ui/Card";
import type { WhatWeDoItem } from "@/content/types";

/**
 * "What We Do" checklist — heading + checkmark bullets. Shared by the
 * Bounce Back, Tech to Treasure, and Workshop program pages.
 */
export default function ChecklistCard({
  heading,
  items,
  className,
}: {
  heading: string;
  items: WhatWeDoItem[];
  className?: string;
}) {
  return (
    <Card className={className ?? "p-8"}>
      <h3 className="mb-6 text-2xl font-semibold text-white">{heading}</h3>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <span
              aria-hidden
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand"
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <p className="text-white/70">
              <strong className="text-white">{item.title}:</strong>{" "}
              {item.link ? (
                <>
                  {item.description.split(item.link.text)[0]}
                  <Link href={item.link.href} className="text-brand hover:underline">
                    {item.link.text}
                  </Link>
                  {item.description.split(item.link.text)[1]}
                </>
              ) : (
                item.description
              )}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
