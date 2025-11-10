"use client";
import { motion } from "framer-motion";
import { use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BackButton from "../../../components/ui/BackButton";
import { newsData } from "../../../data/newsData";

export const dynamic = "force-static";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const noticia = newsData.find((item) => item.slug === slug);

  if (!noticia) {
    return (
      <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-8 md:px-20 py-28 md:py-36">
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#E5C48F]">
              Conteúdo em atualização
            </h1>
            <p className="text-lg text-white/90">
              Esta matéria está sendo preparada e estará disponível em breve.
            </p>
            <BackButton className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]">
              Voltar
            </BackButton>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-8 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-4xl mx-auto space-y-10 md:space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {noticia.veiculo && (
              <p className="text-sm text-[#E5C48F] font-semibold uppercase tracking-wide">
                {noticia.veiculo}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#E5C48F]">
              {noticia.title}
            </h1>
            <p className="text-sm text-white/60">
              Publicado em {noticia.dateFormatted}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div
              className="text-lg md:text-xl leading-relaxed md:leading-loose text-white/90 whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: noticia.content.replace(/\n\s*\n/g, "\n\n"),
              }}
            />
          </motion.div>

          {/* Botão Voltar (padrão global) */}
          <div className="text-center mt-10">
            <BackButton className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]">
              Voltar
            </BackButton>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

