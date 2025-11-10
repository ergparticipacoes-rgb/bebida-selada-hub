"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import { PlusCircle, LogOut, Mail, Phone, Users, Building2, ClipboardList } from "lucide-react";

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  etapa: "Novo" | "Contato" | "Em negociação" | "Concluído";
}

interface TeamMember {
  id: string;
  nome: string;
  email: string;
  senha: string;
  perfil: "Administrador" | "Analista" | "Representante";
}

const leadTemplates: Lead[] = [
  {
    id: "L-001",
    nome: "Adega São Bento",
    email: "contato@adegasb.com",
    telefone: "(11) 99882-2001",
    origem: "Formulário site",
    etapa: "Contato",
  },
  {
    id: "L-002",
    nome: "Prefeitura de Vitória",
    email: "gestao@vitoria.gov.br",
    telefone: "(27) 3345-9000",
    origem: "Indicação representante",
    etapa: "Em negociação",
  },
  {
    id: "L-003",
    nome: "Distribuidora Ouro Verde",
    email: "comercial@ouroverde.com",
    telefone: "(31) 97777-4411",
    origem: "Evento INBS",
    etapa: "Novo",
  },
];

const teamTemplates: TeamMember[] = [
  {
    id: "T-ADM",
    nome: "Evandro Almeida",
    email: "evandro@bebidaselada.com.br",
    senha: "inbs2025",
    perfil: "Administrador",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>(leadTemplates);
  const [team, setTeam] = useState<TeamMember[]>(teamTemplates);
  const [leadForm, setLeadForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    origem: "",
  });
  const [teamForm, setTeamForm] = useState({
    nome: "",
    email: "",
    senha: "",
    perfil: "Analista" as TeamMember["perfil"],
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("inbs-admin-auth") !== "true") {
      router.replace("/admin");
    }
  }, [router]);

  const metrics = useMemo(() => {
    const totalLeads = leads.length;
    const emNegociacao = leads.filter((lead) => lead.etapa === "Em negociação").length;
    const novos = leads.filter((lead) => lead.etapa === "Novo").length;
    const concluidos = leads.filter((lead) => lead.etapa === "Concluído").length;

    return {
      totalLeads,
      emNegociacao,
      novos,
      concluidos,
    };
  }, [leads]);

  const handleCreateLead = (event: React.FormEvent) => {
    event.preventDefault();

    const novoLead: Lead = {
      id: `L-${String(leads.length + 1).padStart(3, "0")}`,
      nome: leadForm.nome,
      email: leadForm.email,
      telefone: leadForm.telefone,
      origem: leadForm.origem || "Outro",
      etapa: "Novo",
    };

    setLeads((prev) => [novoLead, ...prev]);
    setLeadForm({ nome: "", email: "", telefone: "", origem: "" });
  };

  const handleCreateTeamMember = (event: React.FormEvent) => {
    event.preventDefault();

    const novoMembro: TeamMember = {
      id: `T-${String(team.length + 1).padStart(3, "0")}`,
      nome: teamForm.nome,
      email: teamForm.email,
      senha: teamForm.senha,
      perfil: teamForm.perfil,
    };

    setTeam((prev) => [...prev, novoMembro]);
    setTeamForm({ nome: "", email: "", senha: "", perfil: "Analista" });
  };

  const handleLogout = () => {
    sessionStorage.removeItem("inbs-admin-auth");
    router.replace("/admin");
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0A1526] text-white">
      <Navbar />

      <section className="relative flex-1 overflow-hidden px-6 py-20 md:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001229] via-[#001F33] to-[#052A48]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.14),transparent_68%)]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-playfair text-[2.2rem] md:text-[2.6rem] text-[#FDF3E6]"
              >
                Console administrativo INBS
              </motion.h1>
              <p className="max-w-2xl text-sm md:text-base text-[#F8F9FB]/80 leading-[1.75]">
                Aqui você acompanha os leads cadastrados, avança etapas, registra interações e cria novos acessos para a equipe responsável.
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/55 bg-white/10 px-5 py-2.5 text-sm font-semibold text-[#FDF4E6] shadow-[0_20px_48px_-32px_rgba(217,185,142,0.55)] transition-all duração=300 hover:-translate-y-1 hover:bg-white/18"
            >
              <LogOut className="h-4 w-4" /> Sair
            </button>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Leads ativos",
                value: metrics.totalLeads,
                icon: <Users className="h-5 w-5" />,
              },
              {
                label: "Em negociação",
                value: metrics.emNegociacao,
                icon: <ClipboardList className="h-5 w-5" />,
              },
              {
                label: "Novos",
                value: metrics.novos,
                icon: <PlusCircle className="h-5 w-5" />,
              },
              {
                label: "Concluídos",
                value: metrics.concluidos,
                icon: <Building2 className="h-5 w-5" />,
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-[24px] border border-[#D9B98E]/40 bg-white/5 px-6 py-6 shadow-[0_26px_68px_-38px_rgba(217,185,142,0.65)] backdrop-blur-md"
              >
                <div className="flex items-center justify-between text-[#FDF4E6]">
                  <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[#F8F9FB]/70">
                    {item.label}
                  </span>
                  <span className="text-[#D9B98E]">{item.icon}</span>
                </div>
                <p className="mt-3 font-playfair text-[2rem] text-[#FDF4E4]">{item.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Cadastro de leads */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="rounded-[28px] border border-[#D9B98E]/40 bg-white/10 px-8 py-8 shadow-[0_30px_80px_-42px_rgba(217,185,142,0.68)] backdrop-blur-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="font-playfair text-[1.6rem] text-[#FDF4E4]">Leads em acompanhamento</h2>
                    <p className="text-sm text-[#F8F9FB]/70">Atualize etapas de acordo com a evolução do relacionamento.</p>
                  </div>
                  <span className="rounded-full border border-[#D9B98E]/50 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#D9B98E]">
                    CRM INBS
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="rounded-2xl border border-[#D9B98E]/30 bg-[#041528]/70 px-6 py-5 shadow-[0_18px_40px_-34px_rgba(217,185,142,0.55)] backdrop-blur-md"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-[#D9B98E]">{lead.id}</p>
                          <h3 className="text-lg font-semibold text-white">{lead.nome}</h3>
                          <div className="flex flex-wrap gap-3 text-xs text-[#F8F9FB]/75">
                            <span className="inline-flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> {lead.email}</span>
                            <span className="inline-flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> {lead.telefone}</span>
                            <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {lead.origem}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                          <select
                            value={lead.etapa}
                            onChange={(event) =>
                              setLeads((prev) =>
                                prev.map((item) =>
                                  item.id === lead.id
                                    ? { ...item, etapa: event.target.value as Lead["etapa"] }
                                    : item,
                                ),
                              )
                            }
                            className="rounded-full border border-[#D9B98E]/50 bg-white/10 px-4 py-2 text-xs font-semibold text-[#FDF4E6] focus:border-[#D9B98E] focus:outline-none"
                          >
                            <option value="Novo">Novo</option>
                            <option value="Contato">Contato</option>
                            <option value="Em negociação">Em negociação</option>
                            <option value="Concluído">Concluído</option>
                          </select>
                          <span className="text-[0.7rem] uppercase tracking-[0.16em] text-[#F8F9FB]/60">Atualizar etapa</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Formulários */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="rounded-[28px] border border-[#D9B98E]/40 bg-white/10 px-6 py-6 shadow-[0_28px_70px_-40px_rgba(217,185,142,0.65)] backdrop-blur-lg">
                <h3 className="font-playfair text-[1.3rem] text-[#FDF4E4] mb-4">Cadastrar novo lead</h3>
                <form onSubmit={handleCreateLead} className="space-y-4 text-[#0C2136]">
                  <input
                    type="text"
                    required
                    placeholder="Nome do lead"
                    value={leadForm.nome}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, nome: event.target.value }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-mail"
                    value={leadForm.email}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Telefone"
                    value={leadForm.telefone}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, telefone: event.target.value }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="text"
                    placeholder="Origem (evento, indicação...)"
                    value={leadForm.origem}
                    onChange={(event) => setLeadForm((prev) => ({ ...prev, origem: event.target.value }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D9B98E] px-6 py-3 text-sm font-semibold text-[#001F33] shadow-[0_22px_48px_-28px_rgba(217,185,142,0.75)] transition-all duração=300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                  >
                    <PlusCircle className="h-4 w-4" /> Adicionar lead
                  </button>
                </form>
              </div>

              <div className="rounded-[28px] border border-[#D9B98E]/40 bg-white/10 px-6 py-6 shadow-[0_28px_70px_-40px_rgba(217,185,142,0.65)] backdrop-blur-lg">
                <h3 className="font-playfair text-[1.3rem] text-[#FDF4E4] mb-4">Criar acesso da equipe</h3>
                <form onSubmit={handleCreateTeamMember} className="space-y-4 text-[#0C2136]">
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={teamForm.nome}
                    onChange={(event) => setTeamForm((prev) => ({ ...prev, nome: event.target.value }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-mail"
                    value={teamForm.email}
                    onChange={(event) => setTeamForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <input
                    type="password"
                    required
                    placeholder="Senha provisória"
                    value={teamForm.senha}
                    onChange={(event) => setTeamForm((prev) => ({ ...prev, senha: event.target.value }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  />
                  <select
                    value={teamForm.perfil}
                    onChange={(event) => setTeamForm((prev) => ({ ...prev, perfil: event.target.value as TeamMember["perfil"] }))}
                    className="w-full rounded-2xl border border-[#D9B98E]/35 bg-white/95 px-4 py-3 text-sm text-[#0C2136] focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                  >
                    <option value="Administrador">Administrador</option>
                    <option value="Analista">Analista</option>
                    <option value="Representante">Representante</option>
                  </select>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D9B98E] px-6 py-3 text-sm font-semibold text-[#001F33] shadow-[0_22px_48px_-28px_rgba(217,185,142,0.75)] transition-all duração=300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                  >
                    <PlusCircle className="h-4 w-4" /> Criar acesso
                  </button>
                </form>
              </div>

              <div className="rounded-[28px] border border-[#D9B98E]/40 bg-white/10 px-6 py-6 shadow-[0_28px_70px_-40px_rgba(217,185,142,0.65)] backdrop-blur-lg">
                <h3 className="font-playfair text-[1.3rem] text-[#FDF4E4] mb-4">Equipe habilitada</h3>
                <div className="space-y-3 text-sm text-[#F8F9FB]/85">
                  {team.map((member) => (
                    <div
                      key={member.id}
                      className="rounded-2xl border border-[#D9B98E]/30 bg-[#041528]/70 px-5 py-4 shadow-[0_16px_36px_-30px_rgba(217,185,142,0.55)] backdrop-blur-lg"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-[#FDF4E4]">{member.nome}</p>
                          <p className="text-xs text-[#F8F9FB]/65">{member.email}</p>
                        </div>
                        <span className="rounded-full border border-[#D9B98E]/40 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#D9B98E]">
                          {member.perfil}
                        </span>
                      </div>
                      <p className="mt-2 text-[0.7rem] text-[#F8F9FB]/55">
                        Senha provisória: <span className="font-semibold text-[#F4D9AA]">{member.senha}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

