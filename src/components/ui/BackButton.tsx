"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface BackButtonProps {
  fallbackHref?: string;
  className?: string;
  children?: React.ReactNode;
  offset?: number;
}

export default function BackButton({ 
  fallbackHref = "/",
  className = "",
  children = "← Voltar",
  offset = 140
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined") {
      // Salvar flag para indicar que voltamos com offset
      sessionStorage.setItem('backWithOffset', 'true');
      sessionStorage.setItem('backOffset', offset.toString());
      
      if (window.history.length > 1) {
        router.back();
        
        // Após navegação, aplicar offset na página anterior
        setTimeout(() => {
          const shouldOffset = sessionStorage.getItem('backWithOffset');
          if (shouldOffset === 'true') {
            const savedOffset = parseInt(sessionStorage.getItem('backOffset') || '140', 10);
            window.scrollTo({
              top: savedOffset,
              behavior: 'smooth'
            });
            // Limpar flags
            sessionStorage.removeItem('backWithOffset');
            sessionStorage.removeItem('backOffset');
          }
        }, 100);
      } else {
        router.push(fallbackHref);
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 rounded-xl bg-[#D9B98E] text-[#001F33] font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </motion.button>
  );
}

