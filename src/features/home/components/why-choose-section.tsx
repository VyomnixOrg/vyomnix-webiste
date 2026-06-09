"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import { Container } from "@/common/components/ui/container";
import { ScrollReveal } from "@/common/components/motion";
import { WHY_CHOOSE_ITEMS } from "@/features/home/data/why-choose";
import { cn } from "@/common/utils";

const METRICS = [
  { value: 100, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 95, suffix: "%", label: "Retention" },
];

export function WhyChooseSection() {
  const metricsRef = useRef<HTMLDivElement>(null);
  const metricsInView = useInView(metricsRef, { once: true, amount: 0.5 });

  return (
    <section id="why-choose" className="bg-muted py-20 md:py-28" aria-label="Why Choose Us">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column — Sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ScrollReveal>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-accent sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
                Why Businesses Choose Vyomnix
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We are more than a vendor — we are a technology partner committed to your 
                long-term success. Here&apos;s what sets us apart.
              </p>
            </ScrollReveal>

            {/* Metrics */}
            <div
              ref={metricsRef}
              className="mt-10 grid grid-cols-3 gap-4"
            >
              {METRICS.map((metric) => (
                <div key={metric.label} className="rounded-xl border border-border bg-white p-5 text-center">
                  <div className="text-2xl font-bold text-primary md:text-3xl">
                    {metricsInView ? (
                      <CountUp end={metric.value} duration={2} suffix={metric.suffix} />
                    ) : (
                      `0${metric.suffix}`
                    )}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Scroll-triggered stacked cards */}
          <div className="space-y-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <ScrollReveal
                key={item.number}
                delay={0.1 * idx}
                variant="fade-scale"
                className={cn(
                  "rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-md md:p-10",
                  "hover:border-primary/20"
                )}
              >
                <span className="text-5xl font-bold leading-none text-primary/15 md:text-6xl">
                  {item.number}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-accent md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground max-w-xl">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
