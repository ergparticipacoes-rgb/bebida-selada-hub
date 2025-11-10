"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function UniversidadeSection() {
  return (
    <section className="py-20 bg-[#F8F9FB] mb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[2.25rem] md:text-[2.8rem] font-playfair font-bold tracking-tight text-[#001F33] leading-tight mb-8 md:mb-12"
        >
          <span className="inline-flex items-baseline gap-[1px]">
            <span className="font-playfair text-inbsBlue">
              Universidade Bebida Selada
            </span>
            <span
              className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative"
              style={{ top: "-0.35em" }}
            >
              ®
            </span>
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="bg-white/5 backdrop-blur-sm rounded-xl border-2 border-[#D9B98E] p-8 max-w-3xl mx-auto mb-8"
        >
          <p className="text-base md:text-lg leading-[1.7] text-[#001F33]">
            Centro oficial de formação, certificação e treinamento. Conteúdo EAD
            modular para representantes, gestores e estabelecimentos.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link
            href="/universidade"
            className="inline-block bg-[#D9B98E] text-[#001F33] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#C9A97D] transition"
          >
            Saiba Mais
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

