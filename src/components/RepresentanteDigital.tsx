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
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-[#001F33] via-[#01273F] to-[#002A46] text-[#F8F9FB] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10 space-y-10 md:space-y-12 max-w-6xl">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-[#D9B98E]/60 bg-[#D9B98E]/10 px-4 py-1 text-[0.8rem] uppercase tracking-[0.35em] text-[#F4E3C6]">
            Representação oficial
          </span>
          <h2 className="text-[2.1rem] md:text-[2.85rem] font-playfair font-bold tracking-tight text-[#FDFDFD] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-tight md:leading-[1.35]">
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
          <p className="text-base md:text-lg font-inter text-[#F1F3F6] max-w-3xl mx-auto leading-[1.75] drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
            Expanda a Rede Segura Nacional e conquiste renda recorrente. Vagas limitadas por região — garanta a sua agora.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 place-items-stretch">
          {cards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex h-full w-full flex-col items-center justify-start rounded-3xl border border-[#D9B98E]/70 bg-white/5 px-8 py-10 text-center shadow-[0_25px_70px_-30px_rgba(217,185,142,0.45)] backdrop-blur-[4px] transition-all duration-300 hover:border-[#F4E3C6] hover:bg-white/10 hover:shadow-[0_30px_80px_-28px_rgba(217,185,142,0.55)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F4E8D4] via-[#D9B98E] to-[#B88C4B] text-[#001F33] shadow-[0_15px_30px_-18px_rgba(217,185,142,0.55)]">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-[#FDFDFD] text-[1.5rem] md:text-[1.65rem] font-semibold mb-3 tracking-tight leading-tight text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                  {item.title}
                </h3>
                <p className="text-[#EAEAEA] text-base md:text-[1.05rem] leading-[1.55] text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] max-w-[260px] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href="/representantes"
            className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition shadow-[0_18px_40px_-22px_rgba(217,185,142,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
          >
            Quero Ser Representante Digital
          </a>
          <a
            href="/representantes#simulador"
            className="border border-[#D9B98E] text-[#D9B98E] font-semibold px-8 py-3 rounded-lg hover:bg-[#D9B98E]/10 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4E3C6]"
          >
            Simular Meus Ganhos
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.12),transparent_75%)] pointer-events-none"></div>
      <div className="absolute -left-40 top-32 h-72 w-72 rounded-full bg-[#D9B98E]/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-[#B88C4B]/10 blur-3xl"></div>
    </section>
  );
}
