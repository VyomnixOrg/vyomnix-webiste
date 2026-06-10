"use client";

import { motion } from "@/common/components/motion";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { cn } from "@/common/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Premium, customizable Section Heading component.
 * Supports center alignments and left-aligned offset desktop layouts (title left, desc right).
 * Features a self-drawing animated primary divider.
 */
export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn(
        "mb-12 w-full flex flex-col",
        align === "center" && "mx-auto text-center items-center max-w-2xl",
        align === "left" && "text-left items-start max-w-2xl",
        className
      )}
    >
      {/* Title & Badge */}
      <div className="w-full">
        {label && (
          <span className="mb-2.5 inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">
            {label}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
          {title}
        </h2>
        
        {/* Animated Underline */}
        <div className={cn("mt-4 flex", align === "center" ? "justify-center" : "justify-start")}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3.5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="h-1 rounded-full bg-primary"
          />
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
