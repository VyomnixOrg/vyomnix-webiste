"use client";

import { ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { Button } from "@/common/components/ui/button";
import { useScrollTo } from "@/common/hooks/use-scroll-to";
import { VinyasCtaSection } from "@/common/types";

interface CTASectionProps {
  content: VinyasCtaSection;
}

export function CtaSection({ content }: CTASectionProps) {
  const scrollTo = useScrollTo();

  return (
    <section
      className="bg-secondary py-20 md:py-28"
      aria-label="Call to action"
    >
      <Container>
        <ScrollReveal
          variant="fade-scale"
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-accent md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.subTitle}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              type="button"
              className="shadow-md"
              onClick={() => scrollTo("contact")}
            >
              Book a Consultation
              <ArrowRight className="ml-1 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              type="button"
              className="border-primary/20 bg-white/40 hover:bg-white/60"
              onClick={() => scrollTo("services")}
            >
              Get a Proposal
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" />
            <span>
              Response within <strong className="text-accent">24 hours</strong>
            </span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
