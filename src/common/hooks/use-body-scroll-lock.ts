"use client";

import { useEffect } from "react";

/**
 * Locks/unlocks body scroll based on the provided boolean.
 * Useful for modals, mobile menus, and overlays.
 */
export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}
