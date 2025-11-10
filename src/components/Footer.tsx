"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    institucional: [
      { href: "/", label: "Sobre" },
      { href: "/imprensa", label: "Sala de Imprensa" },
      { href: "/universidade", label: "Universidade" },
    ],
    prefeituras: [
      { href: "/prefeituras", label: "Para Municípios" },
      { href: "/prefeituras#como-funciona", label: "Como Funciona" },
      { href: "/prefeituras#beneficios", label: "Benefícios" },
    ],
    estabelecimentos: [
      { href: "/estabelecimentos", label: "Para Estabelecimentos" },
      { href: "/estabelecimentos#certificacao", label: "Certificação" },
      { href: "/estabelecimentos#planos", label: "Planos" },
    ],
    legal: [
      { href: "/termos", label: "Termos de Uso" },
      { href: "/privacidade", label: "Política de Privacidade" },
      { href: "/contato", label: "Contato" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#001F33] via-[#01273F] to-[#001A2B] text-white border-t border-[#D9B98E]/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.18),transparent_70%)]" />
      <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-[#D9B98E]/12 blur-3xl" />
      <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8C6B40]/12 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-24 space-y-16">
        {/* Grid de links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {[
            { title: "Institucional", links: footerLinks.institucional },
            { title: "Prefeituras", links: footerLinks.prefeituras },
            { title: "Estabelecimentos", links: footerLinks.estabelecimentos },
            { title: "Legal", links: footerLinks.legal },
          ].map((col) => (
            <div
              key={col.title}
              className="group relative flex h-full flex-col rounded-3xl border border-[#D9B98E]/55 bg-white/6 px-8 py-10 shadow-[0_28px_80px_-30px_rgba(217,185,142,0.4)] backdrop-blur-md transition-all duration-300 hover:border-[#F4E3C6] hover:bg-white/10 hover:shadow-[0_32px_90px_-32px_rgba(217,185,142,0.55)]"
            >
              <h3 className="font-playfair text-[1.25rem] font-semibold text-[#FDFDFD] mb-5">
                {col.title}
              </h3>
              <ul className="space-y-3 text-sm text-[#F8F9FB]/90">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:text-[#D9B98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
                    >
                      <span className="h-[1px] w-0 bg-[#D9B98E] transition-all duration-300 group-hover:w-3" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Linha final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[30px] border border-[#D9B98E]/50 bg-white/8 px-10 py-14 text-center shadow-[0_28px_80px_-30px_rgba(217,185,142,0.45)] backdrop-blur-lg space-y-8"
        >
          <div className="flex flex-col items-center gap-5">
            <div className="rounded-full border border-[#D9B98E]/60 bg-gradient-to-br from-[#F4E8D4] via-[#E5C48F] to-[#C19B5A] p-6 shadow-[0_20px_45px_-25px_rgba(217,185,142,0.65)]">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14"
                aria-label="Certificado INBS – Rede Segura Nacional"
              >
                <title>Certificado INBS – Rede Segura Nacional</title>
                <defs>
                  <linearGradient id="inbs-gradient-footer" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F0D8A8" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#E5C48F" stopOpacity="1" />
                    <stop offset="100%" stopColor="#D9B98E" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d="M32 4 L52 12 L52 28 C52 40 46 50 32 60 C18 50 12 40 12 28 L12 12 Z"
                  fill="url(#inbs-gradient-footer)"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                />
                <rect
                  x="28"
                  y="26"
                  width="8"
                  height="10"
                  rx="1.2"
                  fill="#001F33"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.6"
                />
                <path
                  d="M32 22 C32 20 33 18 35 18 C37 18 38 20 38 22 L38 26 L34 26 L34 22 C34 21 34.5 20.5 35 20.5 C35.5 20.5 36 21 36 22 L36 24 L32 24 Z"
                  fill="#001F33"
                />
                <text
                  x="32"
                  y="48"
                  textAnchor="middle"
                  fill="#001F33"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="serif"
                >
                  INBS
                </text>
              </svg>
            </div>

            <h4 className="font-playfair text-[1.6rem] font-semibold text-[#FDFDFD] leading-tight">
              BEBIDA SELADA — Selo Nacional de Autenticidade
            </h4>
            <p className="text-sm md:text-base text-[#F8F9FB]/85 italic">
              Transparência, confiança e inovação em cada garrafa.
            </p>
          </div>
          <div className="space-y-2 text-xs md:text-sm text-[#F8F9FB]/75">
            <p>
              Instituto Nacional{" "}
              <span className="inline-flex items-baseline gap-[1px]">
                <span className="font-playfair text-inbsGold">Bebida Selada</span>
                <span
                  className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative"
                  style={{ top: "-0.35em" }}
                >
                  ®
                </span>
              </span>{" "}
              — INBS:001
            </p>
            <p>
              © 2025{" "}
              <span className="inline-flex items-baseline gap-[1px]">
                <span className="font-playfair text-inbsGold">Bebida Selada</span>
                <span
                  className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative"
                  style={{ top: "-0.35em" }}
                >
                  ®
                </span>
              </span>
              . Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
