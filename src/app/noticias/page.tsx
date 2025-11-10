"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/ui/BackButton";
import { newsData } from "../../data/newsData";

export const dynamic = "force-static";

export default function NoticiasPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#001F33]">
      <Navbar />
      <div className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#001326] via-[#001F33] to-[#012A46] text-white px-6 py-28 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.22),transparent_70%)]" />
          <div className="absolute -left-48 top-24 h-[360px] w-[360px] rounded-full bg-[#D9B98E]/18 blur-[160px]" />
          <div className="absolute -right-56 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8C6B40]/18 blur-[190px]" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center space-y-9 md:space-y-[3.5rem] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-[2.7rem] md:text-[3.6rem] font-playfair font-bold leading-snug md:leading-[1.18] text-[#FDF4E1] drop-shadow-[0_12px_32px_rgba(5,25,46,0.45)]">
                Notícias e comunicados oficiais da Rede Segura Nacional
              </h1>
              <p className="text-base md:text-lg text-[#F8F9FB]/85 leading-[1.75] max-w-3xl mx-auto">
                Acompanhe notas técnicas, decisões institucionais e matérias especiais que destacam o avanço do selo Bebida Selada® em todo o país.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6">
                <Link
                  href="#comunicados"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[#D9B98E] px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                >
                  Ver comunicados oficiais
                  <span className="opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </Link>
                <Link
                  href="/imprensa"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#D9B98E]/70 bg-white/10 px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-[#F4E3C6]"
                >
                  Sala de imprensa
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comunicados */}
        <section id="comunicados" className="bg-[#FDF9F0] py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 text-center space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2.2rem] md:text-[2.6rem] font-playfair font-bold text-[#1F2A38]"
            >
              Comunicados oficiais — Rede Segura Nacional
            </motion.h2>
            <p className="text-base md:text-lg text-[#312922]/80 leading-[1.75] max-w-3xl mx-auto">
              Publicações autenticadas pelo Instituto Nacional Bebida Selada (INBS-001), com orientações técnicas e avanços institucionais da Rede Segura Nacional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
                title: "Ativação Nacional do Sistema de Certificação Digital",
                body: "A Rede Segura Nacional anuncia a integração progressiva de estabelecimentos e municípios ao Protocolo Técnico INBS-001:2025, consolidando o selo Bebida Selada® como padrão nacional.",
                date: "28 de outubro de 2025",
              },
              {
                title: "Norma Técnica INBS-001:2025 – Versão Revisada",
                body: "O INBS publica a revisão da norma que regula certificação, auditoria e rastreabilidade de bebidas comerciais, com vigência a partir de novembro de 2025.",
                date: "30 de outubro de 2025",
              },
              {
                title: "Adesão Institucional de Municípios Certificados",
                body: "Mais de 40 prefeituras passam a integrar oficialmente a Rede Segura Nacional, garantindo transparência sanitária e estímulo econômico local.",
                date: "31 de outubro de 2025",
              }].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex h-full flex-col gap-4 rounded-[26px] border border-[#D9B98E]/45 bg-white px-8 py-10 text-left shadow-[0_18px_48px_-28px_rgba(217,185,142,0.4)]"
                >
                  <span className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-semibold text-[#B88C4B]">
                    🛡️ Comunicado oficial
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-[#1F2A38] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#312922]/80 leading-relaxed">
                    {card.body}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#B88C4B]/80">
                    📅 Publicado em {card.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Notícias */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-[2.2rem] md:text-[2.6rem] font-playfair font-bold text-[#1F2A38]"
            >
              Notícias em destaque na mídia
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {newsData.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group flex h-full flex-col justify-between rounded-[26px] border border-[#D9B98E]/45 bg-[#FDF9F0] px-8 py-10 shadow-[0_18px_48px_-28px_rgba(217,185,142,0.35)] transition-all duration-400"
                >
                  <div className="space-y-4">
                    {item.veiculo && (
                      <p className="text-xs uppercase tracking-[0.3em] text-[#B88C4B] font-semibold">
                        {item.veiculo}
                      </p>
                    )}
                    <h3 className="text-xl md:text-2xl font-playfair font-semibold text-[#1F2A38]">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#312922]/80 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <p className="text-xs text-[#312922]/60">
                      {item.dateFormatted}
                    </p>
                  </div>
                  <Link
                    href={`/noticias/${item.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-[#B88C4B] font-semibold hover:text-[#8C6B40] transition-colors duration-300"
                  >
                    Ler matéria completa →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="py-16 text-center">
          <BackButton className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]">
            Voltar
          </BackButton>
        </div>
      </div>
      <Footer />
    </main>
  );
}

