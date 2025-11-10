"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../../../components/Navbar";

export default function Login() {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSocialLogin = (provider: string) => {
    // Placeholder para integração com NextAuth
    alert(`Login com ${provider} (placeholder)`);
    // Em produção: signIn(provider);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder para autenticação
    alert("Login com e-mail (placeholder)");
    // Em produção: signIn("credentials", { email, password });
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
          className="relative z-10 w-full max-w-xl rounded-[28px] border border-[#D9B98E]/40 bg-white/10 px-8 py-10 md:px-12 md:py-12 text-[#0F2238] shadow-[0_32px_120px_-56px_rgba(217,185,142,0.75)] backdrop-blur-xl"
        >
          <div className="mb-8 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/55 bg-white/15 px-6 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#F4E3C6]">
              Acesso institucional seguro
            </div>
            <h1 className="font-playfair text-[2rem] md:text-[2.35rem] font-semibold text-[#FDF4E4] leading-snug">
              Entrar na Rede Segura Nacional
            </h1>
            <p className="mx-auto max-w-lg text-sm md:text-base leading-[1.8] text-white/90 drop-shadow-md">
              Escolha uma das formas autenticadas para acessar o painel, acompanhar auditorias e administrar todas as certificações com governança INBS.
            </p>
          </div>

          {!showEmailForm ? (
            <>
              <div className="space-y-4">
                <button
                  onClick={() => handleSocialLogin("google")}
                  className="flex w-full items-center justify-center gap-3 rounded-[18px] border border-white/20 bg-white/95 px-6 py-4 text-sm font-semibold text-[#0C2136] shadow-[0_22px_48px_-30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B98E]/60 hover:bg-white"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continuar com Google
                </button>

                <button
                  onClick={() => handleSocialLogin("apple")}
                  className="flex w-full items-center justify-center gap-3 rounded-[18px] border border-white/15 bg-[#050708] px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_48px_-30px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-black"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Continuar com Apple
                </button>

                <button
                  onClick={() => handleSocialLogin("microsoft")}
                  className="flex w-full items-center justify-center gap-3 rounded-[18px] border border-white/20 bg-white/90 px-6 py-4 text-sm font-semibold text-[#0C2136] shadow-[0_22px_48px_-30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B98E]/60 hover:bg-white"
                >
                  <svg className="w-5 h-5" viewBox="0 0 23 23">
                    <path fill="#f3f3f3" d="M0 0h11v11H0z"/>
                    <path fill="#f35325" d="M12 0h11v11H12z"/>
                    <path fill="#81bc06" d="M0 12h11v11H0z"/>
                    <path fill="#05a6f0" d="M12 12h11v11H12z"/>
                  </svg>
                  Continuar com Microsoft
                </button>
              </div>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-xs font-semibold uppercase tracking-[0.18em] text-[#F8F9FB]/65">
                  <span className="rounded-full bg-[#10253C]/85 px-3 py-1 text-[0.68rem] leading-none md:text-[0.72rem]">
                    ou continuar com e-mail
                  </span>
                </div>
              </div>

              <button
                onClick={() => setShowEmailForm(true)}
                className="w-full rounded-full border border-[#D9B98E]/60 bg-white/5 px-5 py-3 text-sm font-semibold text-[#FDF4E1] transition-all duration-300 hover:-translate-y-1 hover:border-[#F4E3C6] hover:bg-white/15"
              >
                Entrar com e-mail e senha
              </button>
            </>
          ) : (
            <>
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#FDF4E4]/80" htmlFor="login-email">
                    E-mail institucional
                  </label>
                  <input
                    id="login-email"
                    type="email"
                    placeholder="nome@instituicao.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-2xl border border-[#D9B98E]/40 bg-white/95 px-4 py-3 text-sm text-[#0C2136] placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#FDF4E4]/80" htmlFor="login-password">
                    Senha
                  </label>
                  <input
                    id="login-password"
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-2xl border border-[#D9B98E]/40 bg-white/95 px-4 py-3 text-sm text-[#0C2136] placeholder-[#0C2136]/45 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/30 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-[#D9B98E] via-[#E6CFA5] to-[#D9B98E] px-6 py-4 text-sm font-semibold text-[#0B2136] shadow-[0_24px_68px_-40px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_72px_-36px_rgba(217,185,142,0.8)]"
                >
                  Entrar com credenciais
                </button>
              </form>
              <button
                onClick={() => setShowEmailForm(false)}
                className="mt-6 w-full rounded-full border border-[#D9B98E]/55 bg-white/10 px-5 py-3 text-sm font-semibold text-[#FDF4E4]/90 transition-all duration-300 hover:-translate-y-1 hover:bg-white/18"
              >
                Voltar
              </button>
            </>
          )}

          <p className="mt-8 text-sm text-[#F8F9FB]/75 text-center">
            Não tem conta?{" "}
            <Link href="/auth/register" className="font-semibold text-[#F4D9AA] transition-all hover:text-[#F8E7C9]">
              Criar conta
            </Link>
          </p>
        </motion.div>
      </section>

      <div className="pb-12 px-6 flex justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#D9B98E]/55 bg-white/8 px-6 py-2.5 text-xs md:text-sm font-semibold text-[#FDF4E4] shadow-[0_18px_38px_-28px_rgba(217,185,142,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/16"
        >
          ← Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
