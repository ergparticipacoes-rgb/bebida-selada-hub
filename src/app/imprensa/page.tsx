"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/ui/BackButton";

export const dynamic = "force-static";

export default function ImprensaPage() {
  const [showPressForm, setShowPressForm] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#001F33]">
      <Navbar />

      <div className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#001326] via-[#001F33] to-[#012A46] text-white px-6 py-28 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.22),transparent_70%)]" />
          <div className="absolute -left-48 top-24 h-[360px] w-[360px] rounded-full bg-[#D9B98E]/18 blur-[160px]" />
          <div className="absolute -right-56 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8C6B40]/18 blur-[190px]" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center space-y-12 md:space-y-[4.5rem] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-[2.7rem] md:text-[3.6rem] font-playfair font-bold leading-snug md:leading-[1.18] text-[#FDF4E1] drop-shadow-[0_12px_32px_rgba(5,25,46,0.45)]">
                <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> na mídia brasileira
              </h1>
              <div className="space-y-12 max-w-4xl mx-auto text-[#F8F9FB]/85 leading-[1.82]">
                <p className="text-base md:text-lg md:text-[1.2rem]">
                  Reconhecida pela inovação em rastreabilidade, autenticidade e governança, a Rede Segura Nacional conquista espaço em portais, veículos e órgãos de imprensa de todo o país.
                </p>
                <p className="text-sm md:text-base text-[#F8F9FB]/80 italic leading-[1.9]">
                  A imprensa destaca o selo Bebida Selada® como referência nacional em transparência, tecnologia e consumo responsável.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Comunicados oficiais */}
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
              Publicações autenticadas pelo Instituto Nacional Bebida Selada (INBS-001) com orientações técnicas, notas institucionais e avanços da Rede Segura Nacional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ativação nacional do sistema de certificação digital",
                  body: "A Rede Segura Nacional inicia a integração progressiva de estabelecimentos e municípios ao Protocolo Técnico INBS-001:2025, consolidando o selo Bebida Selada® como padrão nacional.",
                  date: "28 de outubro de 2025",
                  href: "/imprensa/comunicados/ativacao-nacional-certificacao-digital",
                },
                {
                  title: "Norma Técnica INBS-001:2025 – Versão revisada",
                  body: "O INBS divulga a revisão da norma que define diretrizes de certificação, auditoria e rastreabilidade de bebidas certificadas pela Rede Segura Nacional.",
                  date: "30 de outubro de 2025",
                  href: "/imprensa/comunicados/norma-tecnica-inbs-001-2025",
                },
                {
                  title: "Adesão institucional de municípios certificados",
                  body: "Prefeituras de diversas regiões integram oficialmente o programa Bebida Selada®, fortalecendo transparência, segurança sanitária e economia local.",
                  date: "31 de outubro de 2025",
                  href: "/imprensa/comunicados/adesao-institucional-municipios",
                },
              ].map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex h-full flex-col gap-5 rounded-[26px] border border-[#D9B98E]/45 bg-white px-8 py-10 text-left shadow-[0_18px_48px_-28px_rgba(217,185,142,0.4)]"
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
                  <Link href={card.href} className="mt-2 inline-flex items-center gap-2 text-[#B88C4B] font-semibold hover:text-[#8C6B40]">
                    Ler comunicado completo →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Destaques de mídia */}
        <section id="destaques" className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-[2.2rem] md:text-[2.6rem] font-playfair font-bold text-[#1F2A38]"
            >
              Veja quem está falando sobre a Rede Segura Nacional
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  outlet: "Valor Econômico",
                  excerpt: "Blockchain chega ao copo: tecnologia garante autenticidade das bebidas brasileiras.",
                  href: "/noticias/valor-blockchain",
                },
                {
                  outlet: "Estadão",
                  excerpt: "Prefeituras adotam o selo Bebida Selada® para fortalecer combate à falsificação e arrecadação local.",
                  href: "/noticias/estadao-selo-municipios",
                },
                {
                  outlet: "Exame",
                  excerpt: "Bebida Selada® cria ecossistema nacional de confiança e inovação no setor de bebidas.",
                  href: "/noticias/exame-certificacao",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.outlet}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group flex h-full flex-col justify-between rounded-[26px] border border-[#D9B98E]/45 bg-[#FDF9F0] px-8 py-10 shadow-[0_18px_48px_-28px_rgba(217,185,142,0.35)] transition-all duration-400"
                >
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#B88C4B] font-semibold">
                      {item.outlet}
                    </p>
                    <p className="text-sm md:text-base text-[#312922]/80 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-[#B88C4B] font-semibold hover:text-[#8C6B40]"
                  >
                    Ler matéria completa →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Releases */}
        <section className="bg-[#001F33] py-24 md:py-28 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 text-center space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2.2rem] md:text-[2.6rem] font-playfair font-bold text-[#FDF4E1]"
            >
              Releases e documentos oficiais
            </motion.h2>
            <p className="text-base md:text-lg text-[#F8F9FB]/85 leading-[1.75] max-w-3xl mx-auto">
              Acompanhe notas institucionais, decisões e comunicados técnicos publicados pelo Instituto Nacional Bebida Selada (INBS-001).
            </p>
          </div>
        </section>

        {/* Contato imprensa */}
        <section className="bg-white py-24 md:py-28">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 md:px-16 text-center space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2.2rem] md:text-[2.5rem] font-playfair font-bold text-[#1F2A38]"
            >
              Contato para imprensa
            </motion.h2>
            <p className="text-base md:text-lg text-[#312922]/80 leading-[1.75] max-w-3xl mx-auto">
              <strong className="text-[#B88C4B]">E-mail:</strong> imprensa@bebidaselada.com.br<br className="hidden md:block" />
              Assessoria oficial: <strong className="text-[#B88C4B]">Bebida Selada Tecnologia e Certificação Ltda.</strong>
            </p>
            {showPressForm ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  window.alert("Mensagem enviada! Nossa equipe responderá em breve.");
                  setShowPressForm(false);
                }}
                className="mx-auto w-full max-w-3xl space-y-4 rounded-[24px] border border-[#D9B98E]/45 bg-[#FDF9F0] px-6 py-8 text-left shadow-[0_18px_48px_-28px_rgba(217,185,142,0.35)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    className="rounded-xl border border-[#D9B98E]/35 bg-white px-4 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-mail profissional"
                    className="rounded-xl border border-[#D9B98E]/35 bg-white px-4 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Veículo / Organização"
                  className="w-full rounded-xl border border-[#D9B98E]/35 bg-white px-4 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                />
                <textarea
                  rows={4}
                  placeholder="Mensagem ou pauta"
                  className="w-full rounded-xl border border-[#D9B98E]/35 bg-white px-4 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30 resize-none"
                />
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                  >
                    Enviar solicitação
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPressForm(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/70 bg-white px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FDF3E4]"
                  >
                    Voltar
                  </button>
                </div>
              </motion.form>
            ) : (
              <button
                type="button"
                onClick={() => setShowPressForm(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
              >
                Solicitar informações
              </button>
            )}
          </div>
        </section>

        {/* Citação */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#001F33] to-[#012A46] py-28 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.16),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-[#D9B98E]/55 bg-white/10 px-10 py-12 text-center shadow-[0_24px_80px_-28px_rgba(217,185,142,0.45)] backdrop-blur-lg"
            >
              <div className="mx-auto mb-6 h-12 w-12 rounded-full border border-[#D9B98E]/60 bg-[#D9B98E]/15 flex items-center justify-center text-[#F4E3C6]">
                ✦
              </div>
              <p className="text-lg md:text-[1.25rem] leading-[1.8] text-[#F8F9FB]/90 italic">
                “Transparência gera notícia. A Bebida Selada® honra o compromisso com a verdade, a rastreabilidade e a inovação brasileira.”
              </p>
            </motion.div>
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
