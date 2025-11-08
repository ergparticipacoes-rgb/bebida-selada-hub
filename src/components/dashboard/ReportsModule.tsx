"use client";
import { motion } from "framer-motion";
import { FileText, Download, TrendingUp } from "lucide-react";

interface Report {
  id: string;
  title: string;
  date: string;
  type: "Auditoria" | "Conformidade" | "Rastreabilidade";
  status: "Disponível" | "Gerando";
}

interface ReportsModuleProps {
  reports?: Report[];
  auditStats?: {
    total: number;
    auditadas: number;
    emProcessamento: number;
  };
}

export default function ReportsModule({
  reports = [],
  auditStats,
}: ReportsModuleProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#D9B98E]/20 mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#001F33] mb-2">
        Relatórios Técnicos e Auditorias
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Acompanhe a autenticidade das notas auditadas e mantenha seu selo atualizado.
      </p>

      {/* Estatísticas de Desempenho */}
      {auditStats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-[#D9B98E]" />
              <p className="text-sm text-gray-600">Total de Auditorias</p>
            </div>
            <p className="text-2xl font-bold text-[#001F33]">{auditStats.total}</p>
          </div>
          <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-green-600" />
              <p className="text-sm text-gray-600">Auditadas</p>
            </div>
            <p className="text-2xl font-bold text-green-600">{auditStats.auditadas}</p>
          </div>
          <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-yellow-600" />
              <p className="text-sm text-gray-600">Em Processamento</p>
            </div>
            <p className="text-2xl font-bold text-yellow-600">{auditStats.emProcessamento}</p>
          </div>
        </div>
      )}

      {/* Lista de Relatórios */}
      {reports.length > 0 ? (
        <div>
          <h3 className="text-lg font-semibold text-[#001F33] mb-4">
            Relatórios disponíveis
          </h3>
          <div className="space-y-3">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/10 hover:border-[#D9B98E]/30 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <FileText className="w-6 h-6 text-[#D9B98E]" />
                  <div className="flex-1">
                    <p className="font-medium text-[#001F33]">{report.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-600">{formatDate(report.date)}</span>
                      <span className="text-xs px-2 py-1 bg-[#D9B98E]/20 text-[#001F33] rounded">
                        {report.type}
                      </span>
                    </div>
                  </div>
                </div>
                {report.status === "Disponível" ? (
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#D9B98E] text-[#001F33] rounded-lg font-semibold hover:bg-[#E1C7A0] transition-colors">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                ) : (
                  <span className="text-sm text-gray-500">Gerando...</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 text-center bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600">Nenhum relatório disponível ainda.</p>
          <p className="text-sm text-gray-500 mt-2">
            Envie notas fiscais para gerar seus primeiros relatórios de autenticidade.
          </p>
        </div>
      )}
    </motion.div>
  );
}




