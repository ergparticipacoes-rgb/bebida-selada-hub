"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import BackButton from "../../../components/ui/BackButton";
import Button from "../../../components/ui/Button";
import { ONBOARDING_CONFIG } from "../../../config/onboarding";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-[#001F33] to-[#002A46]">
      <Navbar />
      
      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#E5C48F] mb-4"
          >
            {ONBOARDING_CONFIG.welcome.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-white mb-6"
          >
            {ONBOARDING_CONFIG.welcome.subtitle}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-white/90 mb-10 max-w-xl mx-auto leading-relaxed"
          >
            {ONBOARDING_CONFIG.welcome.message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              variant="secondary"
              onClick={() => router.push("/dashboard")}
              className="text-lg md:text-xl px-10 py-5"
            >
              Ir para meu painel
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Botão Voltar */}
      <div className="mt-8 text-center">
        <BackButton className="rounded-2xl border border-[#D9B98E]/70 bg-white px-7 md:px-10 py-3 text-sm md:text-base font-semibold text-[#001F33] shadow-[0_12px_28px_-24px_rgba(217,185,142,0.45)] hover:-translate-y-1 hover:bg-[#FDF3E4]">
          Voltar
        </BackButton>
      </div>

      <Footer />
    </main>
  );
}

