"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardSidebar from "../../../components/DashboardSidebar";
import Button from "../../../components/ui/Button";
import Link from "next/link";
import { PRICING_CONFIG } from "../../../config/pricing";

export default function DashboardEstabelecimento() {
  // Simulação: usuário está no plano Start (gratuito)
  // Em produção, isso viria do contexto/estado do usuário
  const [userPlan] = useState<"start" | "profissional" | "premium">("start");
  const [showUpsell] = useState(userPlan === "start");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <main className="flex min-h-screen bg-[#F8F9FB]">
      <DashboardSidebar />
      <section className="flex-1 p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#001F33] mb-4">
          Área do Estabelecimento
        </h1>
        <p className="text-gray-700 mb-8">
          Gestão de certificados e plano contratado.
        </p>

        {/* Bloco de Upsell Contextual - Visível apenas para plano Start */}
        {showUpsell && userPlan === "start" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#001F33] to-[#002A46] rounded-2xl p-6 md:p-8 mb-8 border border-[#E5C48F]/30 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-[#E5C48F] mb-3">
                  {PRICING_CONFIG.messages.upsellTitle}
                </h2>
                <p className="text-white/90 text-base md:text-lg mb-4 leading-relaxed">
                  {PRICING_CONFIG.messages.upsellMessage}{" "}
                  <strong className="text-[#E5C48F]">
                    {formatPrice(PRICING_CONFIG.kitFisico.price)}.
                  </strong>
                </p>
                <ul className="space-y-2 mb-4">
                  {PRICING_CONFIG.kitFisico.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/90">
                      <span className="text-[#E5C48F] mt-1">📦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0">
                <Link href="/estabelecimentos#planos">
                  <Button
                    variant="secondary"
                    className="text-base md:text-lg px-6 py-3 whitespace-nowrap"
                    onClick={() => {
                      // Após redirecionar, o upsell será ocultado quando o usuário voltar com plano atualizado
                      // Em produção, isso seria gerenciado pelo estado global/contexto
                    }}
                  >
                    Ativar agora
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Conteúdo principal do dashboard */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-[#D9B98E]/20">
          <h2 className="text-xl font-serif font-bold text-[#001F33] mb-4">
            Seus Certificados
          </h2>
          <p className="text-gray-600">
            Visualize e gerencie seus certificados e selos emitidos.
          </p>
          {/* Conteúdo adicional do dashboard aqui */}
        </div>
      </section>
    </main>
  );
}
