import type { Variants } from "framer-motion";

/**
 * Smooth ease-out curve for premium feel.
 * Avoids bouncy/springy defaults.
 */
const EASE_OUT: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

/**
 * Fade up — default section/element entrance animation.
 * Opacity 0→1, translateY 24→0.
 */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

/**
 * Fade in — simple opacity transition.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
};

/**
 * Stagger container — parent that staggers children animations.
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger child — individual item animated within a stagger container.
 */
export const staggerChild: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
};

/**
 * Scale on hover — subtle card hover effect.
 * Use with whileHover on motion elements.
 */
export const scaleOnHover = {
  scale: 1.02,
  transition: { duration: 0.2, ease: EASE_OUT },
};

/**
 * Default viewport config for scroll-triggered animations.
 * Triggers once when 20% of element is visible.
 */
export const viewportConfig = {
  once: true,
  amount: 0.2,
} as const;
