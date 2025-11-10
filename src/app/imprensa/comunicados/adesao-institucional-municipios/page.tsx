"use client";

import { motion } from "framer-motion";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import BackButton from "../../../../components/ui/BackButton";

export const dynamic = "force-static";

export default function AdesaoMunicipiosPage() {
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
                Adesão Institucional de Municípios Certificados
              </h1>
              <p className="text-lg text-white/80">
                Publicado em 31 de outubro de 2025
              </p>
              <p className="text-base text-[#D9B98E]/80">
                Emitido por: Conselho Nacional da Rede Segura
              </p>
            </div>

            <div className="h-px w-full bg-[#D9B98E]/20"></div>

            <div className="prose prose-invert max-w-none space-y-6 text-lg text-white/90 leading-relaxed">
              <p>
                O Conselho Nacional da Rede Segura informa que 42 regiões brasileiras já integram oficialmente o programa <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>, consolidando o avanço da certificação de estabelecimentos e distribuidores.
              </p>

              <p>
                O ingresso dos municípios representa um avanço em transparência fiscal, segurança sanitária e estímulo à economia local.
              </p>

              <p>
                As prefeituras participantes atuam como pontos de articulação institucional, incentivando a adesão de bares, adegas e distribuidores ao sistema nacional de certificação.
              </p>

              <p>
                Novas adesões estão em análise técnica e serão integradas até o primeiro trimestre de 2026.
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

