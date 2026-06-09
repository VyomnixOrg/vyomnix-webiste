"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { Button } from "@/common/components/ui/button";
import { staggerContainer, staggerChild } from "@/lib/animations";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const STATS_DATA = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 24, suffix: "/7", label: "Support Coverage" },
];

const TRUST_ITEMS = [
  "Agile Development",
  "Enterprise Security",
  "Scalable Architecture",
  "Dedicated Support",
];

const DASHBOARD_PANELS = [
  {
    id: "dashboard",
    label: "Dashboard",
    content: (
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded bg-primary/20" />
          <div className="h-3 w-16 rounded bg-primary/30" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[60, 40, 80].map((w, i) => (
            <div key={i} className="rounded-lg bg-secondary/60 p-3">
              <div className="h-2 w-12 rounded bg-muted-foreground/20" />
              <div className="mt-2 text-lg font-bold text-primary">{w}%</div>
            </div>
          ))}
        </div>
        <div className="mt-2 h-20 rounded-lg bg-secondary/40">
          <div className="flex h-full items-end gap-1 px-3 pb-3">
            {[30, 55, 40, 70, 45, 80, 60, 75, 50, 65, 85, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-primary/40"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    label: "Analytics",
    content: (
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-4">
          <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary font-bold text-sm">A</div>
          <div className="flex-1">
            <div className="h-2.5 w-40 rounded bg-muted-foreground/20" />
            <div className="mt-1 h-2 w-24 rounded bg-muted-foreground/10" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border/50 p-3">
            <div className="h-2 w-16 rounded bg-muted-foreground/20" />
            <div className="mt-1 text-lg font-bold text-accent">12.4k</div>
            <div className="mt-0.5 h-1.5 w-12 rounded bg-green-400/60" />
          </div>
          <div className="rounded-lg border border-border/50 p-3">
            <div className="h-2 w-16 rounded bg-muted-foreground/20" />
            <div className="mt-1 text-lg font-bold text-accent">8.2k</div>
            <div className="mt-0.5 h-1.5 w-8 rounded bg-primary/60" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "crm",
    label: "CRM",
    content: (
      <div className="space-y-2 p-4">
        <div className="flex items-center gap-2 text-sm font-medium text-accent">
          <div className="size-2 rounded-full bg-green-400" />
          Active Deals
        </div>
        {["Enterprise Suite", "Retail Platform", "AI Analytics"].map((item, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-secondary/40 p-2.5">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary/20 text-xs font-bold text-primary">
              {i + 1}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-accent">{item}</div>
              <div className="h-1.5 w-full rounded-full bg-border">
                <div
                  className="h-1.5 rounded-full bg-primary"
                  style={{ width: `${60 + i * 15}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "inventory",
    label: "Inventory",
    content: (
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Stock Health</span>
          <span className="font-medium text-green-500">98%</span>
        </div>
        <div className="space-y-2">
          {["Electronics", "Furniture", "Clothing"].map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <div className="h-2 w-20 rounded bg-muted-foreground/20">
                <div className="h-2 rounded bg-primary/60" style={{ width: `${70 + Math.random() * 30}%` }} />
              </div>
              <span className="text-xs text-muted-foreground">{cat}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["234", "89", "156"].map((n, i) => (
            <div key={i} className="rounded-md bg-secondary/50 p-2 text-center">
              <div className="text-sm font-bold text-accent">{n}</div>
              <div className="text-[10px] text-muted-foreground">Units</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ai-insights",
    label: "AI Insights",
    content: (
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-full bg-primary/20">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
          </div>
          <span className="text-xs font-medium text-accent">Predictive Analysis</span>
        </div>
        <div className="rounded-lg border border-primary/20 bg-secondary/30 p-3">
          <div className="flex items-center gap-2">
            <div className="size-2 rounded-full bg-amber-400" />
            <span className="text-xs text-muted-foreground">Revenue forecast next quarter</span>
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-xl font-bold text-accent">+23.5%</span>
            <span className="text-xs text-green-500">↑</span>
          </div>
        </div>
        <div className="flex gap-2">
          {["ML", "NLP", "OCR"].map((tag) => (
            <span key={tag} className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export function HeroSection() {
  const [activePanel, setActivePanel] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % DASHBOARD_PANELS.length);
    }, 3000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-background pt-20 md:pt-24"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(85,188,188,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(85,188,188,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(85,188,188,0.15),rgba(255,255,255,0))]" />
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/60 blur-3xl" />
      </div>

      <Container className="relative z-10 py-12 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.div variants={staggerChild}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Nepal&apos;s Premier Software Consultancy
              </span>
            </motion.div>

            <motion.h1
              variants={staggerChild}
              className="mt-6 text-[2.5rem] font-bold leading-[1.1] tracking-tight text-accent sm:text-5xl md:text-6xl lg:text-[3.5rem]"
            >
              We Build Software
              <br />
              That Moves
              <br />
              <span className="bg-gradient-to-r from-primary to-[#3ea9a9] bg-clip-text text-transparent">
                Businesses Forward
              </span>
            </motion.h1>

            <motion.p
              variants={staggerChild}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              From concept to deployment — we engineer custom software, cloud infrastructure, 
              and AI-powered systems that accelerate growth and operational efficiency.
            </motion.p>

            <motion.div
              variants={staggerChild}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="shadow-md">
                <Link href="#contact">
                  Book a Consultation
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm">
                <Link href="#services">View Our Services</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={staggerChild}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Check className="size-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Browser Mockup */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="hidden lg:block"
          >
            <motion.div
              variants={staggerChild}
              className="overflow-hidden rounded-xl border border-border bg-white shadow-lg"
            >
              <div className="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-2.5">
                <div className="size-2.5 rounded-full bg-red-400" />
                <div className="size-2.5 rounded-full bg-amber-400" />
                <div className="size-2.5 rounded-full bg-green-400" />
                <div className="ml-4 flex-1 rounded-md bg-white/80 px-3 py-1 text-xs text-muted-foreground border border-border/50">
                  app.vyomnix.com/dashboard
                </div>
              </div>

              <div className="flex min-h-[300px]">
                <div className="w-40 shrink-0 border-r border-border/50 bg-muted/20 p-2">
                  {DASHBOARD_PANELS.map((panel, idx) => (
                    <button
                      key={panel.id}
                      onClick={() => { clearInterval(intervalRef.current!); setActivePanel(idx); }}
                      className={`w-full rounded-md px-3 py-2 text-left text-xs font-medium transition-colors cursor-pointer ${
                        idx === activePanel
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-accent"
                      }`}
                    >
                      {panel.label}
                    </button>
                  ))}
                </div>
                <div className="flex-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePanel}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.25 }}
                      className="min-h-[300px]"
                    >
                      {DASHBOARD_PANELS[activePanel].content}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <div className="grid grid-cols-2 gap-px rounded-2xl border border-border bg-border shadow-sm overflow-hidden md:grid-cols-4">
            {STATS_DATA.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-white px-6 py-6"
              >
                <span className="text-2xl font-bold text-primary md:text-3xl">
                  {statsInView ? (
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </span>
                <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
