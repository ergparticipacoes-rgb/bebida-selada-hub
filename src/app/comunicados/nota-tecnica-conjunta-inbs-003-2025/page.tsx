"use client";
import Navbar from "@/components/Navbar";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

export default function NotaTecnicaConjuntaINBS0032025() {
  useScrollRestoration();

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-6 sm:px-10 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl text-[#D9B98E] mb-8">
            Nota Técnica Conjunta INBS 003/2025
          </h1>
          <p className="font-inter text-white/80 leading-relaxed">
            Conteúdo técnico e orientativo referente às normas e diretrizes 
            da Rede Segura Nacional – INBS.
          </p>
        </div>
      </div>
    </main>
  );
}
