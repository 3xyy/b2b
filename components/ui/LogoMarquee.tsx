"use client";

import { useState } from "react";
import Image from "next/image";

interface LogoMarqueeProps {
  images: string[];
  onImageClick?: (src: string) => void;
}

export function LogoMarquee({ images, onImageClick }: LogoMarqueeProps) {
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  if (reduced) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6">
        {images.map((src) => (
          <button
            key={src}
            type="button"
            onClick={() => onImageClick?.(src)}
            className="cursor-pointer rounded-lg bg-white p-3 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald"
            aria-label={`View ${src}`}
          >
            <Image src={src} alt="" width={120} height={80} className="h-16 w-auto object-contain" />
          </button>
        ))}
      </div>
    );
  }

  // Duplicate list for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      {/* Fade masks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
        style={{ background: "linear-gradient(to right, var(--paper), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
        style={{ background: "linear-gradient(to left, var(--paper), transparent)" }}
      />

      <div
        className="group flex w-max gap-8"
        style={{ animation: "marquee 25s linear infinite" }}
      >
        {doubled.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => onImageClick?.(src)}
            className="cursor-pointer rounded-lg bg-white p-3 shadow-sm transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald group-hover:[animation-play-state:paused]"
            aria-label={`View ${src}`}
            style={{ animationPlayState: "inherit" }}
          >
            <Image src={src} alt="" width={120} height={80} className="h-16 w-auto object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
