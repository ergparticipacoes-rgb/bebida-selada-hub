export type AdminRole = "master" | "equipe";

export interface AdminUser {
  id: string;
  nome: string;
  username: string;
  password: string;
  role: AdminRole;
  createdAt: string;
}

export interface CreateAdminUserInput {
  nome: string;
  username: string;
  password: string;
}

export interface UpdateAdminUserInput {
  nome?: string;
  username?: string;
  password?: string;
}

const STORAGE_KEY = "adminUsers";
const LEGACY_KEYS = ["inbs_admin_team"];
const MASTER_USERNAME = "evandro";

const masterUser: AdminUser = {
  id: "USR-MASTER",
  nome: "Evandro Rocha",
  username: MASTER_USERNAME,
  password: "inbs2025",
  role: "master",
  createdAt: "2025-01-01T12:00:00.000Z",
};

const initialTeam: AdminUser[] = [
  masterUser,
  {
    id: "USR-0001",
    nome: "Ana Lima",
    username: "ana.lima",
    password: "rsn2025",
    role: "equipe",
    createdAt: "2025-02-01T09:00:00.000Z",
  },
  {
    id: "USR-0002",
    nome: "Bruno Costa",
    username: "bruno.costa",
    password: "seguro2025",
    role: "equipe",
    createdAt: "2025-02-10T11:15:00.000Z",
  },
];

const isBrowser = () => typeof window !== "undefined";

const parseUsers = (value: string | null): AdminUser[] => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value) as AdminUser[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Erro ao ler usuários administrativos:", error);
    return [];
  }
};

const generateUserId = () => {
  if (isBrowser() && typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `USR-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
  }
  return `USR-${Math.floor(Date.now() / 1000)}`;
};

const ensureMasterPresence = (users: AdminUser[]): AdminUser[] => {
  const hasMaster = users.some((user) => user.role === "master" && user.username === MASTER_USERNAME);
  if (!hasMaster) {
    return [masterUser, ...users];
  }

  return users.map((user) =>
    user.role === "master" && user.username === MASTER_USERNAME ? { ...masterUser, ...user } : user
  );
};

const readUsersFromStorage = (): AdminUser[] => {
  if (!isBrowser()) {
    return initialTeam.slice();
  }

  const stored = parseUsers(localStorage.getItem(STORAGE_KEY));
  if (stored.length > 0) {
    return ensureMasterPresence(stored);
  }

  for (const legacyKey of LEGACY_KEYS) {
    const legacy = parseUsers(localStorage.getItem(legacyKey));
    if (legacy.length > 0) {
      const sanitized = ensureMasterPresence(legacy);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
      return sanitized;
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTeam));
  return initialTeam.slice();
};

export function ensureTeamStorage(): AdminUser[] {
  const users = readUsersFromStorage();
  saveTeamUsers(users);
  return users;
}

export function loadTeamUsers(): AdminUser[] {
  return readUsersFromStorage();
}

export function saveTeamUsers(users: AdminUser[]) {
  if (!isBrowser()) return;
  const sanitized = ensureMasterPresence(users);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized));
}

export function createTeamUser(input: CreateAdminUserInput): AdminUser {
  const users = loadTeamUsers();
  const newUser: AdminUser = {
    id: generateUserId(),
    nome: input.nome,
    username: input.username.toLowerCase(),
    password: input.password,
    role: "equipe",
    createdAt: new Date().toISOString(),
  };

  const updated = [...users, newUser];
  saveTeamUsers(updated);
  return newUser;
}

export function updateTeamUser(id: string, updates: UpdateAdminUserInput): AdminUser | null {
  const users = loadTeamUsers();
  let updatedUser: AdminUser | null = null;

  const nextUsers = users.map((user) => {
    if (user.id !== id) {
      return user;
    }

    const merged: AdminUser = {
      ...user,
      ...updates,
      username: updates.username ? updates.username.toLowerCase() : user.username,
    };

    // Evita mudar a role do master
    if (user.role === "master") {
      merged.role = "master";
      merged.username = MASTER_USERNAME;
    }

    if (updates.password === undefined || updates.password === "") {
      merged.password = user.password;
    } else {
      merged.password = updates.password;
    }

    updatedUser = merged;
    return merged;
  });

  if (updatedUser) {
    saveTeamUsers(nextUsers);
  }

  return updatedUser;
}

export function deleteTeamUser(id: string): boolean {
  const users = loadTeamUsers();
  const userToDelete = users.find((user) => user.id === id);

  if (!userToDelete || userToDelete.role === "master") {
    return false;
  }

  const nextUsers = users.filter((user) => user.id !== id);
  saveTeamUsers(nextUsers);
  return true;
}

