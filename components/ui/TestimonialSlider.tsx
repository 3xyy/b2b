"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

interface TestimonialSliderProps {
  items: TestimonialItem[];
}

export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + items.length) % items.length);
    },
    [items.length]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    if (reduced || paused) return;
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reduced, paused, next]);

  const item = items[current];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Testimonials"
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl bg-mint px-8 py-10 shadow-sm">
        <blockquote>
          <p className="text-lg leading-relaxed text-ink/80 sm:text-xl">&ldquo;{item.quote}&rdquo;</p>
          <footer className="mt-6">
            <p className="font-semibold text-ink">{item.author}</p>
            <p className="text-sm text-emerald">{item.role}</p>
          </footer>
        </blockquote>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="rounded-full border border-emerald/30 p-2 text-emerald transition hover:bg-emerald hover:text-paper"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
              className={`h-2 w-2 rounded-full transition-all ${
                i === current ? "w-6 bg-emerald" : "bg-emerald/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="rounded-full border border-emerald/30 p-2 text-emerald transition hover:bg-emerald hover:text-paper"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
