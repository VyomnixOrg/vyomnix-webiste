import type { NavItem, SocialLink } from "@/common/types";

export const SITE_NAME = "Vyomnix";
export const SITE_TAGLINE = "Modern IT & Digital Transformation Solutions";
export const SITE_DESCRIPTION =
  "Vyomnix is a modern IT solutions company delivering robust digital systems, scalable software products, and smart infrastructure to accelerate growth and future-proof your business.";
export const SITE_URL = "https://www.vyomnix.com";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Why Us", href: "#why-us", id: "why-us" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/vyomnix",
    icon: "linkedin",
  },
  {
    label: "Twitter / X",
    href: "https://x.com/vyomnix",
    icon: "twitter",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/vyomnix",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/vyomnix",
    icon: "facebook",
  },
];

export const SERVICE_LINKS: NavItem[] = [
  { label: "Custom Software", href: "#services", id: "services" },
  { label: "Cloud Infrastructure", href: "#services", id: "services" },
  { label: "Mobile Apps", href: "#services", id: "services" },
  { label: "AI Solutions", href: "#services", id: "services" },
  { label: "Smart Hardware", href: "#services", id: "services" },
  { label: "UI/UX Design", href: "#services", id: "services" },
];

export const CONTACT_INFO = {
  email: "hello@vyomnix.com",
  support: "support@vyomnix.com",
  phone: "+977 XXX XXXXXXX",
  address: "Kathmandu, Bagmati Province, Nepal",
} as const;
