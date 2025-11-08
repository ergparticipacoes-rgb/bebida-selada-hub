"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { addLead } from "@/data/leads";

export default function SimuladorRepresentante() {
  const [mounted, setMounted] = useState(false);
  const [estabs, setEstabs] = useState(50);
  const [mixPremium, setMixPremium] = useState(40);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    email: "",
    telefone: "",
    observacoes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const precoProf = 97;
  const precoPrem = 247;
  const pctAdesao = 0.20;
  const pctMensal = 0.07;

  const fmt = (n: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(n);

  const { qtdPrem, qtdProf, adesaoEstim, mensalEstim } = useMemo(() => {
    const qtdPrem = Math.round((estabs * mixPremium) / 100);
    const qtdProf = estabs - qtdPrem;
    const baseAdesao = qtdProf * precoProf + qtdPrem * precoPrem;
    const adesaoEstim = baseAdesao * pctAdesao;
    const mensalEstim = (qtdProf * precoProf + qtdPrem * precoPrem) * pctMensal;
    return { qtdPrem, qtdProf, adesaoEstim, mensalEstim };
  }, [estabs, mixPremium]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      setSubmitting(true);
      const payload = { ...formData };
    
      try {
        // TODO: Implementar endpoint /api/representantes
        const response = await fetch("/api/representantes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        
        if (response.ok) {
          setSubmitted(true);
          setFormData({ nome: "", cidade: "", email: "", telefone: "", observacoes: "" });
        } else {
          alert("Erro ao enviar. Tente novamente.");
        }
      } catch (error) {
        console.error("Erro ao enviar:", error);
        alert("Erro ao enviar. Tente novamente.");
      } finally {
        addLead({
          nome: payload.nome,
          email: payload.email,
          telefone: payload.telefone,
          origem: "representantes",
          mensagem: payload.observacoes || "",
        });
        setSubmitting(false);
      }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-24 rounded-2xl border border-[#D9B98E]/30 bg-white/90 backdrop-blur-sm p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
      <h3 className="text-xl md:text-2xl font-playfair font-bold text-[#001F33] mb-1 tracking-tight">
        Simule seus ganhos como Representante Digital
      </h3>
      <p className="text-sm font-inter text-[#001F33] mb-6">
        💡 Estimativa comissionada: <strong>20% na adesão</strong> + <strong>7% mensal</strong> por plano ativo.
      </p>

      {/* Qtd. de estabelecimentos */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <label className="text-sm font-inter font-semibold text-[#001F33]">Estabelecimentos ativos</label>
          <span className="text-sm font-inter text-[#001F33]">{estabs}</span>
        </div>
        <input
          type="range"
          min={0}
          max={500}
          value={estabs}
          onChange={(e) => setEstabs(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-[#001F33]/60">
          <span>0</span><span>250</span><span>500</span>
        </div>
      </div>

      {/* Mix de planos */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <label className="text-sm font-inter font-semibold text-[#001F33]">
            Mix Premium ({precoPrem} R$/mês) vs Profissional ({precoProf} R$/mês)
          </label>
          <span className="text-sm font-inter text-[#001F33]">{mixPremium}% Premium</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={mixPremium}
          onChange={(e) => setMixPremium(parseInt(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-[#001F33]/60">
          <span>0% Premium</span><span>50%</span><span>100% Premium</span>
        </div>
        <p className="mt-2 text-xs font-inter text-[#001F33]">
          Distribuição atual: <strong>{qtdProf}</strong> Profissional • <strong>{qtdPrem}</strong> Premium
        </p>
      </div>

      {/* Resultado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl bg-[#F5F5F5] p-4">
          <p className="text-xs font-inter uppercase tracking-wider text-[#001F33]/70">Comissão de Adesão (one-time) 💸</p>
          <p className="text-2xl font-playfair font-extrabold text-[#001F33]">{fmt(adesaoEstim)}</p>
          <p className="text-xs font-inter text-[#001F33]/60 mt-1">
            Estimativa considerando adesão equivalente à 1ª cobrança mensal.
          </p>
        </div>
        <div className="rounded-xl bg-[#F5F5F5] p-4">
          <p className="text-xs font-inter uppercase tracking-wider text-[#001F33]/70">Comissão Mensal Recorrente 💰</p>
          <p className="text-2xl font-playfair font-extrabold text-[#001F33]">{fmt(mensalEstim)}</p>
          <p className="text-xs font-inter text-[#001F33]/60 mt-1">
            Valor recorrente com base no mix Profissional/Premium ativo.
          </p>
        </div>
      </div>

      {/* Reforços */}
      <ul className="text-sm font-inter text-[#001F33] mb-6 space-y-2">
        <li>• Vagas <strong>limitadas por região</strong>.</li>
        <li>• <strong>Painel digital</strong> para acompanhar ganhos em tempo real.</li>
        <li>• <strong>Material, treinamento e assessoria</strong> inclusos.</li>
        <li>• Nossa equipe faz o <strong>onboarding</strong> após o cadastro.</li>
      </ul>

      {/* CTA */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-full bg-[#D9B98E] text-[#001F33] font-playfair font-bold px-6 py-3 rounded-2xl shadow-[0_4px_30px_rgba(217,185,142,0.3)] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out mb-6"
        >
          Quero me tornar Representante Digital e fazer parte do ecossistema <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>.
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="border-t border-[#D9B98E]/30 pt-6"
        >
          {submitted ? (
            <div className="text-center py-4">
              <p className="text-[#D9B98E] font-inter font-semibold mb-2">✓ Formulário enviado com sucesso!</p>
              <p className="text-sm font-inter text-[#001F33]">Nossa equipe entrará em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                required
                value={formData.nome}
                onChange={handleFormChange}
                placeholder="Nome completo *"
                className="w-full px-4 py-3 rounded-xl border border-[#D9B98E]/30 bg-white text-[#001F33] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60"
              />
              <input
                type="text"
                name="cidade"
                required
                value={formData.cidade}
                onChange={handleFormChange}
                placeholder="Cidade/Região *"
                className="w-full px-4 py-3 rounded-xl border border-[#D9B98E]/30 bg-white text-[#001F33] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleFormChange}
                placeholder="E-mail *"
                className="w-full px-4 py-3 rounded-xl border border-[#D9B98E]/30 bg-white text-[#001F33] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60"
              />
              <input
                type="tel"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleFormChange}
                placeholder="Telefone *"
                className="w-full px-4 py-3 rounded-xl border border-[#D9B98E]/30 bg-white text-[#001F33] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60"
              />
              <textarea
                name="observacoes"
                value={formData.observacoes}
                onChange={handleFormChange}
                placeholder="Observações (opcional)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-[#D9B98E]/30 bg-white text-[#001F33] focus:outline-none focus:ring-2 focus:ring-[#D9B98E]/60 resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#D9B98E] text-[#001F33] font-playfair font-bold px-6 py-3 rounded-2xl hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out disabled:opacity-50"
              >
                {submitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          )}
        </motion.div>
      )}

    </div>
  );
}
