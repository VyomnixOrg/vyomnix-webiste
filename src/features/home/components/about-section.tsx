import { Eye, Crosshair } from "lucide-react";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { ScrollReveal } from "@/common/components/motion";
import { DELIVERY_PRINCIPLES } from "@/features/home/data/delivery-principles";

export function AboutSection() {
  return (
    <section id="about" className="bg-muted py-20 md:py-28" aria-label="About Vyomnix">
      <Container>
        <SectionHeading
          label="About Us"
          title="Empowering Businesses Through Technology"
          description="Vyomnix is a modern IT solutions company dedicated to empowering businesses through technology. We deliver end-to-end technology solutions designed to accelerate growth, streamline operations, and future-proof your business."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {/* Mission Card */}
          <ScrollReveal
            delay={0.1}
            className="group rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-md md:p-10"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Crosshair className="size-6" />
            </div>
            <h3 className="text-xl font-semibold text-accent">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To deliver reliable, scalable, and innovative technology solutions that
              help businesses of all sizes achieve their digital goals with confidence
              and clarity.
            </p>
          </ScrollReveal>

          {/* Vision Card */}
          <ScrollReveal
            delay={0.2}
            className="group rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-md md:p-10"
          >
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Eye className="size-6" />
            </div>
            <h3 className="text-xl font-semibold text-accent">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              To be the leading IT partner for businesses across South Asia, recognized
              for excellence, trustworthiness, and transformative digital solutions.
            </p>
          </ScrollReveal>
        </div>

        {/* Delivery Principles */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {DELIVERY_PRINCIPLES.map((principle, idx) => (
            <ScrollReveal
              key={principle.title}
              delay={0.1 + idx * 0.08}
              className="rounded-xl border border-border bg-white p-5 text-center transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
            >
              <h4 className="text-sm font-semibold text-accent">{principle.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
