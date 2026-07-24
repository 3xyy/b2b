import { cn } from "@/lib/cn";

type Width = "narrow" | "default" | "wide" | "full";

const widths: Record<Width, string> = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

interface SectionProps {
  id?: string;
  as?: "section" | "div" | "footer";
  width?: Width;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

/**
 * Consistent section shell: vertical rhythm + centered max-width container.
 * Replaces the ad-hoc `py-* max-w-* mx-auto px-6` blocks repeated across pages.
 */
export default function Section({
  id,
  as: Tag = "section",
  width = "wide",
  className,
  innerClassName,
  children,
}: SectionProps) {
  return (
    <Tag id={id} className={cn("relative py-20 md:py-28", className)}>
      <div className={cn("mx-auto px-6", widths[width], innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}
