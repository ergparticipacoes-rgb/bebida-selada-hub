export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO format (YYYY-MM-DD)
  dateFormatted: string; // Formato pt-BR fixo
  veiculo?: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    slug: "estadao-selo-municipios",
    title: "Municípios do litoral paulista aderem ao selo Bebida Selada®",
    excerpt:
      "Prefeituras em todo o Brasil passam a integrar o programa de rastreabilidade da Bebida Selada.",
    content: `
      A inovação no setor de bebidas ganha força com a adesão de prefeitos do litoral paulista ao selo Bebida Selada®, certificação digital que vem se consolidando como referência nacional em rastreabilidade e segurança de consumo.

      Durante encontro realizado em Santos, gestores municipais destacaram a importância de mecanismos tecnológicos que garantam a procedência dos produtos e ampliem a confiança do consumidor. A medida, além de proteger a população contra falsificações, abre espaço para um ciclo virtuoso de credibilidade, turismo e desenvolvimento econômico local.

      O movimento vem em linha com a crescente demanda por soluções que combatam irregularidades no setor de bebidas. Ao adotar o selo, os municípios passam a integrar a Rede Segura Nacional, um protocolo inspirado em normas internacionais de qualidade (como ISO 9001 e ABNT NBR 17025), adaptado à realidade brasileira.

      Além dos impactos diretos no comércio, a adesão fortalece a arrecadação municipal e cria um diferencial competitivo para bares, restaurantes e casas noturnas que atuam em cidades turísticas. Para o consumidor, cada garrafa certificada traz um QR Code único, que pode ser verificado em segundos, reforçando a transparência do processo.

      Com a decisão dos prefeitos, o litoral paulista se junta a outras 142 regiões do Brasil que já contam com representantes e estabelecimentos certificados, consolidando a Bebida Selada® como um dos principais avanços em inovação regulatória e proteção ao consumidor.
    `,
    date: "2025-10-15",
    dateFormatted: "15 de outubro de 2025",
    veiculo: "Estadão",
  },
  {
    id: 2,
    slug: "exame-certificacao",
    title: "Exame destaca protocolo nacional de certificação Bebida Selada®",
    excerpt:
      "A revista Exame publicou reportagem especial sobre o protocolo nacional de certificação lançado pela Bebida Selada®.",
    content: `
      A revista Exame, um dos veículos mais influentes do setor de negócios e economia no Brasil, publicou reportagem especial sobre o protocolo nacional de certificação lançado pela Bebida Selada®. A iniciativa, inédita no país, está criando um novo padrão de qualidade e confiança para consumidores e estabelecimentos do setor de bebidas.

      Segundo a publicação, o modelo combina auditoria digital, rastreabilidade por QR Codes e validação em tempo real. O objetivo é assegurar que cada garrafa comercializada no mercado formal possua autenticidade comprovada, eliminando riscos de falsificação e fortalecendo a segurança para o consumidor final.

      A reportagem ainda enfatiza que o protocolo foi inspirado em normas internacionais, como a ISO 9001 e a ABNT NBR 17025, mas adaptado ao contexto brasileiro. Isso garante que o sistema seja, ao mesmo tempo, rigoroso e acessível, permitindo adesão em larga escala por bares, restaurantes, distribuidoras e prefeituras que desejam fortalecer sua imagem junto à população.

      Para os especialistas consultados pela Exame, o impacto do protocolo vai além da segurança. Ele tem potencial para gerar maior competitividade no setor, ampliar a arrecadação tributária e valorizar os estabelecimentos que assumirem a certificação como diferencial de mercado.

      O CEO da Bebida Selada® destacou à revista que o propósito da iniciativa é "criar um selo que una consumidores, empresários e gestores públicos em torno de um único valor: a confiança". Ele reforçou que a Rede Segura Nacional já está em expansão no litoral paulista e deverá atingir mais de 100 municípios até o final de 2026.

      Ao dar visibilidade nacional ao projeto, a Exame posiciona a Bebida Selada® como uma referência em inovação, compliance e tecnologia, reforçando a visão de que o Brasil pode se tornar líder internacional em certificação digital aplicada ao setor de bebidas.
    `,
    date: "2025-10-18",
    dateFormatted: "18 de outubro de 2025",
    veiculo: "Exame",
  },
  {
    id: 3,
    slug: "valor-blockchain",
    title: "Valor Econômico analisa impacto da blockchain na certificação Bebida Selada®",
    excerpt:
      "O Valor Econômico publicou matéria especial sobre o uso da tecnologia blockchain no protocolo de certificação da Bebida Selada®.",
    content: `
      O Valor Econômico, principal veículo de finanças e negócios do Brasil, publicou matéria especial sobre o uso da tecnologia blockchain no protocolo de certificação da Bebida Selada®. A reportagem destacou que a iniciativa pode se tornar um case internacional de inovação em rastreabilidade.

      A tecnologia aplicada garante que cada etapa da cadeia — da produção ao consumo — seja registrada em um livro-razão digital imutável. Isso elimina brechas para adulterações, fraudes e sonegação, trazendo mais segurança tanto para consumidores quanto para empresas e governos.

      De acordo com a publicação, a iniciativa é pioneira no Brasil e coloca o setor de bebidas em sintonia com tendências globais de compliance digital. Além de reforçar a transparência, o uso da blockchain potencializa a arrecadação tributária e promove concorrência mais justa entre estabelecimentos.

      O projeto já está em fase de implementação em diversas cidades do litoral paulista, com a perspectiva de expandir para todo o território nacional até 2027. Estabelecimentos participantes contarão com o Selo Bebida Selada®, que poderá ser validado instantaneamente por consumidores via QR Code.

      Para especialistas consultados pelo jornal, o modelo é disruptivo e tende a gerar um efeito cascata em outros setores. "É o mesmo movimento que vimos na adoção da certificação ISO nos anos 1990, mas agora com muito mais velocidade e alcance, graças à digitalização", afirma a análise.

      A reportagem conclui que a Bebida Selada® está se consolidando como referência em tecnologia, credibilidade e inovação, abrindo caminho para que o Brasil lidere mundialmente práticas de certificação baseadas em blockchain.
    `,
    date: "2025-10-20",
    dateFormatted: "20 de outubro de 2025",
    veiculo: "Valor Econômico",
  },
];


