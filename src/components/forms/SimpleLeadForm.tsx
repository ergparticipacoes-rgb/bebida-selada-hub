"use client";

import { useEffect, useState } from "react";
import { addLead } from "@/data/leads";

interface SimpleLeadFormProps {
  origem?: string;
  initialMensagem?: string;
  onSubmitSuccess?: () => void;
}

export default function SimpleLeadForm({ origem = "site", initialMensagem, onSubmitSuccess }: SimpleLeadFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: initialMensagem ?? "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      mensagem: initialMensagem ?? "",
    }));
  }, [initialMensagem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...formData,
      origem,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          mensagem: initialMensagem ?? "",
        });
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar. Tente novamente ou entre em contato diretamente.");
    } finally {
      addLead({
        nome: payload.nome,
        email: payload.email,
        telefone: payload.whatsapp,
        origem: payload.origem,
        mensagem: payload.mensagem,
      });
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-white text-lg font-semibold mb-4">✓ Mensagem enviada com sucesso!</p>
        <p className="text-white/80 text-sm">Entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto">
      <input
        type="text"
        name="nome"
        placeholder="Nome completo"
        required
        value={formData.nome}
        onChange={handleChange}
        className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#D9B98E]/50 focus:outline-none transition-all"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
        value={formData.email}
        onChange={handleChange}
        className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#D9B98E]/50 focus:outline-none transition-all"
      />
      <input
        type="text"
        name="whatsapp"
        placeholder="WhatsApp"
        required
        value={formData.whatsapp}
        onChange={handleChange}
        className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#D9B98E]/50 focus:outline-none transition-all"
      />
      <textarea
        name="mensagem"
        placeholder="Mensagem (opcional)"
        value={formData.mensagem}
        onChange={handleChange}
        rows={4}
        className="p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:ring-2 focus:ring-[#D9B98E]/50 focus:outline-none transition-all resize-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

