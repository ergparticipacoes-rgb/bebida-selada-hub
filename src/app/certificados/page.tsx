"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Bell } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ShieldWithLock from "../../components/ui/ShieldWithLock";
import StaticHourglass from "../../components/ui/StaticHourglass";
import LeadModal from "../../components/ui/LeadModal";
import BackButton from "../../components/ui/BackButton";

export const dynamic = "force-static";

export default function CertificadosPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white relative">
      <Navbar />

      <section className="py-36 md:py-36 bg-[#001F33] relative z-10">
        <div className="max-w-[1000px] mx-auto px-8 sm:px-10 md:px-20 text-center">
          {/* Ícone Escudo Digital com Cadeado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center mb-8"
          >
            <div className="mb-8">
              <ShieldWithLock size={48} />
            </div>
            
            {/* Título com hierarquia visual */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Consulta Pública
            </h1>
            <p className="text-base md:text-lg text-[#E5C48F] opacity-90 italic mb-8">
              (Sistema em Ativação Nacional)
            </p>
            <div className="h-[2px] w-32 md:w-40 bg-[#D9B98E] mb-8"></div>
          </motion.div>

          {/* Conteúdo Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-8 mb-12"
            style={{ marginTop: '32px' }}
          >
            {/* Primeiro parágrafo com ampulheta estática institucional */}
            <div className="text-base md:text-lg text-white leading-relaxed font-semibold flex items-center justify-center gap-2 flex-wrap">
              <span>O painel de estabelecimentos certificados está em processo de integração com as auditorias regionais.</span>
              <StaticHourglass />
            </div>

            <p className="text-base md:text-lg text-white leading-relaxed mt-12">
              Em breve, será possível consultar CNPJs, nomes comerciais e certificados validados conforme o protocolo técnico <strong className="text-white font-semibold">INBS-001:2025</strong>.
            </p>

            {/* Mensagem de Segurança */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="p-6 bg-white/10 border-l-4 border-[#D9B98E] rounded-r-lg backdrop-blur-sm mt-12"
            >
              <div className="flex items-start gap-4">
                <Lock className="h-6 w-6 text-[#D9B98E] flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg text-white leading-relaxed font-semibold">
                  Todos os dados publicados aqui são verificados e autenticados digitalmente.
                </p>
              </div>
            </motion.div>

            {/* Mensagem de agradecimento */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed mt-12">
              Agradecemos seu interesse e compromisso com a transparência.
            </p>
          </motion.div>

          {/* Botões de Ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 mt-12"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-[#D9B98E] text-[#001F33] font-semibold text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-3"
            >
              <Bell className="h-5 w-5" />
              Receber notificação quando a base for publicada
            </motion.button>
            
            <BackButton className="px-6 py-3 text-sm md:text-base" />
          </motion.div>
        </div>
      </section>

      {/* Modal de Lead */}
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Footer />
    </main>
  );
}

