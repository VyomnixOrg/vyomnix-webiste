"use client";

import { Container } from "@/common/components/ui/container";
import { ScrollReveal } from "@/common/components/motion";
import { CORE_PRINCIPLES } from "@/features/home/data/core-principles";
import { getIcon } from "@/lib/icons";
import { ArrowRight } from "lucide-react";

const ABOUT_STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
];

const PRINCIPLE_ICONS = ["shield", "code", "eye", "users"];
const WORKFLOW_STEPS = [
  { label: "Idea", icon: "lightbulb" },
  { label: "Strategy", icon: "target" },
  { label: "Design", icon: "palette" },
  { label: "Development", icon: "code" },
  { label: "Growth", icon: "trending-up" },
];
export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background py-16 md:py-20"
      aria-label="About Vyomnix"
    >
      <Container>
        <div className="mb-11 grid gap-6 lg:grid-cols-12 lg:gap-11">
          <ScrollReveal variant="fade-up" className="lg:col-span-5">
            <span className="mb-2.5 inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
              About Us
            </span>
            <h2 className="text-[26px] font-bold leading-[1.15] tracking-tight text-foreground md:text-3xl">
              Your Trusted Technology Partner in South Asia.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-blur" className="space-y-3 lg:col-span-7">
            <p className="text-[13.5px] leading-[1.75] text-muted-foreground">
              Vyomnix is a Nepal-based software consultancy that partners with
              businesses to build custom software, cloud infrastructure, and
              AI-powered systems. We start by understanding your operating
              reality, then shape technology around the outcomes that matter.
            </p>
            <p className="text-[13.5px] leading-[1.75] text-muted-foreground">
              Founded to bridge the gap between ambition and technology, we
              support organizations across South Asia and beyond — from
              ambitious startups to established enterprises looking for
              dependable digital execution.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-up">
          <div className="mb-12 grid grid-cols-3 border-y border-border">
            {ABOUT_STATS.map((stat) => (
              <div
                key={stat.label}
                className="relative px-4 py-5 sm:px-6 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:top-[22%] [&:not(:last-child)]:after:h-[56%] [&:not(:last-child)]:after:w-px [&:not(:last-child)]:after:bg-border"
              >
                <div className="font-heading text-[26px] font-extrabold leading-none text-primary md:text-[30px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <div className="mb-4 text-center">
              <h3 className="text-center text-xs font-bold uppercase tracking-widest text-primary">
                Our Core Principles
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 border-y border-border lg:grid-cols-4">
            {CORE_PRINCIPLES.map((principle, idx) => {
              const Icon = getIcon(PRINCIPLE_ICONS[idx]);

              return (
                <ScrollReveal
                  key={principle.title}
                  delay={0.08 * idx}
                  variant="fade-up"
                  className="group border-border p-5 transition-colors hover:bg-muted lg:border-r lg:last:border-r-0 max-lg:odd:border-r max-lg:[&:nth-child(-n+2)]:border-b"
                >
                  <div className="mb-3.5 h-0.5 w-6 bg-primary" />
                  {Icon && (
                    <Icon
                      className="mb-2.5 size-[18px] text-primary"
                      strokeWidth={1.75}
                    />
                  )}
                  <h4 className="mb-1.5 text-[12.5px] font-bold text-foreground">
                    {principle.title}
                  </h4>
                  <p className="text-[11.5px] leading-[1.65] text-muted-foreground">
                    {principle.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Visual Workflow */}
        <ScrollReveal variant="fade-up" className="mt-16">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-primary">
              From Idea to Impact
            </h3>
            <div className="mt-6 flex items-center justify-center gap-1 overflow-x-auto">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary">
                      {idx + 1}
                    </div>
                    <span className="whitespace-nowrap text-xs font-semibold text-accent">
                      {step.label}
                    </span>
                  </div>
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="mx-2 mt-[-1.5rem] size-4 shrink-0 text-primary/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
