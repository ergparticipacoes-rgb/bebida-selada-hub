"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -4 }}
      className={`bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-[#D9B98E]/30 hover:border-[#D9B98E] hover:shadow-[0_8px_40px_rgba(217,185,142,0.15)] transition-all duration-500 ease-in-out ${className}`}
    >
      {children}
    </motion.div>
  );
}
