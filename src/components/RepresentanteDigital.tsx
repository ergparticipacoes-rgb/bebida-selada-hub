"use client";

import { motion } from "framer-motion";
import { Laptop, DollarSign, Globe, ShieldCheck } from "lucide-react";

export default function RepresentanteDigital() {
  const cards = [
    {
      icon: Laptop,
      title: "Painel Exclusivo",
      desc: "Acompanhe leads, conversões e ganhos em tempo real.",
    },
    {
      icon: DollarSign,
      title: "Comissão Recorrente",
      desc: "Ganhos mensais contínuos e vitalícios com expansão nacional.",
    },
    {
      icon: Globe,
      title: "Atuação Oficial",
      desc: "Representatividade certificada dentro da Rede Segura Nacional.",
    },
    {
      icon: ShieldCheck,
      title: "Suporte Completo",
      desc: "Material institucional, assessoria e treinamento especializado.",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#001F33] to-[#002A46] text-[#F8F9FB] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-12 max-w-6xl">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold tracking-tight text-[#FDFDFD] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Seja um Representante Digital <br />
            <span className="inline-flex items-baseline gap-[1px] text-[#D9B98E] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
              Bebida Selada
              <span
                className="font-inter text-[#D9B98E] text-[0.55em] ml-[1px] relative"
                style={{ top: "-0.35em" }}
              >
                ®
              </span>
            </span>
          </h2>
          <p className="text-lg md:text-xl font-inter text-[#EAEAEA] max-w-3xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
            Expanda a Rede Segura Nacional e conquiste renda recorrente. Vagas limitadas por região — garanta a sua agora.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 place-items-center">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-blue group flex flex-col items-center text-center justify-start p-6 h-full w-full max-w-[320px] cursor-pointer"
              >
                <IconComponent className="icon mx-auto mb-4 text-5xl" />
                <h3 className="text-[#FDFDFD] text-lg font-semibold mb-2 leading-snug tracking-tight text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                  {item.title}
                </h3>
                <p className="text-[#EAEAEA] text-sm leading-relaxed text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
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
