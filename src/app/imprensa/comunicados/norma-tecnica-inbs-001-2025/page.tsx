"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";

export const dynamic = "force-static";

export default function NormaTecnicaPage() {
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
                Norma Técnica INBS-001:2025 – Versão Revisada
              </h1>
              <p className="text-lg text-white/80">
                Publicado em 30 de outubro de 2025
              </p>
              <p className="text-base text-[#D9B98E]/80">
                Emitido por: Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS)
              </p>
            </div>

            <div className="h-px w-full bg-[#D9B98E]/20"></div>

            <div className="prose prose-invert max-w-none space-y-6 text-lg text-white/90 leading-relaxed">
              <p>
                O Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS) divulga a versão revisada da Norma Técnica INBS-001:2025, documento que define as diretrizes e procedimentos para certificação, rastreabilidade e auditoria de bebidas certificadas pela Rede Segura Nacional.
              </p>

              <p>
                A nova redação incorpora parâmetros de segurança digital, controle antifraude e rastreabilidade via QR Code autenticado, além de auditorias regionais híbridas.
              </p>

              <p>
                A norma entra em vigor em 1º de novembro de 2025, tornando-se referência técnica para prefeituras, estabelecimentos e produtores certificados.
              </p>

              <p>
                O documento integral está disponível para consulta pública no portal institucional do INBS.
              </p>
            </div>

            <div className="pt-8">
              <Link 
                href="/imprensa#comunicados-oficiais"
                scroll={true}
                className="inline-flex items-center text-[#D9B98E] hover:text-white font-semibold transition-all duration-200"
              >
                ← Voltar aos Comunicados
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
      <Footer />
    </main>
  );
}

