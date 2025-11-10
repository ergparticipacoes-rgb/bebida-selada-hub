// src/app/prefeituras/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/ui/BackButton";
import {
  Building2,
  Shield,
  TrendingUp,
  MapPin,
  Users,
  Award,
  FileSignature,
  BarChart3,
  GraduationCap,
  Target,
  Lock,
  Calendar,
  Globe,
} from "lucide-react";
import { FaHandsHelping } from "react-icons/fa";

export const dynamic = "force-static";

const quickStats = [
  { label: "Municípios em adesão", value: "+40" },
  { label: "Estabelecimentos certificados", value: "+320" },
  { label: "Equipe técnica especializada", value: "24/7" },
];

const comoFuncionaCards = [
  {
    icon: FileSignature,
    title: "Adesão 100% digital",
    description:
      "Assinatura do termo de parceria, validação institucional e publicação oficial em poucos passos.",
  },
  {
    icon: Shield,
    title: "Selo municipal de transparência",
    description:
      "O município recebe o selo ativo da Rede Segura Nacional – Bebida Selada® e passa a integrar o mapa público.",
  },
  {
    icon: BarChart3,
    title: "Painel de gestão",
    description:
      "Acompanhamento em tempo real dos estabelecimentos certificados, relatórios e indicadores locais.",
  },
  {
    icon: Users,
    title: "Engajamento do comércio",
    description:
      "Campanhas e suporte para que bares, restaurantes, empórios e distribuidores adotem a certificação.",
  },
];

const beneficiosDiretos = [
  {
    icon: MapPin,
    title: "Fortalecimento econômico",
    description:
      "Aumente a arrecadação local, gere empregos e valorize o turismo responsável com bebidas autenticadas.",
  },
  {
    icon: Award,
    title: "Reconhecimento institucional",
    description:
      "Sua gestão ganha destaque nacional por investir em transparência, segurança e consumo responsável.",
  },
  {
    icon: TrendingUp,
    title: "Indicadores positivos",
    description:
      "Eleve os índices de governança, transparência e desenvolvimento sustentável do município.",
  },
];

const secretariasPrincipais = [
  {
    icon: Building2,
    title: "Fazenda / Finanças",
    description:
      "Regulariza a cadeia de bebidas, amplia arrecadação e combate a perdas tributárias.",
  },
  {
    icon: Shield,
    title: "Saúde / Vigilância Sanitária",
    description:
      "Garante bebidas seguras, evita adulterações e protege a saúde pública.",
  },
  {
    icon: TrendingUp,
    title: "Desenvolvimento Econômico / Turismo",
    description:
      "Fortalece o comércio, incentiva eventos seguros e promove a imagem da cidade.",
  },
  {
    icon: Globe,
    title: "Comunicação Social",
    description:
      "Divulga a parceria e aumenta o prestígio da gestão junto à população e à imprensa.",
  },
];

const secretariasComplementares = [
  {
    icon: Target,
    title: "Planejamento / Governo",
    description: "Integra o selo às metas de transparência e eficiência administrativa.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description: "Promove consumo responsável e educação sanitária nas redes escolares.",
  },
  {
    icon: Lock,
    title: "Segurança Pública",
    description: "Apoia fiscalizações e combate a falsificações em operações conjuntas.",
  },
  {
    icon: Calendar,
    title: "Cultura e Eventos",
    description: "Garante bebidas certificadas em festas oficiais, feiras e festivais.",
  },
  {
    icon: FaHandsHelping,
    title: "Assistência Social",
    description: "Protege o cidadão, orienta famílias e incentiva o consumo seguro.",
  },
];

