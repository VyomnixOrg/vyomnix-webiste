import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { MotionStaggerGroup } from "@/common/components/motion";
import { WHY_CHOOSE_ITEMS } from "@/features/home/data/why-choose";
import { WhyChooseCard } from "./why-choose-card";

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-muted py-20 md:py-28" aria-label="Why Choose Us">
      <Container>
        <SectionHeading
          label="Why Choose Us"
          title="Your Long-term Technology Partner"
          description="We are more than a vendor — we are a technology partner committed to your success. Here's what sets Vyomnix apart."
        />

        <MotionStaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
        </MotionStaggerGroup>
      </Container>
    </section>
  );
}
