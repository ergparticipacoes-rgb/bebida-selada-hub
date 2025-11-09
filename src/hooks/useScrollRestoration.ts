"use client";

import { useEffect } from "react";

const OFFSET_FLAG_KEY = "backWithOffset";
const OFFSET_VALUE_KEY = "backOffset";

export function useScrollRestoration(offset: number = 0) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const shouldRestore = sessionStorage.getItem(OFFSET_FLAG_KEY) === "true";
    const savedOffset = sessionStorage.getItem(OFFSET_VALUE_KEY);

    if (shouldRestore && savedOffset) {
      const parsedOffset = Math.max(Number.parseInt(savedOffset, 10), 0);

      const raf = requestAnimationFrame(() => {
        window.scrollTo({ top: parsedOffset, left: 0, behavior: "smooth" });
      });

      sessionStorage.removeItem(OFFSET_FLAG_KEY);
      sessionStorage.removeItem(OFFSET_VALUE_KEY);

      return () => cancelAnimationFrame(raf);
    }

    const safeOffset = Math.max(offset, 0);
    const raf = requestAnimationFrame(() => {
      window.scrollTo({ top: safeOffset, left: 0, behavior: "auto" });
    });

    return () => cancelAnimationFrame(raf);
  }, [offset]);
}
