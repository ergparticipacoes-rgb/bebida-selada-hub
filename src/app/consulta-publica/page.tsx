"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/ui/BackButton";
import ShieldWithLock from "../../components/ui/ShieldWithLock";
import StaticWineglassHourglass from "../../components/ui/StaticWineglassHourglass";
import LeadModal from "../../components/ui/LeadModal";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";

export const dynamic = "force-static";

export default function ConsultaPublicaPage() {
  useScrollRestoration();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-6 sm:px-10 md:px-20 py-24 md:py-32 flex-1">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Cabeçalho Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center mb-6">
              <ShieldWithLock size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D9B98E] leading-tight">
              Consulta Pública
            </h1>
            <p className="text-lg md:text-xl italic text-white/80 max-w-3xl mx-auto leading-relaxed">
              Sistema em Ativação Nacional
            </p>
            <div className="h-[2px] w-32 md:w-40 bg-[#D9B98E] mx-auto mt-4"></div>
          </motion.div>

          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <StaticWineglassHourglass size={56} />
            </div>

            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
              <p>
                O painel de estabelecimentos certificados está em processo de integração com as auditorias regionais.
              </p>
              <p>
                Em breve, será possível consultar CNPJs, nomes comerciais e certificados validados conforme o protocolo técnico INBS-001:2025.
              </p>
            </div>

            <div className="mt-8 p-6 bg-[#002A46]/40 border border-[#D9B98E]/30 rounded-xl max-w-3xl mx-auto">
              <p className="text-white/90 leading-relaxed flex items-start gap-3">
                <span className="text-[#D9B98E] text-2xl">🔒</span>
                <span>
                  Todos os dados publicados aqui são verificados e autenticados digitalmente.
                </span>
              </p>
            </div>

            <p className="text-lg text-white/80 italic mt-8">
              Agradecemos seu interesse e compromisso com a transparência.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-[#D9B98E] text-[#001F33] font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Receber notificação quando a base for publicada"
            >
              Receber notificação quando a base for publicada
            </motion.button>

            <Link href="/comunicados">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl border-2 border-[#D9B98E] bg-transparent text-[#D9B98E] font-semibold text-base md:text-lg transition-all duration-300 hover:bg-[#D9B98E]/10 hover:shadow-md"
                aria-label="Ver Comunicados Oficiais"
              >
                Ver Comunicados Oficiais
              </motion.button>
            </Link>
          </motion.div>

          {/* Botão Voltar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12 pt-8 border-t border-[#D9B98E]/20"
          >
            <BackButton
              className="rounded-2xl border border-[#D9B98E]/70 bg-white/90 px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]"
            />
          </motion.div>
        </div>
      </div>
      <Footer />
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

