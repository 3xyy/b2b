import { cn } from "@/lib/cn";
import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

/**
 * Eyebrow + heading + optional intro paragraph, in the standard stack.
 * Gradient-accented headings are achieved by passing JSX into `title`.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "text-center items-center" : "text-left items-start",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-h2 font-bold text-white text-balance">{title}</h2>
      {intro && (
        <p
          className={cn(
            "text-lead text-white/60 text-pretty",
            align === "center" ? "max-w-2xl" : "max-w-xl",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
