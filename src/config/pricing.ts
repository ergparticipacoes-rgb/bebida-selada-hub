/**
 * Configuração centralizada de preços e ofertas promocionais
 * Rede Segura Nacional - Bebida Selada®
 */

export const PRICING_CONFIG = {
  // Preços originais (para ancoragem)
  originalPrices: {
    start: 97, // Preço original para ancoragem (promoção de lançamento)
    profissional: 297,
    premium: 497,
  },
  
  // Preços promocionais de lançamento 2025
  promotionalPrices: {
    start: 0, // Gratuito
    profissional: 147, // Oferta de lançamento
    premium: 247, // Oferta de lançamento
  },
  
  // Kit Físico Profissional
  kitFisico: {
    price: 147,
    includes: [
      "Selo metálico numerado",
      "Certificado impresso",
      "Display oficial Bebida Selada®",
    ],
  },
  
  // Mensagens institucionais
  messages: {
    launchBanner: "🚀 Lançamento oficial 2025 — adesões com valor promocional conforme política Rede Segura Nacional.",
    offerTag: "Oferta de Lançamento",
    freeBadge: "🎁 Acesso gratuito de lançamento",
    offerValid: "Oferta válida conforme política de incentivo Rede Segura Nacional.",
    freeOfferCopy: "Oferta de lançamento — acesso gratuito conforme política Rede Segura Nacional.",
    upsellTitle: "Você está no Plano Start (gratuito).",
    upsellMessage: "Aproveite a política de incentivo e ative seu Kit Físico Profissional por apenas",
  },
  
  // Validade da oferta (opcional, para controle futuro)
  offerValidUntil: "2025-12-31",
} as const;

