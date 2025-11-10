"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Plans from "../../components/Plans";
import BackButton from "../../components/ui/BackButton";

export const dynamic = "force-static";

export default function Estabelecimentos() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F4ED]">
      <Navbar />

      <div className="flex-1">
        {/* Hero premium */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#001326] via-[#001F33] to-[#012A46] text-white px-6 py-28 md:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.22),transparent_70%)]" />
          <div className="absolute -left-44 top-10 h-[360px] w-[360px] rounded-full bg-[#D9B98E]/18 blur-[160px]" />
          <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#8C6B40]/18 blur-[190px]" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center space-y-10 md:space-y-[3.5rem] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-[2.6rem] md:text-[3.6rem] font-playfair font-bold leading-snug md:leading-[1.18] text-[#FDF4E1] drop-shadow-[0_12px_32px_rgba(5,25,46,0.45)]">
                Transforme o selo em confiança, prestígio e crescimento sustentável
              </h1>
              <p className="text-base md:text-lg text-[#F8F9FB]/85 leading-[1.78] max-w-3xl mx-auto">
                Bares, empórios, pubs, restaurantes e distribuidoras já utilizam o selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>. Uma credencial auditável que protege o consumidor, valoriza a marca e diferencia o seu negócio.
              </p>
              <div className="flex flex-wrap justify-center gap-5 pt-8">
                <Link
                  href="#planos"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[#D9B98E] px-7 md:px-9 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_18px_38px_-24px_rgba(217,185,142,0.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                >
                  Conhecer Planos
                  <span className="opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </Link>
                <Link
                  href="#formularios"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#D9B98E]/70 bg-white/10 px-7 md:px-9 py-3 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-[#F4E3C6]"
                >
                  Solicitar Adesão
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Destaques rápidos */}
        <section className="bg-[#FDF9F0] py-20">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 px-6 text-center md:gap-8">
            {[
              {
                title: "Autenticidade comprovada",
                desc: "Cada selo é auditado digitalmente, com registro público e rastreabilidade completa.",
              },
              {
                title: "Visibilidade nacional",
                desc: "Seu estabelecimento passa a integrar o mapa oficial da Rede Segura Nacional.",
              },
              {
                title: "Suporte especializado",
                desc: "Equipe técnica e consultiva para garantir conformidade e desempenho contínuo.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex w-full flex-col gap-3 rounded-3xl border border-[#D9B98E]/50 bg-white/80 px-6 py-8 shadow-[0_18px_40px_-30px_rgba(201,169,125,0.4)] backdrop-blur-sm md:w-[30%]"
              >
                <h3 className="font-playfair text-xl font-semibold text-[#1F2A38]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#1F2A38]/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="relative bg-gradient-to-b from-[#F9F3E6] to-[#F4E6CF] py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,185,142,0.22),transparent_70%)]" />
          <div className="relative z-10 mt-12">
            <Plans />
          </div>
        </section>

        {/* Formulário */}
        <section id="formularios" className="bg-[#001F33] py-28 md:py-32 text-white">
          <div className="mx-auto max-w-5xl px-6 sm:px-10 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <h2 className="text-[2.3rem] md:text-[2.6rem] font-playfair font-bold leading-snug text-[#FDF4E1]">
                Solicite a certificação do seu estabelecimento
              </h2>
              <p className="text-base md:text-lg text-[#F8F9FB]/85 leading-[1.7]">
                Envie seus dados e receba um diagnóstico gratuito com orientações técnicas, auditoria inicial e cronograma de implementação.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Formulário enviado (placeholder)");
              }}
              className="mt-10 space-y-6 rounded-[28px] border border-[#D9B98E]/45 bg-white/8 p-8 md:p-12 shadow-[0_24px_70px_-28px_rgba(217,185,142,0.55)] backdrop-blur-md"
            >
              <input
                type="text"
                placeholder="Nome do estabelecimento"
                required
                className="w-full rounded-2xl border border-[#D9B98E]/40 bg-white/90 px-5 py-3 text-base text-[#0B1E33] placeholder-[#0B1E33]/55 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
              />
              <input
                type="email"
                placeholder="E-mail institucional"
                required
                className="w-full rounded-2xl border border-[#D9B98E]/40 bg-white/90 px-5 py-3 text-base text-[#0B1E33] placeholder-[#0B1E33]/55 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
              />
              <input
                type="tel"
                placeholder="Telefone (com DDD)"
                required
                className="w-full rounded-2xl border border-[#D9B98E]/40 bg-white/90 px-5 py-3 text-base text-[#0B1E33] placeholder-[#0B1E33]/55 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40"
              />
              <textarea
                placeholder="Conte-nos sobre sua operação, volume de vendas ou necessidades específicas"
                rows={4}
                className="w-full rounded-2xl border border-[#D9B98E]/40 bg-white/90 px-5 py-3 text-base text-[#0B1E33] placeholder-[#0B1E33]/55 focus:border-[#D9B98E] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/40 resize-none"
              />
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D9B98E] px-10 py-4 text-lg font-semibold text-[#001F33] shadow-[0_20px_45px_-28px_rgba(217,185,142,0.7)] transition-all duração-400 hover:-translate-y-1 hover:bg-[#E6CFA5]"
                >
                  Enviar solicitação
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        <div className="py-16 text-center">
          <BackButton
            className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]"
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
