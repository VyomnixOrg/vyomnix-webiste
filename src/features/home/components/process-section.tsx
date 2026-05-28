import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { MotionStaggerGroup } from "@/common/components/motion";
import { PROCESS_STEPS } from "@/features/home/data/process-steps";
import { ProcessStepCard } from "./process-step-card";

export function ProcessSection() {
  return (
    <section id="process" className="bg-background py-20 md:py-28" aria-label="Our Process">
      <Container>
        <SectionHeading
          label="Our Process"
          title="How We Work"
          description="Our structured delivery process ensures every project is planned carefully, executed with precision, and supported after launch."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          {/* Central Vertical Connector Line */}
          <div
            className="absolute left-6 md:left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-border"
            aria-hidden="true"
          />

          <MotionStaggerGroup className="relative space-y-12 md:space-y-16">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStepCard
                key={step.step}
                step={step}
                index={index}
              />
            ))}
          </MotionStaggerGroup>
        </div>
      </Container>
    </section>
  );
}
