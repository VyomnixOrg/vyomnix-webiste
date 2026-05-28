"use client";

import Link from "next/link";
import { ArrowRight, Cpu, Code, Cloud } from "lucide-react";
import { motion } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { Button } from "@/common/components/ui/button";
import { fadeUp, staggerContainer, staggerChild, viewportConfig } from "@/lib/animations";
import { STATS } from "@/features/home/data/stats";
import { cn } from "@/common/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20 md:pt-24"
      aria-label="Hero"
    >
      {/* Premium background grid & gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(85,188,188,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(85,188,188,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Soft Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(85,188,188,0.12),rgba(255,255,255,0))]" />
        
        {/* Glowing Blobs */}
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-secondary blur-3xl" />
        <div className="absolute top-[30%] left-[30%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl" />

        {/* Floating Glassmorphic Cards (Decorative nodes) */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[28%] left-[6%] hidden lg:flex items-center gap-3 rounded-xl border border-primary/20 bg-white/80 p-4 shadow-sm backdrop-blur-md"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
            <Cpu className="size-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-accent">IoT Automation</p>
            <p className="text-[10px] font-medium text-muted-foreground">Smart Systems</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[48%] right-[6%] hidden lg:flex items-center gap-3 rounded-xl border border-primary/20 bg-white/80 p-4 shadow-sm backdrop-blur-md"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
            <Code className="size-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-accent">Custom Software</p>
            <p className="text-[10px] font-medium text-muted-foreground">Web & Mobile Apps</p>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[18%] right-[16%] hidden lg:flex items-center gap-3 rounded-xl border border-primary/20 bg-white/80 p-4 shadow-sm backdrop-blur-md"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
            <Cloud className="size-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-accent">Cloud & SaaS</p>
            <p className="text-[10px] font-medium text-muted-foreground">AWS / GCP / Azure</p>
          </div>
        </motion.div>
      </div>

      <Container className="relative z-10 py-16 md:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}
          <motion.div variants={staggerChild}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Modern IT & Digital Transformation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerChild}
            className="mt-8 text-4xl font-bold leading-tight tracking-tight text-accent sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Building Digital
            <br />
            <span className="text-primary bg-gradient-to-r from-primary to-[#3ea9a9] bg-clip-text text-transparent">Solutions</span> That
            <br />
            Drive Growth
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={staggerChild}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            We build robust digital systems, scalable software products, and smart
            infrastructure that help organizations operate efficiently in today&apos;s
            competitive landscape.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerChild}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="shadow-md">
              <Link href="#services">
                Explore Services
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto mt-20 max-w-3xl"
        >
          <div className="grid grid-cols-2 gap-px rounded-2xl border border-border bg-border shadow-sm overflow-hidden md:grid-cols-4">
            {STATS.map((stat, index) => {
              const roundingClasses = 
                index === 0 ? "rounded-tl-2xl md:rounded-l-2xl md:rounded-tr-none" :
                index === 1 ? "rounded-tr-2xl md:rounded-none" :
                index === 2 ? "rounded-bl-2xl md:rounded-none" :
                "rounded-br-2xl md:rounded-r-2xl md:rounded-bl-none";

              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -2, backgroundColor: "var(--secondary)", transition: { duration: 0.15 } }}
                  className={cn(
                    "flex flex-col items-center justify-center bg-white px-6 py-6 transition-colors duration-150",
                    roundingClasses
                  )}
                >
                  <span className="text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
