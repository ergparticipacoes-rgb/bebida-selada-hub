/**
 * Configuração de onboarding e mensagens personalizadas por plano
 * Rede Segura Nacional - Bebida Selada®
 */

export const ONBOARDING_CONFIG = {
  welcome: {
    title: "🎉 Bem-vindo à Rede Segura Nacional!",
    subtitle: "Seu painel foi criado com sucesso.",
    message: "Comece enviando suas notas fiscais para auditoria e receba seu primeiro relatório de autenticidade.",
  },
  
  plans: {
    start: {
      title: "Comece sua jornada de autenticidade",
      description: "Cadastre-se gratuitamente e tenha acesso ao painel da Rede Segura Nacional.",
      features: [
        "💼 Envie até 3 notas fiscais por mês para auditoria automática e receba seus primeiros relatórios de conformidade.",
        "📲 Receba também seu Kit Digital Bebida Selada®, com QR Code exclusivo e acesso imediato ao seu painel de rastreabilidade.",
      ],
      monthlyLimit: 3,
    },
    profissional: {
      title: "Sua certificação com presença física e digital",
      description: "Ative seu selo auditável e receba o Kit Físico Bebida Selada® 2025–2026, com selo metálico numerado, certificado impresso e display de vitrine.",
      highlight: "🔒 Garantia de autenticidade técnica e prestígio público.",
    },
    premium: {
      title: "Certificação corporativa completa",
      description: "Ideal para redes, cooperativas e distribuidores que desejam unificação e suporte técnico prioritário.",
      features: [
        "Inclui Kit Físico Corporativo",
        "Rastreabilidade total",
        "Integração multiunidade",
      ],
      highlight: "🏆 O padrão máximo da Rede Segura Nacional.",
    },
  },
  
  dashboard: {
    start: {
      status: "Seu status atual: Plano Start (Gratuito)",
      message: "Você pode enviar até 3 notas fiscais por mês para auditoria automática.",
      upsell: {
        title: "📦 Deseja ampliar seu limite e receber seu Kit Físico Bebida Selada®?",
        cta: "Ativar Plano Profissional",
        link: "/estabelecimentos#planos",
      },
    },
  },
} as const;




