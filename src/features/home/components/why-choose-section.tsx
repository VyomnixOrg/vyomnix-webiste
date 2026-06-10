"use client";

import { Container } from "@/common/components/ui/container";
import { ScrollReveal } from "@/common/components/motion";
import { WHY_CHOOSE_ITEMS } from "@/features/home/data/why-choose";

const WHY_STATS = [
  { value: "100+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "95%", label: "Retention" },
];

export function WhyChooseSection() {
  return (
    <section id="why-us" className="bg-muted py-16 md:py-20" aria-label="Why Choose Us">
      <Container>
        <ScrollReveal>
          <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
            Why Choose Us
          </span>
          <h2 className="mt-1.5 text-2xl font-bold leading-[1.15] tracking-tight text-foreground md:text-[26px]">
            Why Businesses Choose Vyomnix
          </h2>
          <p className="mt-2 max-w-[400px] text-[13.5px] leading-[1.7] text-muted-foreground">
            We are more than a vendor — we are a technology partner committed to your long-term success. Here&apos;s what sets us apart.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <div className="mt-6 grid grid-cols-3 border-y border-border">
            {WHY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="relative py-3 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:top-[20%] [&:not(:last-child)]:after:h-[60%] [&:not(:last-child)]:after:w-px [&:not(:last-child)]:after:bg-border"
              >
                <div className="font-heading text-[22px] font-extrabold leading-none text-primary">
                  {stat.value}
                </div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 flex flex-col gap-2.5">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <ScrollReveal
              key={item.number}
              delay={0.08 * idx}
              variant="fade-up"
              className="group cursor-pointer rounded-lg border border-border border-l-[3px] border-l-transparent bg-white px-7 py-5 transition-all duration-200 hover:translate-x-[3px] hover:border-l-primary hover:shadow-[0_4px_20px_rgba(85,188,188,0.09)]"
            >
              <div className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.12em] text-primary">
                {item.number}
              </div>
              <h3 className="mb-1.5 text-[14.5px] font-bold text-foreground">
                {item.title}
              </h3>
              <div className="mb-2.5 h-0.5 w-[22px] bg-primary" />
              <p className="text-[12.5px] leading-[1.65] text-muted-foreground">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
