"use client";
import { motion } from "framer-motion";
import { use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
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
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md mt-8"
            >
              Voltar
            </button>
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
          <div className="text-center mt-20">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

