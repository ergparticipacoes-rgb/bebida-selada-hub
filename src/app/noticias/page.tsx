"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { newsData } from "../../data/newsData";

export const dynamic = "force-static";

export default function NoticiasPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-8 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-10 md:space-y-14"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#E5C48F] mb-8">
              Notícias e Comunicados Oficiais — Rede Segura Nacional
            </h1>
            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-[#E5E9F0] leading-relaxed md:leading-loose">
                Acompanhe notas técnicas, atualizações normativas e ações conjuntas
                com órgãos de fiscalização e parceiros institucionais.
              </p>
              <p className="text-base md:text-lg text-[#E5E9F0]/90 italic leading-relaxed">
                Todos os comunicados são oficiais e autenticados pelo Instituto Nacional Bebida Selada (INBS-001).
              </p>
            </div>
          </motion.div>

          {/* Comunicados Oficiais – Rede Segura Nacional */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full"
          >
            <div className="max-w-7xl mx-auto py-24 px-6 md:px-12 lg:px-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#D9B98E] mb-4 text-center">
                Comunicados Oficiais – Rede Segura Nacional
              </h2>
              <p className="text-sm md:text-base text-[#E5E9F0]/70 text-center mb-10 max-w-3xl mx-auto">
                Publicações técnicas emitidas pelo Instituto Nacional Bebida Selada (INBS) e órgãos vinculados à Rede Segura Nacional.
              </p>
              
              <div className="grid gap-8 md:grid-cols-3">
              {/* Comunicado 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#002A46]/40 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold text-[#D9B98E] mb-3">
                  🛡️ Comunicado Oficial
                </span>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  Ativação Nacional do Sistema de Certificação Digital
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  A Rede Segura Nacional anuncia o início da integração progressiva de estabelecimentos e municípios no Protocolo Técnico INBS-001:2025. O marco consolida o uso do Selo Bebida Selada® como padrão nacional de autenticidade e rastreabilidade.
                </p>
                <p className="text-xs text-[#D9B98E]/80 font-medium">📅 Publicado em 28 de outubro de 2025</p>
              </motion.div>

              {/* Comunicado 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#002A46]/40 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold text-[#D9B98E] mb-3">
                  🛡️ Comunicado Oficial
                </span>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  Norma Técnica INBS-001:2025 – Versão Revisada
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  O Instituto Nacional Bebida Selada (INBS) publica a versão revisada da norma que estabelece diretrizes de certificação, auditoria e rastreabilidade de bebidas comercializadas no Brasil. O documento entra em vigor em novembro de 2025.
                </p>
                <p className="text-xs text-[#D9B98E]/80 font-medium">📅 Publicado em 30 de outubro de 2025</p>
              </motion.div>

              {/* Comunicado 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#002A46]/40 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold text-[#D9B98E] mb-3">
                  🛡️ Comunicado Oficial
                </span>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  Adesão Institucional de Municípios Certificados
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4">
                  Prefeituras de 42 regiões já integram oficialmente o programa Bebida Selada®, assegurando transparência, segurança sanitária e estímulo à economia local. Novas adesões estão em fase de análise técnica.
                </p>
                <p className="text-xs text-[#D9B98E]/80 font-medium">📅 Publicado em 31 de outubro de 2025</p>
              </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Linha divisória */}
          <div className="h-px w-full bg-[#D9B98E]/20 my-16"></div>

          {/* Seção de Notícias */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#E5C48F] mb-10">
              Notícias da Imprensa
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {newsData.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-[#001F33]/50 border border-[#E5C48F]/20 rounded-2xl p-10 md:p-12 flex flex-col justify-between hover:border-[#E5C48F]/40 transition-all duration-500 ease-in-out shadow-md"
              >
                <div>
                  {item.veiculo && (
                    <p className="text-sm text-[#E5C48F] font-semibold mb-2 uppercase tracking-wide">
                      {item.veiculo}
                    </p>
                  )}
                  <h2 className="text-2xl font-serif font-semibold text-[#E5C48F] mb-4">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed md:leading-loose mb-6">
                    {item.excerpt}
                  </p>
                  <p className="text-sm text-[#E5E9F0]/60 mb-6">
                    {item.dateFormatted}
                  </p>
                </div>
                <Link
                  href={`/noticias/${item.slug}`}
                  className="text-[#D9B98E] font-semibold hover:text-[#E5C48F] hover:underline transition-colors duration-300 inline-block"
                >
                  Ler matéria completa →
                </Link>
              </motion.div>
            ))}
            </div>
          </div>

          {/* Botão Voltar (padrão global) */}
          <div className="text-center mt-20">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

