"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface BackButtonProps {
  fallbackHref?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BackButton({
  fallbackHref = "/",
  className = "",
  children = "← Voltar",
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      // Scroll ao topo imediatamente
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Pequeno delay para garantir que o scroll aconteça antes da navegação
      setTimeout(() => {
        // Verificar se há histórico para voltar
        if (window.history.length > 1 && document.referrer) {
          router.back();
        } else {
          router.push(fallbackHref);
        }
      }, 150);
    }
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 focus:ring-offset-2";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${className}`.trim()}
    >
      {children}
    </motion.button>
  );
}

