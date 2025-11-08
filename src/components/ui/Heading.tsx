"use client";
import { motion } from "framer-motion";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  align = "center",
  className = "",
}: HeadingProps) {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${alignClass} space-y-4 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#D9B98E]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[#E5E9F0] font-medium tracking-wide text-base md:text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
