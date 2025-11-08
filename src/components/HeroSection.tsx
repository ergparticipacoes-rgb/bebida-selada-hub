"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="bg-gradient-to-r from-[#004C6D] to-[#001F33] text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-playfair font-bold mb-6 text-white tracking-tight">
        A Rede Segura Nacional – <span className="text-[#D9B98E]">Bebida Selada</span>
        <span className="text-[0.65em] relative top-[-0.35em] ml-[2px]">®</span>
        <br />
        é o primeiro sistema brasileiro de certificação inteligente, rastreabilidade e confiança no setor de bebidas.
      </h1>
      <p className="text-lg font-inter mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
        Conectamos tecnologia, prefeituras, estabelecimentos e consumidores em uma rede que promove segurança, transparência e desenvolvimento sustentável em todo o país.
      </p>

      <div className="flex justify-center flex-wrap gap-4 mt-6">
        <Link
          href="/prefeituras"
          className="px-6 py-3 rounded-lg bg-[#D9B98E] text-[#001F33] font-semibold hover:scale-105 transition-all"
        >
          Sou Prefeitura
        </Link>
        <Link
          href="/estabelecimentos"
          className="px-6 py-3 rounded-lg border border-[#D9B98E] text-[#D9B98E] font-semibold hover:bg-[#D9B98E]/10 hover:scale-105 transition-all"
        >
          Sou Estabelecimento
        </Link>
        <Link
          href="/representantes"
          className="px-6 py-3 rounded-lg border border-[#D9B98E] text-[#D9B98E] font-semibold hover:bg-[#D9B98E]/10 hover:scale-105 transition-all"
        >
          Sou Representante Digital
        </Link>
        <Link
          href="/consulta"
          className="px-6 py-3 rounded-lg border border-[#D9B98E] text-[#D9B98E] font-semibold hover:bg-[#D9B98E]/10 hover:scale-105 transition-all"
        >
          Sou Consumidor
        </Link>
      </div>
    </section>
  );
}
