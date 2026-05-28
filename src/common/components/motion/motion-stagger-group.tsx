"use client";

import { motion } from "@/common/components/motion";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import { cn } from "@/common/utils";

interface MotionStaggerGroupProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable animated stagger container.
 * Wraps children in a motion.div with stagger + scroll-triggered entrance.
 * Eliminates repeated staggerContainer/initial/whileInView/viewport boilerplate.
 */
export function MotionStaggerGroup({
  children,
  className,
}: MotionStaggerGroupProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
