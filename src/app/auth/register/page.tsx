"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BackButton from "../../../components/ui/BackButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    email: "",
    senha: "",
    cidade: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder para cadastro
    alert("Cadastro realizado com sucesso! (placeholder)");
    // Em produção: criar usuário e redirecionar para /dashboard ou /auth/welcome
    router.push("/auth/welcome");
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
            Cadastrar na Rede Segura Nacional
          </h1>
          <p className="text-[#001F33]/70 text-sm md:text-base mb-8 text-center leading-relaxed">
            Comece sua jornada de autenticidade agora mesmo.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="nome"
              placeholder="Nome do estabelecimento"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all"
            />
            <input
              type="text"
              name="cnpj"
              placeholder="CNPJ"
              value={formData.cnpj}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all"
            />
            <input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all"
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all"
            />
            <button
              type="submit"
              className="w-full px-6 py-4 bg-[#D9B98E] text-[#001F33] rounded-xl font-semibold hover:bg-[#E1C7A0] hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-md"
            >
              Cadastrar e acessar painel
            </button>
          </form>

          <p className="text-sm text-[#001F33]/60 mt-6 text-center">
            Já tem conta?{" "}
            <Link href="/auth/login" className="text-[#D9B98E] font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </motion.div>
      </section>

      {/* Botão Voltar */}
      <div className="text-center mt-8">
        <BackButton className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]">
          Voltar
        </BackButton>
      </div>

      <Footer />
    </main>
  );
}
