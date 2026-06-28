"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";

const IMAGES = [
  { src: "/bounce-back-logos/page-28-xref-114.png", alt: "Bounce Back Project photo 1" },
  { src: "/bounce-back-logos/page-29-xref-117.png", alt: "Bounce Back Project photo 2" },
  { src: "/bounce-back-logos/page-30-xref-120.png", alt: "Bounce Back Project photo 3" },
  { src: "/bounce-back-logos/page-31-xref-123.png", alt: "Bounce Back Project photo 4" },
];

export function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  function open(src: string, alt: string) {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  }

  function close() {
    setLightboxSrc(null);
    setLightboxAlt("");
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {IMAGES.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => open(img.src, img.alt)}
            aria-label={`View larger: ${img.alt}`}
            className="group relative block overflow-hidden rounded-[3px] border border-ink/10 bg-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={760}
              height={560}
              className="h-72 w-full object-cover transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:scale-[1.05] group-hover:rotate-[0.5deg]"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
            {/* Hover overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
                className="text-paper"
              >
                <path
                  d="M20 12H12m0 0v8m0-8l8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 27l8-8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={close} />
    </>
  );
}
