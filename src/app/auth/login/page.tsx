"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { useState } from "react";
import { signIn } from "next-auth/react";

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
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#001F33] to-[#002A46]">
      <Navbar />
      
      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-[#E5C48F]/30"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#001F33] mb-2 text-center">
            Acesse a Rede Segura Nacional
          </h1>
          <p className="text-[#001F33]/70 text-sm md:text-base mb-8 text-center leading-relaxed">
            Escolha uma forma segura para entrar no seu painel de certificação.
            <br />
            Gerencie seus selos, auditorias e relatórios em tempo real.
          </p>

          {!showEmailForm ? (
            <>
              {/* Botões de Login Social */}
              <div className="space-y-4 mb-6">
                <button
                  onClick={() => handleSocialLogin("google")}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-300 rounded-xl font-semibold text-[#001F33] hover:border-[#D9B98E] hover:bg-[#F8F9FB] transition-all duration-300 shadow-sm"
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
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-black rounded-xl font-semibold text-white hover:bg-gray-800 transition-all duration-300 shadow-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Continuar com Apple
                </button>

                <button
                  onClick={() => handleSocialLogin("microsoft")}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-300 rounded-xl font-semibold text-[#001F33] hover:border-[#D9B98E] hover:bg-[#F8F9FB] transition-all duration-300 shadow-sm"
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

              {/* Divisor */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-[#001F33]/60">ou</span>
                </div>
              </div>

              {/* Link para cadastro com e-mail */}
              <button
                onClick={() => setShowEmailForm(true)}
                className="w-full text-[#001F33] text-sm font-medium hover:text-[#D9B98E] transition-colors"
              >
                Cadastrar com e-mail
              </button>
            </>
          ) : (
            <>
              {/* Formulário de Login com E-mail */}
              <form onSubmit={handleEmailLogin} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#D9B98E] text-[#001F33] rounded-xl font-semibold hover:bg-[#E1C7A0] hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-md"
                >
                  Entrar
                </button>
              </form>
              <button
                onClick={() => setShowEmailForm(false)}
                className="w-full mt-4 text-[#001F33] text-sm font-medium hover:text-[#D9B98E] transition-colors"
              >
                Voltar
              </button>
            </>
          )}

          <p className="text-sm text-[#001F33]/60 mt-6 text-center">
            Não tem conta?{" "}
            <Link href="/auth/register" className="text-[#D9B98E] font-semibold hover:underline">
              Criar conta
            </Link>
          </p>
        </motion.div>
      </section>

      {/* Botão Voltar */}
      <div className="text-center pb-10">
        <button
          onClick={() => window.history.back()}
          className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
        >
          Voltar
        </button>
      </div>

      <Footer />
    </main>
  );
}