export default function PrefeiturasPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    nomePrefeitura: "",
    nomeGestor: "",
    email: "",
    telefone: "",
    uf: "",
    cidade: "",
    site: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setForm({
        nomePrefeitura: "",
        nomeGestor: "",
        email: "",
        telefone: "",
        uf: "",
        cidade: "",
        site: "",
      });
    }, 4000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("formulario-adesao");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F4ED] text-[#001F33]">
      <Navbar />

      <div className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#001326] via-[#001F33] to-[#012A46] text-white px-6 py-28 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.22),transparent_70%)]" />
          <div className="absolute -left-48 top-16 h-[360px] w-[360px] rounded-full bg-[#D9B98E]/18 blur-[160px]" />
          <div className="absolute -right-52 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8C6B40]/18 blur-[190px]" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center space-y-10 md:space-y-[4rem] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-[2.7rem] md:text-[3.7rem] font-playfair font-bold leading-snug md:leading-[1.18] text-[#FDF4E1] drop-shadow-[0_12px_32px_rgba(5,25,46,0.45)]">
                Prefeituras parceiras da transparência nacional
              </h1>
              <p className="text-lg md:text-[1.35rem] text-[#FFF5E6]/90 leading-[1.75] max-w-3xl mx-auto">
                Gestores municipais que aderem à Rede Segura Nacional – <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> elevam a credibilidade da gestão, impulsionam o desenvolvimento econômico e entregam consumo seguro à população.
              </p>
              <div className="flex flex-wrap justify-center gap-5 pt-8">
                <button
                  onClick={scrollToForm}
                  className="group inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[#D9B98E] px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)] transition-all duração-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                >
                  Quero tornar meu município parceiro
                  <span className="opacity-0 translate-x-[-4px] transition-all duração-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </button>
                <Link
                  href="#beneficios"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#D9B98E]/70 bg-white/10 px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-white transition-all duração-300 hover:-translate-y-1 hover:bg-white/15 hover:border-[#F4E3C6]"
                >
                  Ver benefícios diretos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="bg-[#FDF9F0] py-20">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 px-6 text-center">
            {quickStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex h-44 w-[18rem] flex-col items-center justify-center rounded-3xl border border-[#D9B98E]/45 bg-white/85 px-8 shadow-[0_18px_40px_-30px_rgba(201,169,125,0.35)] backdrop-blur-md"
              >
                <span className="text-[2.8rem] font-playfair font-bold text-[#C19B5A] drop-shadow-[0_0_12px_rgba(193,155,90,0.4)]">
                  {stat.value}
                </span>
                <span className="mt-3 text-sm md:text-base text-[#312922]/80 uppercase tracking-[0.25em]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#001F33] via-[#01273F] to-[#001A2B] py-32 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.16),transparent_70%)]" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 md:px-16 text-center space-y-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2.35rem] md:text-[2.8rem] font-playfair font-bold text-[#FDF4E1]"
            >
              Como a parceria funciona
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {comoFuncionaCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex h-full flex-col items-center gap-4 rounded-[26px] border border-[#D9B98E]/60 bg-white/10 px-8 py-12 text-center shadow-[0_22px_70px_-35px_rgba(217,185,142,0.55)] backdrop-blur-lg transition-all duração-300 hover:-translate-y-2 hover:border-[#F4E3C6]"
                >
                  <card.icon className="h-11 w-11 text-[#F4E3C6] drop-shadow-[0_0_12px_rgba(244,227,198,0.3)]" />
                  <h3 className="text-base md:text-lg font-semibold text-white leading-snug tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/85 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios diretos */}
        <section id="beneficios" className="bg-[#FDF9F0] py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 text-center space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2.3rem] md:text-[2.7rem] font-playfair font-bold text-[#1F2A38]"
            >
              Benefícios diretos para o município
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beneficiosDiretos.map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group flex h-full flex-col items-center gap-5 rounded-[26px] border border-[#D9B98E]/55 bg-white px-9 py-12 text-center shadow-[0_18px_48px_-28px_rgba(217,185,142,0.4)] transition-all duração-300 hover:-translate-y-2"
                >
                  <card.icon className="h-11 w-11 text-[#C19B5A]" />
                  <h3 className="text-lg md:text-xl font-semibold text-[#1F2A38]">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-[0.95rem] text-[#312922]/80 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Secretarias principais */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 text-center space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2.1rem] md:text-[2.4rem] font-playfair font-bold"
            >
              Secretarias protagonistas na implantação
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {secretariasPrincipais.map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group flex h_full flex-col items-center gap-5 rounded-[24px] border border-[#C19B5A]/50 bg-white px-8 py-9 text-center shadow-[0_18px_40px_-28px_rgba(193,155,90,0.35)]"
                >
                  <card.icon className="h-12 w-12 text-[#C19B5A]" />
                  <div>
                    <h3 className="text-lg md:text-[1.25rem] font-semibold text-[#1F2A38]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] text-[#312922]/75 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Secretarias complementares */}
        <section className="bg-[#F7F4ED] py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10 md:px-16 space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-[2.2rem] md:text-[2.5rem] font-playfair font-bold text-[#1F2A38]"
            >
              Parceria integrada em toda a gestão
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {secretariasComplementares.map((card) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group flex h-full flex-col items-center gap-4 rounded-[22px] border border-[#C9A97D]/45 bg-white px-6 py-7 text-center shadow-[0_16px_36px_-26px_rgba(201,169,125,0.35)]"
                >
                  <card.icon className="h-10 w-10 text-[#C19B5A]" />
                  <h3 className="text-base md:text-lg font-semibold text-[#1F2A38]">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#312922]/75 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Declaração institucional */}
        <section className="bg-gradient-to-b from-[#001F33] to-[#012A46] py-24 text-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 md:px-16 text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[2.3rem] md:text-[2.6rem] font-playfair font-bold text-[#FDF4E1]"
            >
              Movimento nacional por integridade e transparência
            </motion.h2>
            <p className="text-base md:text-[1.15rem] text-[#FFF5E6]/88 leading-[1.78] max-w-4xl mx-auto">
              A Rede Segura Nacional – <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> está presente em dezenas de municípios, conectando prefeituras, estabelecimentos e consumidores em uma plataforma auditável de confiança, rastreabilidade e consumo responsável.
            </p>
          </div>
        </section>

        {/* Formulário */}
        <section
          id="formulario-adesao"
          className="bg-[#FDF9F0] py-24 md:py-30"
        >
          <div className="mx-auto max-w-5xl px-6 sm:px-10 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <h2 className="text-[2.3rem] md:text-[2.7rem] font-playfair font-bold text-[#1F2A38]">
                Solicitação de parceria institucional
              </h2>
              <p className="text-base md:text-[1.1rem] text-[#312922]/80 leading-[1.75] max-w-3xl mx-auto">
                Preencha os dados para receber o protocolo técnico, termo de adesão e orientações para publicação oficial. Nossa equipe responde em até 48 horas úteis.
              </p>
            </motion.div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 rounded-[28px] border border-[#D9B98E]/50 bg-white/85 px-10 py-16 text-center shadow-[0_24px_70px_-28px_rgba(217,185,142,0.45)]"
              >
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-playfair font-semibold text-[#1F2A38]">
                  Solicitação recebida com sucesso
                </h3>
                <p className="mt-4 text-base text-[#312922]/75">
                  Nossa equipe técnica entrará em contato em breve para formalizar a parceria.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="mt-12 space-y-7 rounded-[30px] border border-[#D9B98E]/45 bg-white/95 px-9 py-12 md:px-14 md:py-14 shadow-[0_24px_70px_-28px_rgba(217,185,142,0.45)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nomePrefeitura" className="block text-sm font-semibold text-[#1F2A38] mb-2">
                      Nome da prefeitura*
                    </label>
                    <input
                      id="nomePrefeitura"
                      name="nomePrefeitura"
                      type="text"
                      required
                      value={form.nomePrefeitura}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white px-5 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="Prefeitura Municipal de..."
                    />
                  </div>
                  <div>
                    <label htmlFor="nomeGestor" className="block text-sm font-semibold text-[#1F2A38] mb-2">
                      Nome do gestor responsável*
                    </label>
                    <input
                      id="nomeGestor"
                      name="nomeGestor"
                      type="text"
                      required
                      value={form.nomeGestor}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white px-5 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="Nome completo"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#1F2A38] mb-2">
                      E-mail institucional*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white px-5 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="contato@prefeitura.gov.br"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-[#1F2A38] mb-2">
                      Telefone / WhatsApp*
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={form.telefone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white px-5 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="uf" className="block text-sm font-semibold text-[#1F2A38] mb-2">
                      UF*
                    </label>
                    <select
                      id="uf"
                      name="uf"
                      required
                      value={form.uf}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white px-5 py-3 text-sm md:text-base text-[#1F2A38] focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                    >
                      <option value="">Selecione</option>
                      {["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map((uf) => (
                        <option key={uf} value={uf}>
                          {uf}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cidade" className="block text-sm font-semibold text-[#1F2A38] mb-2">
                      Cidade*
                    </label>
                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      required
                      value={form.cidade}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white px-5 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                      placeholder="Nome da cidade"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="site" className="block text-sm font-semibold text-[#1F2A38] mb-2">
                    Site oficial (opcional)
                  </label>
                  <input
                    id="site"
                    name="site"
                    type="url"
                    value={form.site}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white px-5 py-3 text-sm md:text-base text-[#1F2A38] placeholder-[#1F2A38]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                    placeholder="https://www.prefeitura.gov.br"
                  />
                </div>

                <div className="pt-5 text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9B98E] px-12 py-4 text-lg font-semibold text-[#001F33] shadow-[0_20px_45px_-28px_rgba(217,185,142,0.7)] transition-all duração-400 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                  >
                    Enviar solicitação
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </section>

        <div className="py-16 text-center">
          <BackButton
            className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}

