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
    <footer className="bg-[#001F33] text-white border-t border-[#D9B98E]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 py-20 pb-12">
        {/* Grid de 4 colunas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Institucional */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-[#D9B98E]">Institucional</h3>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#D9B98E] transition-colors duration-300 text-sm"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Prefeituras */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-[#D9B98E]">Prefeituras</h3>
            <ul className="space-y-2">
              {footerLinks.prefeituras.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#D9B98E] transition-colors duration-300 text-sm"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Estabelecimentos */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-[#D9B98E]">Estabelecimentos</h3>
            <ul className="space-y-2">
              {footerLinks.estabelecimentos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#D9B98E] transition-colors duration-300 text-sm"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-[#D9B98E]">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[#D9B98E] transition-colors duration-300 text-sm"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Linha final - Selo INBS centralizado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-[#D9B98E]/30 pt-8 text-center space-y-4"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Selo INBS */}
            <div className="mb-4" title="Certificado INBS – Rede Segura Nacional">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mx-auto"
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
                {/* Escudo externo */}
                <path
                  d="M32 4 L52 12 L52 28 C52 40 46 50 32 60 C18 50 12 40 12 28 L12 12 Z"
                  fill="url(#inbs-gradient-footer)"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />
                {/* Cadeado interno */}
                <rect
                  x="28"
                  y="26"
                  width="8"
                  height="10"
                  rx="1"
                  fill="#001F33"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.5"
                />
                <path
                  d="M32 22 C32 20 33 18 35 18 C37 18 38 20 38 22 L38 26 L34 26 L34 22 C34 21 34.5 20.5 35 20.5 C35.5 20.5 36 21 36 22 L36 24 L32 24 Z"
                  fill="#001F33"
                />
                {/* Texto INBS */}
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
            <h4 className="font-serif font-bold text-xl text-[#D9B98E] mb-2">
              BEBIDA SELADA — Selo Nacional de Autenticidade
            </h4>
            <p className="text-white text-sm italic">
              Transparência, confiança e inovação em cada garrafa.
            </p>
          </div>
          <div className="text-white text-xs">
            <p className="mb-1">Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> — INBS:001</p>
            <p>© 2025 <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>. Todos os direitos reservados.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
