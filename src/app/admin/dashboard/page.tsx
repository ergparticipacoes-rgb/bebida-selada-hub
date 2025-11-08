"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ensureLeadStorage,
  loadLeads,
  updateLeadStatus,
  Lead,
  LeadStatus,
} from "@/data/leads";
import {
  AdminRole,
  AdminUser,
  createTeamUser,
  ensureTeamStorage,
  loadTeamUsers,
  updateTeamUser,
  deleteTeamUser,
} from "@/data/adminUsers";
import {
  Users,
  PhoneCall,
  CheckCircle2,
  Crown,
  UploadCloud,
  UserCog,
  Pencil,
  Trash2,
} from "lucide-react";

const SESSION_KEY = "admin_session";
const STATUS_OPTIONS: LeadStatus[] = ["pendente", "em contato", "convertido"];

type SessionData = {
  user: string;
  role: AdminRole;
  authenticatedAt: string;
};

const LEADS_STORAGE_KEY = "leads";
const TEAM_STORAGE_KEY = "adminUsers";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [session, setSession] = useState<SessionData | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<LeadStatus | "todos">("todos");
  const [teamUsers, setTeamUsers] = useState<AdminUser[]>([]);
  const [newUser, setNewUser] = useState({ nome: "", username: "", password: "" });
  const [teamError, setTeamError] = useState<string | null>(null);
  const [teamSuccess, setTeamSuccess] = useState<string | null>(null);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [editingValues, setEditingValues] = useState({ nome: "", username: "", password: "" });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    ensureLeadStorage();
    ensureTeamStorage();

    const sessionValue = localStorage.getItem(SESSION_KEY);
    if (!sessionValue) {
      router.replace("/admin");
      return;
    }

    try {
      const parsed = JSON.parse(sessionValue) as SessionData;
      const role = parsed.role ?? "equipe";
      const normalized: SessionData = {
        user: parsed.user,
        role,
        authenticatedAt: parsed.authenticatedAt,
      };
      setSession(normalized);
      setLeads(loadLeads());
      setTeamUsers(loadTeamUsers());
    } catch (error) {
      console.error("Sessão inválida:", error);
      localStorage.removeItem(SESSION_KEY);
      router.replace("/admin");
    }
  }, [mounted, router]);

  useEffect(() => {
    if (!mounted) return;

    const syncLeads = () => setLeads(loadLeads());
    const syncTeam = () => setTeamUsers(loadTeamUsers());

    const interval = window.setInterval(syncLeads, 5000);
    const storageListener = (event: StorageEvent) => {
      if (event.key === LEADS_STORAGE_KEY) {
        syncLeads();
      }
      if (event.key === TEAM_STORAGE_KEY) {
        syncTeam();
      }
    };

    window.addEventListener("storage", storageListener);

    return () => {
      window.removeEventListener("storage", storageListener);
      clearInterval(interval);
    };
  }, [mounted]);

  useEffect(() => {
    if (!teamSuccess) return;
    const timeout = setTimeout(() => setTeamSuccess(null), 4000);
    return () => clearTimeout(timeout);
  }, [teamSuccess]);

  const filteredLeads = useMemo(() => {
    if (filter === "todos") return leads;
    return leads.filter((lead) => lead.status === filter);
  }, [leads, filter]);

  const summaryCards = useMemo(() => {
    const base = leads.reduce(
      (acc, lead) => {
        acc.total += 1;
        acc[lead.status] += 1;
        return acc;
      },
      {
        total: 0,
        pendente: 0,
        "em contato": 0,
        convertido: 0,
      } as Record<"total" | LeadStatus, number>
    );

    return [
      {
        label: "Total de Leads",
        value: base.total,
        icon: Users,
      },
      {
        label: "Pendentes",
        value: base.pendente,
        icon: PhoneCall,
      },
      {
        label: "Em contato",
        value: base["em contato"],
        icon: CheckCircle2,
      },
      {
        label: "Convertidos",
        value: base.convertido,
        icon: Crown,
      },
      {
        label: "Equipe Comercial",
        value: teamUsers.length,
        icon: UserCog,
      },
    ];
  }, [leads, teamUsers]);

  const handleStatusChange = (leadId: string, status: LeadStatus) => {
    const updated = updateLeadStatus(leadId, status);
    setLeads(updated);
  };

  const exportToCsv = () => {
    const rows = [
      ["ID", "Nome", "Email", "Telefone", "Origem", "Mensagem", "Criado em", "Status"],
      ...leads.map((lead) => [
        lead.id,
        lead.nome,
        lead.email,
        lead.telefone,
        lead.origem,
        lead.mensagem ?? "",
        new Date(lead.criadoEm).toLocaleString("pt-BR"),
        lead.status,
      ]),
    ];

    const csvContent = rows
      .map((row) =>
        row
          .map((cell) => {
            const safe = cell ?? "";
            const cleaned = String(safe).replace(/"/g, '""');
            return `"${cleaned}"`;
          })
          .join(";")
      )
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `leads-inbs-${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    localStorage.removeItem(SESSION_KEY);
    router.replace("/");
  };

  const handleCreateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTeamError(null);
    setTeamSuccess(null);

    const nome = newUser.nome.trim();
    const username = newUser.username.trim().toLowerCase();
    const password = newUser.password.trim();

    if (!nome || !username || !password) {
      setTeamError("Preencha todos os campos para criar o usuário.");
      return;
    }

    if (password.length < 4) {
      setTeamError("A senha deve ter pelo menos 4 caracteres.");
      return;
    }

    const exists = teamUsers.some((user) => user.username === username);
    if (exists) {
      setTeamError("Já existe um usuário com esse login.");
      return;
    }

    createTeamUser({ nome, username, password });
    setTeamUsers(loadTeamUsers());
    setNewUser({ nome: "", username: "", password: "" });
    setTeamSuccess("Usuário criado com sucesso para a equipe comercial.");
  };

  const handleStartEdit = (user: AdminUser) => {
    setTeamError(null);
    setTeamSuccess(null);
    setEditingUserId(user.id);
    setEditingValues({
      nome: user.nome,
      username: user.username,
      password: "",
    });
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditingValues({ nome: "", username: "", password: "" });
  };

  const handleUpdateUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editingUserId) return;

    setTeamError(null);
    setTeamSuccess(null);

    const nome = editingValues.nome.trim();
    const username = editingValues.username.trim().toLowerCase();
    const password = editingValues.password.trim();

    if (!nome || !username) {
      setTeamError("Informe nome e usuário para salvar as alterações.");
      return;
    }

    const duplicated = teamUsers.some(
      (user) => user.id !== editingUserId && user.username === username
    );
    if (duplicated) {
      setTeamError("Já existe um usuário com esse login.");
      return;
    }

    const updated = updateTeamUser(editingUserId, {
      nome,
      username,
      password: password || undefined,
    });

    if (updated) {
      setTeamUsers(loadTeamUsers());
      setTeamSuccess("Usuário atualizado com sucesso.");
      handleCancelEdit();
    } else {
      setTeamError("Não foi possível atualizar o usuário.");
    }
  };

  const handleDeleteUser = (user: AdminUser) => {
    setTeamError(null);
    setTeamSuccess(null);

    if (user.role === "master") {
      setTeamError("O usuário master não pode ser removido.");
      return;
    }

    const removed = deleteTeamUser(user.id);
    if (removed) {
      if (editingUserId === user.id) {
        handleCancelEdit();
      }
      setTeamUsers(loadTeamUsers());
      setTeamSuccess(`Usuário ${user.nome} removido.`);
    } else {
      setTeamError("Não foi possível remover o usuário.");
    }
  };

  if (!mounted || !session) {
    return null;
  }

  const sortedTeam = [...teamUsers].sort((a, b) => {
    if (a.role === b.role) {
      return a.nome.localeCompare(b.nome);
    }
    return a.role === "master" ? -1 : 1;
  });

  return (
    <main className="min-h-screen bg-[#001728] text-white">
      <header className="sticky top-0 z-50 border-b border-[#D9B98E]/25 bg-[#001F33]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9B98E]/40 text-[#D9B98E]">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60 font-inter">
                Rede Segura Nacional
              </p>
              <p className="text-lg font-playfair text-[#D9B98E]">
                Painel Administrativo
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-inter text-white/50">Conectado como</p>
              <p className="text-sm font-semibold text-white">
                {session.user} • {session.role === "master" ? "Master" : "Equipe Comercial"}
              </p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-inter hover:bg-white/10 transition-colors duration-200"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-20 pt-12 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-playfair text-[#D9B98E]">
              Painel Administrativo – Rede Segura Nacional
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base font-inter text-white/70">
              Controle estratégico das operações comerciais, acompanhamento de leads qualificados
              e governança da equipe institucional.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setLeads(loadLeads());
                setTeamUsers(loadTeamUsers());
              }}
              className="rounded-lg border border-[#D9B98E]/40 px-4 py-2 text-sm font-inter text-[#D9B98E] hover:bg-[#D9B98E]/10 transition-colors duration-200"
            >
              Sincronizar dados
            </button>
            <button
              type="button"
              onClick={exportToCsv}
              className="inline-flex items-center gap-2 rounded-lg bg-[#D9B98E] px-5 py-3 text-sm font-semibold text-[#001F33] hover:bg-[#B8925A] transition-colors duration-200"
            >
              <UploadCloud className="h-4 w-4" />
              Exportar CSV
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.label}
                className="flex items-center justify-between rounded-2xl border border-[#D9B98E]/25 bg-[#00223A] px-6 py-5 shadow-lg shadow-black/15"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60 font-inter">
                    {card.label}
                  </p>
                  <p className="mt-2 text-3xl font-playfair text-[#D9B98E]">{card.value}</p>
                </div>
                <span className="rounded-full border border-[#D9B98E]/40 bg-[#D9B98E]/10 p-3 text-[#D9B98E]">
                  <Icon className="h-5 w-5" />
                </span>
              </article>
            );
          })}
        </section>

        <section className="rounded-3xl border border-[#D9B98E]/20 bg-[#001A2D] shadow-lg shadow-black/20">
          <div className="flex flex-col gap-4 border-b border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-playfair text-[#D9B98E]">Leads captados</h2>
              <p className="text-sm font-inter text-white/60">
                Atualize o status de atendimento e acompanhe os canais de entrada em tempo real.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="lead-filter" className="sr-only">
                Filtrar por status
              </label>
              <select
                id="lead-filter"
                value={filter}
                onChange={(event) => setFilter(event.target.value as LeadStatus | "todos")}
                className="rounded-lg border border-[#D9B98E]/40 bg-[#001F33] px-4 py-2 text-sm font-inter text-white focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
              >
                <option value="todos">Todos os status</option>
                {STATUS_OPTIONS.map((statusOption) => (
                  <option key={statusOption} value={statusOption}>
                    {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr className="bg-white/5 text-left text-xs font-inter uppercase tracking-wider text-white/60">
                  <th className="px-6 py-3">Lead</th>
                  <th className="px-6 py-3">Contato</th>
                  <th className="px-6 py-3">Origem</th>
                  <th className="px-6 py-3">Recebido em</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-sm font-inter text-white/60"
                    >
                      Nenhum lead encontrado para o filtro selecionado.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="text-sm font-inter text-white/85">
                      <td className="px-6 py-4 align-top">
                        <p className="font-semibold text-white">{lead.nome}</p>
                        <p className="text-xs text-white/60">{lead.id}</p>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <p className="text-white/80">{lead.email}</p>
                        <p className="text-white/60">{lead.telefone}</p>
                      </td>
                      <td className="px-6 py-4 align-top">
                        <p className="text-white/80 capitalize">{lead.origem}</p>
                        {lead.mensagem && (
                          <p className="mt-2 text-xs italic text-white/45">“{lead.mensagem}”</p>
                        )}
                      </td>
                      <td className="px-6 py-4 align-top">
                        {new Date(lead.criadoEm).toLocaleString("pt-BR")}
                      </td>
                      <td className="px-6 py-4 align-top">
                        <select
                          value={lead.status}
                          onChange={(event) =>
                            handleStatusChange(lead.id, event.target.value as LeadStatus)
                          }
                          className="rounded-lg border border-[#D9B98E]/30 bg-[#D9B98E]/20 px-3 py-2 text-sm font-semibold text-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
                        >
                          {STATUS_OPTIONS.map((statusOption) => (
                            <option key={`${lead.id}-${statusOption}`} value={statusOption}>
                              {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>

        {session.role === "master" && (
          <section className="rounded-3xl border border-[#D9B98E]/25 bg-[#001A2D] p-6 shadow-lg shadow-black/20">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-playfair text-[#D9B98E]">
                  Gestão da equipe comercial
                </h2>
                <p className="text-sm font-inter text-white/60">
                  Crie logins temporários para representantes e acompanhe os acessos ativos.
                </p>
              </div>
            </div>

            {(teamError || teamSuccess) && (
              <div
                className={`mt-6 rounded-xl border px-4 py-3 text-sm font-inter ${
                  teamError
                    ? "border-red-400/40 bg-red-500/15 text-red-100"
                    : "border-emerald-400/40 bg-emerald-500/15 text-emerald-100"
                }`}
              >
                {teamError ?? teamSuccess}
              </div>
            )}

            <div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Usuários cadastrados ({sortedTeam.length})
                </h3>
                <div className="space-y-4">
                  {sortedTeam.map((user) => {
                    const isEditing = editingUserId === user.id;
                    return (
                      <div
                        key={user.id}
                        className="rounded-2xl border border-[#D9B98E]/20 bg-[#001F33] px-4 py-4"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="rounded-full border border-[#D9B98E]/30 bg-[#D9B98E]/15 px-3 py-1 text-xs font-semibold text-[#D9B98E]">
                            {user.role === "master" ? "Master" : "Equipe"}
                          </span>
                          {!isEditing && (
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => handleStartEdit(user)}
                                className="rounded-lg border border-white/15 p-2 text-white/80 hover:bg-white/10 hover:text-white transition-colors duration-200"
                              >
                                <Pencil className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteUser(user)}
                                className="rounded-lg border border-white/15 p-2 text-white/80 hover:bg-red-500/20 hover:text-red-200 transition-colors duration-200 disabled:opacity-40"
                                disabled={user.role === "master"}
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          )}
                        </div>

                        {isEditing ? (
                          <form className="space-y-3" onSubmit={handleUpdateUser}>
                            <div className="space-y-1">
                              <label className="text-xs font-inter text-white/60" htmlFor={`nome-${user.id}`}>
                                Nome
                              </label>
                              <input
                                id={`nome-${user.id}`}
                                type="text"
                                value={editingValues.nome}
                                onChange={(event) =>
                                  setEditingValues((prev) => ({ ...prev, nome: event.target.value }))
                                }
                                className="w-full rounded-lg border border-[#D9B98E]/25 bg-[#001833]/80 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/35"
                                required
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-inter text-white/60" htmlFor={`user-${user.id}`}>
                                Usuário
                              </label>
                              <input
                                id={`user-${user.id}`}
                                type="text"
                                value={editingValues.username}
                                onChange={(event) =>
                                  setEditingValues((prev) => ({
                                    ...prev,
                                    username: event.target.value,
                                  }))
                                }
                                disabled={user.role === "master"}
                                className="w-full rounded-lg border border-[#D9B98E]/25 bg-[#001833]/80 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/35 disabled:opacity-60"
                                required
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="text-xs font-inter text-white/60" htmlFor={`senha-${user.id}`}>
                                Senha (opcional)
                              </label>
                              <input
                                id={`senha-${user.id}`}
                                type="text"
                                value={editingValues.password}
                                onChange={(event) =>
                                  setEditingValues((prev) => ({
                                    ...prev,
                                    password: event.target.value,
                                  }))
                                }
                                placeholder="Informe para atualizar a senha"
                                className="w-full rounded-lg border border-[#D9B98E]/25 bg-[#001833]/80 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/35"
                              />
                            </div>
                            <div className="flex items-center justify-end gap-3 pt-2">
                              <button
                                type="button"
                                onClick={handleCancelEdit}
                                className="rounded-lg border border-white/20 px-4 py-2 text-xs font-inter text-white/70 hover:bg-white/10 transition-colors duration-200"
                              >
                                Cancelar
                              </button>
                              <button
                                type="submit"
                                className="rounded-lg bg-[#D9B98E] px-4 py-2 text-xs font-semibold text-[#001F33] hover:bg-[#B8925A] transition-colors duration-200"
                              >
                                Salvar alterações
                              </button>
                            </div>
                          </form>
                        ) : (
                          <div className="space-y-1">
                            <p className="font-semibold text-white">{user.nome}</p>
                            <p className="text-xs text-white/60">@{user.username}</p>
                            <p className="text-[11px] text-white/40">
                              Criado em {new Date(user.createdAt).toLocaleDateString("pt-BR")}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <form
                onSubmit={handleCreateUser}
                className="space-y-4 rounded-2xl border border-[#D9B98E]/20 bg-[#001F33] p-6"
              >
                <h3 className="text-lg font-semibold text-white">Criar novo acesso</h3>
                <p className="text-xs text-white/60">
                  Os logins criados aqui são válidos apenas para uso interno e permanecem no
                  dispositivo via armazenamento local.
                </p>
                <input
                  type="text"
                  value={newUser.nome}
                  onChange={(event) => setNewUser((prev) => ({ ...prev, nome: event.target.value }))}
                  placeholder="Nome completo"
                  className="w-full rounded-lg border border-[#D9B98E]/30 bg-[#001933] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
                  required
                />
                <input
                  type="text"
                  value={newUser.username}
                  onChange={(event) =>
                    setNewUser((prev) => ({ ...prev, username: event.target.value }))
                  }
                  placeholder="Usuário (ex: ana.silva)"
                  className="w-full rounded-lg border border-[#D9B98E]/30 bg-[#001933] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
                  required
                />
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(event) =>
                    setNewUser((prev) => ({ ...prev, password: event.target.value }))
                  }
                  placeholder="Senha provisória"
                  className="w-full rounded-lg border border-[#D9B98E]/30 bg-[#001933] px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#D9B98E] px-4 py-3 text-sm font-semibold text-[#001F33] hover:bg-[#B8925A] transition-colors duration-200"
                >
                  Adicionar usuário da equipe
                </button>
              </form>
            </div>
          </section>
        )}
      </section>
    </main>
  );
}

