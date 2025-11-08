
import DashboardSidebar from "../../../components/DashboardSidebar";

export default function DashboardRepresentante() {
  return (
    <main className="flex min-h-screen">
      <DashboardSidebar />
      <section className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#004C6D] mb-4 font-[Poppins]">Área do Representante</h1>
        <p className="text-gray-700">Acompanhamento de comissões e clientes.</p>
      </section>
    </main>
  );
}
