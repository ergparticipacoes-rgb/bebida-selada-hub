"use client";
import { motion } from "framer-motion";

export default function AtualizacaoPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-[#001F33] text-center text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#E5C48F]">
          Conteúdo em atualização
        </h1>
        <p className="text-lg md:text-xl text-[#E5E9F0] leading-relaxed mb-10 max-w-xl mx-auto">
          Estamos preparando uma nova experiência nesta seção.
          <br className="hidden md:block" />
          Em breve, o conteúdo estará disponível com todas as informações oficiais da Bebida Selada.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-8 py-3 rounded-xl bg-[#D9B98E] text-[#001F33] font-serif font-semibold hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md"
        >
          Voltar
        </button>
      </motion.div>
    </main>
  );
}




