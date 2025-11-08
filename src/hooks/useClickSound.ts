"use client";
import { useCallback } from "react";

/**
 * Hook opcional para reproduzir som metálico suave nos cliques de CTA
 * Requer arquivo de som em public/sounds/seal-click.mp3
 */
export function useClickSound() {
  const playSound = useCallback(() => {
    try {
      const audio = new Audio("/sounds/seal-click.mp3");
      audio.volume = 0.3; // Volume suave
      audio.play().catch(() => {
        // Ignora erros de reprodução (arquivo não encontrado ou bloqueado pelo navegador)
      });
    } catch (error) {
      // Ignora erros silenciosamente
    }
  }, []);

  return playSound;
}




