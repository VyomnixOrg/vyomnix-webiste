"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Send, Loader2, Check } from "lucide-react";
import { motion, AnimatePresence } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { Button } from "@/common/components/ui/button";
import { FormField, FormTextarea } from "@/common/components/ui/form-field";
import { ScrollReveal } from "@/common/components/motion";
import { CONTACT_INFO } from "@/common/constants/site";

const CONTACT_DETAILS = [
  { icon: Mail, label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  { icon: Phone, label: "Phone", value: "+977 1 4545678", href: "tel:+97714545678" },
  { icon: MapPin, label: "Office", value: CONTACT_INFO.address, href: null },
  { icon: Calendar, label: "Schedule a Meeting", value: "Book a call with our team", href: "#" },
] as const;

const NEXT_STEPS = [
  "We review your inquiry",
  "We schedule a discussion",
  "We provide recommendations",
  "We prepare a proposal",
];

const PROJECT_TYPES = ["Select project type", "Custom Software", "Mobile App", "Website", "Cloud Infrastructure", "AI Solution", "Digital Marketing", "Other"];
const BUDGET_RANGES = ["Select budget range", "Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+"];

export function ContactSection() {
  const [formValues, setFormValues] = useState({
    name: "", email: "", company: "", projectType: "", budgetRange: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.name.trim() || formValues.name.trim().length < 2) newErrors.name = "Name is required";
    if (!formValues.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim()))
      newErrors.email = "Valid email is required";
    if (!formValues.message.trim() || formValues.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormValues({ name: "", email: "", company: "", projectType: "", budgetRange: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28" aria-label="Contact Us">
      <Container>
        <SectionHeading
          label="Contact"
          title="Let's Start a Conversation"
          description="Tell us about your project — we'll review your inquiry and get back to you within one business day."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact Hub */}
          <ScrollReveal variant="directional">
            <div className="space-y-5">
              {CONTACT_DETAILS.map((detail) => {
                const Icon = detail.icon;
                const content = (
                  <div
                    key={detail.label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-muted/50 p-5 transition-all hover:shadow-sm hover:border-primary/20"
                  >
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {detail.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-accent">{detail.value}</p>
                    </div>
                  </div>
                );
                return detail.href ? (
                  <a key={detail.label} href={detail.href} className="block group">
                    {content}
                  </a>
                ) : (
                  <div key={detail.label}>{content}</div>
                );
              })}
            </div>

            {/* What Happens Next */}
            <div className="mt-10 rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
              <h3 className="text-sm font-bold text-accent">What Happens Next?</h3>
              <ol className="mt-4 space-y-3">
                {NEXT_STEPS.map((step, idx) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>

          {/* Right: Premium Form */}
          <ScrollReveal variant="fade-scale">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-white to-secondary/10 p-6 shadow-sm md:p-8 min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 250, damping: 22, delay: 0.1 }}
                      className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary shadow-sm"
                    >
                      <Check className="size-8" />
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mt-6 font-heading text-xl font-bold text-accent"
                    >
                      Thank You!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground"
                    >
                      Our team will contact you within one business day to discuss your project and requirements.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-hover underline underline-offset-4 cursor-pointer"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        id="contact-name"
                        label="Full Name"
                        name="name"
                        required
                        placeholder="Your name"
                        value={formValues.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <FormField
                        id="contact-email"
                        label="Email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formValues.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                    </div>

                    <FormField
                      id="contact-company"
                      label="Company"
                      name="company"
                      placeholder="Your company (optional)"
                      value={formValues.company}
                      onChange={handleChange}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="flex flex-col">
                        <label htmlFor="contact-project-type" className="mb-1.5 block text-sm font-medium text-accent">
                          Project Type
                        </label>
                        <select
                          id="contact-project-type"
                          name="projectType"
                          value={formValues.projectType}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t === "Select project type" ? "" : t} disabled={t === "Select project type"}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex flex-col">
                        <label htmlFor="contact-budget" className="mb-1.5 block text-sm font-medium text-accent">
                          Budget Range
                        </label>
                        <select
                          id="contact-budget"
                          name="budgetRange"
                          value={formValues.budgetRange}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          {BUDGET_RANGES.map((r) => (
                            <option key={r} value={r === "Select budget range" ? "" : r} disabled={r === "Select budget range"}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <FormTextarea
                      id="contact-message"
                      label="Message"
                      name="message"
                      required
                      placeholder="Tell us about your project..."
                      value={formValues.message}
                      onChange={handleChange}
                      error={errors.message}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto shadow-sm"
                    >
                      {isSubmitting ? (
                        <>
                          Sending...
                          <Loader2 className="ml-1 size-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-1 size-4" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
