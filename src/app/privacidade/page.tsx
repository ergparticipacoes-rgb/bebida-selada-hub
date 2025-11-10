"use client";

import BackButton from "../../components/ui/BackButton";

export default function PaginaPadrao() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#001F33] text-white text-center px-6">
      <h1 className="text-4xl font-playfair text-[#D9B98E] mb-4">Página em Implementação</h1>
      <p className="text-white/80 max-w-lg leading-relaxed mb-8 font-inter">
        Esta seção da Rede Segura Nacional está sendo finalizada e estará disponível em breve.
        Nossa equipe está trabalhando para entregar a melhor experiência.
      </p>
      <div className="text-center mt-12">
        <BackButton
          fallbackHref="/"
          className="rounded-2xl border border-[#D9B98E]/70 bg-white px-6 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]"
        >
          ← Voltar ao Início
        </BackButton>
      </div>
    </main>
  );
}

