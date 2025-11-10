"use client";
// src/app/page.tsx
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import ScrollFade from "../components/ui/ScrollFade";
import Link from "next/link";
import ShieldWithLock from "../components/ui/ShieldWithLock";
import ComoFunciona from "../components/ComoFunciona";
import { useScrollRestoration } from "../hooks/useScrollRestoration";
import { FileCheck, QrCode, Shield, Flag, Building2, Award, Lightbulb, Landmark } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import Faq from "../components/Faq";

const LazyRepresentanteDigital = dynamic(() => import("../components/RepresentanteDigital"), {
  ssr: false,
  loading: () => (
    <section className="py-24 text-center text-[#001F33]">
      <p className="animate-pulse text-base md:text-lg">Carregando representantes…</p>
    </section>
  ),
});

const LazyUniversidadeSection = dynamic(
  () => import("../components/sections/UniversidadeSection"),
  {
    ssr: false,
    loading: () => (
      <section className="py-20 text-center text-[#001F33]">
        <p className="animate-pulse text-base md:text-lg">Carregando Universidade…</p>
      </section>
    ),
  }
);

const LazyCTASection = dynamic(() => import("../components/CTASection"), {
  ssr: false,
  loading: () => (
    <section className="py-20 bg-[#001F33] text-center text-white">
      <p className="animate-pulse text-base md:text-lg">Preparando chamada para ação…</p>
    </section>
  ),
});

