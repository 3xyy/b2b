import Badge from "@/components/ui/Badge";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

interface PageHeaderProps {
  badge?: string;
  eyebrow?: string;
  title: React.ReactNode;
  /** Optional accent word appended to the title in the brand gradient. */
  titleAccent?: string;
  subheading?: string;
}

/**
 * Standard inner-page hero: navbar clearance + gradient backdrop + centered
 * badge/eyebrow, heading, and subheading. Shared by About and program pages.
 */
export default function PageHeader({
  badge,
  eyebrow,
  title,
  titleAccent,
  subheading,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-900 to-surface-950" />

      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        {badge && <Badge>{badge}</Badge>}
        {eyebrow && !badge && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="text-h1 font-bold text-balance">
          <span className="text-white">{title}</span>
          {titleAccent && (
            <>
              {" "}
              <span className="text-brand">{titleAccent}</span>
            </>
          )}
        </h1>
        {subheading && (
          <p className="max-w-2xl text-lead text-white/60 text-pretty">
            {subheading}
          </p>
        )}
      </Reveal>
    </section>
  );
}
