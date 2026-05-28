"use client";

import { motion } from "@/common/components/motion";
import { staggerChild } from "@/lib/animations";
import { getIcon } from "@/lib/icons";
import type { WhyChooseItem } from "@/common/types";

interface WhyChooseCardProps {
  item: WhyChooseItem;
}

export function WhyChooseCard({ item }: WhyChooseCardProps) {
  const Icon = getIcon(item.icon);

  return (
    <motion.div
      variants={staggerChild}
      className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-md md:p-8"
    >
      <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        {Icon && <Icon className="size-5" />}
      </div>
      <h3 className="text-base font-semibold text-accent">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </motion.div>
  );
}
