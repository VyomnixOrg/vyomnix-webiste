export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface SubService {
  title: string;
  description: string;
  features: string[];
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  subServices: SubService[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface TechCategory {
  category: string;
  technologies: string[];
}

export interface Industry {
  icon: string;
  name: string;
  description: string;
  highlights?: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface VinyasAboutUs {
  title: string;
  description: string;
  projectDelivered: number;
  clientServed: number;
  clientRetention: number;
}

export interface VinyasHeroSection {
  title: string;
  subTitle: string;
  tag?: string;
}

export interface VinyasCtaSection {
  title: string;
  subTitle: string;
}
