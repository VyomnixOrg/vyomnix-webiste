"use client";

import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/common/components/ui/container";
import { useScrollTo } from "@/common/hooks/use-scroll-to";
import { getIcon } from "@/lib/icons";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  NAV_ITEMS,
  SOCIAL_LINKS,
  CONTACT_INFO,
  SERVICE_LINKS,
} from "@/common/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollTo = useScrollTo();

  return (
    <footer className="border-t border-white/10 bg-accent text-white" role="contentinfo">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-white hover:text-primary transition-colors"
            >
              <svg
                className="size-6 text-primary"
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
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {SITE_TAGLINE}
            </p>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-primary"
            >
              <Globe className="size-3.5" />
              <span>www.vyomnix.com</span>
            </a>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-lg bg-white/5 text-white/60 transition-all hover:bg-primary hover:text-white"
                  >
                    {Icon && <Icon className="size-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
              Services
            </h3>
            <ul className="space-y-2.5" role="list">
              {SERVICE_LINKS.map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-white/60 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 shrink-0 text-primary/80" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href="tel:+97714545678"
                  className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary/80" />
                  +977 1 4545678
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary/80" />
                {CONTACT_INFO.address}
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Copyright Bar */}
      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-xs text-white/40">
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
