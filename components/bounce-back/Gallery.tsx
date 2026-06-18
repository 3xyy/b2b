"use client";

import { useState } from "react";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { Lightbox } from "@/components/ui/Lightbox";

const IMAGES = [
  "/bounce-back-logos/page-28-xref-114.png",
  "/bounce-back-logos/page-29-xref-117.png",
  "/bounce-back-logos/page-30-xref-120.png",
  "/bounce-back-logos/page-31-xref-123.png",
];

export function Gallery() {
  const [src, setSrc] = useState<string | null>(null);

  return (
    <>
      <LogoMarquee images={IMAGES} onImageClick={setSrc} />
      <Lightbox src={src} alt="Bounce Back partner" onClose={() => setSrc(null)} />
    </>
  );
}
