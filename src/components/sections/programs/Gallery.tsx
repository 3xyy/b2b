import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { assetPath } from "@/lib/assetPath";

/**
 * Responsive image gallery grid for program pages.
 */
export default function Gallery({
  images,
  altPrefix,
}: {
  images: string[];
  altPrefix: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {images.map((src, i) => (
        <Reveal key={src} delay={(i % 4) * 0.06}>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30">
            <Image
              src={assetPath(src)}
              alt={`${altPrefix} ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
              unoptimized
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
