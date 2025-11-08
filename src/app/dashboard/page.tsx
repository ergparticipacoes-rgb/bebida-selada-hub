"use client";
import { motion } from "framer-motion";
import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import UploadNFModule from "../../components/dashboard/UploadNFModule";
import UpsellModule from "../../components/dashboard/UpsellModule";
import FinancialModule from "../../components/dashboard/FinancialModule";
import ReportsModule from "../../components/dashboard/ReportsModule";
import SupportModule from "../../components/dashboard/SupportModule";
import { useState } from "react";

export default function Dashboard() {
  // Simulação: dados do usuário (em produção viriam do contexto/auth)
  const [userPlan] = useState<"start" | "profissional" | "premium">("start");
  const [uploadsUsed] = useState(2);
  
  // Dados simulados do estabelecimento
  const estabelecimento = "Bar e Restaurante Exemplo";
  const cnpj = "12.345.678/0001-90";
  const statusSelo: "Ativo" | "Em auditoria" | "Pendente" = "Ativo";
  
  // Uploads recentes simulados
  const recentUploads = [
    {
      id: "1",
      fileName: "NF_2025_001.pdf",
      date: "15/01/2025",
      status: "Auditada" as const,
    },
    {
      id: "2",
      fileName: "NF_2025_002.pdf",
      date: "20/01/2025",
      status: "Processando" as const,
    },
  ];

  // Faturas simuladas
  const invoices = userPlan !== "start" ? [
    {
      id: "1",
      date: "2025-01-01",
      amount: userPlan === "profissional" ? 147 : 247,
      status: "Pago" as const,
      description: `Plano ${userPlan === "profissional" ? "Profissional" : "Premium"} - Janeiro 2025`,
    },
  ] : [];

  const nextRenewal = userPlan !== "start" ? "2025-02-01" : undefined;

  // Relatórios simulados
  const reports = [
    {
      id: "1",
      title: "Relatório de Autenticidade - Janeiro 2025",
      date: "2025-01-15",
      type: "Auditoria" as const,
      status: "Disponível" as const,
    },
  ];

  const auditStats = {
    total: 5,
    auditadas: 3,
    emProcessamento: 2,
  };

  return (
    <main className="flex min-h-screen bg-[#F8F9FB]">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header Fixo */}
        <DashboardHeader
          estabelecimento={estabelecimento}
          cnpj={cnpj}
          statusSelo={statusSelo}
          plano={userPlan === "start" ? "Start" : userPlan === "profissional" ? "Profissional" : "Premium"}
        />

        {/* Conteúdo Principal */}
        <section className="flex-1 p-6 md:p-8 lg:p-10 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {/* Título Institucional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#001F33] mb-2">
                Painel do Estabelecimento Certificado — Rede Segura Nacional
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Gerencie auditorias, relatórios e sua certificação oficial.
              </p>
            </motion.div>

            {/* Módulo de Upsell Contextual */}
            <UpsellModule currentPlan={userPlan} />

            {/* Módulo de Upload de NF */}
            <UploadNFModule
              userPlan={userPlan}
              uploadsUsed={uploadsUsed}
              recentUploads={recentUploads}
            />

            {/* Grid de Módulos Secundários */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Módulo Financeiro */}
              <FinancialModule
                invoices={invoices}
                nextRenewal={nextRenewal}
              />

              {/* Módulo de Relatórios */}
              <ReportsModule
                reports={reports}
                auditStats={auditStats}
              />
            </div>

            {/* Módulo de Suporte */}
            <SupportModule />

            {/* Botão Voltar */}
            <div className="text-center mt-12 mb-8">
              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
              >
                Voltar à página principal
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
