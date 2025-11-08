export default function HowItWorks() {
  const steps = [
    {
      title: "Envie suas notas fiscais",
      text: "Integração direta com a NFe Nacional e validação blockchain.",
      icon: "📄",
    },
    {
      title: "Receba o Selo de Confiança Nacional",
      text: "Certificação digital e física com QR Code autenticado.",
      icon: "✅",
    },
    {
      title: "Apareça no Mapa Nacional da Confiança",
      text: "Visibilidade e credibilidade para consumidores e órgãos públicos.",
      icon: "🗺️",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#004C6D] mb-12">Como Funciona</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#004C6D] mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
