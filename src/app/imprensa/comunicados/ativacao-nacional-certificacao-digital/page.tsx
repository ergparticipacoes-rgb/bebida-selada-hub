"use client";

import { motion } from "framer-motion";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import BackButton from "../../../../components/ui/BackButton";

export const dynamic = "force-static";

export default function AtivacaoNacionalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-8 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D9B98E]">
                Ativação Nacional do Sistema de Certificação Digital
              </h1>
              <p className="text-lg text-white/80">
                Publicado em 28 de outubro de 2025
              </p>
              <p className="text-base text-[#D9B98E]/80">
                Emitido por: Rede Segura Nacional / INBS
              </p>
            </div>

            <div className="h-px w-full bg-[#D9B98E]/20"></div>

            <div className="prose prose-invert max-w-none space-y-6 text-lg text-white/90 leading-relaxed">
              <p>
                A Rede Segura Nacional anuncia o início da integração progressiva de estabelecimentos e municípios no Protocolo Técnico INBS-001:2025, que estabelece a base digital de certificação e rastreabilidade das bebidas comercializadas no território nacional.
              </p>

              <p>
                Esta ativação representa um marco estratégico na consolidação do Selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> como referência de autenticidade e transparência no setor.
                Nesta primeira fase, estão sendo integradas auditorias regionais e painéis de conformidade, com sincronização segura entre os módulos digital e físico.
              </p>

              <p>
                O objetivo é proporcionar ao consumidor, ao poder público e ao setor produtivo um canal auditável e confiável de verificação de autenticidade.
                A certificação digital é auditada pelo INBS e validada conforme as diretrizes da Rede Segura Nacional.
              </p>
            </div>

            <div className="pt-8">
              <BackButton
                fallbackHref="/imprensa#comunicados"
                className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]"
              >
                ← Voltar aos Comunicados
              </BackButton>
            </div>
          </motion.article>
        </div>
      </div>
      <Footer />
    </main>
  );
}

