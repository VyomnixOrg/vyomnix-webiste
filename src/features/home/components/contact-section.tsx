"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { SectionHeading } from "@/common/components/ui/section-heading";
import { Button } from "@/common/components/ui/button";
import { FormField, FormTextarea } from "@/common/components/ui/form-field";
import { MotionStaggerGroup } from "@/common/components/motion";
import { fadeUp, staggerChild, viewportConfig } from "@/lib/animations";
import { CONTACT_INFO } from "@/common/constants/site";

const CONTACT_DETAILS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 1 4545678",
    href: "tel:+97714545678",
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_INFO.address,
    href: null,
  },
] as const;

export function ContactSection() {
  const [formValues, setFormValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formValues.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formValues.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formValues.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formValues.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formValues.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

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
      setFormValues({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28" aria-label="Contact Us">
      <Container>
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Ready to start your next project or explore how Vyomnix can support your business? Reach out — we respond within one business day."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info Details Column */}
          <MotionStaggerGroup className="space-y-6 lg:col-span-2">
            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <motion.div
                  key={detail.label}
                  variants={staggerChild}
                  className="flex items-start gap-4 rounded-xl border border-border bg-muted p-5 transition-shadow hover:shadow-sm"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {detail.value}
                    </p>
                  </div>
                </motion.div>
              );

              if (detail.href) {
                return (
                  <a key={detail.label} href={detail.href} className="block group">
                    {content}
                  </a>
                );
              }
              return <div key={detail.label}>{content}</div>;
            })}

            {/* Support info */}
            <motion.div variants={staggerChild} className="pt-2">
              <p className="text-sm text-muted-foreground">
                For support inquiries:{" "}
                <a
                  href={`mailto:${CONTACT_INFO.support}`}
                  className="font-medium text-primary transition-colors hover:text-primary-hover underline underline-offset-4"
                >
                  {CONTACT_INFO.support}
                </a>
              </p>
            </motion.div>
          </MotionStaggerGroup>

          {/* Contact Form Column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border bg-muted p-6 md:p-8 min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center py-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
                      className="flex size-16 items-center justify-center rounded-full bg-secondary text-primary shadow-sm"
                    >
                      <svg
                        className="size-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3.5"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 font-heading text-xl font-bold text-accent"
                    >
                      Message Sent Successfully!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground"
                    >
                      Thank you for reaching out to Vyomnix. Our team will get back to you within one business day.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
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
                        label="Email Address"
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
                      id="contact-subject"
                      label="Subject"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      value={formValues.subject}
                      onChange={handleChange}
                      error={errors.subject}
                    />

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

                    {/* Submit Button */}
                    <div className="pt-2">
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
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
