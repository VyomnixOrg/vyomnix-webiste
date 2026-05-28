"use client";

import { motion } from "@/common/components/motion";
import { staggerChild } from "@/lib/animations";
import { getIcon } from "@/lib/icons";
import type { Industry } from "@/common/types";

interface IndustryCardProps {
  industry: Industry;
}

/**
 * Premium left-aligned Industry Card.
 * Displays the industry icon, title, description (text-sm),
 * and lists key sector highlights from the company doc.
 */
export function IndustryCard({ industry }: IndustryCardProps) {
  const Icon = getIcon(industry.icon);

  return (
    <motion.div
      variants={staggerChild}
      whileHover={{ y: -4, borderColor: "rgba(85, 188, 188, 0.35)", transition: { duration: 0.2 } }}
      className="group flex flex-col items-start rounded-2xl border border-border bg-white p-6 transition-colors duration-250 hover:shadow-md"
    >
      {/* Icon + Title Header */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
          {Icon && <Icon className="size-5" />}
        </div>
        <h3 className="font-heading text-base font-semibold text-accent">
          {industry.name}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground flex-1">
        {industry.description}
      </p>

      {/* Capabilities Highlights */}
      {industry.highlights && (
        <div className="mt-5 w-full border-t border-border/50 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
            Key Solutions
          </p>
          <ul className="mt-2.5 grid grid-cols-2 gap-x-2 gap-y-1.5" role="list">
            {industry.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-1 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
