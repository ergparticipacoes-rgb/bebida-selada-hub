"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { addLead } from "@/data/leads";

export default function PrefeituraForm() {
  const [formData, setFormData] = useState({
    municipio: "",
    responsavel: "",
    cargo: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const payload = { ...formData };
    
    try {
      // TODO: Implementar endpoint /api/prefeituras
      const response = await fetch("/api/prefeituras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          municipio: "",
          responsavel: "",
          cargo: "",
          email: "",
          telefone: "",
          mensagem: "",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar. Tente novamente ou entre em contato diretamente.");
    } finally {
      addLead({
        nome: payload.responsavel,
        email: payload.email,
        telefone: payload.telefone,
        origem: "prefeituras",
        mensagem: `Município: ${payload.municipio}${payload.mensagem ? ` | ${payload.mensagem}` : ""}`,
      });
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mx-auto bg-[#001F33] rounded-2xl p-8 md:p-10 border border-[#D9B98E]/30 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
    >
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F9FAFB] mb-4">
          Solicitar Certificação Municipal
        </h3>
        <p className="text-[#C7D3E3] leading-relaxed">
          Prefeituras e órgãos oficiais podem solicitar a certificação municipal pelo formulário abaixo.
          Nossa equipe entrará em contato para orientar o processo técnico e documental.
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8">
          <p className="text-[#D9B98E] font-semibold text-lg mb-4">
            ✓ Solicitação enviada com sucesso!
          </p>
          <p className="text-[#C7D3E3]">
            Nossa equipe entrará em contato em breve.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="municipio" className="block text-[#E5E9F0] font-medium mb-2 tracking-wide">
              Nome do Município *
            </label>
            <input
              type="text"
              id="municipio"
              name="municipio"
              required
              value={formData.municipio}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#D9B98E]/30 text-white placeholder-[#C7D3E3] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 focus:border-[#D9B98E] transition-all"
              placeholder="Ex: Santos"
            />
          </div>

          <div>
            <label htmlFor="responsavel" className="block text-[#E5E9F0] font-medium mb-2 tracking-wide">
              Nome do Responsável *
            </label>
            <input
              type="text"
              id="responsavel"
              name="responsavel"
              required
              value={formData.responsavel}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#D9B98E]/30 text-white placeholder-[#C7D3E3] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 focus:border-[#D9B98E] transition-all"
              placeholder="Nome completo"
            />
          </div>

          <div>
            <label htmlFor="cargo" className="block text-[#E5E9F0] font-medium mb-2 tracking-wide">
              Cargo *
            </label>
            <input
              type="text"
              id="cargo"
              name="cargo"
              required
              value={formData.cargo}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#D9B98E]/30 text-white placeholder-[#C7D3E3] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 focus:border-[#D9B98E] transition-all"
              placeholder="Ex: Secretário de Desenvolvimento"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-[#E5E9F0] font-medium mb-2 tracking-wide">
              E-mail Institucional *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#D9B98E]/30 text-white placeholder-[#C7D3E3] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 focus:border-[#D9B98E] transition-all"
              placeholder="contato@municipio.gov.br"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-[#E5E9F0] font-medium mb-2 tracking-wide">
              Telefone *
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#D9B98E]/30 text-white placeholder-[#C7D3E3] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 focus:border-[#D9B98E] transition-all"
              placeholder="(13) 1234-5678"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-[#E5E9F0] font-medium mb-2 tracking-wide">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-[#D9B98E]/30 text-white placeholder-[#C7D3E3] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 focus:border-[#D9B98E] transition-all resize-none"
              placeholder="Informações adicionais sobre sua solicitação..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#D9B98E] text-[#001F33] font-serif font-bold px-8 py-4 rounded-xl shadow-[0_4px_30px_rgba(217,185,142,0.3)] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Enviando..." : "Enviar Solicitação"}
          </button>
        </form>
      )}
    </motion.div>
  );
}




