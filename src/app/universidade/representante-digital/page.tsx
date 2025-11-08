"use client";

import { motion } from "framer-motion";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { ArrowRight, Users, Award, TrendingUp } from "lucide-react";

export default function RepresentanteDigitalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#001F33]">
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#001F33] to-[#002A46] text-white text-center py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-[#D9B98E]"
          >
            Formação de Representantes Digitais Certificados INBS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#F8F9FB] max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Aprenda estratégias de vendas éticas, marketing regional e expansão comercial sustentável,
            com base nos protocolos oficiais da Rede Segura Nacional.
          </motion.p>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#001F33] mb-6">
                Sobre o Curso
              </h2>
              <p className="text-lg font-inter text-[#001F33] leading-relaxed mb-6">
                Este curso prepara você para se tornar um Representante Digital certificado,
                capacitando-o com as ferramentas e conhecimentos necessários para expandir
                a Rede Segura Nacional em sua região.
              </p>
            </div>

            {/* BENEFÍCIOS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Rede Segura",
                  desc: "Aprenda a construir e gerenciar uma rede de estabelecimentos certificados."
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Certificação INBS",
                  desc: "Receba certificação oficial como Representante Digital da Rede Segura Nacional."
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Expansão Comercial",
                  desc: "Domine estratégias de vendas éticas e marketing regional sustentável."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * index }}
                  className="bg-[#F8F9FB] rounded-xl p-6 border border-[#D9B98E]/30"
                >
                  <div className="text-[#D9B98E] mb-4">{item.icon}</div>
                  <h3 className="font-playfair font-bold text-xl text-[#001F33] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-[#001F33] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/representantes"
                className="inline-flex items-center gap-2 bg-[#D9B98E] text-[#001F33] font-semibold px-10 py-4 rounded-lg hover:bg-[#C9A97D] transition"
              >
                Quero ser Representante Digital
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOTÃO VOLTAR */}
      <section className="py-10 bg-white mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-block px-6 py-3 rounded-2xl border border-[#D9B98E]/30 bg-[#D9B98E] text-[#001F33] font-medium hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md"
            >
              ← Voltar
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

