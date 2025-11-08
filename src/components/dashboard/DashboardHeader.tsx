"use client";
import { motion } from "framer-motion";

interface DashboardHeaderProps {
  estabelecimento: string;
  cnpj: string;
  statusSelo: "Ativo" | "Em auditoria" | "Pendente";
  plano: "Start" | "Profissional" | "Premium";
}

export default function DashboardHeader({
  estabelecimento,
  cnpj,
  statusSelo,
  plano,
}: DashboardHeaderProps) {
  const statusColors = {
    Ativo: "bg-green-500",
    "Em auditoria": "bg-yellow-500",
    Pendente: "bg-gray-500",
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white border-b border-[#D9B98E]/20 shadow-sm sticky top-0 z-40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl font-serif font-bold text-[#001F33] mb-1">
              {estabelecimento}
            </h1>
            <p className="text-sm text-gray-600">CNPJ: {cnpj}</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {/* Status do Selo */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${statusColors[statusSelo]}`}></div>
              <span className="text-sm font-medium text-[#001F33]">
                Selo: {statusSelo}
              </span>
            </div>
            
            {/* Plano Atual */}
            <div className="px-4 py-2 bg-[#D9B98E]/20 rounded-lg">
              <span className="text-sm font-semibold text-[#001F33]">
                Plano: {plano}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}




