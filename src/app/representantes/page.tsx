"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
      <section className="min-h-screen bg-gradient-to-b from-[#001F33] to-[#002A46] text-[#F8F9FB] py-24 px-6 font-inter flex-1">
        <div className="max-w-6xl mx-auto text-center space-y-12 mt-20">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#D9B98E] tracking-tight mb-6">
              Seja um Representante Digital <span className="font-playfair">Bebida Selada</span><span className="font-inter text-[0.55em] relative top-[-0.4em] ml-[1px]">®</span>
            </h1>
            <p className="text-lg font-inter text-[#F8F9FB]/90 leading-relaxed max-w-2xl mx-auto mb-8">
              Representar a Rede Segura Nacional é fazer parte da transformação da transparência no setor de bebidas.{" "}
              Descubra seu potencial de ganhos e junte-se ao movimento que está mudando o país.
            </p>
          </motion.div>

          {/* CARDS - v11.0 (altura uniforme e centralização perfeita) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Laptop size={48} />,
                title: "Painel Exclusivo",
                desc: "Acompanhe leads, conversões e ganhos em tempo real."
              },
              {
                icon: <DollarSign size={48} />,
                title: "Comissão Recorrente",
                desc: "Ganhos mensais contínuos e vitalícios com expansão nacional."
              },
              {
                icon: <Globe size={48} />,
                title: "Atuação Oficial",
                desc: "Representatividade certificada dentro da Rede Segura Nacional."
              },
              {
                icon: <ShieldCheck size={48} />,
                title: "Suporte Completo",
                desc: "Material institucional, assessoria e treinamento especializado."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col justify-center items-center text-center
                           bg-white/10 backdrop-blur-lg rounded-2xl p-8
                           border border-[#D9B98E]/30 shadow-lg hover:shadow-[#D9B98E]/30
                           transition-all duration-500 space-y-4 w-full min-h-[260px]"
              >
                <div className="flex justify-center items-center text-[#D9B98E] mb-3">
                  {item.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold text-center">
                  {item.title}
                </h3>
                <p className="text-[#F8F9FB]/80 font-inter leading-relaxed text-center">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* SIMULADOR DE GANHOS – v10.3 */}
          <motion.section
            id="simulador"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-gradient-to-b from-[#001F33] to-[#002A46] text-white py-16 px-6 text-center rounded-2xl border border-[#D9B98E33] shadow-xl overflow-hidden"
          >
            {/* Microanimação institucional */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D9B98E22_0%,transparent_70%)] animate-pulse-slow"></div>

            <div className="relative z-10">
              <h3 className="font-playfair text-3xl text-[#D9B98E] mb-4">
                Simulador de Renda Recorrente
              </h3>
              <p className="font-inter text-[#F8F9FB]/90 mb-6 text-base max-w-2xl mx-auto">
                Veja como sua renda mensal pode crescer conforme sua atuação avança.
              </p>

              {/* Controle deslizante */}
              <div className="mb-8">
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
                <p className="font-inter text-[#F8F9FB]/70 text-sm mt-1">{mensagem}</p>
              </div>

              {/* Quatro blocos principais - v10.3 (incluindo Participação Nacional) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-center">
                {/* 💰 Ativações do Mês */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#D9B98E]/20"
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
                  <p className="text-xs text-[#F8F9FB]/60 mt-2 italic">
                    Comissão de ativação (mês 1)
                  </p>
                </motion.div>

                {/* 🔄 Comissão Recorrente (Carteira Ativa) */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#D9B98E]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h4 className="font-playfair text-[#D9B98E] text-xl mb-3">
                    🔄 Comissão Recorrente
                  </h4>
                  <p className="text-sm text-[#F8F9FB]/80 mb-2">Carteira Ativa</p>
                  <motion.p 
                    className="font-inter text-3xl font-bold text-white"
                    key={dados.ganhoRecorrente}
                    initial={{ scale: 1.1, color: "#D9B98E" }}
                    animate={{ scale: 1, color: "#F8F9FB" }}
                    transition={{ duration: 0.3 }}
                  >
                    R$ {dados.ganhoRecorrente.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </motion.p>
                  <p className="text-xs text-[#F8F9FB]/60 mt-2 italic">
                    Receita mensal (mês 2 em diante)
                  </p>
                </motion.div>

                {/* 🏆 Renda Total Mensal Estimada */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#D9B98E]/20"
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
                  <p className="text-xs text-[#F8F9FB]/60 mt-2 italic">
                    Ativações + Recorrências acumuladas
                  </p>
                </motion.div>

                {/* 🤝 Participação Nacional - v10.3 */}
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-[#D9B98E]/20 transition-all duration-500 hover:shadow-[#D9B98E]/30"
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
                  <p className="text-xs text-[#F8F9FB]/60 mt-2 italic">
                    Estimativa ilustrativa de bônus trimestral proporcional ao desempenho nacional
                  </p>
                </motion.div>
              </div>

              {/* Tabela resumida (6 meses) */}
              <div className="mt-12 overflow-x-auto">
                <h4 className="font-playfair text-[#D9B98E] text-2xl mb-6">
                  Projeção de Crescimento – 6 Meses
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-[#F8F9FB]/90 border-collapse border-t border-[#D9B98E33] min-w-[600px] mx-auto">
                    <thead>
                      <tr className="text-[#D9B98E] font-semibold text-base border-b border-[#D9B98E33]">
                        <th className="py-3 px-4 text-center">Mês</th>
                        <th className="py-3 px-4 text-center">Novas ativações</th>
                        <th className="py-3 px-4 text-center">Carteira ativa</th>
                        <th className="py-3 px-4 text-center">Ativação (R$)</th>
                        <th className="py-3 px-4 text-center">Recorrente (R$)</th>
                        <th className="py-3 px-4 text-center">Total mensal (R$)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dados.tabelaMeses.map((m) => (
                        <motion.tr 
                          key={m.mes} 
                          className="border-b border-[#D9B98E22] hover:bg-[#002A46]/30 transition"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * m.mes }}
                        >
                          <td className="py-3 px-4 text-center font-semibold">{m.mes}º</td>
                          <td className="py-3 px-4 text-center">{m.novasAtivacoes}</td>
                          <td className="py-3 px-4 text-center">{m.carteiraAtiva}</td>
                          <td className="py-3 px-4 text-center">R$ {m.ativacao.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="py-3 px-4 text-center">R$ {m.recorrente.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                          <td className="py-3 px-4 text-center font-semibold text-[#D9B98E]">
                            R$ {m.totalMensal.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Copy final do simulador - v10.2 */}
              <div className="mt-10 text-center max-w-3xl mx-auto">
                <p className="font-inter text-[#F8F9FB]/90 text-base leading-relaxed mb-3">
                  Seu resultado cresce conforme seu empenho — e cada novo estabelecimento certificado amplia o alcance da Rede Segura Nacional.
                </p>
                <p className="font-inter italic text-[#F8F9FB]/70 text-sm">
                  *Simulação ilustrativa com base em médias de desempenho regionais. Os ganhos reais podem variar conforme o ritmo de expansão.*
                </p>
              </div>

              {/* CTA único - v10.3 */}
              <div className="mt-10 flex justify-center">
                <a
                  href="#formulario"
                  className="bg-[#D9B98E] text-[#001F33] font-semibold px-10 py-4 rounded-lg shadow-md hover:shadow-[#D9B98E]/30 hover:bg-[#C9A97D] transition-all duration-300"
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
            className="text-center bg-[#001F33] text-[#F8F9FB] py-16 px-6 mt-16 rounded-2xl border border-[#D9B98E]/30 backdrop-blur-sm shadow-lg"
          >
            <h3 className="font-playfair text-3xl text-[#D9B98E] mb-4">
              Fundo Nacional de Participação dos Representantes Digitais
            </h3>
            <p className="font-inter text-[#F8F9FB]/90 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
              A cada trimestre, uma parte do <strong>lucro líquido nacional da Rede Segura</strong> é destinada aos representantes ativos — um reconhecimento adicional ao impacto local e à contribuição individual de cada participante.
            </p>
            <p className="font-inter text-[#F8F9FB]/80 italic text-sm max-w-2xl mx-auto mb-6">
              *O Fundo de Participação reflete o desempenho coletivo e a expansão sustentável da Rede Segura Nacional. Quanto mais a rede cresce, maior é o benefício compartilhado.*
            </p>
            <p className="font-inter text-[#F8F9FB]/90 font-semibold text-xl mb-6">
              Participar da Rede é mais do que representar — é integrar-se à distribuição de resultados de um movimento nacional.
            </p>
            <a
              href="#formulario"
              className="inline-block bg-[#D9B98E] text-[#001F33] font-semibold px-10 py-4 rounded-lg shadow-md hover:shadow-[#D9B98E]/30 hover:bg-[#C9A97D] transition-all duration-300"
            >
              Quero Fazer Parte
            </a>
          </motion.section>

          {/* Copy Final (reflexão chamativa) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-gradient-to-r from-[#D9B98E]/20 to-[#D9B98E]/10 border border-[#D9B98E]/40 rounded-2xl p-8"
          >
            <p className="font-playfair text-2xl md:text-3xl text-[#D9B98E] font-bold mb-4 leading-relaxed">
              Toda oportunidade de representar um selo nacional é rara.
            </p>
            <p className="font-inter text-[#F8F9FB]/95 text-lg md:text-xl leading-relaxed mb-3">
              A diferença entre <span className="font-bold text-[#D9B98E]">assistir</span> e <span className="font-bold text-[#D9B98E]">participar</span> está na decisão que você toma <span className="font-bold text-[#D9B98E]">agora</span>.
            </p>
            <p className="font-inter text-[#F8F9FB]/90 text-base md:text-lg leading-relaxed mb-3">
              A Rede Segura Nacional está em expansão — e esta pode ser a sua chance de crescer <span className="font-bold text-[#D9B98E]">com reconhecimento, propósito e renda contínua.</span>
            </p>
            <p className="font-inter text-[#F8F9FB]/80 text-sm md:text-base italic leading-relaxed">
              *A constância de quem acredita no propósito é o que constrói resultados duradouros.*
            </p>
          </motion.div>

          {/* FORMULÁRIO */}
          <motion.div
            id="formulario"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-lg border border-[#D9B98E]/30 rounded-2xl p-10 space-y-6 shadow-lg"
          >
            {!enviado ? (
              <>
                <h2 className="text-3xl font-playfair text-[#D9B98E] mb-2">
                  Cadastre-se para Representar
                </h2>
                <p className="text-[#F8F9FB]/80 font-inter text-base mb-6 leading-relaxed">
                  As vagas são limitadas e podem encerrar a qualquer momento.  
                  <br />Preencha o cadastro e confira se ainda há disponibilidade na sua cidade.  
                  <br />Esta pode ser a sua chance de crescer junto com a gente.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setEnviado(true);
                  }}
                  className="flex flex-col gap-4 w-full max-w-lg mx-auto"
                >
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    required
                    className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter"
                  />
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    required
                    className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter"
                  />
                  <input
                    type="text"
                    placeholder="Cidade / UF"
                    required
                    className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter"
                  />
                  <input
                    type="text"
                    placeholder="WhatsApp"
                    required
                    className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter"
                  />

                  <button
                    type="submit"
                    className="bg-[#001F33] border border-[#D9B98E] text-[#F8F9FB] font-semibold px-8 py-3 rounded-lg hover:bg-[#002A46] hover:text-[#D9B98E] transition"
                  >
                    Quero Ser Representante Digital
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10">
                <h2 className="text-3xl font-playfair text-[#D9B98E] mb-4">
                  Cadastro Enviado com Sucesso!
                </h2>
                <p className="font-inter text-[#F8F9FB]/90 text-lg mb-6 leading-relaxed">
                  Nossa equipe entrará em contato com você pelo WhatsApp informado.  
                  Fique atento — as vagas por cidade são limitadas.
                </p>
                <Link
                  href="/#representantes"
                  className="inline-block bg-[#001F33] border border-[#D9B98E] text-[#D9B98E] font-semibold px-8 py-3 rounded-lg hover:bg-[#002A46] hover:text-[#F8F9FB] transition"
                >
                  ← Voltar
                </Link>
              </div>
            )}
          </motion.div>

          {/* BLOCO FINAL - Vagas Limitadas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16 text-center space-y-6"
          >
            <p className="text-[#F8F9FB]/80 font-inter text-lg">
              ⚠️ As vagas para novos Representantes Digitais são limitadas por região. <br />
              Preencha o cadastro e confira se ainda há disponibilidade na sua cidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BOTÃO VOLTAR */}
      <div className="text-center mt-20 mb-24 px-6">
        <Link
          href="/#representantes"
          className="inline-block text-[#D9B98E] font-semibold hover:underline"
        >
          ← Voltar
        </Link>
      </div>

      <Footer />
    </main>
  );
}
