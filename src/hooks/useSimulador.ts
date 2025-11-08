"use client";
import { useState, useEffect } from "react";

interface Plano {
  nome: string;
  percentual: number;
  bonus: number;
}

export function useSimulador() {
  const planos: Plano[] = [
    { nome: "Básico", percentual: 0.06, bonus: 0 },
    { nome: "Premium", percentual: 0.10, bonus: 500 },
  ];

  const [planoAtivo, setPlanoAtivo] = useState<Plano>(planos[0]);
  const [valor, setValor] = useState(5000);
  const [ganho, setGanho] = useState(0);

  useEffect(() => {
    const calculo = valor * planoAtivo.percentual + planoAtivo.bonus;
    setGanho(calculo);
  }, [valor, planoAtivo]);

  return {
    planos,
    planoAtivo,
    setPlanoAtivo,
    valor,
    setValor,
    ganho,
  };
}


