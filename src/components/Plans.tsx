"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import SimpleLeadForm from "./forms/SimpleLeadForm";
import { PRICING_CONFIG } from "../config/pricing";

export default function Plans() {
  const plans = [
    {
      name: "Start",
      originalPrice: PRICING_CONFIG.originalPrices.start,
      promotionalPrice: PRICING_CONFIG.promotionalPrices.start,
      description: "Comece com o selo e mostre autenticidade na sua operação.",
      features: [
        "Validação básica de notas",
        "Presença no mapa público",
        "Selo digital básico",
        "Painel de autenticação online",
      ],
      isFree: true,
    },
    {
      name: "Profissional",
      originalPrice: PRICING_CONFIG.originalPrices.profissional,
      promotionalPrice: PRICING_CONFIG.promotionalPrices.profissional,
      description: "Destaque-se entre os certificados com suporte e visibilidade nacional.",
      features: [
        "Auditoria automatizada",
        "Selo físico e digital",
        "Relatórios de conformidade",
        "Painel avançado de gestão de selos",
      ],
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

  type PlanType = (typeof plans)[number];

  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlan]);

  const formatPrice = (price: number) => {
    if (price === 0) return "Gratuito";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5EFE2] via-[#FFF9EF] to-[#F5E6D2] py-24 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,185,142,0.25),transparent_65%)]" />
      <div className="absolute -left-40 top-16 h-[360px] w-[360px] rounded-full bg-[#E6CFA5]/30 blur-[160px]" />
      <div className="absolute -right-48 bottom-8 h-[420px] w-[420px] rounded-full bg-[#C9A97D]/25 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10 lg:px-14 text-center space-y-14 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-5"
        >
          <span className="inline-flex items-center justify-center rounded-full border border-[#C9A97D]/70 bg-[#D9B98E]/20 px-5 py-1 text-[0.8rem] uppercase tracking-[0.35em] text-[#6F5127]">
            Planos e Benefícios
          </span>
          <h2 className="text-[2.05rem] md:text-[2.7rem] font-playfair font-bold tracking-tight text-[#1F2A38] leading-tight md:leading-[1.28] text-balance">
            Escolha o plano ideal para o seu estabelecimento
          </h2>
          <p className="text-base md:text-lg text-[#342C1E]/80 max-w-3xl mx-auto leading-[1.7]">
            Valores promocionais de lançamento acompanhados de auditoria, visibilidade nacional e suporte exclusivo da
            Rede Segura Nacional — Bebida Selada®.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border bg-white/85 px-8 py-10 text-left shadow-[0_30px_80px_-32px_rgba(31,42,56,0.25)] backdrop-blur-md transition-all duration-400 ${
                plan.highlight
                  ? "border-[#E6CFA5] shadow-[0_35px_90px_-28px_rgba(201,169,125,0.5)] ring-1 ring-[#E6CFA5]/35"
                  : "border-[#E6CFA5]/60 hover:border-[#D9B98E] hover:shadow-[0_32px_85px_-30px_rgba(201,169,125,0.45)]"
              }`}
            >
              {/* Tarjas */}
              {!plan.highlight && (
                <span className="absolute top-0 right-0 rounded-bl-2xl rounded-tr-[28px] border border-[#1F2A38]/20 bg-[#1F2A38]/12 px-5 py-2 text-[0.8rem] font-semibold uppercase tracking-wide text-[#1F2A38] shadow-[0_12px_26px_-20px_rgba(31,42,56,0.8)]">
                  {plan.isFree ? PRICING_CONFIG.messages.freeBadge : PRICING_CONFIG.messages.offerTag}
                </span>
              )}
              {plan.highlight && (
                <span className="absolute top-0 left-0 rounded-br-2xl rounded-tl-[28px] border border-[#D9B98E]/60 bg-gradient-to-r from-[#F7EDD4] via-[#E6CFA5] to-[#D9B98E] px-5 py-2 text-[0.8rem] font-semibold uppercase tracking-wide text-[#1F2A38] shadow-[0_10px_26px_-18px_rgba(201,169,125,0.6)]">
                  ⭐ Mais escolhido
                </span>
              )}

              <div className="flex flex-1 flex-col pt-6">
                <div>
                  <h3 className="text-[1.6rem] font-playfair font-semibold tracking-tight text-[#1F2A38] leading-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-base italic leading-[1.55] text-[#1F2A38]/85">{plan.description}</p>
                </div>

                <div
                  className={`flex min-h-[130px] flex-col justify-center rounded-2xl border border-[#E6CFA5]/60 bg-[#FDF8EE] px-6 py-6 text-left shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] ${
                    plan.name === "Start" ? "mt-6" : "mt-5"
                  }`}
                >
                  <p className="text-[0.95rem] md:text-base font-medium text-[#1F2A38]/65 line-through decoration-[#B28A52]">
                    De {formatPrice(plan.originalPrice)}
                  </p>
                  <p className="text-[1.35rem] md:text-[1.55rem] font-playfair font-bold text-[#B88C4B] leading-[1.45]">
                    Por{" "}
                    {plan.promotionalPrice === 0
                      ? formatPrice(plan.promotionalPrice)
                      : `${formatPrice(plan.promotionalPrice)}/mês`}
                  </p>
                  {plan.isFree && (
                    <p className="text-[0.85rem] uppercase tracking-[0.25em] text-[#1F2A38]/70">Oferta de lançamento</p>
                  )}
                </div>

                <ul className="mt-6 space-y-2.5 text-[0.95rem] text-[#1F2A38]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 leading-[1.6]">
                      <span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-full bg-[#E6CFA5]/30 text-[#B88C4B] text-sm">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[0.8rem] text-[#1F2A38]/65 italic leading-relaxed">
                  {plan.isFree ? PRICING_CONFIG.messages.freeOfferCopy : PRICING_CONFIG.messages.offerValid}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedPlan(plan);
                  setFormSubmitted(false);
                }}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl border px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9B98E] ${
                  plan.highlight
                    ? "border-transparent bg-[#D9B98E] text-[#1F2A38] shadow-[0_18px_40px_-22px_rgba(217,185,142,0.6)] hover:-translate-y-0.5 hover:bg-[#E6CFA5]"
                    : plan.isFree
                    ? "border-[#D9B98E] bg-white/80 text-[#1F2A38] hover:-translate-y-0.5 hover:bg-[#F7EDD4]"
                    : "border-[#D9B98E]/80 bg-transparent text-[#1F2A38] hover:-translate-y-0.5 hover:bg-[#F7EDD4]/60"
                }`}
              >
                {plan.isFree ? "Ativar Plano Gratuito" : "Escolher plano"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedPlan && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm"
              onClick={() => {
                setSelectedPlan(null);
                setFormSubmitted(false);
              }}
            />
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 overflow-y-auto"
            >
              <div className="flex min-h-full items-start justify-center px-3 py-8 sm:px-4 sm:py-12">
                <div className="relative w-full max-w-[760px] rounded-[20px] border border-[#D9B98E]/35 bg-[#001A2B] shadow-[0_26px_80px_-34px_rgba(8,17,34,0.82)]">
                {selectedPlan && (
                  <div className="relative flex h-full flex-col overflow-hidden">
                    <div className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-7 md:py-5">
                      <div className="space-y-2 text-center md:text-left">
                        <span className="inline-flex items-center justify-center rounded-full border border-[#D9B98E]/55 bg-[#D9B98E]/10 px-4 py-1 text-[0.7rem] uppercase tracking-[0.32em] text-[#F4E3C6]">
                          Plano {selectedPlan.name}
                        </span>
                        <h3 className="text-base md:text-lg font-playfair font-semibold text-[#FDF4E1]">
                          Ative o plano {selectedPlan.name} com nosso time
                        </h3>
                      </div>
                      <button
                        type="button"
                        aria-label="Fechar formulário de interesse"
                        onClick={() => {
                          setSelectedPlan(null);
                          setFormSubmitted(false);
                        }}
                        className="self-center rounded-full border border-[#D9B98E]/35 p-2 text-[#FDF4E1]/75 transition hover:border-[#FDF4E1]/80 hover:text-[#FDF4E1]"
                      >
                        <X className="h-5 w-5" strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-7 space-y-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#D9B98E]/35">
                      <p className="mx-auto max-w-2xl text-[0.75rem] md:text-sm text-[#F8F9FB]/80 text-center">
                        Preencha seus dados e um especialista da Rede Segura Nacional entrará em contato com você para concluir a ativação no dashboard. Nossa equipe faz o primeiro contato pelo WhatsApp informado.
                      </p>

                      <div className="rounded-[18px] border border-[#D9B98E]/30 bg-white/5 p-4 md:p-5 text-[#FDF4E1]/90 shadow-[0_12px_44px_-28px_rgba(217,185,142,0.35)]">
                        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-[#FDF4E1]/70">
                          Condições do plano
                        </p>
                        <p className="mt-2 text-sm md:text-base font-playfair text-[#FDF4E1]">
                          De <span className="line-through text-[#D9B98E]/70">{formatPrice(selectedPlan.originalPrice)}</span>{" "}
                          por{" "}
                          <span className="font-semibold text-[#FDF4E1]">
                            {selectedPlan.promotionalPrice === 0
                              ? "Gratuito"
                              : `${formatPrice(selectedPlan.promotionalPrice)}/mês`}
                          </span>
                        </p>
                        <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2.5 text-[0.9rem] text-[#FDFDFD]/80">
                          {selectedPlan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#D9B98E]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-[18px] border border-[#D9B98E]/25 bg-white/4 px-4 py-5">
                        {!formSubmitted ? (
                          <div className="space-y-5">
                            <SimpleLeadForm
                              origem={`Plano ${selectedPlan.name}`}
                              initialMensagem={`Interesse no plano ${selectedPlan.name} (${selectedPlan.promotionalPrice === 0 ? "Gratuito" : `${formatPrice(selectedPlan.promotionalPrice)}/mês`}).`}
                              onSubmitSuccess={() => setFormSubmitted(true)}
                            />
                            <p className="text-xs text-center text-[#FDFDFD]/60">
                              Enviamos uma confirmação automática por e-mail e nosso time continua o atendimento pelo WhatsApp.
                            </p>
                          </div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-3 py-5 text-center text-[#FDF4E1]"
                          >
                            <CheckCircle2 className="h-12 w-12 text-[#D9B98E]" strokeWidth={1.4} />
                            <div className="space-y-2">
                              <h4 className="text-base md:text-lg font-semibold font-playfair">Recebemos suas informações!</h4>
                              <p className="text-sm text-[#FDFDFD]/80">
                                Em instantes você receberá um e-mail com os próximos passos e nosso time falará com você pelo WhatsApp informado.
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedPlan(null);
                                setFormSubmitted(false);
                              }}
                              className="mt-1 rounded-full border border-[#D9B98E]/60 px-4 py-2 text-xs font-semibold text-[#001F33] bg-[#FDF4E1] hover:bg-white hover:text-[#0B1E3D] transition-colors"
                            >
                              Fechar
                            </button>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
