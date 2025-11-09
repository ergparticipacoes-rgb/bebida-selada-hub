"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#001F33] to-[#002A46] text-white flex flex-col justify-center items-center text-center px-6 pt-24">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#D9B98E] mb-6">
          A Rede Segura Nacional –{" "}
          <span className="inline-flex items-baseline gap-[1px]">
            <span className="font-playfair text-white">Bebida Selada</span>
            <span
              className="font-inter text-white text-[0.65em] ml-[1px] relative"
              style={{ top: "-0.35em" }}
            >
              ®
            </span>
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl text-[#F8F9FB]/90 mb-10 leading-relaxed">
          É o primeiro sistema brasileiro de certificação inteligente, rastreabilidade e confiança no setor de bebidas.
        </p>
        <p className="text-base md:text-lg max-w-2xl text-[#F8F9FB]/80 mb-12 leading-relaxed">
          Conectamos tecnologia, prefeituras, estabelecimentos e consumidores em uma rede que promove segurança, transparência e desenvolvimento sustentável em todo o país.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/prefeituras"
            className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition-all"
          >
            Para Prefeituras
          </Link>
          <Link
            href="/estabelecimentos"
            className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition-all"
          >
            Para Estabelecimentos
          </Link>
          <Link
            href="/consumidor"
            className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition-all"
          >
            Sou Consumidor
          </Link>
        </div>
      </div>
    </section>
  );
}
