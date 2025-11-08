"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface ComingSoonModalProps {
  children: React.ReactNode;
}

export default function ComingSoonModal({ children }: ComingSoonModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>
        {children}
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-[#001F33]/95 backdrop-blur-lg border-2 border-[#D9B98E]/30 rounded-2xl p-8 max-w-md w-full text-white"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-[#D9B98E] hover:text-white transition"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <h3 className="font-playfair text-2xl text-[#D9B98E] mb-4">
                Em Desenvolvimento
              </h3>
              <p className="font-inter text-[#F8F9FB]/90 leading-relaxed">
                Este recurso está em integração final com outros serviços da Rede Segura Nacional. Em breve estará disponível.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
