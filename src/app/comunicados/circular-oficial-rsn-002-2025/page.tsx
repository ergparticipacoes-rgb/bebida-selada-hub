"use client";
import Navbar from "@/components/Navbar";
import { useScrollRestoration } from "@/hooks/useScrollRestoration";

export default function CircularOficialRSN0022025() {
  useScrollRestoration(140);

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-6 sm:px-10 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-3xl text-[#D9B98E] mb-8">
            Circular Oficial RSN 002/2025
          </h1>
          <p className="font-inter text-white/80 leading-relaxed">
            Documento institucional da Rede Segura Nacional.  
            (Insira aqui o conteúdo original do comunicado.)
          </p>
        </div>
      </div>
    </main>
  );
}
