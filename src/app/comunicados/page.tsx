"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/ui/BackButton";
import ShieldWithLock from "../../components/ui/ShieldWithLock";
import { useScrollRestoration } from "../../hooks/useScrollRestoration";

export const dynamic = "force-static";

const comunicados = [
  {
    slug: "resolucao-tecnica-inbs-001-2025",
    titulo: "Resolução Técnica INBS nº 001/2025 – Padrões Nacionais de Certificação e Auditoria Setorial",
    resumo: "Define diretrizes oficiais para auditoria, rastreabilidade e certificação de bebidas no Brasil, consolidando um padrão único de transparência e conformidade comercial.",
    data: "31 de outubro de 2025",
    protocolo: "RSN-INBS/BR/2025-01",
  },
  {
    slug: "circular-oficial-rsn-002-2025",
    titulo: "Circular Oficial RSN nº 002/2025 – Expansão Nacional de Representações Digitais",
    resumo: "A Rede Segura Nacional anuncia a ampliação do Programa Nacional de Representação Digital (PNRD), atualmente ativo em 142 regiões administrativas.",
    data: "31 de outubro de 2025",
    protocolo: "RSN-INBS/BR/2025-02",
  },
  {
    slug: "nota-tecnica-conjunta-inbs-003-2025",
    titulo: "Nota Técnica Conjunta INBS nº 003/2025 – Alerta Nacional sobre Adulteração e Metanol",
    resumo: "O INBS, em parceria com órgãos de vigilância sanitária, reforça o alerta sobre adulterações com metanol e comunica novas medidas preventivas sob o Protocolo Técnico INBS-001:2025.",
    data: "31 de outubro de 2025",
    protocolo: "RSN-INBS/BR/2025-03",
  },
];

export default function ComunicadosPage() {
  useScrollRestoration();

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      {/* Faixa dourada superior */}
      <div className="h-2 bg-[#D9B98E]"></div>
      <Navbar />
      <div className="px-6 sm:px-10 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero Institucional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center mb-6">
              <ShieldWithLock size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D9B98E]">
              Comunicados Oficiais — Rede Segura Nacional
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Publicações emitidas pelo Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS)
            </p>
            <div className="h-[2px] w-32 md:w-40 bg-[#D9B98E] mx-auto"></div>
          </motion.div>

          {/* Grid de Comunicados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {comunicados.map((comunicado, i) => (
              <Link
                key={comunicado.slug}
                href={`/comunicados/${comunicado.slug}`}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    sessionStorage.setItem('backOffset', window.scrollY.toString());
                  }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-[#002A46]/40 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
                >
                  <div>
                    <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold text-[#D9B98E] mb-4">
                      🛡️ Comunicado Oficial
                    </span>
                    <h2 className="text-xl font-semibold text-white mb-4 leading-snug">
                      {comunicado.titulo}
                    </h2>
                    <p className="text-sm text-white/90 leading-relaxed mb-6">
                      {comunicado.resumo}
                    </p>
                    <p className="text-xs text-[#D9B98E]/80 font-medium mb-2">
                      📅 Publicado em {comunicado.data}
                    </p>
                    <p className="text-xs text-[#D9B98E]/70 font-mono">
                      📄 Protocolo: {comunicado.protocolo}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="text-[#D9B98E] hover:text-white text-sm font-semibold transition-all duration-200 underline inline-flex items-center">
                      Ler Comunicado Completo →
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Faixa Institucional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-t border-[#D9B98E]/20 pt-8 text-center"
          >
            <p className="text-sm text-white/70">
              Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> — Rede Segura Nacional | INBS:001 | Transparência, confiança e inovação em cada garrafa.
            </p>
          </motion.div>

          {/* Botão Voltar */}
          <div className="text-center mt-12">
            <BackButton
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duração-400 ease-in-out shadow-md"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

