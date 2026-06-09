"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { ScrollReveal } from "@/common/components/motion";
import { CORE_PRINCIPLES } from "@/features/home/data/core-principles";
import { getIcon } from "@/lib/icons";

const WORKFLOW_STEPS = [
  { label: "Idea", icon: "lightbulb" },
  { label: "Strategy", icon: "target" },
  { label: "Design", icon: "palette" },
  { label: "Development", icon: "code" },
  { label: "Growth", icon: "trending-up" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-muted py-20 md:py-28" aria-label="About Vyomnix">
      <Container>
        <SectionHeading
          label="About Us"
          title="Your Technology Partner for the Long Run"
          description="We are a team of engineers, designers, and strategists who believe great technology should solve real business problems — not just look good in a demo."
        />

        {/* Who We Are */}
        <ScrollReveal variant="fade-blur">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-8 md:p-12">
            <p className="text-lg leading-relaxed text-accent md:text-xl">
              Vyomnix is a technology consultancy that partners with businesses to build 
              custom software, cloud infrastructure, and AI-powered systems. We don&apos;t 
              believe in one-size-fits-all solutions — every project starts with understanding 
              your unique challenges and business context.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Founded in Nepal, we work with organizations across South Asia and beyond — 
              from ambitious startups to established enterprises — helping them leverage 
              technology as a competitive advantage.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Principles */}
        <div className="mt-14">
          <ScrollReveal>
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-primary">
              Our Core Principles
            </h3>
          </ScrollReveal>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PRINCIPLES.map((principle, idx) => {
              const Icon = getIcon(principle.icon);
              return (
                <ScrollReveal
                  key={principle.title}
                  delay={0.08 * idx}
                  variant="fade-scale"
                  className="group rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-md hover:border-primary/20"
                >
                  <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {Icon && <Icon className="size-5" />}
                  </div>
                  <h4 className="text-base font-semibold text-accent">{principle.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
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
                    <span className="whitespace-nowrap text-xs font-semibold text-accent">{step.label}</span>
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
