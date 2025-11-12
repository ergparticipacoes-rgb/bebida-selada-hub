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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let current = 0;
    const durationMs = Math.max(duration * 1000, 400);
    const intervalStep = 16; // ~60fps
    const totalSteps = durationMs / intervalStep;
    const increment = end / totalSteps;

    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      intervalId = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          setCount(end);
          if (intervalId) {
            clearInterval(intervalId);
          }
        } else {
          setCount(Math.floor(current));
        }
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
      key={`counter-${end}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: hasStarted ? 1 : 0, scale: hasStarted ? 1 : 0.8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {count.toLocaleString("pt-BR")}
    </motion.span>
  );
}
