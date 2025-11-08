export type LeadStatus = "pendente" | "em contato" | "convertido";

export interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  mensagem?: string;
  criadoEm: string;
  status: LeadStatus;
}

export interface LeadInput {
  nome: string;
  email: string;
  telefone: string;
  origem: string;
  mensagem?: string;
}

const STORAGE_KEY = "leads";
const LEGACY_KEYS = ["inbs_admin_leads"];

const initialLeads: Lead[] = [
  {
    id: "LD-0001",
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "(11) 99999-0000",
    origem: "representantes",
    status: "pendente",
    criadoEm: "2025-02-01T12:00:00.000Z",
  },
  {
    id: "LD-0002",
    nome: "Maria Souza",
    email: "maria@email.com",
    telefone: "(21) 98888-1111",
    origem: "prefeituras",
    status: "em contato",
    criadoEm: "2025-02-05T15:30:00.000Z",
  },
];

const isBrowser = () => typeof window !== "undefined";

const generateId = () => {
  if (isBrowser() && typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `LD-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
  }
  return `LD-${Math.floor(Date.now() / 1000)}`;
};

const parseLeads = (value: string | null): Lead[] => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Erro ao ler leads do localStorage:", error);
    return [];
  }
};

const readLeadsFromStorage = (): Lead[] => {
  if (!isBrowser()) {
    return initialLeads.slice();
  }

  const stored = parseLeads(localStorage.getItem(STORAGE_KEY));
  if (stored.length > 0) {
    return stored;
  }

  for (const legacyKey of LEGACY_KEYS) {
    const legacy = parseLeads(localStorage.getItem(legacyKey));
    if (legacy.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(legacy));
      return legacy;
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialLeads));
  return initialLeads.slice();
};

export function ensureLeadStorage(): Lead[] {
  const leads = readLeadsFromStorage();
  saveLeads(leads);
  return leads;
}

export function loadLeads(): Lead[] {
  return readLeadsFromStorage();
}

export function saveLeads(leads: Lead[]) {
  if (!isBrowser()) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function addLead(input: LeadInput): Lead {
  const current = loadLeads();
  const novoLead: Lead = {
    id: generateId(),
    nome: input.nome,
    email: input.email,
    telefone: input.telefone,
    origem: input.origem,
    mensagem: input.mensagem,
    status: "pendente",
    criadoEm: new Date().toISOString(),
  };
  const updated = [novoLead, ...current];
  saveLeads(updated);
  return novoLead;
}

export function updateLeadStatus(id: string, status: LeadStatus): Lead[] {
  const current = loadLeads();
  const updated = current.map((lead) =>
    lead.id === id ? { ...lead, status } : lead
  );
  saveLeads(updated);
  return updated;
}

export function replaceLeads(leads: Lead[]) {
  saveLeads(leads);
}

