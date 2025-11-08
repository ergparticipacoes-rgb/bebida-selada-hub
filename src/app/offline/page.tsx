import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-3xl font-bold text-[#D9B98E] mb-4">
          Você está offline
        </h1>
        <p className="text-gray-400 max-w-md leading-relaxed">
          Parece que sua conexão caiu. Algumas funções podem não estar disponíveis,
          mas você ainda pode navegar pelas páginas salvas.
        </p>
      </section>
      <Footer />
    </main>
  );
}




