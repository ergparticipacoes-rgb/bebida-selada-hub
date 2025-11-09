"use client";

import { newsData } from "../../../data/newsData";

export default function EstadaoNoticia() {
  const noticia = newsData.find(item => item.slug === "estadao-selo-municipios");

  return (
    <main className="min-h-screen bg-white text-[#001F33]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Título */}
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Municípios do litoral paulista aderem ao selo Bebida Selada®
        </h1>

        {/* Data */}
        {noticia && (
          <p className="mt-2 text-center text-sm text-gray-500">
            Publicado em {noticia.dateFormatted}
          </p>
        )}

        {/* Corpo */}
        <article className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            A inovação no setor de bebidas ganha força com a adesão de prefeitos do litoral paulista ao selo{" "}
            <strong>Bebida Selada®</strong>, certificação digital que vem se consolidando como referência nacional em
            rastreabilidade e segurança de consumo.
          </p>

          <p>
            Durante encontro realizado em Santos, gestores municipais destacaram a importância de mecanismos tecnológicos
            que garantam a procedência dos produtos e ampliem a confiança do consumidor. A medida, além de proteger a
            população contra falsificações, abre espaço para um ciclo virtuoso de{" "}
            <strong>credibilidade, turismo e desenvolvimento econômico local</strong>.
          </p>

          <blockquote className="border-l-4 border-[#D9B98E] pl-4 italic text-gray-600">
            “A certificação traz não apenas segurança ao consumidor, mas também valorização para os comerciantes da nossa
            região. É um passo importante para reposicionar o litoral como polo de inovação e responsabilidade social”,
            afirmou um dos prefeitos presentes.
          </blockquote>

          <p>
            O movimento vem em linha com a crescente demanda por soluções que combatam irregularidades no setor de
            bebidas. Ao adotar o selo, os municípios passam a integrar a{" "}
            <strong>Rede Segura Nacional</strong>, um protocolo inspirado em normas internacionais de qualidade (como ISO
            9001 e ABNT NBR 17025), adaptado à realidade brasileira.
          </p>

          <p>
            Além dos impactos diretos no comércio, a adesão fortalece a arrecadação municipal e cria um diferencial
            competitivo para bares, restaurantes e casas noturnas que atuam em cidades turísticas. Para o consumidor,
            cada garrafa certificada traz um QR Code único, que pode ser verificado em segundos, reforçando a
            transparência do processo.
          </p>

          <p>
            Com a decisão dos prefeitos, o litoral paulista se junta a outras{" "}
            <strong>142 regiões do Brasil</strong> que já contam com representantes e estabelecimentos certificados,
            consolidando a Bebida Selada® como um dos principais avanços em{" "}
            <strong>inovação regulatória e proteção ao consumidor</strong>.
          </p>
        </article>

        {/* Botão Voltar */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.history.back()}
            className="inline-block px-6 py-3 rounded-2xl border border-[#D9B98E]/30 bg-[#D9B98E] text-[#001F33] font-medium hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md"
          >
            ← Voltar
          </button>
        </div>
      </div>
    </main>
  );
}
