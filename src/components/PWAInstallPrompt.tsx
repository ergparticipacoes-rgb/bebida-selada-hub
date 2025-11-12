"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verificar se já está instalado
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
      return;
    }

    // Verificar se já foi instalado anteriormente
    const installed = localStorage.getItem("pwa-installed");
    if (installed === "true") {
      setIsInstalled(true);
      return;
    }

    // Aguardar evento beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Mostrar prompt após 3 segundos
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      localStorage.setItem("pwa-installed", "true");
      setIsInstalled(true);
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Não mostrar novamente por 7 dias
    localStorage.setItem("pwa-dismissed", Date.now().toString());
  };

  // Verificar se foi dispensado recentemente
  useEffect(() => {
    const dismissed = localStorage.getItem("pwa-dismissed");
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      if (daysSinceDismissed < 7) {
        setShowPrompt(false);
      }
    }
  }, []);

  if (isInstalled || !showPrompt || !deferredPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50"
      >
        <div className="bg-gradient-to-br from-[#001F33] to-[#002A46] border border-[#D9B98E]/60 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#D9B98E]/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#D9B98E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-playfair font-semibold text-lg mb-1">
                Instalar App
              </h3>
              <p className="text-[#F8F9FB]/80 text-sm leading-relaxed mb-4">
                Adicione Bebida Selada® à sua tela inicial para acesso rápido e uma experiência melhor.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleInstall}
                  className="flex-1 inline-flex items-center justify-center rounded-xl bg-[#D9B98E] px-4 py-2.5 text-sm font-semibold text-[#001F33] shadow-[0_8px_20px_rgba(217,185,142,0.4)] transition-all duration-300 hover:bg-[#E6CFA5] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60"
                >
                  Instalar
                </button>
                <button
                  onClick={handleDismiss}
                  className="inline-flex items-center justify-center rounded-xl border border-[#D9B98E]/40 bg-transparent px-4 py-2.5 text-sm font-medium text-[#F8F9FB]/80 transition-all duration-300 hover:bg-white/10 hover:border-[#D9B98E]/60 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60"
                >
                  Agora não
                </button>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-[#F8F9FB]/60 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

