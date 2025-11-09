"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-28 md:py-36 bg-[#001F33] text-white text-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-serif font-bold mb-8 md:mb-12 text-[#F9FAFB]"
        >
          Transforme o selo em lucro e prestígio para o seu negócio.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Bares, adegas, empórios, pubs, restaurantes, distribuidoras e casas especializadas já fazem parte da rede <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> — autenticidade que gera visibilidade e confiança.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/auth/register"
            className="group relative inline-block px-10 py-4 bg-[#D9B98E] text-[#001F33] font-serif font-bold text-lg rounded-xl shadow-[0_4px_30px_rgba(217,185,142,0.3)] hover:scale-105 hover:brightness-110 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
          >
            <span className="relative z-10">Adquira seu selo agora</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#D9B98E] to-[#E1C7A0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
