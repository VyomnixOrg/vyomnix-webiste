import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ScrollReveal } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { Button } from "@/common/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-secondary py-20 md:py-28" aria-label="Call to action">
      <Container>
        <ScrollReveal variant="fade-scale" className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-accent md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Ready to Build Something Great?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Let&apos;s discuss your project, requirements, and business goals. 
            Our team responds within one business day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="shadow-md">
              <Link href="#contact">
                Book a Consultation
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/40 border-primary/20 hover:bg-white/60">
              <Link href="#services">Get a Proposal</Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" />
            <span>Response within <strong className="text-accent">24 hours</strong></span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
