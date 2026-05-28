"use client";

import { useState, useEffect } from "react";

/**
 * Detects whether the page has been scrolled past a given threshold.
 * Returns true once scrollY exceeds the threshold.
 */
export function useScrolled(threshold = 10): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold);
    }

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
