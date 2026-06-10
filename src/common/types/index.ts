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
