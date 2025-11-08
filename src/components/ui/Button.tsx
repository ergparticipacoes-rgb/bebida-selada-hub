"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  href?: string;
  as?: "button" | "a";
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  href,
  as = "button",
}: ButtonProps) {
  const base =
    "px-8 py-3 rounded-full text-sm font-semibold transition-all duration-500 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2";
  const variants = {
    primary: "bg-[#001F33] text-white hover:bg-[#003A5C] hover:scale-105 hover:brightness-110",
    secondary: "bg-[#D9B98E] text-[#001F33] hover:bg-[#E1C7A0] hover:scale-105 hover:brightness-110",
    outline:
      "border-2 border-[#E5C48F]/50 text-[#E5C48F] hover:bg-[#D9B98E] hover:text-[#001F33] hover:scale-105",
  };

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <Component
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.05 }}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      href={href}
    >
      {children}
    </Component>
  );
}
