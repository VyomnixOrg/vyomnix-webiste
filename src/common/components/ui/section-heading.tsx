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
        "mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {label && (
        <span className="mb-3 inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-primary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-accent md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
