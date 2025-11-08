"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { PRICING_CONFIG } from "../config/pricing";

export default function Plans() {
  const plans = [
    {
      name: "Start",
      originalPrice: PRICING_CONFIG.originalPrices.start,
      promotionalPrice: PRICING_CONFIG.promotionalPrices.start,
      description: "Comece com o selo e mostre autenticidade na sua operação.",
      features: ["Validação básica de notas", "Presença no mapa público", "Selo digital básico"],
      isFree: true,
    },
    {
      name: "Profissional",
      originalPrice: PRICING_CONFIG.originalPrices.profissional,
      promotionalPrice: PRICING_CONFIG.promotionalPrices.profissional,
      description: "Destaque-se entre os certificados com suporte e visibilidade nacional.",
      features: ["Auditoria automatizada", "Selo físico e digital", "Relatórios de conformidade"],
      highlight: true,
    },
    {
      name: "Premium",
      originalPrice: PRICING_CONFIG.originalPrices.premium,
      promotionalPrice: PRICING_CONFIG.promotionalPrices.premium,
      description: "Associe sua marca à confiança oficial. Parcerias, mídia e reconhecimento nacional.",
      features: ["Destaque no mapa", "Suporte prioritário", "Certificações extras", "Acesso a programas públicos"],
    },
  ];

  const formatPrice = (price: number) => {
    if (price === 0) return "Gratuito";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <section className="py-20 bg-[#F8F9FB] mb-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-serif font-bold text-[#001F33] mb-8 md:mb-12"
        >
          Planos e Benefícios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-lg text-[#001F33] max-w-2xl mx-auto mb-16"
        >
          Escolha o plano ideal para o seu estabelecimento
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`relative rounded-2xl border p-8 md:p-10 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-500 ease-in-out flex flex-col justify-between h-full ${
                plan.highlight
                  ? "border-[#E6CFA5] shadow-md ring-2 ring-[#E6CFA5]/20"
                  : "border-[#E6CFA5]/30 hover:border-[#E6CFA5]/50 hover:shadow-md"
              }`}
            >
              {/* Tarja "Oferta de Lançamento" */}
              {!plan.isFree && (
                <div className="absolute top-0 right-0 bg-[#E6CFA5] text-[#001F33] text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-2xl">
                  {PRICING_CONFIG.messages.offerTag}
                </div>
              )}

              {/* Tarja "Acesso gratuito de lançamento" para plano Start */}
              {plan.isFree && (
                <div className="absolute top-0 right-0 bg-[#E6CFA5] text-[#001F33] text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-2xl shadow-sm">
                  {PRICING_CONFIG.messages.freeBadge}
                </div>
              )}

              {/* Tarja "Mais escolhido" para plano Profissional */}
              {plan.highlight && (
                <div className="absolute top-0 left-0 bg-[#E6CFA5] text-[#001F33] text-xs font-semibold px-4 py-1 rounded-br-lg rounded-tl-2xl">
                  ⭐ Mais escolhido
                </div>
              )}

              <div className="pt-4">
                <h3 className="text-2xl font-serif font-bold mb-2 text-[#001F33]">{plan.name}</h3>
                
                {/* Preços com ancoragem */}
                {plan.isFree ? (
                  <div className="mb-3 space-y-1">
                    <p className="text-[#001F33]/60 text-lg line-through">
                      De {formatPrice(plan.originalPrice)}
                    </p>
                    <p className="text-[#E6CFA5] text-3xl font-bold">
                      Por {formatPrice(plan.promotionalPrice)}
                    </p>
                  </div>
                ) : (
                  <div className="mb-3 space-y-1">
                    <p className="text-[#001F33]/60 text-lg line-through">
                      De {formatPrice(plan.originalPrice)}
                    </p>
                    <p className="text-[#E6CFA5] text-3xl font-bold">
                      Por {formatPrice(plan.promotionalPrice)}/mês
                    </p>
                  </div>
                )}
                
                <p className="text-sm text-[#001F33] mb-6 italic text-left leading-relaxed">
                  {plan.description}
                </p>
                <ul className="text-[#001F33] mb-8 space-y-3 text-left">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#E6CFA5] mt-1">✓</span>
                      <span className="text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Mensagem institucional */}
                {plan.isFree ? (
                  <p className="text-xs text-[#001F33]/70 italic mb-4 text-center leading-relaxed">
                    {PRICING_CONFIG.messages.freeOfferCopy}
                  </p>
                ) : (
                  <p className="text-xs text-[#001F33]/70 italic mb-4 text-center">
                    {PRICING_CONFIG.messages.offerValid}
                  </p>
                )}
              </div>
              <Link
                href="/auth/register"
                className={`w-full block py-3 rounded-xl font-semibold transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#E6CFA5]/60 focus:ring-offset-2 ${
                  plan.highlight
                    ? "bg-[#E6CFA5] text-[#001F33] shadow-md"
                    : plan.isFree
                    ? "bg-white border-2 border-[#E6CFA5] text-[#001F33] shadow-sm hover:bg-[#E6CFA5]/10 hover:shadow-md"
                    : "border border-[#E6CFA5] text-[#001F33] hover:bg-[#E6CFA5] hover:text-[#001F33]"
                }`}
              >
                {plan.isFree ? "Ativar Plano Gratuito" : "Escolher plano"}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
