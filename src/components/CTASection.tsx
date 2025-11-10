"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-gradient-to-b from-[#001F33] via-[#01273F] to-[#002A46] py-28 md:py-32 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.14),transparent_65%)]" />
      <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#D9B98E]/12 blur-3xl" />
      <div className="absolute -right-44 bottom-12 h-[360px] w-[360px] rounded-full bg-[#8C6B40]/12 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-8 space-y-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[32px] border border-[#D9B98E]/60 bg-white/6 px-6 sm:px-10 md:px-14 py-14 sm:py-16 text-center shadow-[0_28px_80px_-30px_rgba(217,185,142,0.55)] backdrop-blur-md space-y-10"
        >
          <div className="space-y-6">
            <span className="inline-flex items-center justify-center rounded-full border border-[#D9B98E]/55 bg-[#D9B98E]/10 px-5 py-1 text-[0.8rem] uppercase tracking-[0.3em] text-[#F4E3C6]">
              Rede Segura Nacional
            </span>
            <h2 className="text-[2.15rem] md:text-[2.6rem] font-playfair font-bold tracking-tight text-[#FDFDFD] leading-tight md:leading-[1.3] text-balance">
              Transforme o selo em lucro e prestígio para o seu negócio.
            </h2>
            <p className="text-base md:text-lg text-[#F8F9FB]/88 max-w-3xl mx-auto leading-[1.75]">
              Bares, adegas, empórios, pubs, restaurantes, distribuidoras e casas especializadas já fazem parte da rede{" "}
              <span className="inline-flex items-baseline gap-[1px]">
                <span className="font-playfair text-inbsGold">Bebida Selada</span>
                <span
                  className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative"
                  style={{ top: "-0.35em" }}
                >
                  ®
                </span>
              </span>{" "}
              — autenticidade que gera visibilidade e confiança.
            </p>
          </div>

          <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 rounded-[26px] border border-[#D9B98E]/60 bg-white/5 px-6 sm:px-10 py-9 sm:py-10 shadow-[0_24px_70px_-30px_rgba(217,185,142,0.45)] backdrop-blur-md">
            <span className="text-[0.8rem] uppercase tracking-[0.32em] text-[#F4E3C6]">
              Expansão validada
            </span>
            <AnimatedCounter end={142} className="text-6xl font-playfair font-bold text-[#D9B98E]" />
            <p className="text-base md:text-lg text-[#F8F9FB]/90">
              regiões já integram a Rede Segura Nacional
            </p>
          </div>

          <p className="text-base md:text-lg text-[#F8F9FB]/85 leading-[1.7] max-w-3xl mx-auto">
            Um movimento crescente de credibilidade e transparência que fortalece governos, estabelecimentos e consumidores em todo o Brasil.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="/auth/register"
              className="group relative inline-flex items-center justify-center gap-3 rounded-2xl border border-transparent bg-[#D9B98E] px-14 py-4 text-base md:text-lg font-semibold text-[#001F33] shadow-[0_24px_45px_-26px_rgba(217,185,142,0.8)] transition-all duration-400 ease-out hover:-translate-y-1 hover:border-[#F4E3C6] hover:bg-[#E6CFA5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
            >
              <span className="relative z-10">Quero Fazer Parte</span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E1C7A0] via-[#D9B98E] to-[#C59B58] opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
