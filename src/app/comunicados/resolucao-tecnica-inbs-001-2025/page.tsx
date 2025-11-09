"use client";

import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ShieldWithLock from "../../../components/ui/ShieldWithLock";
import { useScrollRestoration } from "../../../hooks/useScrollRestoration";


export default function ResolucaoTecnicaPage() {
  useScrollRestoration(140);

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-6 sm:px-10 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Cabeçalho */}
            <div className="text-center space-y-6 mb-12">
              <div className="flex justify-center">
                <ShieldWithLock size={56} />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#D9B98E] leading-tight">
                Resolução Técnica INBS nº 001/2025 – Padrões Nacionais de Certificação e Auditoria Setorial
              </h1>
              <div className="h-[2px] w-24 bg-[#D9B98E] mx-auto mt-4"></div>
              <div className="space-y-2 text-white/80 mt-8">
                <p className="text-lg">Publicado em 31 de outubro de 2025</p>
                <p className="text-base text-[#D9B98E]/80">
                  Emitido por: Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS) — Rede Segura Nacional
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-[#D9B98E]/20"></div>

            {/* Conteúdo */}
            <div className="prose prose-invert max-w-none space-y-8 text-lg md:text-xl text-white/90 leading-relaxed">
              <section className="space-y-6">
                <p className="leading-relaxed">
                  O Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS), no uso de suas atribuições conferidas pela Rede Segura Nacional e pelo Conselho de Governança Técnica, torna pública a presente Resolução Técnica, com validade em todo o território nacional.
                </p>
                <p className="leading-relaxed">
                  Define diretrizes oficiais para auditoria, rastreabilidade e certificação de bebidas no Brasil, consolidando um padrão único de transparência e conformidade comercial.
                </p>
              </section>

              <section className="space-y-6 mt-12">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#D9B98E] mb-6">Pontos-chave:</h2>
                <ul className="list-disc list-inside space-y-4 ml-4 text-lg">
                  <li>Auditoria técnica digital e documental.</li>
                  <li>Certificação física e digital autenticada via QR Code.</li>
                  <li>Consulta pública permanente.</li>
                  <li>Integração com vigilâncias sanitárias regionais.</li>
                </ul>
              </section>

              <blockquote className="border-l-4 border-[#D9B98E] pl-6 py-6 mt-12 italic text-white/90 text-xl md:text-2xl leading-relaxed bg-[#002A46]/30 rounded-r-lg">
                &quot;A autenticidade é o novo selo de valor da bebida brasileira.&quot;
                <footer className="mt-4 text-base md:text-lg not-italic text-[#D9B98E]/80">
                  — Conselho Nacional Rede Segura / INBS
                </footer>
              </blockquote>

              <div className="bg-[#002A46]/40 border border-[#D9B98E]/30 rounded-lg p-6 mt-12">
                <p className="text-sm text-[#D9B98E]/70 font-mono mb-2">
                  📄 Protocolo: RSN-INBS/BR/2025-01
                </p>
                <p className="text-sm text-[#D9B98E] font-semibold">
                  🔐 VALIDADO DIGITALMENTE — Conselho Nacional Rede Segura
                </p>
              </div>
            </div>

            {/* Botão Voltar */}
            <div className="pt-12 mt-12 border-t border-[#D9B98E]/20">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    const savedOffset = sessionStorage.getItem('backOffset') || '0';
                    sessionStorage.setItem('backWithOffset', 'true');
                    sessionStorage.setItem('backOffset', savedOffset);
                    window.location.href = '/comunicados';
                  }
                }}
                className="inline-flex items-center text-[#D9B98E] hover:text-white font-semibold transition-all duration-200 text-lg"
                aria-label="Voltar aos Comunicados Oficiais"
              >
                ← Voltar aos Comunicados Oficiais
              </button>
            </div>
          </motion.article>
        </div>
      </div>
      <Footer />
    </main>
  );
}

