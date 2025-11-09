"use client";

import { newsData } from "../../../data/newsData";

export default function ValorNoticia() {
  const noticia = newsData.find(item => item.slug === "valor-blockchain");

  return (
    <main className="min-h-screen bg-white text-[#001F33]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Título */}
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Valor Econômico analisa impacto da blockchain na certificação Bebida Selada®
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
            O <strong>Valor Econômico</strong>, principal veículo de finanças e negócios do Brasil, publicou matéria 
            especial sobre o uso da <strong>tecnologia blockchain</strong> no protocolo de certificação da Bebida Selada®. 
            A reportagem destacou que a iniciativa pode se tornar um <strong>case internacional de inovação em rastreabilidade</strong>.
          </p>

          <p>
            A tecnologia aplicada garante que cada etapa da cadeia — da produção ao consumo — seja registrada em 
            um <strong>livro-razão digital imutável</strong>. Isso elimina brechas para adulterações, fraudes e sonegação, 
            trazendo mais segurança tanto para consumidores quanto para empresas e governos.
          </p>

          <blockquote className="border-l-4 border-[#D9B98E] pl-4 italic text-gray-600">
            “A blockchain permite que a confiança deixe de ser apenas uma promessa e se torne um dado comprovável. 
            Esse é o futuro da certificação e da auditoria de mercado”, destaca o Valor.
          </blockquote>

          <p>
            De acordo com a publicação, a iniciativa é pioneira no Brasil e coloca o setor de bebidas em sintonia 
            com tendências globais de <strong>compliance digital</strong>. Além de reforçar a transparência, o uso da 
            blockchain potencializa a arrecadação tributária e promove concorrência mais justa entre estabelecimentos.
          </p>

          <p>
            O projeto já está em fase de implementação em diversas cidades do litoral paulista, com a perspectiva de 
            expandir para todo o território nacional até 2027. Estabelecimentos participantes contarão com o{" "}
            <strong>Selo Bebida Selada®</strong>, que poderá ser validado instantaneamente por consumidores via QR Code.
          </p>

          <p>
            Para especialistas consultados pelo jornal, o modelo é disruptivo e tende a gerar um efeito cascata em 
            outros setores. “É o mesmo movimento que vimos na adoção da certificação ISO nos anos 1990, mas agora 
            com muito mais velocidade e alcance, graças à digitalização”, afirma a análise.
          </p>

          <p>
            A reportagem conclui que a Bebida Selada® está se consolidando como referência em <strong>tecnologia, 
            credibilidade e inovação</strong>, abrindo caminho para que o Brasil lidere mundialmente práticas de 
            certificação baseadas em blockchain.
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
