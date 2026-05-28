"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "@/common/components/motion";
import { Container } from "@/common/components/ui/container";
import { Button } from "@/common/components/ui/button";
import { NAV_ITEMS, SITE_NAME, CONTACT_INFO, SOCIAL_LINKS } from "@/common/constants/site";
import { useScrolled } from "@/common/hooks/use-scrolled";
import { useBodyScrollLock } from "@/common/hooks/use-body-scroll-lock";
import { useMediaQuery } from "@/common/hooks/use-media-query";
import { cn } from "@/common/utils";
import { getIcon } from "@/lib/icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrolled(10);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useBodyScrollLock(isMenuOpen);

  // Close mobile menu when resized to desktop
  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-accent"
            aria-label={`${SITE_NAME} - Home`}
          >
            <svg
              className="size-6 text-primary transition-transform duration-500 hover:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
              <rect x="15" y="3" width="6" height="6" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="2" />
              <rect x="15" y="15" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
              <rect x="3" y="15" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="2" />
              <path d="M9 6H15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M6 9V15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M18 9V15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
              <path d="M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
            </svg>
            <span>{SITE_NAME}</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button asChild size="sm">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="relative z-50 flex items-center justify-center rounded-md p-2 text-accent transition-colors hover:bg-muted md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 flex flex-col bg-background/98 p-6 pt-24 backdrop-blur-md md:hidden"
          >
            {/* Nav Links */}
            <div className="flex flex-col gap-5 px-4">
              {NAV_ITEMS.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-heading text-2xl font-medium text-accent transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: NAV_ITEMS.length * 0.05,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Button asChild size="lg" className="mt-4 w-full justify-center">
                  <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-border" />

            {/* Bottom Contact Details */}
            <div className="mt-auto px-4 pb-8 space-y-6">
              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="size-4 text-primary" />
                  {CONTACT_INFO.email}
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="size-4 text-primary" />
                  {CONTACT_INFO.phone}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = getIcon(social.icon);
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary transition-colors hover:bg-primary hover:text-white"
                      aria-label={social.label}
                    >
                      {Icon && <Icon className="size-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
