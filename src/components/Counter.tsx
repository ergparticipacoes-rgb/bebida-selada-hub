"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  label?: string;
  delay?: number;
}

export default function Counter({ value, label, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h3 className="text-[#D9B98E] font-playfair text-6xl md:text-7xl font-bold mb-3">
        {count.toLocaleString("pt-BR")}
      </h3>
      {label && (
        <p className="text-[#001F33] text-lg md:text-xl font-medium leading-snug">
          {label}
        </p>
      )}
    </motion.div>
  );
}
