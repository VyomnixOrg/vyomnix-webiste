"use client";

import { motion } from "@/common/components/motion";
import { staggerChild } from "@/lib/animations";
import { cn } from "@/common/utils";
import type { ProcessStep } from "@/common/types";

interface ProcessStepCardProps {
  step: ProcessStep;
  index: number;
}

/**
 * Responsive alternating timeline item.
 * Mobile: Left-aligned circle with details shifted right.
 * Desktop: Alternates sides (left/right) around a central vertical timeline line.
 */
export function ProcessStepCard({ step, index }: ProcessStepCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={staggerChild}
      className={cn(
        "relative flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Detail Card */}
      <div className="w-full pl-16 md:pl-0 md:w-[44%]">
        <motion.div
          whileHover={{ y: -3, borderColor: "rgba(85, 188, 188, 0.3)", transition: { duration: 0.2 } }}
          className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-colors duration-200 hover:shadow-md"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Step {step.step}
          </span>
          <h3 className="mt-1 font-heading text-lg font-semibold text-accent">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Central Indicator Circle */}
      <div
        className="absolute left-6 md:left-1/2 top-6 md:top-auto flex size-12 -translate-x-1/2 md:-translate-y-0 items-center justify-center rounded-full border-2 border-primary bg-secondary font-heading text-lg font-bold text-primary z-10 shadow-sm"
        aria-hidden="true"
      >
        {step.step}
      </div>

      {/* Desktop spacer to balance side layouts */}
      <div className="hidden md:block md:w-[44%]" />
    </motion.div>
  );
}
