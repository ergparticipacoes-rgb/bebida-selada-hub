"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, MapPin, Smartphone, Shield } from "lucide-react";

export default function ComoFunciona() {
  const blocos = [
    {
      icon: Building2,
      titulo: "Estabelecimentos Certificados",
      descricao: "Qualquer bar, restaurante, distribuidora ou fabricante pode se cadastrar e certificar suas bebidas com o selo <span className=\"inline-flex items-baseline gap-[1px]\"><span className=\"font-playfair text-inbsGold\">Bebida Selada</span><span className=\"font-inter text-inbsGold text-[0.65em] ml-[1px] relative\" style={{ top: \"-0.35em\" }}>®</span></span>.",
      cta: "/estabelecimentos",
      ctaText: "Quero Certificar",
    },
    {
      icon: MapPin,
      titulo: "Municípios Parceiros",
      descricao: "Prefeituras e secretarias municipais podem aderir como parceiras institucionais e ampliar a transparência regional.",
      cta: "/prefeituras",
      ctaText: "Prefeitura",
    },
    {
      icon: Smartphone,
      titulo: "Consumidor Consciente",
      descricao: "O consumidor consciente verifica a autenticidade de qualquer bebida com o selo <span className=\"inline-flex items-baseline gap-[1px]\"><span className=\"font-playfair text-inbsGold\">Bebida Selada</span><span className=\"font-inter text-inbsGold text-[0.65em] ml-[1px] relative\" style={{ top: \"-0.35em\" }}>®</span></span>, diretamente com a câmera do celular.",
      cta: "/consulta-publica",
      ctaText: "Consultar",
    },
    {
      icon: Shield,
      titulo: "Transparência e Rastreabilidade",
      descricao: "Todas as certificações são registradas em blockchain, auditadas e exibidas no portal público.",
      cta: "/consulta-publica",
      ctaText: "Ver Portal",
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 md:py-28 bg-gradient-to-b from-[#001F33] via-[#01273F] to-[#002A46] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.14),transparent_70%)]" />
      <div className="absolute -left-36 top-16 h-72 w-72 rounded-full bg-[#D9B98E]/12 blur-3xl" />
      <div className="absolute -right-40 bottom-24 h-80 w-80 rounded-full bg-[#8C6B40]/12 blur-[130px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-8 md:px-16 space-y-8 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-3 md:space-y-5"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-[#D9B98E]/60 bg-[#D9B98E]/15 px-4 md:px-6 py-1.5 md:py-2 text-[0.7rem] md:text-[0.8rem] uppercase tracking-[0.3em] md:tracking-[0.36em] text-[#F4E3C6]">
            Como Funciona
          </span>
          <p className="text-sm md:text-lg font-inter text-[#F8F9FB]/88 max-w-4xl mx-auto leading-[1.5] md:leading-[1.75]">
            Uma jornada simples que protege quem consome, valoriza quem trabalha corretamente e fortalece a gestão pública.
          </p>
        </motion.div>

        {/* Desktop: Grid premium */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {blocos.map((bloco, i) => {
            const IconComponent = bloco.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group relative flex h-full flex-col items-center justify-start rounded-3xl border border-[#D9B98E]/65 bg-white/8 px-8 py-12 text-center shadow-[0_28px_80px_-30px_rgba(217,185,142,0.55)] backdrop-blur-md transition-all duration-300 hover:border-[#F4E3C6] hover:bg-white/12 hover:shadow-[0_32px_90px_-32px_rgba(217,185,142,0.65)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F4E8D4] via-[#D9B98E] to-[#B88C4B] text-[#001F33] shadow-[0_18px_36px_-22px_rgba(217,185,142,0.55)]">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-[#FDFDFD] text-[1.5rem] md:text-[1.65rem] font-playfair font-semibold tracking-tight leading-tight">
                  {bloco.titulo}
                </h3>
                <p
                  className="mt-4 text-base md:text-[1.05rem] leading-[1.55] text-center text-[#F1F4FA] flex-grow"
                  dangerouslySetInnerHTML={{ __html: bloco.descricao }}
                />
                <Link href={bloco.cta} className="mt-6 w-full">
          <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
            className="w-full rounded-2xl border border-transparent bg-[#D9B98E] px-6 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_18px_40px_-22px_rgba(217,185,142,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F4E3C6] hover:bg-[#E6CFA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
                  >
                    {bloco.ctaText}
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: cards empilhados condensados */}
        <div className="md:hidden flex flex-col gap-4">
          {blocos.map((bloco, i) => {
            const IconComponent = bloco.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                className="group relative flex flex-col items-center justify-start rounded-2xl border border-[#D9B98E]/65 bg-white/8 px-5 py-6 text-center shadow-[0_20px_60px_-28px_rgba(217,185,142,0.55)] backdrop-blur-md transition-all duration-300"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F4E8D4] via-[#D9B98E] to-[#B88C4B] text-[#001F33] shadow-[0_12px_28px_-18px_rgba(217,185,142,0.55)]">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-[#FDFDFD] text-[1.35rem] font-playfair font-semibold tracking-tight leading-tight">
                  {bloco.titulo}
                </h3>
                <p
                  className="mt-2 text-base leading-[1.5] text-center text-[#F1F4FA]"
                  dangerouslySetInnerHTML={{ __html: bloco.descricao }}
                />
                <Link href={bloco.cta} className="mt-4 w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-xl border border-transparent bg-[#D9B98E] px-5 py-2.5 text-sm font-semibold text-center text-[#001F33] shadow-[0_14px_32px_-20px_rgba(217,185,142,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F4E3C6] hover:bg-[#E6CFA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
                  >
                    {bloco.ctaText}
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

