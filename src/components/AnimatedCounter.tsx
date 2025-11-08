"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number; // em segundos
  delay?: number; // em segundos
  className?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  className = "text-5xl font-bold text-[#D9B98E]",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px" });

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasStarted(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const durationMs = Math.max(duration * 1000, 400);
    const intervalStep = 16;
    const increment = end / (durationMs / intervalStep);

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          if (intervalId) {
            clearInterval(intervalId);
          }
        }
        setCount(Math.floor(current));
      }, intervalStep);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [hasStarted, end, duration, delay]);

  return (
    <motion.span
      ref={ref}
      key={count}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {count.toLocaleString("pt-BR")}
    </motion.span>
  );
}
