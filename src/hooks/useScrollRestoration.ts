"use client";

import { useEffect } from "react";

export function useScrollRestoration(offset: number = 140) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Verificar se há flag de scroll com offset
      const shouldOffset = sessionStorage.getItem('backWithOffset');
      
      if (shouldOffset === 'true') {
        const savedOffset = parseInt(sessionStorage.getItem('backOffset') || offset.toString(), 10);
        
        // Aguardar renderização completa
        setTimeout(() => {
          window.scrollTo({
            top: savedOffset,
            behavior: 'smooth'
          });
          
          // Limpar flags após aplicar
          sessionStorage.removeItem('backWithOffset');
          sessionStorage.removeItem('backOffset');
        }, 100);
      } else {
        // Scroll padrão se não houver flag
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  }, [offset]);
}



