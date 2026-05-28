import * as React from "react";
import { cn } from "@/common/utils";

interface TechIconProps extends React.ComponentProps<"svg"> {
  name: string;
}

/**
 * Registry of high-fidelity, pixel-perfect technology vector SVG icons.
 * Provides consistent stroke styles and grayscale-to-color hover transition compatibility.
 */
const SVG_REGISTRY: Record<string, { viewBox: string; path: React.ReactNode }> = {
  react: {
    viewBox: "0 0 24 24",
    path: (
      <>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path
          d="M12 3C17.5228 3 22 7.02944 22 12C22 16.9706 17.5228 21 12 21C6.47715 21 2 16.9706 2 12C2 7.02944 6.47715 3 12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 3C17.5228 3 22 7.02944 22 12C22 16.9706 17.5228 21 12 21C6.47715 21 2 16.9706 2 12C2 7.02944 6.47715 3 12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          transform="rotate(60 12 12)"
        />
        <path
          d="M12 3C17.5228 3 22 7.02944 22 12C22 16.9706 17.5228 21 12 21C6.47715 21 2 16.9706 2 12C2 7.02944 6.47715 3 12 3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          transform="rotate(120 12 12)"
        />
      </>
    ),
  },
  nextjs: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.5 8.5V15.5M15.5 10.5L9.5 15.5V8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  vuejs: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M2 3L12 20L22 3H17.5L12 12.5L6.5 3H2ZM7.5 3L12 11L16.5 3H12.5L12 4L11.5 3H7.5Z"
        fill="currentColor"
      />
    ),
  },
  typescript: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M3 3H21V21H3V3ZM12.5 8.5H7.5V10.5H10V15.5H12.5V8.5ZM16.5 11.5C16.5 10 15 10 14 10.5V12.5C15 13 16.5 13 16.5 14.5C16.5 16 14.5 16 13.5 15V13.5M13.5 8.5V9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  tailwindcss: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 6C8.5 6 6 8.5 6 12C6 13.5 6.5 14 8 14C9.5 14 10 14.5 10 16C10 17.5 7.5 18 6 18M12 18C15.5 18 18 15.5 18 12C18 10.5 17.5 10 16 10C14.5 10 14 9.5 14 8C14 6.5 16.5 6 18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  nodejs: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2L4 7V17L12 22L20 17V7L12 2ZM12 6.5L16 9V14L12 16.5L8 14V9L12 6.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  python: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2C8 2 8 3.5 8 5V7H12V8.5H6.5C5 8.5 4 9.5 4 11.5C4 13.5 5 14.5 6.5 14.5H8V16C8 17.5 9.5 19 11.5 19H13C16.5 19 16.5 17.5 16.5 17.5V15.5H12V14H17.5C19 14 20 13 20 11.5C20 10 19 8.5 17.5 8.5H16.5V7C16.5 5.5 15.5 2 12 2ZM9.5 5.5A0.75 0.75 0 1 1 9.5 4.5A0.75 0.75 0 0 1 9.5 5.5ZM14.5 17.5A0.75 0.75 0 1 1 14.5 16.5A0.75 0.75 0 0 1 14.5 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    ),
  },
  laravel: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M4 4L12 2L20 4V10L12 14L4 10V4ZM4 10L12 12L20 10M12 14V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  django: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M6 4V16M6 10H14M14 4V16M18 4H20M19 4V16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  fastapi: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        fill="currentColor"
      />
    ),
  },
  flutter: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M14.2 2L6 10.2L12 16.2L20.2 8L14.2 2ZM20.2 13.8L16.2 17.8L12.2 13.8H20.2ZM12.2 22H20.2L16.2 18L12.2 22Z"
        fill="currentColor"
      />
    ),
  },
  reactnative: {
    viewBox: "0 0 24 24",
    path: (
      <>
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.8" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.8" fill="none" transform="rotate(120 12 12)" />
      </>
    ),
  },
  kotlin: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M3 3H21L12 12L21 21H3V3Z"
        fill="currentColor"
      />
    ),
  },
  swift: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M2 19C7 19 14 17 18 11C20.5 7 19 4 18 3C18.5 5 18 7.5 15.5 10C12 13.5 7 15 2 12C5.5 14.5 9 14.5 12.5 13.5C8 16 4.5 17 2 19Z"
        fill="currentColor"
      />
    ),
  },
  postgresql: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2C8 2 6 4 6 7.5C6 11 9 12 9 13.5C9 15 7.5 16 6.5 16.5M12 2C16 2 18 4 18 7.5C18 11 15 12 15 13.5C15 15 16.5 16 17.5 16.5M9 13.5H15M6.5 16.5L12 22L17.5 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  mysql: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M4 6V18C4 20.2 7.6 22 12 22C16.4 22 20 20.2 20 18V6M4 6C4 8.2 7.6 10 12 10C16.4 10 20 8.2 20 6M4 6C4 3.8 7.6 2 12 2C16.4 2 20 3.8 20 6M4 12C4 14.2 7.6 16 12 16C16.4 16 20 14.2 20 12"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    ),
  },
  mongodb: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2C12 2 6 7 6 12C6 16 9.5 20.5 12 22C14.5 20.5 18 16 18 12C18 7 12 2 12 2ZM12 5V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  redis: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2L3 7L12 12L21 7L12 2ZM3 12L12 17L21 12M3 17L12 22L21 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  firebase: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M3.89 15.5L12 2L13.85 4.58M12 22L20.22 7.2L12 2.5V22ZM12 22L3.89 15.5L6.47 17.5L12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  aws: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M4 14C6 16.5 10 18 12 18C15 18 18 16 20 14.5M12 8C8.5 8 6 10 6 12M12 8C15.5 8 18 10 18 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  googlecloud: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2ZM12 7.5L16.8 10.3V15.7L12 18.5L7.2 15.7V10.3L12 7.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  azure: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M2.5 18.5L10 3H14.5L5.5 21H2.5ZM9 12L15 21H21.5L11.5 6L9 12Z"
        fill="currentColor"
      />
    ),
  },
  vercel: {
    viewBox: "0 0 24 24",
    path: <path d="M12 2L22 19.5H2L12 2Z" fill="currentColor" />,
  },
  digitalocean: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12H16C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8V2Z"
        fill="currentColor"
      />
    ),
  },
  docker: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M2 12.5H22M6 8.5H18M9.5 4.5H14.5M16 16.5C16 18.7 14.2 20.5 12 20.5C9.8 20.5 8 18.7 8 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  kubernetes: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2ZM12 6.5L16.7634 9.25V14.75L12 17.5L7.23665 14.75V9.25L12 6.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  githubactions: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M5 8.5C5 6.5 6.5 5 8.5 5H15.5C17.5 5 19 6.5 19 8.5V15.5C19 17.5 17.5 19 15.5 19H8.5C6.5 19 5 17.5 5 15.5V8.5ZM9 12H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  nginx: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M3 3L12 7.5L21 3V21L12 16.5L3 21V3ZM12 7.5V16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  terraform: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M4 4H10V10H4V4ZM14 4H20V10H14V4ZM9 14H15V20H9V14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  openai: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 10C12.5 7.5 14.5 6 16.5 6.5C18.5 7 19.5 9 19 11C17.5 11.5 15.5 11 14.5 10M12 14C11.5 16.5 9.5 18 7.5 17.5C5.5 17 4.5 15 5 13C6.5 12.5 8.5 13 9.5 14M10 12C8 11.5 6.5 9.5 7 7.5C7.5 5.5 9.5 4.5 11.5 5C12 6.5 11.5 8.5 10 10.5M14 12C16 12.5 17.5 14.5 17 16.5C16.5 18.5 14.5 19.5 12.5 19C12 17.5 12.5 15.5 14 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  tensorflow: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2ZM8 10H16M12 6V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  apachekafka: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M6 12C6 8.7 8.7 6 12 6C15.3 6 18 8.7 18 12C18 15.3 15.3 18 12 18M12 2V6M12 18V22M2 12H6M18 12H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  powerbi: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M4 14H8V20H4V14ZM10 9H14V20H10V9ZM16 4H20V20H16V4Z"
        fill="currentColor"
      />
    ),
  },
  grafana: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12M12 6L16 11.5L14 18H10L8 11.5L12 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
};

/**
 * Renders a pixel-perfect, design-compliant vector SVG logo for development stacks.
 * Returns a sleek terminal icon if the requested technology path is not found.
 */
export function TechIcon({ name, className, ...props }: TechIconProps) {
  const normalizedKey = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const iconData = SVG_REGISTRY[normalizedKey];

  if (!iconData) {
    // Fallback: Terminal icon structure
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("size-6 text-muted-foreground", className)}
        {...props}
      >
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    );
  }

  return (
    <svg
      viewBox={iconData.viewBox}
      className={cn("size-6 transition-all duration-300", className)}
      {...props}
    >
      {iconData.path}
    </svg>
  );
}
