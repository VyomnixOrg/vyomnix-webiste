"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { SERVICES } from "@/features/home/data/services";
import { getIcon } from "@/lib/icons";
import { cn } from "@/common/utils";
import { SubServiceCard } from "./sub-service-card";

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="services" className="bg-background py-20 md:py-28" aria-label="Our Services">
      <Container>
        <SectionHeading
          label="Services"
          title="Comprehensive IT Solutions"
          description="From custom software development and cloud services to smart hardware installations and digital marketing — we deliver end-to-end technology solutions."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Main Category Selection Tabs */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {SERVICES.map((service, idx) => {
              const Icon = getIcon(service.icon);
              const isActive = idx === activeCategory;

              return (
                <button
                  key={service.title}
                  onClick={() => setActiveCategory(idx)}
                  className={cn(
                    "relative flex flex-col items-start rounded-2xl border p-6 text-left transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer",
                    isActive
                      ? "border-primary bg-secondary/30 shadow-sm"
                      : "border-border bg-white hover:border-primary/20 hover:bg-muted/40"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-service-tab"
                      className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-lg transition-colors",
                        isActive ? "bg-primary text-white" : "bg-secondary text-primary"
                      )}
                    >
                      {Icon && <Icon className="size-5" />}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-accent">
                      {service.title}
                    </h3>
                  </div>
                  <p className="relative z-10 mt-3 text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Sub-Services Explorer Detail Grid */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="grid gap-6 sm:grid-cols-2"
              >
                {SERVICES[activeCategory].subServices.map((sub) => (
                  <SubServiceCard key={sub.title} subService={sub} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
