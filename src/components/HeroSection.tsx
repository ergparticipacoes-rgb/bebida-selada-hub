"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-[#001326] via-[#001F33] to-[#012A46] text-white flex flex-col justify-center items-center text-center px-5 sm:px-6 md:px-10 pt-20 pb-12 md:pt-32 md:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.25),transparent_70%)]" />
      <div className="absolute -left-40 top-24 h-[320px] w-[320px] rounded-full bg-[#D9B98E]/15 blur-[160px]" />
      <div className="absolute -right-48 bottom-28 h-[380px] w-[380px] rounded-full bg-[#8C6B40]/18 blur-[190px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-4 md:space-y-10">
        <h1 className="text-[1.6rem] sm:text-[1.8rem] md:text-[3.35rem] font-playfair font-bold tracking-tight text-[#FDF4E1] leading-tight md:leading-[1.2] text-balance drop-shadow-[0_8px_24px_rgba(0,0,0,0.4),0_0_40px_rgba(217,185,142,0.15)]">
          A Rede Segura Nacional –{" "}
          <span className="inline-flex items-baseline gap-[1px]">
            <span className="font-playfair text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.3),0_0_20px_rgba(217,185,142,0.2)]">Bebida Selada</span>
            <span
              className="font-inter text-white text-[0.65em] ml-[1px] relative"
              style={{ top: "-0.35em" }}
            >
              ®
            </span>
          </span>
        </h1>

        <p className="hidden md:block text-[1.25rem] max-w-3xl font-semibold text-[#FDF7EB] leading-[1.58] tracking-[0.01em] text-balance drop-shadow-[0_4px_16px_rgba(0,0,0,0.25)]">
          É o primeiro sistema brasileiro de certificação inteligente, conectando tecnologia, fiscalização e transparência para garantir a autenticidade das bebidas no país.
        </p>
        <p className="md:hidden text-sm max-w-3xl font-semibold text-[#FDF7EB] leading-[1.5] tracking-[0.01em] text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
          É o primeiro sistema brasileiro de certificação inteligente, garantindo autenticidade e confiança no setor de bebidas.
        </p>

        <p className="text-sm md:text-lg max-w-3xl text-[#F8F9FB]/85 leading-[1.5] md:leading-[1.7] font-medium text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
          Uma rede segura que protege a origem, o comércio e o consumo da bebida brasileira.
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 pt-3 md:pt-6 w-full max-w-md md:max-w-none">
          {[
            { href: "/prefeituras", label: "Para Prefeituras" },
            { href: "/estabelecimentos", label: "Para Estabelecimentos" },
            { href: "/consumidor", label: "Sou Consumidor" },
          ].map((cta) => (
            <Link
              key={cta.href}
              href={cta.href}
              className="inline-flex items-center justify-center rounded-xl md:rounded-2xl border border-transparent bg-[#D9B98E] px-6 md:px-10 py-3 md:py-3.5 text-sm md:text-base font-semibold text-center text-[#001F33] shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6] w-full md:w-auto min-w-[160px] md:min-w-[200px]"
            >
              {cta.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
