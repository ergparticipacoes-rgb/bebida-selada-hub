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
import { FileCheck, QrCode, Shield, Flag, Building2, Award, Lightbulb } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";

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
    <main className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#001F33]">
      {/* NAVBAR */}
      <Navbar />

      <HeroSection />

      {/* Divisor dourado */}
      <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

      {/* 2) BLOCO INSTITUCIONAL — Interesse Público e Segurança Nacional (Premium) */}
      <ScrollFade>
        <section className="py-20 bg-[#F8F9FB] mb-0">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 text-center">
            {/* Ícone Escudo Digital e Título */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center mb-6"
            >
              <ShieldWithLock size={48} className="mb-4" />
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#001F33] mb-3 tracking-tight">
                Interesse Público e Segurança Nacional
              </h2>
              {/* Linha dourada horizontal padronizada - fundo claro (refinada) */}
              <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full mt-3 mb-3"></div>
            </motion.div>

            {/* Copy Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="max-w-4xl mx-auto space-y-6 mb-12"
            >
              <p className="text-base md:text-lg font-inter text-[#001F3399] leading-relaxed">
                A Rede Segura Nacional atua no combate à adulteração e à contaminação por metanol,
                garantindo transparência, rastreabilidade e conformidade técnica em todo o país.
              </p>
              <p className="text-base md:text-lg font-inter text-[#001F3399] leading-relaxed">
                Cada selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> representa confiança auditável — visível para o consumidor e fiscalizável por qualquer órgão público.
              </p>
              <p className="text-base md:text-lg font-inter italic text-[#032A47] opacity-85 leading-relaxed mt-6">
                Compromisso com a integridade, a vida e o consumo responsável em todo o território nacional.
              </p>
            </motion.div>

            {/* CTAs Aprimorados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {/* Botão Primário: Consultar Estabelecimentos Certificados */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <Link href="/certificados">
                  <motion.button
                    whileHover={{ scale: 1.05, filter: "brightness(110%)" }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-xl bg-[#E6CFA5] text-[#001F33] font-semibold text-base md:text-lg transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Consultar Estabelecimentos Certificados
                  </motion.button>
                </Link>
              </motion.div>

              {/* Botão Secundário: Ver Notícias e Comunicados Oficiais */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <Link href="/noticias">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 rounded-xl border-2 border-[#E6CFA5] bg-transparent text-[#001F33] font-semibold text-base md:text-lg transition-all duration-300 hover:bg-[#E6CFA5]/10 hover:shadow-sm"
                  >
                    Ver Notícias e Comunicados Oficiais
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollFade>

      {/* Divisor dourado padronizado - fundo claro (refinado) */}
      <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

      {/* COMO FUNCIONA — Reposicionado após Interesse Público */}
      <ComoFunciona />

      {/* Divisor dourado padronizado - fundo claro (refinado) */}
      <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

      {/* 4) KNOW-HOW & DIFERENCIAIS (autoridade acima da prova social) */}
      <section className="py-20 bg-[#FDFCF9] mb-0">
        <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-playfair text-[#001F33] text-center mb-8">Protocolo INBS-001:2025</h2>
            <div className="mx-auto h-[2px] w-16 bg-[#D9B98E] opacity-80 mb-10 rounded-full"></div>
            <p className="text-base md:text-lg text-[#001F33CC] max-w-3xl mx-auto leading-relaxed">
              A base técnica que garante confiança, transparência e segurança em cada bebida certificada.
            </p>
          </div>

          {/* Subcopy explicativa */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-base md:text-lg text-[#001F33CC] leading-relaxed mb-4 text-center md:text-justify">
              O Protocolo INBS-001:2025 é um conjunto de regras e verificações criado para dar <strong>credibilidade real</strong> ao que o consumidor bebe e ao que o comerciante vende.
            </p>
            <p className="text-base md:text-lg text-[#001F33CC] leading-relaxed mb-4 text-center md:text-justify">
              Ele une <strong>auditoria técnica independente</strong>, <strong>tecnologia blockchain</strong> e um <strong>selo digital ativo</strong> que pode ser consultado por qualquer pessoa, em qualquer lugar do Brasil.
            </p>
            <p className="text-base md:text-lg text-[#001F33CC] leading-relaxed text-center md:text-justify">
              O resultado é uma <strong>rede segura, pública e transparente</strong> — onde cada garrafa, cada código e cada certificado podem ser verificados em segundos, com garantia de origem e autenticidade.
            </p>
          </div>

          {/* Cards técnicos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
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
              // Quebra manual de linha para "Selo Digital Ativo"
              const renderTitle = () => {
                if (item.title === "Selo Digital Ativo") {
                  return <>Selo Digital <br /> Ativo</>;
                }
                return item.title;
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -3 }}
                  className="flex flex-col items-center text-left rounded-2xl border-2 border-[#D9B98E] bg-white shadow-sm hover:shadow-md transition-all duration-300 px-6 py-7"
                >
                  <div className="flex justify-center mb-4 text-[#D9B98E]">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="text-[#001F33] font-playfair font-semibold text-xl mb-3 text-center">{renderTitle()}</h3>
                  <p className="text-[#0A0A0A99] text-base leading-[1.5] mb-0 text-left">{item.desc}</p>
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

{/* Divisor dourado padronizado - fundo claro (refinado) */}
<div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

{/* === Rede Segura & Reconhecimento Nacional === */}
<ScrollFade>
  <section className="py-24 bg-[#001F33] text-white mb-0">
    <div className="max-w-6xl mx-auto text-center px-6 md:px-0">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-playfair text-4xl md:text-5xl mb-6 text-[#D9B98E] hover:opacity-90 transition-all duration-300"
      >
        Rede Segura & Reconhecimento Nacional
      </motion.h2>

      {/* Subcopy */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-base md:text-lg text-[#F8F9FBCC] max-w-3xl mx-auto mb-16 leading-relaxed"
      >
        A Rede Segura Nacional – <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> é o elo que une tecnologia, transparência e governança.
        Reconhecida por especialistas e instituições em todo o país, fortalece a autenticidade e a confiança nas bebidas brasileiras.
      </motion.p>

      {/* Contadores */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14 mb-16">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-3">
            <AnimatedCounter 
              end={27} 
              delay={0.2} 
              duration={2.5}
              className="text-5xl font-bold text-[#D9B98E]"
            />
          </h3>
          <p className="text-base md:text-lg text-[#F8F9FBCC]">Regiões com Representantes Digitais</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-3">
            <AnimatedCounter 
              end={320} 
              delay={0.5} 
              duration={3}
              className="text-5xl font-bold text-[#D9B98E]"
            />
          </h3>
          <p className="text-base md:text-lg text-[#F8F9FBCC]">Estabelecimentos Certificados</p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-5xl font-bold mb-3">
            <AnimatedCounter 
              end={18} 
              delay={0.8} 
              duration={2.2}
              className="text-5xl font-bold text-[#D9B98E]"
            />
          </h3>
          <p className="text-base md:text-lg text-[#F8F9FBCC]">Municípios Participantes</p>
        </div>
      </div>

      {/* Copy complementar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto mb-16"
      >
        <p className="text-base md:text-lg text-[#F8F9FBCC] italic leading-relaxed">
          &quot;A Rede Segura Nacional cresce a cada dia — unindo quem fiscaliza, quem produz e quem consome, em um movimento de transparência e confiança que transforma o mercado de bebidas no Brasil.&quot;
        </p>
      </motion.div>

      {/* Cards institucionais */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">
        {/* Card 1 - Prefeituras Parceiras */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center bg-[#002A46] p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Building2 className="h-16 w-16 text-[#D9B98E] mb-5" />
          <h3 className="text-[#D9B98E] font-playfair font-semibold text-xl mb-3">Prefeituras Parceiras</h3>
                <p className="text-base md:text-lg text-[#F8F9FBCC] leading-relaxed">
                  Gestores públicos que fortalecem a transparência e a credibilidade municipal através do selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>.
                </p>
        </motion.div>

        {/* Card 2 - Normas Técnicas em Adoção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center bg-[#002A46] p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Award className="h-16 w-16 text-[#D9B98E] mb-5" />
          <h3 className="text-[#D9B98E] font-playfair font-semibold text-xl mb-3">Normas Técnicas em Adoção</h3>
                <p className="text-base md:text-lg text-[#F8F9FBCC] leading-relaxed">
                  Protocolos e auditorias que inspiram novos padrões de qualidade e rastreabilidade em todo o país.
                </p>
        </motion.div>

        {/* Card 3 - Referência em Inovação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center bg-[#002A46] p-10 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Lightbulb className="h-16 w-16 text-[#D9B98E] mb-5" />
          <h3 className="text-[#D9B98E] font-playfair font-semibold text-xl mb-3">Referência em Inovação</h3>
                <p className="text-base md:text-lg text-[#F8F9FBCC] leading-relaxed">
                  Um modelo pioneiro de blockchain e governança digital, reconhecido por especialistas e instituições de prestígio.
                </p>
        </motion.div>
      </div>
    </div>
  </section>
</ScrollFade>

{/* Divisor dourado padronizado - fundo azul */}
<div className="h-[3px] bg-[#D9B98E] rounded-full opacity-90"></div>

      {/* 7) PLANOS (componente existente) */}
      <Plans />

      {/* Divisor dourado padronizado - fundo claro (refinado) */}
      <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

      {/* === O MOVIMENTO BEBIDA SELADA® === */}
      <ScrollFade>
        <section className="py-24 bg-[#F8F9FB] text-[#001F33] mb-0">
          <div className="max-w-6xl mx-auto text-center px-6 md:px-0">
            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-playfair text-4xl md:text-5xl mb-6 text-[#001F33]"
            >
              O Movimento Nacional pela Autenticidade das Bebidas Brasileiras
            </motion.h2>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-base md:text-lg max-w-4xl mx-auto mb-16 leading-relaxed text-[#001F33CC]"
            >
              O selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> conecta produtores, fabricantes, distribuidores e governos em uma única rede de autenticidade e rastreabilidade.  
              Mais do que uma certificação, representa um <span className="text-[#C39B6A] font-semibold" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}>padrão nacional de transparência e confiança</span> que eleva a qualidade e a credibilidade do setor de bebidas no Brasil.
            </motion.p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14 mb-16">
              {/* Card 1 - Cadeia Produtiva Integrada */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-10 border border-[#D9B98E] shadow-[#D9B98E]/30 hover:shadow-[#D9B98E]/50 transition-all duration-300"
              >
                <div className="text-[#C39B6A] text-5xl mb-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}>🏭</div>
                <h3 className="font-playfair font-semibold text-xl mb-3 text-[#001F33]">Cadeia Produtiva Integrada</h3>
                <p className="text-base md:text-lg text-[#001F33CC] leading-relaxed">
                  Vinícolas, cervejarias, destilarias, cooperativas e importadoras participam de um sistema auditável que garante autenticidade e origem a cada produto certificado.
                </p>
              </motion.div>

              {/* Card 2 - Rastreabilidade e Blockchain */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-10 border border-[#D9B98E] shadow-[#D9B98E]/30 hover:shadow-[#D9B98E]/50 transition-all duration-300"
              >
                <div className="text-[#C39B6A] text-5xl mb-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}>🔗</div>
                <h3 className="font-playfair font-semibold text-xl mb-3 text-[#001F33]">Rastreabilidade e Blockchain</h3>
                <p className="text-base md:text-lg text-[#001F33CC] leading-relaxed">
                  Cada selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> é único, validado digitalmente e consultável por QR Code ou código de barras, garantindo rastreabilidade completa e transparência pública.
                </p>
              </motion.div>

              {/* Card 3 - Referência Nacional */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-10 border border-[#D9B98E] shadow-[#D9B98E]/30 hover:shadow-[#D9B98E]/50 transition-all duration-300"
              >
                <div className="text-[#C39B6A] text-5xl mb-5" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}>🇧🇷</div>
                <h3 className="font-playfair font-semibold text-xl mb-3 text-[#001F33]">Referência Nacional</h3>
                <p className="text-base md:text-lg text-[#001F33CC] leading-relaxed">
                  O programa consolida padrões técnicos e institucionais, fortalecendo a reputação do setor de bebidas brasileiro e promovendo maior segurança ao consumidor.
                </p>
              </motion.div>
            </div>

            {/* Copy final */}
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg max-w-4xl mx-auto leading-relaxed text-[#001F33CC] mb-3"
              >
                Hoje, a <span className="font-semibold">Rede Segura Nacional – <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span></span> avança de forma constante,
                reunindo <span className="font-semibold">dezenas de municípios</span>,{" "}
                <span className="font-semibold">centenas de estabelecimentos</span> e{" "}
                <span className="font-semibold">milhares de unidades autenticadas</span>.
                {" "}Um crescimento sólido e transparente, que consolida um novo padrão de confiança
                para o setor de bebidas brasileiro.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="text-sm text-[#001F3399] italic leading-relaxed"
              >
                Dados atualizados conforme registros públicos e certificados emitidos.
              </motion.p>
            </div>
          </div>
        </section>
      </ScrollFade>

{/* Divisor dourado padronizado - fundo claro (refinado) */}
<div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

{/* 8) REPRESENTANTES DIGITAIS */}
<ScrollFade>
  <LazyRepresentanteDigital />
</ScrollFade>

{/* Divisor dourado padronizado - fundo claro (refinado) */}
<div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

{/* 9) UNIVERSIDADE BEBIDA SELADA - v3.3 Final */}
<LazyUniversidadeSection />

      {/* Divisor dourado padronizado - fundo claro (refinado) */}
      <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

      <LazyCTASection />

      {/* Divisor dourado padronizado - fundo claro (refinado) */}
      <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>

      {/* BLOCO FINAL - 142 Regiões - v3.3 Final */}
      <section className="text-center py-20 bg-[#001F33] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-5xl font-playfair text-[#D9B98E] mb-4">
            <AnimatedCounter 
              end={142} 
              className="text-[#D9B98E] text-5xl font-playfair font-bold"
            />
          </h3>
          <p className="text-lg text-[#F8F9FB]/90 mb-6">
            Regiões já integram a Rede Segura Nacional
          </p>
          <p className="text-base text-[#F8F9FB]/70 mb-8 max-w-2xl mx-auto">
            Um movimento crescente de credibilidade e transparência em todo o Brasil.
          </p>
          <Link
            href="/representantes"
            className="inline-block bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition"
          >
            Quero Fazer Parte
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
