import { cn } from "@/lib/cn";

/**
 * Glassy surface card — the recurring bordered, translucent panel.
 * `interactive` adds the hover-lift + brand border treatment used on links.
 */
export default function Card({
  as: Tag = "div",
  interactive = false,
  className,
  children,
}: {
  as?: "div" | "li" | "article";
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm",
        interactive &&
          "transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.07]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
