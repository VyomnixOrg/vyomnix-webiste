"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/common/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: any;
  delay?: number;
}

/**
 * Reusable client-side animation wrapper for scroll-reveal.
 * Allows parent pages to remain Next.js Server Components.
 */
export function ScrollReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
}: ScrollRevealProps) {
  const animatedVariants = delay > 0
    ? {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      variants={animatedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
