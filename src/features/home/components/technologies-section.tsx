"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { Badge } from "@/common/components/ui/badge";
import { TECH_STACK } from "@/features/home/data/technologies";
import { cn } from "@/common/utils";

export function TechnologiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterCategories = ["All", ...TECH_STACK.map((c) => c.category)];

  const filteredStack = selectedCategory === "All"
    ? TECH_STACK
    : TECH_STACK.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="technologies"
      className="bg-muted py-20 md:py-28"
      aria-label="Our Technology Stack"
    >
      <Container>
        <SectionHeading
          label="Technology"
          title="Our Technology Stack"
          description="We work with a modern, carefully selected technology ecosystem — ensuring our solutions are reliable, maintainable, and aligned with industry best practices."
        />

        {/* Categories Filtering Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-1.5 md:gap-2">
          {filterCategories.map((filter) => {
            const isActive = selectedCategory === filter;
            return (
              <button
                key={filter}
                onClick={() => setSelectedCategory(filter)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:bg-white hover:text-accent"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tech-filter"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Tech Cards Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredStack.map((category) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={category.category}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm hover:border-primary/20 hover:shadow-md transition-all duration-200"
              >
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-muted/30 hover:border-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
