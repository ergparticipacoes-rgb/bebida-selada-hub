"use client";

import Link from "next/link";

export default function PaginaPadrao() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#001F33] text-white text-center px-6">
      <h1 className="text-4xl font-playfair text-[#D9B98E] mb-4">Página em Implementação</h1>
      <p className="text-white/80 max-w-lg leading-relaxed mb-8 font-inter">
        Esta seção da Rede Segura Nacional está sendo finalizada e estará disponível em breve.
        Nossa equipe está trabalhando para entregar a melhor experiência.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border border-[#D9B98E] rounded-lg text-[#D9B98E] hover:bg-[#D9B98E] hover:text-[#001F33] transition"
      >
        ← Voltar ao Início
      </Link>
    </main>
  );
}

