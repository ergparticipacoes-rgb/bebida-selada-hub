"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Link from "next/link";
import { PRICING_CONFIG } from "../../config/pricing";

interface UpsellModuleProps {
  currentPlan: "start" | "profissional" | "premium";
}

export default function UpsellModule({ currentPlan }: UpsellModuleProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  // Upsell Start → Profissional
  if (currentPlan === "start") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#001F33] to-[#002A46] rounded-2xl p-6 md:p-8 mb-8 border border-[#E5C48F]/30 shadow-lg"
      >
        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#E5C48F] mb-3">
          📦 Aumente seu limite e receba seu Kit Físico Bebida Selada®
        </h3>
        <p className="text-white/90 text-base md:text-lg mb-4 leading-relaxed">
          Ative o Plano Profissional e rastreie suas notas sem limites.
        </p>
        <ul className="space-y-2 mb-6 text-white/90">
          {PRICING_CONFIG.kitFisico.includes.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#E5C48F] mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Link href="/estabelecimentos#planos">
          <Button variant="secondary" className="text-base md:text-lg px-8 py-4">
            Ativar agora por {formatPrice(PRICING_CONFIG.promotionalPrices.profissional)}
          </Button>
        </Link>
      </motion.div>
    );
  }

  // Upsell Profissional → Premium
  if (currentPlan === "profissional") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-[#001F33] to-[#002A46] rounded-2xl p-6 md:p-8 mb-8 border border-[#E5C48F]/30 shadow-lg"
      >
        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#E5C48F] mb-3">
          🏆 Expanda sua operação com o Plano Premium
        </h3>
        <p className="text-white/90 text-base md:text-lg mb-4 leading-relaxed">
          Auditorias ilimitadas, suporte prioritário e integração multiunidade.
        </p>
        <p className="text-white/80 text-sm mb-6">
          Ideal para redes, cooperativas e distribuidoras.
        </p>
        <Link href="/estabelecimentos#planos">
          <Button variant="secondary" className="text-base md:text-lg px-8 py-4">
            Migrar para Premium por {formatPrice(PRICING_CONFIG.promotionalPrices.premium)}
          </Button>
        </Link>
      </motion.div>
    );
  }

  // Sem upsell para Premium
  return null;
}

