"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, MapPin, Smartphone, Shield } from "lucide-react";

export default function ComoFunciona() {
  const blocos = [
    {
      icon: Building2,
      titulo: "Estabelecimentos Certificados",
      descricao: "Qualquer bar, restaurante, distribuidora ou fabricante pode se cadastrar e certificar suas bebidas com o selo <span className=\"inline-flex items-baseline gap-[1px]\"><span className=\"font-playfair text-inbsGold\">Bebida Selada</span><span className=\"font-inter text-inbsGold text-[0.65em] ml-[1px] relative\" style={{ top: \"-0.35em\" }}>®</span></span>.",
      cta: "/estabelecimentos",
      ctaText: "Quero Certificar",
    },
    {
      icon: MapPin,
      titulo: "Municípios Parceiros",
      descricao: "Prefeituras e secretarias municipais podem aderir como parceiras institucionais e ampliar a transparência regional.",
      cta: "/prefeituras",
      ctaText: "Prefeitura",
    },
    {
      icon: Smartphone,
      titulo: "Consumidor Consciente",
      descricao: "O consumidor consciente verifica a autenticidade de qualquer bebida com o selo <span className=\"inline-flex items-baseline gap-[1px]\"><span className=\"font-playfair text-inbsGold\">Bebida Selada</span><span className=\"font-inter text-inbsGold text-[0.65em] ml-[1px] relative\" style={{ top: \"-0.35em\" }}>®</span></span>, diretamente com a câmera do celular.",
      cta: "/consulta-publica",
      ctaText: "Consultar",
    },
    {
      icon: Shield,
      titulo: "Transparência e Rastreabilidade",
      descricao: "Todas as certificações são registradas em blockchain, auditadas e exibidas no portal público.",
      cta: "/consulta-publica",
      ctaText: "Ver Portal",
    },
  ];

  return (
    <section className="py-20 bg-[#001F33] text-white mb-0">
      <div className="container mx-auto px-6 sm:px-10 md:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-playfair font-bold text-center text-[#D9B98E] mb-6 tracking-tight"
        >
          Como Funciona
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-base md:text-lg font-inter text-[#F8F9FB] text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Uma jornada simples que protege quem consome, valoriza quem trabalha corretamente e fortalece a gestão pública.
        </motion.p>

        {/* Desktop: Grid de 4 colunas */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 place-items-center">
          {blocos.map((bloco, i) => {
            const IconComponent = bloco.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="card-blue group flex flex-col items-center text-center justify-start p-6 h-full w-full max-w-[320px] cursor-pointer"
              >
                <IconComponent className="icon mb-4 text-5xl" />
                <h3 className="text-lg font-semibold mb-2 leading-snug tracking-tight text-center">
                  {bloco.titulo}
                </h3>
                <p
                  className="text-sm leading-relaxed text-center flex-grow"
                  dangerouslySetInnerHTML={{ __html: bloco.descricao }}
                />
                <Link href={bloco.cta} className="mt-4 w-full">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 rounded-lg bg-[#D9B98E] text-[#001F33] font-semibold text-sm hover:brightness-110 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {bloco.ctaText}
                  </motion.button>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Carrossel horizontal */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-6 sm:-mx-10 md:-mx-20 px-6 sm:px-10 md:px-20">
          <div className="flex gap-6 min-w-max">
            {blocos.map((bloco, i) => {
              const IconComponent = bloco.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="card-blue group flex flex-col items-center text-center justify-start p-6 h-full min-w-[260px] max-w-[260px] cursor-pointer"
                >
                  <IconComponent className="icon mb-4 text-5xl" />
                  <h3 className="text-lg font-semibold mb-2 leading-snug tracking-tight text-center">
                    {bloco.titulo}
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-center flex-grow"
                    dangerouslySetInnerHTML={{ __html: bloco.descricao }}
                  />
                  <Link href={bloco.cta} className="mt-4 w-full">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-3 rounded-lg bg-[#D9B98E] text-[#001F33] font-semibold text-sm hover:brightness-110 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {bloco.ctaText}
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

