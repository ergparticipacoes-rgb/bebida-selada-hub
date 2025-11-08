// src/app/api/public/data/route.ts
import { NextResponse } from "next/server";
import { rateLimit } from "../../../../middleware-rate-limit";

export async function GET(request: Request) {
  // Rate limiting
  const limitResponse = rateLimit(request);
  if (limitResponse) return limitResponse;

  const data = {
    estatisticas: {
      regioes: 142,
      estabelecimentos: 3500,
      representantes: 120,
    },
    provaSocial: [
      {
        nome: "Bar São Jorge",
        cidade: "Campinas/SP",
        status: "Certificado",
      },
      {
        nome: "Restaurante Solar",
        cidade: "Recife/PE",
        status: "Certificado",
      },
    ],
    noticias: [
      {
        titulo: "Rede Segura expande para novos municípios",
        fonte: "Valor Econômico",
        data: "2025-08-10",
      },
    ],
  };

  return NextResponse.json(data, { status: 200 });
}
