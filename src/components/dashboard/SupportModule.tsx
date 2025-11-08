"use client";
import { motion } from "framer-motion";
import { HelpCircle, Mail, Phone, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SupportModule() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#D9B98E]/20 mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#001F33] mb-6">
        Precisa de ajuda?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* FAQ */}
        <Link
          href="/atualizacao"
          className="p-6 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20 hover:border-[#D9B98E] hover:shadow-md transition-all group"
        >
          <HelpCircle className="w-8 h-8 text-[#D9B98E] mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-[#001F33] mb-2">FAQ</h3>
          <p className="text-sm text-gray-600 mb-2">
            Respostas para dúvidas frequentes
          </p>
          <span className="text-xs text-[#D9B98E] font-medium flex items-center gap-1">
            Ver FAQ <ExternalLink className="w-3 h-3" />
          </span>
        </Link>

        {/* Suporte Técnico */}
        <Link
          href="mailto:suporte@bebidaselada.com.br"
          className="p-6 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20 hover:border-[#D9B98E] hover:shadow-md transition-all group"
        >
          <Mail className="w-8 h-8 text-[#D9B98E] mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-[#001F33] mb-2">Suporte Técnico</h3>
          <p className="text-sm text-gray-600 mb-2">
            Entre em contato com nossa equipe
          </p>
          <span className="text-xs text-[#D9B98E] font-medium flex items-center gap-1">
            Enviar e-mail <ExternalLink className="w-3 h-3" />
          </span>
        </Link>

        {/* Representante Regional */}
        <Link
          href="/representantes"
          className="p-6 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20 hover:border-[#D9B98E] hover:shadow-md transition-all group"
        >
          <Phone className="w-8 h-8 text-[#D9B98E] mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-[#001F33] mb-2">Representante Regional</h3>
          <p className="text-sm text-gray-600 mb-2">
            Contato do representante da sua região
          </p>
          <span className="text-xs text-[#D9B98E] font-medium flex items-center gap-1">
            Ver representantes <ExternalLink className="w-3 h-3" />
          </span>
        </Link>
      </div>

      {/* Logotipo INBS */}
      <div className="pt-6 border-t border-[#D9B98E]/20">
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-gray-600">Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span></span>
          <span className="text-xs font-bold text-[#D9B98E]">INBS:001</span>
        </div>
      </div>
    </motion.div>
  );
}




