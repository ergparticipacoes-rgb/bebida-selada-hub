// src/app/simulador/page.tsx
"use client";
import { motion } from "framer-motion";
import { useSimulador } from "../../hooks/useSimulador";
import { fadeInUp } from "@lib/motion";
import Button from "@components/ui/Button";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SimuladorPage() {
  const { planos, planoAtivo, setPlanoAtivo, valor, setValor, ganho } =
    useSimulador();

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="max-w-3xl w-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-10 shadow-xl border border-[#D9B98E]/20"
        >
          <h1 className="text-3xl font-playfair font-bold text-center text-[#D9B98E] mb-8 tracking-tight">
            Simule seus ganhos como Representante Digital
          </h1>

          <div className="mb-8">
            <label className="block font-inter text-gray-300 text-sm mb-2">
              Valor total de contratos gerenciados (R$)
            </label>
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
              className="w-full accent-[#D9B98E] cursor-pointer h-2 rounded-lg"
              style={{ minHeight: "44px" }}
            />
            <p className="text-center mt-3 text-lg font-playfair text-[#E1C7A0] font-semibold">
              R$ {valor.toLocaleString("pt-BR")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {planos.map((p) => (
              <button
                key={p.nome}
                onClick={() => setPlanoAtivo(p)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 min-h-[44px] ${
                  planoAtivo.nome === p.nome
                    ? "bg-[#D9B98E] text-[#001F33] font-playfair font-bold shadow-lg"
                    : "border-[#D9B98E] text-[#D9B98E] font-inter hover:bg-[#D9B98E]/20"
                }`}
              >
                {p.nome}
              </button>
            ))}
          </div>

          <motion.div
            className="text-center bg-[#002744]/80 rounded-xl py-10 shadow-inner border border-[#D9B98E]/10"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 mb-2 font-inter">Seu ganho estimado:</p>
            <h2 className="text-4xl md:text-5xl font-playfair font-extrabold text-[#E1C7A0] drop-shadow-[0_0_12px_rgba(225,199,160,0.3)]">
              R$ {ganho.toLocaleString("pt-BR")}
            </h2>
            <p className="text-gray-400 mt-2 text-sm font-inter">
              Plano {planoAtivo.nome} — {planoAtivo.percentual * 100}% de retorno
              {planoAtivo.bonus > 0 && ` + bônus de R$ ${planoAtivo.bonus.toLocaleString("pt-BR")}`}
            </p>
          </motion.div>

          <div className="flex justify-center mt-10">
            <Link href="/representantes">
              <Button variant="secondary">Torne-se Representante Digital Oficial</Button>
            </Link>
          </div>

          <p className="text-center text-gray-400 text-sm font-inter mt-6 max-w-xl mx-auto leading-relaxed">
            *O valor simulado é uma estimativa. Os resultados podem variar conforme o desempenho regional e número de contratos ativos.
          </p>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
