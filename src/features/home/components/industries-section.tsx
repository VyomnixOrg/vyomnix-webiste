import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { MotionStaggerGroup } from "@/common/components/motion";
import { INDUSTRIES } from "@/features/home/data/industries";
import { IndustryCard } from "./industry-card";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-background py-20 md:py-28" aria-label="Industries We Serve">
      <Container>
        <SectionHeading
          label="Industries"
          title="Industries We Serve"
          description="We've built solutions across a broad range of industries, adapting our technology stack and methodologies to the unique requirements of each sector."
        />

        <MotionStaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </MotionStaggerGroup>
      </Container>
    </section>
  );
}
