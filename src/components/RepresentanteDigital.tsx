"use client";

import { motion } from "framer-motion";
import { Laptop, DollarSign, Globe, ShieldCheck } from "lucide-react";

export default function RepresentanteDigital() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#001F33] to-[#002A46] text-[#F8F9FB] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 space-y-12">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-white">
            Seja um Representante Digital <br />
            <span className="inline-flex items-baseline gap-[1px]">
              <span className="font-playfair text-white">Bebida Selada</span>
              <span className="font-inter text-white text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl font-inter text-[#F8F9FB]/80 max-w-2xl mx-auto leading-relaxed">
            Expanda a Rede Segura Nacional e conquiste renda recorrente.
            <br />
            <span className="text-[#D9B98E] font-semibold">
              Vagas limitadas por região — garanta a sua agora.
            </span>
          </p>
        </motion.div>

        {/* CARDS - v11.0 (altura uniforme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Laptop size={48} />,
              title: "Painel Exclusivo",
              desc: "Acompanhe leads, conversões e ganhos em tempo real."
            },
            {
              icon: <DollarSign size={48} />,
              title: "Comissão Recorrente",
              desc: "Ganhos mensais contínuos e vitalícios com expansão nacional."
            },
            {
              icon: <Globe size={48} />,
              title: "Atuação Oficial",
              desc: "Representatividade certificada dentro da Rede Segura Nacional."
            },
            {
              icon: <ShieldCheck size={48} />,
              title: "Suporte Completo",
              desc: "Material institucional, assessoria e treinamento especializado."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col justify-center items-center text-center
                         bg-white/10 backdrop-blur-lg rounded-2xl p-8
                         border border-[#D9B98E]/30 shadow-lg hover:shadow-[#D9B98E]/30
                         transition-all duration-500 space-y-4 w-full min-h-[260px]"
            >
              <div className="flex justify-center items-center text-[#D9B98E] mb-3">
                {item.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold text-center">
                {item.title}
              </h3>
              <p className="text-[#F8F9FB]/80 font-inter leading-relaxed text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTAs - v9.5.1 (substituindo simulador) */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="/representantes"
            className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition"
          >
            Quero Ser Representante Digital
          </a>
          <a
            href="/representantes#simulador"
            className="border border-[#D9B98E] text-[#D9B98E] font-semibold px-8 py-3 rounded-lg hover:bg-[#D9B98E]/10 transition"
          >
            Simular Meus Ganhos
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.08),transparent_70%)] pointer-events-none"></div>
    </section>
  );
}
