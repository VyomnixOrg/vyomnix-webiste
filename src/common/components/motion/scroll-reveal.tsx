"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, fadeBlur, fadeScale, directionalReveal, viewportConfig } from "@/lib/animations";
import { cn } from "@/common/utils";

type RevealVariant = "fade-up" | "fade-blur" | "fade-scale" | "directional";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}

const variantMap: Record<RevealVariant, Variants> = {
  "fade-up": fadeUp as Variants,
  "fade-blur": fadeBlur as Variants,
  "fade-scale": fadeScale as Variants,
  "directional": directionalReveal as Variants,
};

export function ScrollReveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variantMap[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      transition={delay > 0 ? { delay } : undefined}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
