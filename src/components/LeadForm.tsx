"use client";

import { useState } from "react";
import { addLead } from "@/data/leads";

interface LeadFormProps {
  origem?: string;
}

export default function LeadForm({ origem = "site" }: LeadFormProps) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = { ...formData, origem };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nome: "", email: "", whatsapp: "", mensagem: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      addLead({
        nome: payload.nome,
        email: payload.email,
        telefone: payload.whatsapp,
        origem: payload.origem,
        mensagem: payload.mensagem,
      });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Seu nome completo"
        required
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        className="w-full p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter"
      />
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter"
      />
      <input
        type="text"
        placeholder="WhatsApp"
        required
        value={formData.whatsapp}
        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
        className="w-full p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter"
      />
      <textarea
        placeholder="Mensagem (opcional)"
        value={formData.mensagem}
        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
        rows={4}
        className="w-full p-3 rounded-md bg-white/10 border border-[#D9B98E]/30 focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/50 text-white placeholder-white/50 font-inter resize-none"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
      {success && (
        <p className="text-green-400 text-sm text-center">
          ✓ Mensagem enviada com sucesso!
        </p>
      )}
      <p className="text-xs text-white/60 italic text-center">
        Ao enviar seus dados, você concorda com o uso para fins de contato e relacionamento com a Rede Segura Nacional.
      </p>
    </form>
  );
}
