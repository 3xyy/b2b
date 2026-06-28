"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseValue(value: string): { num: number; suffix: string } {
  // Strip commas, then extract leading digits, rest is suffix
  const cleaned = value.replace(/,/g, "");
  const match = cleaned.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function formatNum(n: number, originalValue: string): string {
  // Re-insert commas if original had them
  if (originalValue.includes(",")) {
    return n.toLocaleString("en-US");
  }
  return String(n);
}

export function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const shineTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [display, setDisplay] = useState<string>(value);
  // `shining` is transient: it flips on when the count-up finishes to flash the
  // one-shot shine sweep, then clears itself after the sweep so the text returns
  // to its solid `text-court` color. Keeping it on permanently would leave the
  // span with `-webkit-text-fill-color: transparent` and hide the digits.
  const [shining, setShining] = useState(false);
  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduced) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    const { num, suffix } = parseValue(value);
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          observer.disconnect();
          const duration = 1500;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * num);
            setDisplay(formatNum(current, value) + suffix);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(value);
              // Trigger the one-shot shine, then clear it after the sweep
              // (shine-sweep is 0.85s in globals.css) so the text goes solid.
              setShining(true);
              shineTimeout.current = setTimeout(() => setShining(false), 850);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (shineTimeout.current) clearTimeout(shineTimeout.current);
    };
  }, [value, reduced]);

  return (
    <span ref={ref} className={`${className} ${shining ? "shine" : ""}`}>
      {reduced ? value : display}
    </span>
  );
}
