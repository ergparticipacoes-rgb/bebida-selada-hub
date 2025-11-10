"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/ui/BackButton";
import Button from "../../components/ui/Button";
import Link from "next/link";
import {
  Shield,
  Award,
  Building2,
  Link2,
  MessageSquare,
  TrendingUp,
  Leaf,
  FileCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function UniversidadePage() {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const cursos = [
    {
      icon: Shield,
      titulo: "Fundamentos da Autenticidade",
      desc: "Conceitos essenciais sobre autenticidade, certificação e confiança no mercado de bebidas.",
    },
    {
      icon: Award,
      titulo: "Boas Práticas na Cadeia de Bebidas",
      desc: "Padrões de qualidade, armazenamento, transporte e manuseio correto de bebidas.",
    },
    {
      icon: Building2,
      titulo: "Transparência e Governança Municipal",
      desc: "Como implementar políticas públicas de fiscalização e certificação em municípios.",
    },
    {
      icon: Link2,
      titulo: "Blockchain na Rastreabilidade",
      desc: "Tecnologia blockchain aplicada à rastreabilidade e autenticidade de bebidas.",
    },
    {
      icon: MessageSquare,
      titulo: "Comunicação e Consumo Consciente",
      desc: "Estratégias de comunicação transparente para promover consumo consciente e seguro.",
    },
    {
      icon: TrendingUp,
      titulo: "Gestão de Reputação e Marca Selada",
      desc: "Como construir e manter reputação positiva através do selo de autenticidade.",
    },
    {
      icon: Leaf,
      titulo: "Sustentabilidade e Origem Controlada",
      desc: "Rastreabilidade de origem, sustentabilidade e responsabilidade ambiental no setor.",
    },
    {
      icon: FileCheck,
      titulo: "Auditoria e Certificação Digital",
      desc: "Processos de auditoria técnica, certificação digital e manutenção do selo.",
    },
    {
      icon: Sparkles,
      titulo: "O Futuro da Bebida Brasileira",
      desc: "Tendências, inovações tecnológicas e perspectivas futuras do mercado de bebidas.",
    },
    {
      icon: Users,
      titulo: "Formação de Embaixadores da Autenticidade",
      desc: "Como formar multiplicadores e representantes que disseminam a cultura da autenticidade.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#001320] text-white">
      <Navbar />

      {/* Hero institucional */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001229] via-[#001F33] to-[#022C47] px-6 py-28 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.2),transparent_70%)]" />
        <div className="absolute inset-y-0 -left-32 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,185,142,0.18),transparent_70%)] blur-3xl lg:block" />
        <div className="absolute inset-y-0 -right-40 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,185,142,0.12),transparent_70%)] blur-3xl lg:block" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/45 bg-white/10 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-[#F4E4C8]"
          >
            Rede oficial de formação
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="font-playfair text-[2.6rem] md:text-[3.3rem] font-bold leading-snug text-[#FDF3E6]"
          >
            Universidade Bebida Selada
            <span className="align-super text-[0.55em] font-inter">®</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="max-w-3xl space-y-5 text-[#F8F9FB]/90 leading-[1.8]"
          >
            <p className="hidden text-lg md:block">
              O braço educacional da Rede Segura Nacional — Bebida Selada conecta governos, estabelecimentos e especialistas em um ecossistema de conhecimento que impulsiona autenticidade, fiscalização e confiança no setor de bebidas brasileiro.
            </p>
            <p className="text-base md:hidden">
              Conhecimento oficial que conecta autenticidade, fiscalização e confiança para todo o mercado de bebidas.
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: "easeOut" }}
            className="max-w-3xl text-sm md:text-base text-[#F8F9FB]/75 leading-[1.85]"
          >
            Laboratórios, trilhas EAD, workshops e certificações em rede oferecem conteúdo aplicado para gestores públicos, líderes de estabelecimentos, especialistas e representantes digitais. Todo o ecossistema aprende com a mesma linguagem institucional.
          </motion.p>
        </div>
      </section>

      {/* Missão */}
      <section className="relative overflow-hidden bg-[#FDF8EE] px-6 py-24 text-[#1F2A38]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.12),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-5xl space-y-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C7A46B]/40 bg-white/70 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.14em] text-[#7A5022]"
          >
            Formação estratégica
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-playfair text-[2.3rem] md:text-[2.6rem] font-bold leading-snug text-[#1C2A3A]"
          >
            Conhecimento oficial que sustenta a autenticidade nacional
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto max-w-3xl text-base md:text-lg leading-[1.8] text-[#2E3B4E]/85"
          >
            A <span className="font-playfair text-[#A8762A]">Universidade Bebida Selada</span>
            <span className="align-super text-[0.65em] font-inter text-[#A8762A]">®</span> transforma protocolos institucionais em trilhas práticas. Cada módulo integra legislação, tecnologia e mercado para preparar gestores, equipes fiscais, estabelecimentos e representantes.
          </motion.p>
        </div>
      </section>

      {/* Temas e cursos */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00182B] via-[#001F33] to-[#022C47] px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.18),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-6xl space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-5 text-center"
          >
            <h3 className="font-playfair text-[2.1rem] md:text-[2.4rem] font-bold text-[#FDF4E4]">
              Temas e cursos modulares
            </h3>
            <p className="mx-auto max-w-3xl text-sm md:text-base text-[#F8F9FB]/82 leading-[1.8]">
              Conteúdos técnicos, jurídicos e operacionais desenvolvidos por especialistas da Rede Segura Nacional para garantir padronização e excelência em todo o país.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {cursos.map((curso, index) => {
              const Icon = curso.icon;
              return (
                <motion.div
                  key={curso.titulo}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="flex h-full flex-col items-center space-y-6 rounded-[26px] border border-[#D9B98E]/35 bg-white/10 px-7 py-10 text-center shadow-[0_26px_80px_-42px_rgba(217,185,142,0.65)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_90px_-40px_rgba(217,185,142,0.75)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F4DEC0]/60 bg-gradient-to-br from-[#D9B98E] via-[#CDA56F] to-[#B88C4B] text-[#0C1C33] shadow-[0_20px_44px_-26px_rgba(217,185,142,0.75)]">
                    <Icon className="h-9 w-9" strokeWidth={1.6} />
                  </div>
                  <h4 className="font-playfair text-lg md:text-xl font-semibold text-[#FDF4E6]">
                    {curso.titulo}
                  </h4>
                  <p className="text-sm md:text-base leading-[1.75] text-[#F8F9FB]/80">
                    {curso.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.6 }}
            className="relative overflow-hidden rounded-[28px] border border-[#D9B98E]/40 bg-white/10 px-8 py-12 text-center shadow-[0_30px_90px_-50px_rgba(217,185,142,0.7)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.25),transparent_70%)]" />
            <div className="relative z-10 mx-auto max-w-3xl space-y-6">
              <h4 className="font-playfair text-[2rem] font-semibold text-[#FDF4E4]">
                Formação de Representantes Digitais INBS
              </h4>
              <p className="text-base md:text-lg leading-[1.8] text-[#F8F9FB]/88">
                Um programa completo com metodologias de expansão ética, marketing regional, uso das plataformas INBS e protocolos oficiais da Rede Segura Nacional.
              </p>
              <Link
                href="/representantes"
                className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_20px_48px_-26px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
              >
                Conhecer programa completo
              </Link>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.75 }}
            className="text-center font-playfair text-lg md:text-xl italic text-[#F4E3C6]/85"
          >
            A formação é o início. A expansão é o propósito.
          </motion.p>
        </div>
      </section>

      {/* Conversão */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#00182B] via-[#0B2238] to-[#001829] px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.18),transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg text-[#F2F6FB]/85 leading-[1.85]">
              Cadastre-se gratuitamente para receber os primeiros cursos, jornadas certificadas e convites exclusivos da {" "}
              <span className="font-playfair text-[#D9B98E]">Universidade Bebida Selada</span>
              <span className="align-super text-[0.6em] font-inter text-[#D9B98E]">®</span>.
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button
                variant="secondary"
                onClick={() => setShowLeadForm(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-8 md:px-12 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_22px_48px_-28px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
              >
                Quero fazer parte
              </Button>

              {showLeadForm && (
                <motion.form
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={(event) => {
                    event.preventDefault();
                    window.alert("Cadastro enviado! Entraremos em contato por e-mail.");
                    setShowLeadForm(false);
                  }}
                  className="w-full max-w-md space-y-4 rounded-[24px] border border-[#D9B98E]/45 bg-white/10 p-6 text-left shadow-[0_26px_80px_-46px_rgba(217,185,142,0.65)] backdrop-blur-lg"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#FDF4E6]/90" htmlFor="lead-name">
                      Nome completo
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      required
                      className="rounded-xl border border-[#D9B98E]/35 bg-white/90 px-4 py-3 text-sm text-[#1F2A38] placeholder-[#1F2A38]/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#FDF4E6]/90" htmlFor="lead-email">
                      E-mail institucional
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      required
                      className="rounded-xl border border-[#D9B98E]/35 bg-white/90 px-4 py-3 text-sm text-[#1F2A38] placeholder-[#1F2A38]/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="nome@instituicao.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-[#FDF4E6]/90" htmlFor="lead-role">
                      Área de atuação
                    </label>
                    <input
                      id="lead-role"
                      type="text"
                      className="rounded-xl border border-[#D9B98E]/35 bg-white/90 px-4 py-3 text-sm text-[#1F2A38] placeholder-[#1F2A38]/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="Gestão pública, estabelecimento, auditoria..."
                    />
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-7 py-2.5 text-sm font-semibold text-[#001F33] shadow-[0_18px_44px_-30px_rgba(217,185,142,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                    >
                      Enviar
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowLeadForm(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/70 bg-white/10 px-7 py-2.5 text-sm font-semibold text-[#FDF3E6] transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                    >
                      Voltar
                    </button>
                  </div>
                </motion.form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Botão voltar */}
      <section className="bg-white px-6 py-12 text-center">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <BackButton
              className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/60 bg-white px-8 py-3 text-sm md:text-base font-semibold text-[#1F2A38] shadow-[0_16px_38px_-30px_rgba(217,185,142,0.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F7EFE1]"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
