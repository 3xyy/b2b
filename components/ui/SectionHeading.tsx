"use client";

import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  return (
    <div className={`mb-10 ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-emerald">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-ink/60 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
