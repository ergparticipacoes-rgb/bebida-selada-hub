// src/components/Simulador.tsx
"use client";

import { useEffect, useState } from "react";

export default function Simulador() {
  const [mounted, setMounted] = useState(false);
  const [valor, setValor] = useState(50);

  const adesao = valor * 97 * 0.2; // 20% da adesão
  const mensal = valor * 97 * 0.07; // 7% recorrente
  const total = adesao + mensal;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-md border border-[#001F33]/10 p-8 text-center">
      <h3 className="text-xl font-bold mb-6 text-[#001F33]">
        Simule seus ganhos como Representante Digital
      </h3>

      <input
        type="range"
        min="1"
        max="500"
        value={valor}
        onChange={(e) => setValor(parseInt(e.target.value))}
        className="w-full accent-[#D9B98E]"
      />

      <p className="mt-4 text-gray-700">
        <strong>{valor}</strong> estabelecimentos → Ganhos estimados:{" "}
        <strong>R$ {total.toFixed(2)}</strong> 
        <br />
        (R$ {mensal.toFixed(2)} mensais + R$ {adesao.toFixed(2)} na adesão)
      </p>
    </div>
  );
}
