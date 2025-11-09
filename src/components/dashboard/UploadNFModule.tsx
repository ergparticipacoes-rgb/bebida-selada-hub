"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { ONBOARDING_CONFIG } from "../../config/onboarding";

interface UploadNFModuleProps {
  userPlan: "start" | "profissional" | "premium";
  uploadsUsed: number;
  recentUploads?: Array<{
    id: string;
    fileName: string;
    date: string;
    status: "Processando" | "Auditada" | "Irregularidade";
  }>;
}

export default function UploadNFModule({
  userPlan,
  uploadsUsed,
  recentUploads = [],
}: UploadNFModuleProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  
  const monthlyLimit = userPlan === "start" 
    ? ONBOARDING_CONFIG.plans.start.monthlyLimit 
    : userPlan === "profissional" 
    ? 50 
    : 999; // Ilimitado para Premium

  const isLimitReached = userPlan === "start" && uploadsUsed >= monthlyLimit;

  const handleUpload = () => {
    setIsUploading(true);
    // Simulação de upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadSuccess(true);
      setTimeout(() => setUploadSuccess(false), 3000);
    }, 2000);
  };

  const statusColors = {
    Processando: "text-yellow-600 bg-yellow-50",
    Auditada: "text-green-600 bg-green-50",
    Irregularidade: "text-red-600 bg-red-50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#D9B98E]/20 mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#001F33] mb-2">
        Envie suas Notas Fiscais para auditoria automática
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        O sistema reconhece os dados fiscais via OCR e gera relatórios de autenticidade conforme o protocolo INBS-001.
      </p>

      {/* Indicador de Limite Mensal */}
      {userPlan === "start" && (
        <div className="mb-6 p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Limite mensal de auditorias
            </span>
            <span className="text-sm font-semibold text-[#001F33]">
              {uploadsUsed} de {monthlyLimit} utilizados
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                isLimitReached ? "bg-red-500" : "bg-[#D9B98E]"
              }`}
              style={{ width: `${Math.min((uploadsUsed / monthlyLimit) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Mensagem de Limite Atingido */}
      {isLimitReached && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mb-6 p-6 bg-gradient-to-br from-[#001F33] to-[#002A46] rounded-xl border border-[#E5C48F]/30"
        >
          <p className="text-white font-semibold mb-2">⚙️ Limite de auditorias atingido.</p>
          <p className="text-white/90 mb-4">
            Atualize para o Plano Profissional e continue rastreando suas notas.
          </p>
          <Link href="/estabelecimentos#planos">
            <Button variant="secondary" className="text-base">
              Ativar agora
            </Button>
          </Link>
        </motion.div>
      )}

      {/* Área de Upload */}
      {!isLimitReached && (
        <div className="border-2 border-dashed border-[#D9B98E]/30 rounded-xl p-8 md:p-12 text-center hover:border-[#D9B98E] transition-colors mb-6">
          <svg
            className="w-12 h-12 mx-auto mb-4 text-[#D9B98E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="text-gray-600 mb-4">
            Arraste e solte ou clique para selecionar arquivo PDF ou XML
          </p>
          <button
            onClick={handleUpload}
            disabled={isUploading}
            className="px-6 py-3 bg-[#D9B98E] text-[#001F33] rounded-xl font-semibold hover:bg-[#E1C7A0] hover:scale-105 transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? "Enviando..." : "Enviar Nota Fiscal"}
          </button>
        </div>
      )}

      {/* Mensagem pós-envio */}
      {uploadSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
        >
          <p className="text-green-700 font-medium">
            ✓ Nota recebida, auditoria iniciada.
          </p>
        </motion.div>
      )}

      {/* Lista de Envios Recentes */}
      {recentUploads.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#001F33] mb-4">
            Envios recentes
          </h3>
          <div className="space-y-3">
            {recentUploads.map((upload) => (
              <div
                key={upload.id}
                className="flex items-center justify-between p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/10"
              >
                <div className="flex-1">
                  <p className="font-medium text-[#001F33]">{upload.fileName}</p>
                  <p className="text-sm text-gray-600">{upload.date}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[upload.status]}`}
                >
                  {upload.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

