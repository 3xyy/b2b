"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

export default function PartnersGrid({ logos }: { logos: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 items-center"
    >
      {logos.map((src) => (
        <div key={src} className="flex items-center justify-center p-4 bg-white/3 rounded-xl border border-white/6">
          <Image
            src={assetPath(src)}
            alt={src.split("/").pop() || "Partner Logo"}
            width={160}
            height={64}
            className="max-h-16 object-contain"
            unoptimized={true}
          />
        </div>
      ))}
    </motion.div>
  );
}
