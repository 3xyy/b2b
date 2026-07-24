"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = 28;
const directions: Record<Direction, { x?: number; y?: number }> = {
  up: { y: offset },
  down: { y: -offset },
  left: { x: offset },
  right: { x: -offset },
  none: {},
};

interface RevealProps {
  as?: "div" | "section" | "li" | "article" | "span";
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
  children: React.ReactNode;
}

/**
 * Reusable scroll-reveal wrapper. Fades + slides content in when it enters the
 * viewport. Honors prefers-reduced-motion (renders static). This replaces the
 * dozens of hand-written `initial/whileInView` Framer blocks across the pages.
 */
export default function Reveal({
  as = "div",
  direction = "up",
  delay = 0,
  className,
  once = true,
  children,
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, ...directions[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
