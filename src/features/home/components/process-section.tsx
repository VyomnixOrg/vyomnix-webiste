"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { PROCESS_STEPS } from "@/features/home/data/process-steps";

function ProcessStepCard({
  step,
  isLast,
}: {
  step: { step: number; title: string; description: string };
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Left: Step number + connector */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, backgroundColor: "rgb(219, 228, 230)" }}
          animate={
            inView ? { scale: 1, backgroundColor: "rgb(27, 79, 216)" } : {}
          }
          transition={{
            duration: 0.4,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
        >
          {step.step}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mt-2 w-px bg-border"
          />
        )}
      </div>

      {/* Right: Content */}
      <div className="pb-12 md:pb-16">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-lg font-semibold text-accent md:text-xl">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground max-w-lg">
            {step.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-background py-20 md:py-28"
      aria-label="Our Process"
    >
      <Container>
        <SectionHeading
          label="Our Process"
          title="How We Deliver"
          description="A structured, transparent delivery process that takes your project from concept to growth — with clear milestones at every stage."
        />

        <div className="mx-auto mt-14 max-w-2xl">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepCard
              key={step.step}
              step={step}
              isLast={index === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
