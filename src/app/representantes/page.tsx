"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/ui/BackButton";
import { Laptop, DollarSign, Globe, ShieldCheck } from "lucide-react";

export const dynamic = "force-static";

export default function RepresentantesPage() {
  const [planos, setPlanos] = useState(20);
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Valores dos planos
  const profissional = 147;
  const premium = 247;
  const propProf = 0.7;
  const propPrem = 0.3;

  // Comissões
  const ativacao = 0.20; // comissão de ativação
  const recorrente = 0.07; // comissão mensal

  const valorMedioPlano = (profissional * propProf) + (premium * propPrem);

  // Cálculo da carteira e ganhos
  const [dados, setDados] = useState({
    novasAtivacoes: 0,
    carteiraAtiva: 0,
    ganhoAtivacao: 0,
    ganhoRecorrente: 0,
    totalMensal: 0,
    participacaoNacional: 0, // Valor dinâmico para Participação Nacional
    tabelaMeses: [] as Array<{
      mes: number;
      novasAtivacoes: number;
      carteiraAtiva: number;
      ativacao: number;
      recorrente: number;
      totalMensal: number;
    }>,
  });

  useEffect(() => {
    const novasAtivacoes = planos;
    
    // Para este mês específico
    const ganhoAtivacao = novasAtivacoes * valorMedioPlano * ativacao;
    const ganhoRecorrente = novasAtivacoes * valorMedioPlano * recorrente;
    const totalMensal = ganhoAtivacao + ganhoRecorrente;

    // Calcular projeção de 6 meses com crescimento acumulado
    const tabelaMeses = [];
    let carteiraAcumulada = 0;
    
    for (let i = 1; i <= 6; i++) {
      // Cada mês adiciona novas ativações à carteira
      carteiraAcumulada += novasAtivacoes;
      const ativacaoMes = novasAtivacoes * valorMedioPlano * ativacao;
      const recorrenteMes = carteiraAcumulada * valorMedioPlano * recorrente;
      const totalMensalMes = ativacaoMes + recorrenteMes;
      
      tabelaMeses.push({
        mes: i,
        novasAtivacoes: novasAtivacoes,
        carteiraAtiva: carteiraAcumulada,
        ativacao: ativacaoMes,
        recorrente: recorrenteMes,
        totalMensal: totalMensalMes,
      });
    }

    // Calcular Participação Nacional dinâmica (entre R$ 900 e R$ 2.500)
    // Baseado no número de planos, variando proporcionalmente
    const minParticipacao = 900;
    const maxParticipacao = 2500;
    const participacaoNacional = Math.round(
      minParticipacao + ((planos - 5) / (100 - 5)) * (maxParticipacao - minParticipacao)
    );

    // Mensagens contextuais dinâmicas
    if (planos <= 10)
      setMensagem("Começo sólido! Já representa 2 novos estabelecimentos por semana.");
    else if (planos <= 30)
      setMensagem("Excelente! Sua cidade já começa a se destacar regionalmente.");
    else if (planos <= 60)
      setMensagem("Impressionante! Essa escala mostra potencial de liderança estadual.");
    else
      setMensagem("Nível nacional! Você estaria entre os principais representantes da Rede Segura.");

    setDados({
      novasAtivacoes,
      carteiraAtiva: novasAtivacoes, // Para o primeiro mês
      ganhoAtivacao,
      ganhoRecorrente,
      totalMensal,
      participacaoNacional,
      tabelaMeses,
    });
  }, [planos, valorMedioPlano]);

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#001229] via-[#001F33] to-[#022C48] text-[#F8F9FB] px-6 py-28 md:py-32 font-inter flex-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.22),transparent_65%)]" />
        <div className="absolute inset-y-0 -left-32 hidden lg:block w-[420px] bg-[radial-gradient(circle,rgba(217,185,142,0.18),transparent_70%)] blur-3xl" />
        <div className="absolute inset-y-0 -right-32 hidden lg:block w-[420px] bg-[radial-gradient(circle,rgba(217,185,142,0.12),transparent_70%)] blur-3xl" />

        <div className="relative z-10 mx-auto mt-10 max-w-6xl text-center space-y-16">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/45 bg-white/10 px-6 py-2 text-sm font-semibold text-[#F4E3C6]/90 tracking-[0.08em] uppercase">
              Representação oficial
            </div>
            <h1 className="text-[2.6rem] md:text-[3.2rem] font-playfair font-bold text-[#FDF4E1] leading-snug md:leading-[1.35]">
              Seja um Representante Digital
              <br className="hidden md:block" />
              <span className="font-playfair">Bebida Selada</span>
              <span className="font-inter text-[0.5em] align-super">®</span>
            </h1>
            <div className="space-y-5 max-w-3xl mx-auto text-[#F8F9FB]/88 leading-[1.8]">
              <p className="hidden md:block text-lg md:text-[1.1rem]">
                É o primeiro programa brasileiro de certificação que integra governança, tecnologia e mercado para autenticar bebidas em todo o país. Amplie a Rede Segura Nacional com atuação institucional, suporte especializado e ganhos recorrentes.
              </p>
              <p className="md:hidden text-base">
                Representar a Rede Segura Nacional é unir inovação e governança para autenticar bebidas no Brasil. Atue com suporte oficial e ganhos recorrentes.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="#simulador"
                className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
              >
                Simular ganhos mensais
              </a>
              <Link
                href="/representantes"
                className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/70 bg-white/10 px-8 md:px-10 py-3 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
              >
                Garantir minha região
              </Link>
            </div>
          </motion.div>

          {/* CARDS - v11.0 (altura uniforme e centralização perfeita) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Laptop,
                title: "Painel Exclusivo",
                desc: "Acompanhe leads, conversões e ganhos em tempo real."
              },
              {
                icon: DollarSign,
                title: "Comissão Recorrente",
                desc: "Ganhos mensais contínuos e vitalícios com expansão nacional."
              },
              {
                icon: Globe,
                title: "Atuação Oficial",
                desc: "Representatividade certificada dentro da Rede Segura Nacional."
              },
              {
                icon: ShieldCheck,
                title: "Suporte Completo",
                desc: "Material institucional, assessoria e treinamento especializado."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-start space-y-6 rounded-[28px] border border-[#D9B98E]/35 bg-white/10 px-8 py-10 text-center shadow-[0_26px_60px_-32px_rgba(217,185,142,0.55)] backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-30px_rgba(217,185,142,0.65)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#F4DEC0]/60 bg-gradient-to-br from-[#D9B98E] via-[#CDA56F] to-[#B88C4B] text-white shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)]">
                    <Icon className="h-10 w-10 text-[#1A2A38]" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-xl md:text-[1.35rem] font-playfair font-semibold text-[#FDF5E6]">
                    {item.title}
                  </h3>
                  <p className="max-w-[15rem] text-sm md:text-base font-inter leading-[1.75] text-[#F8F9FB]/80">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* SIMULADOR DE GANHOS – v10.3 */}
          <motion.section
            id="simulador"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative overflow-hidden rounded-[32px] border border-[#D9B98E]/35 bg-gradient-to-br from-[#041427] via-[#001F33] to-[#022D48] px-6 py-16 md:px-16 md:py-[6.5rem] text-center shadow-[0_36px_120px_-48px_rgba(217,185,142,0.65)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.18),transparent_65%)]" />
            <div className="absolute -bottom-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,185,142,0.28),transparent_70%)] blur-3xl" />

            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/45 bg-white/10 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-[#F8F3E8]">
                Simulação institucional
              </div>
              <h3 className="font-playfair text-[2.1rem] md:text-[2.4rem] text-[#FDF4E1] leading-snug">
                Projete sua renda recorrente como representante digital
              </h3>
              <p className="mx-auto max-w-3xl text-sm md:text-base text-[#F8F9FB]/85 leading-[1.8]">
                Ajuste o número de estabelecimentos certificados por mês e confira como os ganhos de ativação e a receita recorrente se acumulam. Use a projeção para planejar metas consistentes e fortalecer sua participação regional.
              </p>

              {/* Controle deslizante */}
              <div className="mx-auto mb-10 max-w-2xl">
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={planos}
                  onChange={(e) => setPlanos(parseInt(e.target.value))}
                  className="w-full accent-[#D9B98E] cursor-pointer"
                />
                <motion.p 
                  className="mt-3 text-xl font-semibold text-white"
                  key={planos}
                  initial={{ scale: 1.1, color: "#D9B98E" }}
                  animate={{ scale: 1, color: "#F8F9FB" }}
                  transition={{ duration: 0.3 }}
                >
                  {planos} planos certificados/mês
                </motion.p>
                <p className="mt-2 text-sm font-inter text-[#F8F9FB]/70">{mensagem}</p>
              </div>

              {/* Quatro blocos principais - v10.3 (incluindo Participação Nacional) */}
              <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-4 md:text-center">
                {/* 💰 Ativações do Mês */}
                <motion.div
                  className="rounded-2xl border border-[#D9B98E]/25 bg-white/10 p-6 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-playfair text-[#D9B98E] text-xl mb-3">
                    💰 Ativações do Mês
                  </h4>
                  <motion.p 
                    className="font-inter text-3xl font-bold text-white"
                    key={dados.ganhoAtivacao}
                    initial={{ scale: 1.1, color: "#D9B98E" }}
                    animate={{ scale: 1, color: "#F8F9FB" }}
                    transition={{ duration: 0.3 }}
                  >
                    R$ {dados.ganhoAtivacao.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.p>
                  <p className="mt-3 text-xs text-[#F8F9FB]/60 italic">
                    Comissão de ativação (mês 1)
                  </p>
                </motion.div>

                {/* 🔄 Comissão Recorrente (Carteira Ativa) */}
                <motion.div
                  className="rounded-2xl border border-[#D9B98E]/25 bg-white/10 p-6 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h4 className="font-playfair text-[#D9B98E] text-xl mb-3">
                    🔄 Comissão Recorrente
                  </h4>
                  <p className="mb-2 text-sm text-[#F8F9FB]/80">Carteira ativa</p>
                  <motion.p 
                    className="font-inter text-3xl font-bold text-white"
                    key={dados.ganhoRecorrente}
                    initial={{ scale: 1.1, color: "#D9B98E" }}
                    animate={{ scale: 1, color: "#F8F9FB" }}
                    transition={{ duration: 0.3 }}
                  >
                    R$ {dados.ganhoRecorrente.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.p>
                  <p className="mt-3 text-xs text-[#F8F9FB]/60 italic">
                    Receita mensal (mês 2 em diante)
                  </p>
                </motion.div>

                {/* 🏆 Renda Total Mensal Estimada */}
                <motion.div
                  className="rounded-2xl border border-[#D9B98E]/25 bg-white/10 p-6 backdrop-blur-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <h4 className="font-playfair text-[#D9B98E] text-xl mb-3">
                    🏆 Renda Total Mensal
                  </h4>
                  <motion.p 
                    className="font-inter text-3xl font-bold text-white"
                    key={dados.totalMensal}
                    initial={{ scale: 1.1, color: "#D9B98E" }}
                    animate={{ scale: 1, color: "#F8F9FB" }}
                    transition={{ duration: 0.3 }}
                  >
                    R$ {dados.totalMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.p>
                  <p className="mt-3 text-xs text-[#F8F9FB]/60 italic">
                    Ativações + Recorrências acumuladas
                  </p>
                </motion.div>

                {/* 🤝 Participação Nacional - v10.3 */}
                <motion.div
                  className="rounded-2xl border border-[#D9B98E]/25 bg-white/10 p-6 transition-all duration-500 backdrop-blur-lg hover:shadow-[0_24px_60px_-30px_rgba(217,185,142,0.6)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="font-playfair text-[#D9B98E] text-xl mb-3">
                    🤝 Participação Nacional
                  </h4>
                  <motion.p 
                    className="font-inter text-3xl font-bold text-[#D9B98E] transform scale-105"
                    key={dados.participacaoNacional}
                    initial={{ scale: 1.1, color: "#D9B98E" }}
                    animate={{ scale: 1.05, color: "#D9B98E" }}
                    transition={{ duration: 0.3 }}
                  >
                    R$ {dados.participacaoNacional.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}*
                  </motion.p>
                  <p className="mt-3 text-xs text-[#F8F9FB]/60 italic">
                    Estimativa ilustrativa de bônus trimestral proporcional ao desempenho nacional
                  </p>
                </motion.div>
              </div>

              {/* Tabela resumida (6 meses) */}
              <div className="mt-14 overflow-x-auto">
                <h4 className="mb-6 font-playfair text-[1.65rem] text-[#FDF3E6]">
                  Projeção de Crescimento – 6 Meses
                </h4>
                <div className="overflow-x-auto">
                  <table className="mx-auto min-w-[640px] w-full border-collapse border-t border-[#D9B98E]/30 text-sm text-[#F8F9FB]/90">
                    <thead>
                      <tr className="border-b border-[#D9B98E]/25 text-base font-semibold text-[#F4E3C6]">
                        <th className="px-4 py-3 text-center">Mês</th>
                        <th className="px-4 py-3 text-center">Novas ativações</th>
                        <th className="px-4 py-3 text-center">Carteira ativa</th>
                        <th className="px-4 py-3 text-center">Ativação (R$)</th>
                        <th className="px-4 py-3 text-center">Recorrente (R$)</th>
                        <th className="px-4 py-3 text-center">Total mensal (R$)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dados.tabelaMeses.map((m) => (
                        <motion.tr 
                          key={m.mes} 
                          className="transition border-b border-[#D9B98E]/15 hover:bg-white/5"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * m.mes }}
                        >
                          <td className="px-4 py-3 text-center font-semibold text-white">{m.mes}º</td>
                          <td className="px-4 py-3 text-center">{m.novasAtivacoes}</td>
                          <td className="px-4 py-3 text-center">{m.carteiraAtiva}</td>
                          <td className="px-4 py-3 text-center">R$ {m.ativacao.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="px-4 py-3 text-center">R$ {m.recorrente.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="px-4 py-3 text-center font-semibold text-[#D9B98E]">
                            R$ {m.totalMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Copy final do simulador - v10.2 */}
              <div className="mx-auto mt-12 max-w-3xl text-center">
                <p className="mb-3 text-base font-inter leading-relaxed text-[#F8F9FB]/92">
                  Seu resultado cresce conforme seu empenho — e cada novo estabelecimento certificado amplia o alcance da Rede Segura Nacional.
                </p>
                <p className="text-sm font-inter italic text-[#F8F9FB]/70">
                  *Simulação ilustrativa com base em médias de desempenho regionais. Os ganhos reais podem variar conforme o ritmo de expansão.*
                </p>
              </div>

              {/* CTA único - v10.3 */}
              <div className="mt-12 flex justify-center">
                <a
                  href="#formulario"
                  className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-9 md:px-12 py-3.5 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_22px_48px_-28px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                >
                  Quero Ser Representante Digital
                </a>
              </div>
            </div>
          </motion.section>

          {/* Fundo Nacional de Participação - v10.3 (sem valor fixo) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative mt-20 overflow-hidden rounded-[32px] border border-[#D9B98E]/35 bg-gradient-to-br from-[#FDF6EA] via-[#F2E2C2] to-[#E8CFA3] px-6 py-16 text-center text-[#2A1E0E] shadow-[0_30px_120px_-58px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_68%)]" />
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B97C2E]/40 bg-white/70 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-[#7A4A11]">
                Distribuição institucional
              </div>
              <h3 className="mx-auto max-w-3xl font-playfair text-[2.15rem] md:text-[2.4rem] font-bold leading-snug text-[#312922]">
                Fundo Nacional de Participação dos Representantes Digitais
              </h3>
              <p className="mx-auto max-w-3xl text-base md:text-lg leading-[1.8] text-[#3D2F1F]/88">
                A cada trimestre, uma fração do <strong>lucro líquido nacional da Rede Segura</strong> é destinada aos representantes ativos. Uma forma transparente de reconhecer o impacto local, fortalecer a expansão e premiar quem constrói a rede junto conosco.
              </p>
              <p className="mx-auto max-w-2xl text-sm md:text-base italic text-[#3D2F1F]/70">
                *Quanto maior o avanço regional, maior o bônus compartilhado. Toda atuação responsável contribui para a distribuição coletiva de resultados.*
              </p>
              <p className="mx-auto max-w-2xl text-base md:text-lg font-semibold text-[#372615]/90">
                Participar da Rede é integrar-se a um movimento nacional com distribuição de resultados, reputação institucional e geração de valor contínuo.
              </p>
              <div className="flex justify-center pt-2">
                <a
                  href="#formulario"
                  className="inline-flex items-center gap-2 rounded-full bg-[#7B4B11] px-9 md:px-12 py-3.5 text-sm md:text-base font-semibold text-[#FDF4E5] shadow-[0_22px_48px_-28px_rgba(114,69,10,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#915B1A]"
                >
                  Quero fazer parte agora
                </a>
              </div>
            </div>
          </motion.section>

          {/* Copy Final (reflexão chamativa) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative overflow-hidden rounded-[28px] border border-[#D9B98E]/35 bg-white/10 px-8 py-10 md:px-12 md:py-14 shadow-[0_30px_90px_-50px_rgba(217,185,142,0.6)] backdrop-blur-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.18),transparent_72%)]" />
            <div className="relative z-10 space-y-4 text-left md:text-center">
              <p className="font-playfair text-[1.9rem] md:text-[2.3rem] font-bold leading-snug text-[#FDF4E1]">
                Toda oportunidade de liderar um selo nacional é rara.
              </p>
              <p className="text-base md:text-lg font-inter leading-[1.8] text-[#F8F9FB]/92">
                A diferença entre <span className="font-semibold text-[#D9B98E]">assistir</span> e <span className="font-semibold text-[#D9B98E]">construir</span> está na decisão que você toma <span className="font-semibold text-[#D9B98E]">agora</span>.
              </p>
              <p className="text-base md:text-lg font-inter leading-[1.8] text-[#F8F9FB]/88">
                A Rede Segura Nacional está em expansão — esta pode ser a sua chance de crescer com reconhecimento, propósito e renda contínua, representando a inovação brasileira.
              </p>
              <p className="text-sm md:text-base font-inter italic leading-[1.7] text-[#F8F9FB]/72">
                *Quem atua com constância e propósito transforma a rede, a cidade e o mercado.*
              </p>
            </div>
          </motion.div>

          {/* FORMULÁRIO */}
          <motion.div
            id="formulario"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-[#D9B98E]/35 bg-gradient-to-br from-[#041427] via-[#001F33] to-[#022D48] px-6 py-14 md:px-12 md:py-16 shadow-[0_34px_120px_-60px_rgba(217,185,142,0.7)] backdrop-blur-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.2),transparent_70%)]" />
            {!enviado ? (
              <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/45 bg-white/10 px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.12em] text-[#F8F3E8]">
                  Inscrições prioritárias
                </div>
                <h2 className="text-[2.1rem] md:text-[2.45rem] font-playfair font-bold text-[#FDF4E1] leading-snug">
                  Cadastre-se para representar sua região
                </h2>
                <p className="mx-auto max-w-2xl text-sm md:text-base font-inter leading-[1.8] text-[#F8F9FB]/82">
                  As vagas são limitadas por município. Informe seus dados e receba instruções para garantir a atuação oficial com suporte do Instituto Bebida Selada.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnviado(true);
                  }}
                  className="mx-auto grid w-full max-w-xl gap-4 md:grid-cols-2"
                >
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    required
                    className="rounded-xl border border-[#D9B98E]/30 bg-white/10 px-4 py-3 text-sm md:text-base font-inter text-white placeholder-white/50 transition focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    required
                    className="rounded-xl border border-[#D9B98E]/30 bg-white/10 px-4 py-3 text-sm md:text-base font-inter text-white placeholder-white/50 transition focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="text"
                    placeholder="Cidade / UF"
                    required
                    className="rounded-xl border border-[#D9B98E]/30 bg-white/10 px-4 py-3 text-sm md:text-base font-inter text-white placeholder-white/50 transition focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp"
                    required
                    className="rounded-xl border border-[#D9B98E]/30 bg-white/10 px-4 py-3 text-sm md:text-base font-inter text-white placeholder-white/50 transition focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <textarea
                    placeholder="Observações (opcional)"
                    rows={4}
                    className="md:col-span-2 rounded-xl border border-[#D9B98E]/30 bg-white/10 px-4 py-3 text-sm md:text-base font-inter text-white placeholder-white/45 transition focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <div className="md:col-span-2 flex flex-wrap justify-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D9B98E] px-9 md:px-12 py-3.5 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_22px_48px_-28px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                    >
                      Quero ser representante digital
                    </button>
                  </div>
                </form>
                <p className="mx-auto max-w-lg text-xs md:text-sm font-inter text-[#F8F9FB]/65">
                  Ao enviar este cadastro você concorda em receber comunicações institucionais e confirma que as informações são verdadeiras. As vagas são preenchidas por ordem de análise.
                </p>
              </div>
            ) : (
              <div className="relative z-10 py-12 text-center">
                <h2 className="mb-4 text-[2.1rem] font-playfair font-bold text-[#FDF3E6]">
                  Cadastro enviado com sucesso!
                </h2>
                <p className="mx-auto mb-6 max-w-2xl text-base md:text-lg font-inter leading-[1.8] text-[#F8F9FB]/85">
                  Nossa equipe entrará em contato pelo WhatsApp informado. Fique atento: as vagas por cidade são analisadas conforme a disponibilidade estratégica.
                </p>
                <BackButton
                  fallbackHref="/#representantes"
                  className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/70 bg-white/10 px-9 py-3 text-sm md:text-base font-semibold text-[#FDF4E5] transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                />
              </div>
            )}
          </motion.div>

          {/* BLOCO FINAL - Vagas Limitadas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex max-w-3xl flex-col items-center gap-4 rounded-[20px] border border-[#D9B98E]/35 bg-white/10 px-8 py-6 text-[#FDF4E5] shadow-[0_22px_60px_-40px_rgba(217,185,142,0.65)] backdrop-blur-lg">
              <span className="text-xl md:text-[1.35rem] font-playfair font-semibold leading-snug">
                ⚠️ Vagas institucionais limitadas por região
              </span>
              <p className="text-sm md:text-base font-inter leading-[1.75] text-[#F8F9FB]/88">
                Preencha o cadastro para confirmar disponibilidade no seu município e receber a habilitação oficial para representar a Rede Segura Nacional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOTÃO VOLTAR */}
      <div className="mt-20 mb-24 px-6 text-center">
        <BackButton
          fallbackHref="/#representantes"
          className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/60 bg-white/10 px-8 py-3 text-sm md:text-base font-semibold text-[#FDF3E6] transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
        />
      </div>

      <Footer />
    </main>
  );
}
