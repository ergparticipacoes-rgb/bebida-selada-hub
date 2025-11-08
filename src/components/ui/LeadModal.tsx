"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [formData, setFormData] = useState({ nome: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ nome: "", email: "" });
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio para o backend
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-[#001F33] rounded-2xl shadow-2xl max-w-md w-full p-8 relative border border-[#D9B98E]/30">
              {/* Botão fechar */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[#E5C48F] hover:text-[#D9B98E] transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Receber notificação
                  </h2>
                  <p className="text-white/80 mb-6 text-sm md:text-base">
                    Seja notificado quando a base pública estiver disponível.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="nome" className="block text-white/90 text-sm mb-2">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white/90 text-sm mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-8 py-4 rounded-xl bg-[#D9B98E] text-[#001F33] font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg mt-6"
                    >
                      Enviar
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D9B98E]/20 mb-4">
                    <Check className="h-8 w-8 text-[#D9B98E]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    ✅ Sua solicitação foi registrada.
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    Você será notificado assim que a base pública estiver disponível.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}



