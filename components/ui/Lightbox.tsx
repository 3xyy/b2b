"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
}

export function Lightbox({ src, alt = "", onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!src) return;

    // Focus close button on open
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="lightbox-fade fixed inset-0 z-50 flex items-center justify-center bg-ink/80"
      onClick={onClose}
    >
      <div
        className="lightbox-pop relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          aria-label="Close"
          onClick={onClose}
          className="absolute -right-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-[3px] bg-paper text-ink shadow-lg transition hover:bg-lime focus:outline-none focus:ring-2 focus:ring-emerald"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <Image
          src={src}
          alt={alt}
          width={900}
          height={600}
          className="max-h-[85vh] w-auto rounded-xl object-contain shadow-2xl"
        />
      </div>
    </div>
  );
}
