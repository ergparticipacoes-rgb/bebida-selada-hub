
import DashboardSidebar from "../../../components/DashboardSidebar";

export default function DashboardAdmin() {
  return (
    <main className="flex min-h-screen">
      <DashboardSidebar />
      <section className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-[#004C6D] mb-4 font-[Poppins]">Área Administrativa</h1>
        <p className="text-gray-700">Controle de usuários, municípios e relatórios.</p>
      </section>
    </main>
  );
}
