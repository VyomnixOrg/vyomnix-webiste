import {
  Code,
  Cpu,
  Megaphone,
  TrendingUp,
  Layers,
  Target,
  Headphones,
  Shield,
  Infinity,
  Users,
  Handshake,
  ShoppingBag,
  Utensils,
  GraduationCap,
  Building2,
  HeartPulse,
  Rocket,
  ShoppingCart,
  Building,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

/**
 * Centralized icon registry.
 * Maps string icon keys to Lucide icon components.
 * Used by data-driven sections (services, industries, why-choose, footer).
 */
const ICON_REGISTRY: Record<string, React.ElementType> = {
  // Services
  code: Code,
  cpu: Cpu,
  megaphone: Megaphone,

  // Why Choose Us
  "trending-up": TrendingUp,
  layers: Layers,
  target: Target,
  headphones: Headphones,
  shield: Shield,
  infinity: Infinity,
  users: Users,
  handshake: Handshake,

  // Industries
  "shopping-bag": ShoppingBag,
  utensils: Utensils,
  "graduation-cap": GraduationCap,
  "building-2": Building2,
  "heart-pulse": HeartPulse,
  rocket: Rocket,
  "shopping-cart": ShoppingCart,
  building: Building,

  // Social
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
};

/**
 * Resolves a string icon key to a Lucide icon component.
 * Returns undefined if the key is not found.
 */
export function getIcon(key: string): React.ElementType | undefined {
  return ICON_REGISTRY[key];
}
