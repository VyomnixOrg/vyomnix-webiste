"use client";

import { createElement } from "react";
import { getIcon } from "@/lib/icons";
import { cn } from "@/common/utils";

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = getIcon(name);
  if (!Icon) return null;
  return createElement(Icon, { className: cn(className) });
}
