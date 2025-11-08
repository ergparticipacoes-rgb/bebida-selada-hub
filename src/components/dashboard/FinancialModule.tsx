"use client";
import { motion } from "framer-motion";
import Button from "../ui/Button";

interface Invoice {
  id: string;
  date: string;
  amount: number;
  status: "Pendente" | "Pago" | "Em análise";
  description: string;
}

interface FinancialModuleProps {
  invoices?: Invoice[];
  nextRenewal?: string;
}

export default function FinancialModule({
  invoices = [],
  nextRenewal,
}: FinancialModuleProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  const statusColors = {
    Pendente: "text-yellow-600 bg-yellow-50",
    Pago: "text-green-600 bg-green-50",
    "Em análise": "text-blue-600 bg-blue-50",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#D9B98E]/20 mb-8"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#001F33] mb-2">
        Faturas e Pagamentos
      </h2>
      
      {/* Próxima Renovação */}
      {nextRenewal && (
        <div className="mb-6 p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
          <p className="text-sm text-gray-600 mb-1">Próxima renovação</p>
          <p className="text-lg font-semibold text-[#001F33]">
            {formatDate(nextRenewal)}
          </p>
        </div>
      )}

      {/* Histórico de Faturas */}
      {invoices.length > 0 ? (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#001F33] mb-4">
            Histórico de faturas
          </h3>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/10"
              >
                <div className="flex-1">
                  <p className="font-medium text-[#001F33]">{invoice.description}</p>
                  <p className="text-sm text-gray-600">{formatDate(invoice.date)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-[#001F33]">
                    {formatPrice(invoice.amount)}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[invoice.status]}`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-6 p-8 text-center bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
          <p className="text-gray-600">Nenhuma fatura registrada ainda.</p>
        </div>
      )}

      {/* Botão Atualizar Pagamento */}
      <div className="mb-6">
        <Button variant="outline" className="w-full md:w-auto">
          Atualizar forma de pagamento
        </Button>
      </div>

      {/* Copy Institucional */}
      <div className="p-4 bg-[#F8F9FB] rounded-xl border border-[#D9B98E]/20">
        <p className="text-sm text-gray-600 leading-relaxed italic">
          Transparência e segurança em suas transações.
          <br />
          Todos os pagamentos e renovações são processados com autenticação digital e integridade garantida.
        </p>
      </div>
    </motion.div>
  );
}




