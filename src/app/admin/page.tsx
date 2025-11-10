"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const ADMIN_EMAIL = "evandro@bebidaselada.com.br";
const ADMIN_PASSWORD = "inbs2025";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("inbs-admin-auth") === "true") {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem("inbs-admin-auth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Credenciais inválidas. Verifique e tente novamente.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#001320] text-white">
      <Navbar />

      <section className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-24 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001229] via-[#001F33] to-[#022C48]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.22),transparent_68%)]" />
        <div className="absolute -left-48 top-1/3 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,185,142,0.14),transparent_70%)] blur-3xl lg:block" />
        <div className="absolute -right-52 bottom-0 hidden h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(217,185,142,0.12),transparent_70%)] blur-3xl lg:block" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full max-w-lg space-y-10 rounded-[32px] border border-[#D9B98E]/45 bg-white/10 px-8 py-12 md:px-14 md:py-14 shadow-[0_32px_120px_-56px_rgba(217,185,142,0.75)] backdrop-blur-xl"
        >
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/55 bg-white/15 px-6 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F4E3C6]">
              Painel Administrativo
            </div>
            <h1 className="font-playfair text-[2rem] md:text-[2.3rem] font-semibold text-[#FDF4E4] leading-snug">
              Acessar console INBS
            </h1>
            <p className="mx-auto max-w-md text-sm md:text-base leading-[1.75] text-white/88">
              Utilize as credenciais autorizadas para administrar leads, equipe e operações da Rede Segura Nacional.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#FDF4E4]/90" htmlFor="admin-email">
                E-mail institucional
              </label>
              <input
                id="admin-email"
                type="email"
                placeholder="nome@bebidaselada.com.br"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError(null);
                }}
                className="w-full rounded-2xl border border-[#D9B98E]/45 bg-white/95 px-4 py-3 text-sm text-[#0C2136] placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#FDF4E4]/90" htmlFor="admin-password">
                Senha
              </label>
              <input
                id="admin-password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError(null);
                }}
                className="w-full rounded-2xl border border-[#D9B98E]/45 bg-white/95 px-4 py-3 text-sm text-[#0C2136] placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30"
                required
              />
            </div>

            {error && (
              <p className="rounded-[18px] border border-[#F2756B]/50 bg-[#180F0E]/70 px-4 py-3 text-sm text-[#F8B3A3]">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-[#D9B98E] via-[#E6CFA5] to-[#D9B98E] px-6 py-4 text-sm font-semibold text-[#0B2136] shadow-[0_24px_68px_-40px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_-36px_rgba(217,185,142,0.82)]"
            >
              Entrar no dashboard
            </button>
          </form>

          <div className="flex flex-col items-center gap-3 pt-4 text-xs text-[#F8F9FB]/70">
            <span>
              Precisa de ajuda? Entre em contato com o suporte institucional INBS.
            </span>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/55 bg-white/8 px-6 py-2 text-xs font-semibold text-[#FDF4E4] shadow-[0_18px_38px_-28px_rgba(217,185,142,0.5)] transition-all duração=300 hover:-translate-y-1 hover:bg-white/16"
            >
              ← Voltar para a Home
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
