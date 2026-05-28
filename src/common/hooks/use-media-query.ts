"use client";

import { useState, useEffect } from "react";

/**
 * Returns true when the viewport width is at or above the given breakpoint.
 * Useful for closing mobile menus on resize.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    function handleChange(e: MediaQueryListEvent) {
      setMatches(e.matches);
    }

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}
