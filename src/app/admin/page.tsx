"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ensureLeadStorage } from "@/data/leads";
import { ensureTeamStorage, loadTeamUsers } from "@/data/adminUsers";

const MASTER_USERNAME = "evandro";
const MASTER_PASSWORD = "inbs2025";
const SESSION_KEY = "admin_session";

export default function AdminPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    ensureLeadStorage();
    ensureTeamStorage();

    const session = typeof window !== "undefined" ? localStorage.getItem(SESSION_KEY) : null;
    if (session) {
      router.replace("/admin/dashboard");
    }
  }, [mounted, router]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedUser = username.trim().toLowerCase();

    if (normalizedUser === MASTER_USERNAME && password === MASTER_PASSWORD) {
      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
          user: MASTER_USERNAME,
          role: "master",
          authenticatedAt: new Date().toISOString(),
        })
      );
      setError(null);
      router.replace("/admin/dashboard");
      return;
    }

    const teamUsers = loadTeamUsers();
    const foundUser = teamUsers.find(
      (user) => user.username === normalizedUser && user.password === password
    );

    if (foundUser) {
      localStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
          user: foundUser.username,
          role: foundUser.role,
          authenticatedAt: new Date().toISOString(),
        })
      );
      setError(null);
      router.replace("/admin/dashboard");
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleProviderClick = (provider: "google" | "apple") => {
    console.info(`Fluxo de login para ${provider} ainda não implementado.`);
    setError("Integração em desenvolvimento. Utilize suas credenciais institucionais.");
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#001F33] bg-[radial-gradient(circle_at_top,_rgba(217,185,142,0.18),_transparent_60%)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md space-y-10 rounded-3xl border border-[#D9B98E]/25 bg-[#001A2D]/85 backdrop-blur-xl p-10 shadow-[0_32px_90px_rgba(0,0,0,0.45)]">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D9B98E]/40 bg-[#001F33] text-[#D9B98E] font-playfair text-xl">
            INBS
          </div>
          <div>
            <span className="mb-2 block text-xs font-inter uppercase tracking-[0.45em] text-white/45">
              Rede Segura Nacional
            </span>
            <h1 className="text-3xl font-playfair text-[#D9B98E]">Acesso Administrativo</h1>
            <p className="mt-3 text-sm font-inter text-white/65">
              Entrar com credenciais institucionais da equipe INBS.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-inter text-white/70" htmlFor="admin-user">
              Usuário
            </label>
            <input
              id="admin-user"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-lg border border-[#D9B98E]/30 bg-[#001833]/70 px-4 py-3 text-white placeholder-white/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/35"
              placeholder="ex: evandro"
              autoComplete="username"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-inter text-white/70" htmlFor="admin-pass">
              Senha
            </label>
            <input
              id="admin-pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#D9B98E]/30 bg-[#001833]/70 px-4 py-3 text-white placeholder-white/40 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/35"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          {error && (
            <p className="rounded-lg border border-red-400/30 bg-red-500/15 px-3 py-2 text-sm text-red-200">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#D9B98E] px-6 py-3 font-inter font-semibold text-[#001F33] hover:bg-[#B8925A] transition-colors duration-200"
          >
            Entrar
          </button>
        </form>

        <div className="space-y-3 pt-2">
          <p className="text-center text-xs font-inter uppercase tracking-widest text-white/40">
            Em breve
          </p>
          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => handleProviderClick("google")}
              className="w-full rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-inter text-white/85 hover:bg-white/10 transition-colors duration-200"
            >
              Entrar com Google
            </button>
            <button
              type="button"
              onClick={() => handleProviderClick("apple")}
              className="w-full rounded-lg border border-white/20 bg-transparent px-6 py-3 text-sm font-inter text-white/85 hover:bg-white/10 transition-colors duration-200"
            >
              Entrar com Apple
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