export default function Home() {
  useScrollRestoration();

  return (
    <main className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#001F33] overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      <HeroSection />

      {/* Divisor dourado */}
      <div className="mx-auto h-px w-1/3 max-w-sm bg-gradient-to-r from-transparent via-[#E6CFA5]/35 to-transparent"></div>

      {/* 2) BLOCO INSTITUCIONAL — Interesse Público e Segurança Nacional (Premium) */}
      <ScrollFade>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#001F33] via-[#01273F] to-[#001A2B] py-24 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.18),transparent_70%)]" />
          <div className="absolute -left-44 top-16 h-[360px] w-[360px] rounded-full bg-[#D9B98E]/15 blur-[150px]" />
          <div className="absolute -right-52 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8C6B40]/18 blur-[180px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 md:px-16 text-center text-white space-y-12 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center space-y-6"
            >
              <div className="inline-flex items-center justify-center rounded-full border border-[#D9B98E]/55 bg-[#D9B98E]/15 px-5 py-1 text-[0.8rem] uppercase tracking-[0.35em] text-[#F4E3C6]">
                Rede Segura Nacional
              </div>
              <div className="inline-flex items-center gap-4 rounded-full border border-[#F4E3C6]/60 bg-white/10 px-6 py-3 shadow-[0_12px_40px_rgba(244,227,198,0.15)] backdrop-blur-md">
                <ShieldWithLock size={42} className="text-[#F4E3C6]" />
                <h2 className="text-[2.15rem] md:text-[2.75rem] font-playfair font-bold tracking-tight leading-tight md:leading-[1.25] text-[#FDFDFD]">
                  Interesse Público e Segurança Nacional
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mx-auto max-w-4xl space-y-7 text-left md:text-center leading-[1.75]"
            >
              <p className="text-base md:text-lg text-[#F8F9FB]/88">
                Garantia de transparência, rastreabilidade e conformidade técnica em escala nacional.
              </p>
              <div className="rounded-2xl border border-[#D9B98E]/45 bg-white/8 px-6 py-5 text-[#F8F9FB]/90 shadow-[0_18px_50px_-32px_rgba(217,185,142,0.35)] backdrop-blur-md">
                <p className="text-base md:text-lg">
                  Cada selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> representa confiança auditável — visível para o consumidor e fiscalizável por qualquer órgão público.
                </p>
              </div>
              <p className="text-base md:text-lg italic text-[#F4E3C6]/85">
                Compromisso com a integridade, a vida e o consumo responsável em todo o território nacional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/certificados"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-transparent bg-[#D9B98E] px-7 py-3 text-sm md:text-base font-semibold text-[#0B1E3D] shadow-[0_20px_45px_-28px_rgba(217,185,142,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
              >
                Consultar Estabelecimentos Certificados
              </Link>
              <Link
                href="/noticias"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#D9B98E]/70 bg-white/8 px-7 py-3 text-sm md:text-base font-semibold text-[#FDFDFD] transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 hover:border-[#F4E3C6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
              >
                Ver Notícias e Comunicados Oficiais
              </Link>
            </motion.div>
          </div>
        </section>
      </ScrollFade>

      <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#E6CFA5]/25 to-transparent"></div>

      {/* COMO FUNCIONA — Reposicionado após Interesse Público */}
      <ComoFunciona />

      <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#E6CFA5]/25 to-transparent"></div>

      {/* 4) KNOW-HOW & DIFERENCIAIS (autoridade acima da prova social) */}
      <section className="relative py-20 bg-[#FDFCF9] mb-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCF9] via-[#F7F0E3] to-[#FDFCF9]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,#E6CFA5/45,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_bottom,#E6CFA5/35,transparent_70%)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          <div className="text-center mb-8">
            <h2 className="text-[2.05rem] md:text-[2.65rem] font-playfair font-semibold tracking-tight text-[#001F33] text-center leading-tight mb-8">
              Protocolo INBS-001:2025
            </h2>
            <div className="mx-auto h-[2px] w-16 bg-[#D9B98E] opacity-80 mb-10 rounded-full"></div>
            <p className="text-base md:text-lg text-[#001F33] max-w-3xl mx-auto leading-[1.7] font-medium">
              A base técnica que garante confiança, transparência e segurança em cada bebida certificada.
            </p>
          </div>

          {/* Subcopy explicativa */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-base md:text-lg text-[#001F33CC] leading-[1.75] mb-4 text-center md:text-justify">
              O Protocolo INBS-001:2025 é um conjunto de regras e verificações criado para dar <strong>credibilidade real</strong> ao que o consumidor bebe e ao que o comerciante vende.
            </p>
            <p className="text-base md:text-lg text-[#001F33CC] leading-[1.75] mb-4 text-center md:text-justify">
              Ele une <strong>auditoria técnica independente</strong>, <strong>tecnologia blockchain</strong> e um <strong>selo digital ativo</strong> que pode ser consultado por qualquer pessoa, em qualquer lugar do Brasil.
            </p>
            <p className="text-base md:text-lg text-[#001F33CC] leading-[1.75] text-center md:text-justify">
              O resultado é uma <strong>rede segura, pública e transparente</strong> — onde cada garrafa, cada código e cada certificado podem ser verificados em segundos, com garantia de origem e autenticidade.
            </p>
          </div>

          {/* Cards técnicos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-20">
            {[
              { 
                icon: FileCheck, 
                title: "Auditoria Técnica", 
                desc: "Todo processo é verificado por equipes independentes, com base em normas internacionais de qualidade." 
              },
              { 
                icon: Shield, 
                title: "Blockchain de Confiança", 
                desc: "Cada certificação é registrada em rede digital segura, impossível de ser apagada ou alterada." 
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col h-full rounded-3xl border border-[#E9D7BA] bg-white/95 shadow-[0_18px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_36px_rgba(0,0,0,0.12)] transition-all duration-400 px-10 py-10 gap-6"
                >
                  <div className="inline-flex h-18 w-18 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[#F7F1E4] text-[#C6A46F] shadow-inner mx-auto">
                    <IconComponent className="w-10 h-10" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[#001F33] font-playfair font-semibold text-[1.55rem] md:text-[1.65rem] tracking-tight text-center leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#0A1B2E] text-base md:text-[1.05rem] leading-[1.55] text-center px-2 flex-1">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 mb-16">
            {[
              { 
                icon: QrCode, 
                title: "Selo Digital Ativo", 
                desc: "Cada produto certificado possui QR Code único que pode ser lido pela câmera do celular." 
              },
              { 
                icon: Flag, 
                title: "Pioneirismo Nacional", 
                desc: "Primeiro sistema brasileiro que une tecnologia, fiscalização e transparência para valorizar a bebida nacional." 
              },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col h-full rounded-3xl border border-[#E9D7BA] bg-white/95 shadow-[0_18px_28px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_36px_rgba(0,0,0,0.12)] transition-all duration-400 px-10 py-10 gap-6"
                >
                  <div className="inline-flex h-18 w-18 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[#F7F1E4] text-[#C6A46F] shadow-inner mx-auto">
                    <IconComponent className="w-10 h-10" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[#001F33] font-playfair font-semibold text-[1.55rem] md:text-[1.65rem] tracking-tight text-center leading-tight">
                    {item.title === "Selo Digital Ativo" ? (
                      <>
                        Selo Digital <br className="hidden sm:block" /> Ativo
                      </>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-[#0A1B2E] text-base md:text-[1.05rem] leading-[1.55] text-center px-2 flex-1">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Microcopy institucional */}
          <div className="text-center pt-8">
            <p className="text-base md:text-lg text-[#001F33CC] leading-relaxed max-w-3xl mx-auto italic">
              &quot;Transparência e rastreabilidade com padrão técnico nacional.&quot;
              <br />
              &quot;O INBS-001 é a garantia de que a bebida que chega ao seu copo passou por auditoria, controle e validação pública.&quot;
            </p>
          </div>
        </div>
      </section>

<div className="mx-auto h-px w-40 bg-[#E6CFA5] opacity-25 rounded-full"></div>

{/* === Rede Segura & Reconhecimento Nacional === */}
<ScrollFade>
  <section className="relative overflow-hidden py-28 bg-gradient-to-b from-[#001F33] via-[#01273F] to-[#002A46] text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.16),transparent_70%)]" />
    <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-[#D9B98E]/12 blur-3xl" />
    <div className="absolute -right-44 bottom-32 h-[360px] w-[360px] rounded-full bg-[#8C6B40]/12 blur-[140px]" />

    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 text-center space-y-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-6"
      >
        <span className="inline-flex items-center justify-center rounded-full border border-[#D9B98E]/60 bg-[#D9B98E]/10 px-5 py-1 text-[0.8rem] uppercase tracking-[0.32em] text-[#F4E3C6]">
          Rede Segura & Reconhecimento
        </span>
        <p className="text-base md:text-lg text-[#F8F9FB]/88 max-w-4xl mx-auto leading-[1.75]">
          A Rede Segura Nacional –{" "}
          <span className="inline-flex items-baseline gap-[1px]">
            <span className="font-playfair text-inbsGold">Bebida Selada</span>
            <span
              className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative"
              style={{ top: "-0.35em" }}
            >
              ®
            </span>
          </span>{" "}
          é o elo que une tecnologia, transparência e governança. Reconhecida por especialistas e instituições em todo o país, fortalece a autenticidade e a confiança nas bebidas brasileiras.
        </p>
      </motion.div>

      {/* Contadores premium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {[
          {
            value: 27,
            delay: 0.2,
            duration: 2.3,
            label: "Regiões com Representantes Digitais",
          },
          {
            value: 320,
            delay: 0.45,
            duration: 2.8,
            label: "Estabelecimentos Certificados",
          },
          {
            value: 18,
            delay: 0.65,
            duration: 2.1,
            label: "Municípios Participantes",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            className="group relative flex flex-col items-center justify-center rounded-3xl border border-[#D9B98E]/65 bg-white/8 px-10 py-12 text-center shadow-[0_28px_80px_-30px_rgba(217,185,142,0.55)] backdrop-blur-md transition-all duration-300 hover:border-[#F4E3C6] hover:bg-white/12 hover:shadow-[0_32px_90px_-32px_rgba(217,185,142,0.65)]"
          >
            <AnimatedCounter
              end={item.value}
              delay={item.delay}
              duration={item.duration}
              className="text-5xl md:text-6xl font-playfair font-bold text-[#D9B98E]"
            />
            <p className="mt-3 text-base md:text-[1.05rem] text-[#F8F9FB]/85 leading-[1.55]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Citação */}
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto max-w-4xl rounded-[26px] border border-[#D9B98E]/50 bg-white/6 px-8 py-10 text-base md:text-lg text-[#F8F9FB]/90 italic leading-[1.65] shadow-[0_24px_70px_-32px_rgba(217,185,142,0.45)] backdrop-blur-md"
      >
        “A Rede Segura Nacional cresce a cada dia — unindo quem fiscaliza, quem produz e quem consome, em um movimento de transparência e confiança que transforma o mercado de bebidas no Brasil.”
      </motion.blockquote>

      {/* Cards institucionais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {[
          {
            icon: Building2,
            title: "Prefeituras Parceiras",
            desc: (
              <>
                Gestores públicos que fortalecem a transparência e a credibilidade municipal através do selo{" "}
                <span className="inline-flex items-baseline gap-[1px]">
                  <span className="font-playfair text-inbsGold">Bebida Selada</span>
                  <span
                    className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative"
                    style={{ top: "-0.35em" }}
                  >
                    ®
                  </span>
                </span>
                .
              </>
            ),
            delay: 0.6,
          },
          {
            icon: Award,
            title: "Normas Técnicas em Adoção",
            desc: "Protocolos e auditorias que inspiram novos padrões de qualidade e rastreabilidade em todo o país.",
            delay: 0.7,
          },
          {
            icon: Lightbulb,
            title: "Referência em Inovação",
            desc: "Um modelo pioneiro de blockchain e governança digital, reconhecido por especialistas e instituições de prestígio.",
            delay: 0.8,
          },
        ].map((card) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: card.delay }}
              className="group relative flex h-full flex-col items-center justify-start rounded-3xl border border-[#D9B98E]/65 bg-white/8 px-10 py-12 text-center shadow-[0_28px_80px_-30px_rgba(217,185,142,0.55)] backdrop-blur-md transition-all duration-300 hover:border-[#F4E3C6] hover:bg-white/12 hover:shadow-[0_32px_90px_-32px_rgba(217,185,142,0.65)]"
            >
              <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-[#F4E8D4] via-[#D9B98E] to-[#B88C4B] text-[#001F33] shadow-[0_18px_36px_-22px_rgba(217,185,142,0.55)]">
                <IconComponent className="h-9 w-9" />
              </div>
              <h3 className="text-[#FDFDFD] font-playfair text-[1.55rem] md:text-[1.65rem] font-semibold tracking-tight leading-tight">
                {card.title}
              </h3>
              <p className="mt-4 text-base md:text-[1.05rem] text-[#F8F9FB]/85 leading-[1.55]">
                {card.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
</ScrollFade>

<div className="mx-auto my-10 h-px w-44 bg-[#D9B98E] opacity-30 rounded-full"></div>

      {/* 7) PLANOS (componente existente) */}
      <Plans />

      <div className="mx-auto h-px w-40 bg-[#E6CFA5] opacity-25 rounded-full"></div>

      {/* === O MOVIMENTO BEBIDA SELADA® === */}
      <ScrollFade>
        <section className="py-24 bg-[#F8F9FB] text-[#001F33] mb-0">
          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 md:px-0">
            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-playfair text-[2.1rem] md:text-[2.8rem] mb-10 text-[#001F33] tracking-tight leading-tight md:leading-[1.35]"
            >
              O Movimento Nacional pela Autenticidade das Bebidas Brasileiras
            </motion.h2>

            {/* Subcopy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="max-w-4xl mx-auto mb-16 space-y-6 text-left md:text-center"
            >
              <p className="text-base md:text-lg leading-relaxed md:leading-[1.75] text-[#052240]">
                O selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> conecta produtores, fabricantes, distribuidores e governos em uma única rede de autenticidade e rastreabilidade.
              </p>
              <p className="text-base md:text-lg leading-relaxed md:leading-[1.75] text-[#052240]">
                Mais do que uma certificação, representa um <span className="text-[#8C6B40] font-semibold">padrão nacional de transparência e confiança</span> que eleva a qualidade e a credibilidade do setor de bebidas no Brasil.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14 mb-16">
              {/* Card 1 - Cadeia Produtiva Integrada */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 border border-[#E6CFA5]/70 shadow-[0_25px_60px_-30px_rgba(4,34,64,0.35)] hover:shadow-[0_30px_65px_-28px_rgba(4,34,64,0.45)] transition-all duration-300 flex flex-col items-center text-center gap-5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F4E8D4] via-[#E4CBA5] to-[#C59B58] text-4xl text-[#001F33] shadow-[0_12px_28px_-10px_rgba(197,155,88,0.55)]">
                  🏭
                </div>
                <h3 className="font-playfair font-semibold text-[1.5rem] md:text-[1.65rem] tracking-tight leading-tight text-[#001F33]">
                  Cadeia Produtiva Integrada
                </h3>
                <p className="text-base md:text-[1.05rem] text-[#052240]/90 leading-[1.55]">
                  Vinícolas, cervejarias, destilarias, cooperativas e importadoras participam de um sistema auditável que garante autenticidade e origem a cada produto certificado.
                </p>
              </motion.div>

              {/* Card 2 - Rastreabilidade e Blockchain */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 border border-[#E6CFA5]/70 shadow-[0_25px_60px_-30px_rgba(4,34,64,0.35)] hover:shadow-[0_30px_65px_-28px_rgba(4,34,64,0.45)] transition-all duration-300 flex flex-col items-center text-center gap-5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F4E8D4] via-[#E4CBA5] to-[#C59B58] text-4xl text-[#001F33] shadow-[0_12px_28px_-10px_rgba(197,155,88,0.55)]">
                  🔗
                </div>
                <h3 className="font-playfair font-semibold text-[1.5rem] md:text-[1.65rem] tracking-tight leading-tight text-[#001F33]">
                  Rastreabilidade e Blockchain
                </h3>
                <p className="text-base md:text-[1.05rem] text-[#052240]/90 leading-[1.55]">
                  Cada selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> é único, validado digitalmente e consultável por QR Code ou código de barras, garantindo rastreabilidade completa e transparência pública.
                </p>
              </motion.div>

              {/* Card 3 - Referência Nacional */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 border border-[#E6CFA5]/70 shadow-[0_25px_60px_-30px_rgba(4,34,64,0.35)] hover:shadow-[0_30px_65px_-28px_rgba(4,34,64,0.45)] transition-all duration-300 flex flex-col items-center text-center gap-5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F4E8D4] via-[#E4CBA5] to-[#C59B58] text-4xl text-[#001F33] shadow-[0_12px_28px_-10px_rgba(197,155,88,0.55)]">
                  <Landmark className="h-10 w-10 text-[#001F33]" aria-hidden="true" />
                </div>
                <h3 className="font-playfair font-semibold text-[1.5rem] md:text-[1.65rem] tracking-tight leading-tight text-[#001F33]">
                  Referência Nacional
                </h3>
                <p className="text-base md:text-[1.05rem] text-[#052240]/90 leading-[1.55]">
                  O programa consolida padrões técnicos e institucionais, fortalecendo a reputação do setor de bebidas brasileiro e promovendo maior segurança ao consumidor.
                </p>
              </motion.div>
            </div>

            {/* Copy final */}
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-[#E6CFA5]/70 bg-white/90 px-10 py-12 shadow-[0_28px_80px_-30px_rgba(4,34,64,0.35)] backdrop-blur-md"
              >
                <span className="text-[0.8rem] uppercase tracking-[0.35em] text-[#8C6B40] font-semibold">
                  Crescimento verificado
                </span>
                <p className="mt-4 text-lg md:text-[1.3rem] font-playfair text-[#001F33] leading-[1.55]">
                  Hoje, a Rede Segura Nacional — <span className="inline-flex items-baseline gap-[1px] font-semibold"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> — avança de forma constante, consolidando um novo padrão de confiança para o setor de bebidas brasileiro.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {[
                    "Dezenas de municípios integrados",
                    "Centenas de estabelecimentos auditados",
                    "Milhares de unidades autenticadas",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#E6CFA5]/80 bg-gradient-to-br from-[#FDF9F1] via-white to-[#F3E2C7] px-5 py-4 text-[0.8rem] font-medium text-[#2D3A46] shadow-[0_16px_30px_-22px_rgba(197,155,88,0.65)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="mt-7 text-base text-[#001F33CC] leading-[1.65]">
                  Um crescimento sólido, transparente e auditável em toda a cadeia — do produtor ao consumidor.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="mt-6 text-sm text-[#001F3399] italic leading-relaxed"
              >
                Dados atualizados conforme registros públicos e certificados emitidos.
              </motion.p>
            </div>
          </div>
        </section>
      </ScrollFade>

<div className="mx-auto h-px w-40 bg-[#E6CFA5] opacity-25 rounded-full"></div>

{/* 8) REPRESENTANTES DIGITAIS */}
<ScrollFade>
  <LazyRepresentanteDigital />
</ScrollFade>

<div className="mx-auto h-px w-40 bg-[#E6CFA5] opacity-25 rounded-full"></div>

{/* 9) UNIVERSIDADE BEBIDA SELADA - v3.3 Final */}
<LazyUniversidadeSection />

      <div className="mx-auto h-px w-40 bg-[#E6CFA5] opacity-25 rounded-full"></div>

      <LazyCTASection />

      <Faq />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
