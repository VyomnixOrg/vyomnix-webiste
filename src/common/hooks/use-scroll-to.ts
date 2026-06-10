"use client";

import { useCallback } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

export function useScrollTo() {
  return useCallback((sectionId: string) => {
    const smoother = ScrollSmoother.get();

    if (smoother) {
      smoother.scrollTo(`#${sectionId}`, true, "top 72px");
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
}
