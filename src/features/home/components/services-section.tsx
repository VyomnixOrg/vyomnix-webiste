"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { Button } from "@/common/components/ui/button";
import { DynamicIcon } from "@/common/components/ui/dynamic-icon";
import { useScrollTo } from "@/common/hooks/use-scroll-to";
import { SERVICES } from "@/features/home/data/services";
import { viewportConfig } from "@/lib/animations";
import { cn } from "@/common/utils";

const DELIVERY_PHASES = ["Discovery", "Design", "Development", "Deployment", "Support"];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const pillsRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const category = SERVICES[activeCategory];

  return (
    <section id="services" className="bg-background py-20 md:py-28" aria-label="Our Services">
      <Container>
        <SectionHeading
          label="Services"
          title="What We Build"
          description="From custom software and cloud infrastructure to AI systems and digital products — we deliver end-to-end technology solutions."
        />
      </Container>

      {/* Sentinel for sticky detection */}
      <div ref={sentinelRef} className="h-px" />

      {/* Sticky Category Pills */}
      <div
        ref={pillsRef}
        className={cn(
          "border-y border-border transition-all duration-300",
          isSticky ? "sticky top-16 md:top-18 z-30 bg-background/95 backdrop-blur-md shadow-sm" : "bg-muted/30"
        )}
      >
        <Container>
          <div className="flex gap-1 overflow-x-auto py-3 no-scrollbar snap-x snap-mandatory md:justify-center">
            {SERVICES.map((svc, idx) => (
              <button
                key={svc.id}
                onClick={() => setActiveCategory(idx)}
                className={cn(
                  "relative shrink-0 snap-start rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  idx === activeCategory
                    ? "bg-primary text-white shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-accent"
                )}
              >
                {svc.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      <Container className="mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-10"
          >
            {/* Featured Service Panel */}
            <div className="group relative overflow-hidden rounded-xl border border-border bg-secondary/45 p-8 shadow-sm transition-all hover:shadow-md md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    Featured Service
                  </span>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-accent md:text-3xl">
                    {category.featured.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {category.featured.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="mt-5 bg-white"
                    onClick={() => scrollTo("contact")}
                  >
                    Learn More
                    <ChevronRight className="ml-0.5 size-3.5" />
                  </Button>
                </div>
                  <div className="flex items-center justify-center">
                  <div className="flex size-32 items-center justify-center rounded-2xl bg-primary/5 text-primary md:size-40">
                    <DynamicIcon name={category.featured.visual} className="size-14 md:size-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {category.items.map((item, idx) => {
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * idx, ease: [0.25, 0.1, 0.25, 1] }}
                    className="group/card flex flex-col rounded-2xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover/card:bg-primary group-hover/card:text-white">
                      <DynamicIcon name={item.icon} className="size-5" />
                    </div>
                    <h4 className="text-base font-semibold text-accent">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground flex-1">
                      {item.description}
                    </p>
                    <ul className="mt-4 space-y-1.5" role="list">
                      {item.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Check className="size-3 text-primary shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Service Comparison Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 overflow-hidden rounded-2xl border border-border bg-muted/50"
        >
          <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-5">
            {DELIVERY_PHASES.map((phase) => (
              <div key={phase} className="flex flex-col items-center gap-2 bg-white px-4 py-6 text-center">
                <div className="flex size-8 items-center justify-center rounded-full bg-secondary text-primary">
                  <Check className="size-4" />
                </div>
                <span className="text-xs font-semibold text-accent">{phase}</span>
                <span className="text-[10px] text-muted-foreground leading-tight">
                  End-to-end delivery
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
