"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "O que é o selo Bebida Selada®?",
    answer:
      "O selo é um identificador oficial que comprova a autenticidade e a origem certificada de bebidas no Brasil, validado pela Rede Segura Nacional.",
  },
  {
    question: "Quem pode participar?",
    answer:
      "Prefeituras, distribuidores, estabelecimentos e marcas de bebidas podem aderir. Cada participante integra uma rede que promove rastreabilidade e segurança.",
  },
  {
    question: "O selo é obrigatório?",
    answer:
      "Não. O selo é voluntário, mas garante reconhecimento, transparência e prioridade em políticas públicas e programas institucionais.",
  },
  {
    question: "Como funciona a verificação?",
    answer:
      "Cada selo possui um código único, que pode ser validado online. O sistema confirma nota fiscal, origem e autenticidade em tempo real.",
  },
  {
    question: "Qual a diferença entre o selo digital e o físico?",
    answer:
      "O selo digital é aplicado nas plataformas online e documentos. O selo físico acompanha o produto, permitindo validação via QR Code e base nacional.",
  },
  {
    question: "O que ganho ao aderir à Rede Segura Nacional?",
    answer:
      "Você fortalece sua credibilidade, aparece no mapa público da rede e demonstra compromisso com consumo responsável, legalidade e sustentabilidade.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#081B35] via-[#0B203F] to-[#001527] py-24 text-white border-t border-[#D9B98E]/25">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.14),transparent_70%)]" />
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#D9B98E]/12 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#8C6B40]/12 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-6">
          <span className="inline-flex items-center justify-center rounded-full border border-[#D9B98E]/55 bg-[#D9B98E]/10 px-5 py-1 text-[0.8rem] uppercase tracking-[0.32em] text-[#F4E3C6]">
            Esclareça suas dúvidas
          </span>
          <p className="text-base md:text-lg text-[#F8F9FB]/80 max-w-3xl mx-auto leading-[1.7]">
            Entenda como a Rede Segura Nacional — Bebida Selada® protege a autenticidade, fortalece parceiros e garante transparência em cada etapa.
          </p>
        </div>

        <ul className="space-y-5">
          {FAQ_ITEMS.map((item, index) => (
            <li
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/6 px-6 py-5 shadow-[0_24px_70px_-32px_rgba(217,185,142,0.45)] backdrop-blur-md transition-all duration-300 hover:border-[#D9B98E]/70 hover:bg-white/10 hover:shadow-[0_28px_80px_-30px_rgba(217,185,142,0.55)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left text-[1.15rem] md:text-[1.35rem] font-semibold flex items-center justify-between gap-6 text-[#FDFDFD] tracking-tight transition-colors duration-300 hover:text-[#D9B98E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B98E]"
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9B98E]/70 bg-[#D9B98E]/15 text-[#D9B98E] text-2xl leading-none transition-transform duration-300 group-hover:scale-105">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 border-t border-white/10 pt-4 text-[#F8F9FB]/80 text-base md:text-[1.05rem] leading-[1.55]">
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

