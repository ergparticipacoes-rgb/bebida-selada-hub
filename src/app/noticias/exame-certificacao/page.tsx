"use client";

import { newsData } from "../../../data/newsData";
import BackButton from "../../../components/ui/BackButton";

export default function ExameNoticia() {
  const noticia = newsData.find(item => item.slug === "exame-certificacao");

  return (
    <main className="min-h-screen bg-white text-[#001F33]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Título */}
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Exame destaca protocolo nacional de certificação Bebida Selada®
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
            A <strong>revista Exame</strong>, um dos veículos mais influentes do setor de negócios e economia no
            Brasil, publicou reportagem especial sobre o <strong>protocolo nacional de certificação</strong> lançado
            pela Bebida Selada®. A iniciativa, inédita no país, está criando um novo padrão de qualidade e confiança
            para consumidores e estabelecimentos do setor de bebidas.
          </p>

          <p>
            Segundo a publicação, o modelo combina <strong>auditoria digital</strong>, rastreabilidade por QR Codes e
            validação em tempo real. O objetivo é assegurar que cada garrafa comercializada no mercado formal possua
            <strong> autenticidade comprovada</strong>, eliminando riscos de falsificação e fortalecendo a segurança
            para o consumidor final.
          </p>

          <blockquote className="border-l-4 border-[#D9B98E] pl-4 italic text-gray-600">
            “Estamos diante de uma inovação que cria um novo patamar de confiança para consumidores,
            produtores e governos”, afirma a reportagem.
          </blockquote>

          <p>
            A reportagem ainda enfatiza que o protocolo foi inspirado em normas internacionais, como a{" "}
            <strong>ISO 9001</strong> e a <strong>ABNT NBR 17025</strong>, mas adaptado ao contexto brasileiro. Isso
            garante que o sistema seja, ao mesmo tempo, <strong>rigoroso e acessível</strong>, permitindo adesão em
            larga escala por bares, restaurantes, distribuidoras e prefeituras que desejam fortalecer sua imagem junto
            à população.
          </p>

          <p>
            Para os especialistas consultados pela Exame, o impacto do protocolo vai além da segurança. Ele tem
            potencial para gerar <strong>maior competitividade</strong> no setor, ampliar a <strong>arrecadação
            tributária</strong> e valorizar os estabelecimentos que assumirem a certificação como diferencial de
            mercado.
          </p>

          <p>
            O CEO da Bebida Selada® destacou à revista que o propósito da iniciativa é “criar um selo que una
            consumidores, empresários e gestores públicos em torno de um único valor: a confiança”. Ele reforçou que a
            <strong> Rede Segura Nacional</strong> já está em expansão no litoral paulista e deverá atingir mais de 100
            municípios até o final de 2026.
          </p>

          <p>
            Ao dar visibilidade nacional ao projeto, a <strong>Exame</strong> posiciona a Bebida Selada® como uma
            referência em inovação, compliance e tecnologia, reforçando a visão de que o Brasil pode se tornar
            <strong> líder internacional em certificação digital</strong> aplicada ao setor de bebidas.
          </p>
        </article>

        {/* Botão Voltar */}
        <div className="mt-10 text-center">
          <BackButton
            className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]"
          />
        </div>
      </div>
    </main>
  );
}
