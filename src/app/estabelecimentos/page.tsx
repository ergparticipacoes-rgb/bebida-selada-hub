"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { PRICING_CONFIG } from "../../config/pricing";

export const dynamic = "force-static";

export default function Estabelecimentos() {
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
        "Suporte comunitário",
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
        "Suporte prioritário",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      originalPrice: PRICING_CONFIG.originalPrices.premium,
      promotionalPrice: PRICING_CONFIG.promotionalPrices.premium,
      description: "Associe sua marca à confiança oficial. Parcerias, mídia e reconhecimento nacional.",
      features: [
        "Destaque no mapa",
        "Suporte prioritário",
        "Certificações extras",
        "Acesso a programas públicos",
        "Marketing e divulgação",
      ],
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
    <main className="min-h-screen flex flex-col bg-[#F8F9FB]">
      <Navbar />
      
      <div className="flex-1">
        {/* Banner Superior Institucional */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#E5C48F]/20 text-center py-4 px-6 border-b border-[#E5C48F]/30"
        >
          <p className="text-[#E5C48F] font-medium text-sm md:text-base">
            {PRICING_CONFIG.messages.launchBanner}
          </p>
        </motion.div>

        {/* Hero Section */}
        <section className="py-28 md:py-36 px-6 sm:px-10 md:px-20 text-center bg-gradient-to-b from-[#001F33] to-[#002A46] text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto flex flex-col gap-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#E5C48F]">
              Transforme o selo em lucro e prestígio para o seu negócio
            </h1>
            <p className="mt-8 md:mt-10 text-lg md:text-xl text-[#F8F9FB]/90 max-w-3xl mx-auto text-center leading-relaxed">
              Bares, adegas, empórios, pubs, restaurantes, distribuidoras e casas especializadas já fazem parte da rede <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> — autenticidade que gera visibilidade e confiança.
            </p>
          </motion.div>
        </section>

        {/* Planos com Ofertas */}
        <section className="py-28 md:py-36 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-bold text-[#001F33] mb-8 md:mb-12 text-center"
            >
              Planos e Benefícios
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative rounded-2xl border p-8 md:p-10 bg-white/90 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-all duration-500 ease-in-out flex flex-col justify-between h-full ${
                    plan.highlight
                      ? "border-[#D9B98E] shadow-[0_8px_40px_rgba(217,185,142,0.3)] ring-2 ring-[#D9B98E]/20"
                      : "border-[#D9B98E]/30 hover:border-[#D9B98E]/50"
                  }`}
                >
                  {/* Tarja "Oferta de Lançamento" */}
                  {!plan.isFree && (
                    <div className="absolute top-0 right-0 bg-[#E5C48F] text-[#001F33] text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-2xl">
                      {PRICING_CONFIG.messages.offerTag}
                    </div>
                  )}

                  {/* Badge Promocional para Plano Start */}
                  {plan.isFree && (
                    <div className="absolute top-0 right-0 bg-[#D9B98E] text-[#001F33] text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-2xl shadow-sm">
                      Promoção de Lançamento — por tempo limitado!
                    </div>
                  )}

                  {/* Tarja "Mais escolhido" para plano Profissional */}
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 bg-[#E5C48F] text-[#001F33] text-xs font-semibold px-4 py-1 rounded-br-lg rounded-tl-2xl">
                      ⭐ Mais escolhido
                    </div>
                  )}

                  <div className="pt-4">
                    <h3 className="text-2xl font-serif font-bold mb-4 text-[#001F33]">
                      {plan.name}
                    </h3>
                    
                    {/* Preços com ancoragem */}
                    {plan.isFree ? (
                      <div className="mb-3 space-y-1">
                        <p className="text-[#001F33]/60 text-lg line-through">
                          De {formatPrice(plan.originalPrice)}
                        </p>
                        <p className="text-[#D9B98E] text-3xl font-bold">
                          Por {formatPrice(plan.promotionalPrice)}
                        </p>
                      </div>
                    ) : (
                      <div className="mb-3 space-y-1">
                        <p className="text-[#001F33]/60 text-lg line-through">
                          De {formatPrice(plan.originalPrice)}
                        </p>
                        <p className="text-[#E5C48F] text-3xl font-bold">
                          Por {formatPrice(plan.promotionalPrice)}/mês
                        </p>
                      </div>
                    )}
                    
                    {/* Microcopy institucional para Plano Start */}
                    {plan.isFree && (
                      <p className="text-xs text-[#001F33]/80 mb-4 text-left leading-relaxed italic">
                        Recomendado para pequenos negócios, bares e produtores locais que desejam começar sua certificação com segurança.
                      </p>
                    )}
                    
                    <p className="text-sm text-[#001F33] mb-6 italic text-left leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <ul className="text-[#001F33] mb-6 space-y-3 text-left">
                      {plan.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#D9B98E] mt-1">✓</span>
                          <span className="text-sm leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Mensagem institucional */}
                    {!plan.isFree && (
                      <p className="text-xs text-[#001F33]/70 italic mb-4 text-center">
                        {PRICING_CONFIG.messages.offerValid}
                      </p>
                    )}
                  </div>
                  
                  <Link
                    href="/auth/register"
                    className={`w-full block py-3 rounded-xl font-semibold transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2 text-center ${
                      plan.highlight
                        ? "bg-[#D9B98E] text-[#001F33] shadow-lg"
                        : "border border-[#D9B98E] text-[#001F33] hover:bg-[#D9B98E] hover:text-[#001F33]"
                    }`}
                  >
                    Escolher plano
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulário de Adesão */}
        <section className="py-28 md:py-36 bg-[#F8F9FB]">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 md:px-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-bold text-[#001F33] mb-8 md:mb-12 text-center"
            >
              Solicitar adesão à Rede Segura Nacional
            </motion.h2>
            
            {/* Bloco de Contexto Explicativo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-8 border border-[#E5C48F]/30 shadow-sm"
            >
              <p className="text-[#001F33] text-base md:text-lg leading-relaxed text-center md:text-left">
                Preencha as informações abaixo para iniciar o processo de certificação.
                <br className="hidden md:block" />
                Nossa equipe técnica entrará em contato com instruções e auditoria inicial.
              </p>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={(e) => {
                e.preventDefault();
                alert("Formulário enviado (placeholder)");
              }}
              className="space-y-6 bg-white rounded-2xl p-8 md:p-10 border border-[#E5C48F]/30 shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
            >
              <input
                type="text"
                placeholder="Nome do estabelecimento"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all shadow-sm"
              />
              <input
                type="email"
                placeholder="E-mail institucional"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all shadow-sm"
              />
              <input
                type="tel"
                placeholder="Telefone (com DDD)"
                required
                className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all shadow-sm"
              />
              <textarea
                placeholder="Mensagem (opcional)"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-[#E5C48F]/30 placeholder-[#001F33]/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#E5C48F]/30 transition-all resize-none shadow-sm"
              />
              <div className="text-center pt-4 mt-10">
                <button
                  type="submit"
                  className="px-10 py-5 text-lg md:text-xl font-semibold rounded-full bg-[#D9B98E] text-[#001F33] hover:bg-[#E1C7A0] hover:scale-105 hover:brightness-110 transition-all duration-500 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
                >
                  Enviar solicitação
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Botão Voltar */}
        <div className="text-center py-10 pb-20 mt-20">
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
          >
            Voltar
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
