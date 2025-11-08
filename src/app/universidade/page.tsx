"use client";
// src/app/universidade/page.tsx
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Link from "next/link";
import {
  Shield,
  Award,
  Building2,
  Link2,
  MessageSquare,
  TrendingUp,
  Leaf,
  FileCheck,
  Sparkles,
  Users,
} from "lucide-react";

export default function UniversidadePage() {
  const cursos = [
    {
      icon: Shield,
      titulo: "Fundamentos da Autenticidade",
      desc: "Conceitos essenciais sobre autenticidade, certificação e confiança no mercado de bebidas.",
    },
    {
      icon: Award,
      titulo: "Boas Práticas na Cadeia de Bebidas",
      desc: "Padrões de qualidade, armazenamento, transporte e manuseio correto de bebidas.",
    },
    {
      icon: Building2,
      titulo: "Transparência e Governança Municipal",
      desc: "Como implementar políticas públicas de fiscalização e certificação em municípios.",
    },
    {
      icon: Link2,
      titulo: "Blockchain na Rastreabilidade",
      desc: "Tecnologia blockchain aplicada à rastreabilidade e autenticidade de bebidas.",
    },
    {
      icon: MessageSquare,
      titulo: "Comunicação e Consumo Consciente",
      desc: "Estratégias de comunicação transparente para promover consumo consciente e seguro.",
    },
    {
      icon: TrendingUp,
      titulo: "Gestão de Reputação e Marca Selada",
      desc: "Como construir e manter reputação positiva através do selo de autenticidade.",
    },
    {
      icon: Leaf,
      titulo: "Sustentabilidade e Origem Controlada",
      desc: "Rastreabilidade de origem, sustentabilidade e responsabilidade ambiental no setor.",
    },
    {
      icon: FileCheck,
      titulo: "Auditoria e Certificação Digital",
      desc: "Processos de auditoria técnica, certificação digital e manutenção do selo.",
    },
    {
      icon: Sparkles,
      titulo: "O Futuro da Bebida Brasileira",
      desc: "Tendências, inovações tecnológicas e perspectivas futuras do mercado de bebidas.",
    },
    {
      icon: Users,
      titulo: "Formação de Embaixadores da Autenticidade",
      desc: "Como formar multiplicadores e representantes que disseminam a cultura da autenticidade.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#001F33]">
      <Navbar />
      
      {/* Conteúdo principal com padding-top - removendo faixa branca */}
      <div className="pt-32 pb-20 bg-[#001F33] text-white relative z-10">
          {/* START — Hero Institucional Final - Produção */}
          <section className="relative text-center py-24 px-6 bg-gradient-to-b from-[#001F33] to-[#002A46] text-white overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Overlay dourado translúcido */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D9B98E]/5 to-[#001F33]/95 parallax-bg"
              style={{ backgroundAttachment: "fixed" }}
            />
            
            <div className="max-w-5xl mx-auto space-y-8 relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-playfair text-4xl md:text-5xl font-bold text-[#D9B98E] leading-tight drop-shadow-sm"
              >
                A Rede Segura Nacional – <span className="inline-flex items-baseline gap-[1px]">
                  <span className="font-playfair text-[#D9B98E]">Bebida Selada</span>
                  <span className="font-inter text-[#D9B98E] text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span>
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="font-inter text-xl md:text-2xl lg:text-3xl text-[#F8F9FB] font-semibold leading-relaxed"
              >
                É o primeiro sistema brasileiro de certificação inteligente, rastreabilidade e confiança no setor de bebidas.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="font-inter text-[#F8F9FB]/95 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto mt-6"
              >
                O selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> conecta produtores, fabricantes, distribuidores e governos em uma única rede de autenticidade e rastreabilidade.  
                Mais do que uma certificação, representa um <span className="text-[#C39B6A] font-semibold" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}>padrão nacional de transparência e confiança</span> que eleva a qualidade e a credibilidade do setor de bebidas no Brasil.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-4 mt-10"
              >
                <a
                  href="/prefeituras"
                  className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition"
                >
                  Para Prefeituras
                </a>
                <a
                  href="/estabelecimentos"
                  className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition"
                >
                  Para Estabelecimentos
                </a>
                <a
                  href="/consumidor"
                  className="bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition"
                >
                  Sou Consumidor
                </a>
              </motion.div>
            </div>
          </section>

          {/* Divisor dourado */}
          <div className="mx-auto h-[1.5px] w-1/2 bg-[#E6CFA5] opacity-60 rounded-full"></div>
      </div>

      {/* Blocos brancos fora do container azul */}
      <div className="bg-[#F8F9FB]">
          {/* BLOCO NOSSA MISSÃO - v9.5.1 */}
          <section className="py-20 px-6 bg-white border border-[#D9B98E] rounded-2xl shadow-[#D9B98E]/30 mx-6 sm:mx-10 md:mx-20 my-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#001F33] mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg md:text-xl text-[#001F33] leading-relaxed">
                  A <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsBlue">Universidade Bebida Selada</span><span className="font-inter text-inbsBlue text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> é o braço educacional do Selo Nacional de Autenticidade.
                  <br className="hidden md:block" />
                  Aqui, governos, estabelecimentos e consumidores aprendem, compartilham e constroem um novo padrão de confiança no mercado de bebidas brasileiro.
                </p>
              </motion.div>
            </div>
          </section>

          {/* BLOCO TEMAS E CURSOS - v9.5.1 */}
          <section className="py-20 px-6 bg-[#F5F5F5] border border-[#D9B98E] rounded-2xl shadow-[#D9B98E]/30 mx-6 sm:mx-10 md:mx-20 my-8">
            <div className="max-w-7xl mx-auto space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#001F33] mb-4">
                  Temas e Cursos
                </h2>
                <p className="text-lg text-[#001F33] max-w-2xl mx-auto">
                  Conteúdo EAD modular desenvolvido por especialistas do setor
                </p>
              </motion.div>

              {/* Cards com borda reforçada */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {cursos.map((curso, index) => {
                  const IconComponent = curso.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 border-2 border-[#D9B98E] shadow-[#D9B98E]/30 hover:shadow-[#D9B98E]/50 transition-all duration-300"
                    >
                      <div className="flex justify-center mb-4">
                        <IconComponent className="w-12 h-12 text-[#C39B6A]" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }} />
                      </div>
                      <h3 className="font-playfair font-semibold text-xl mb-3 text-[#001F33] text-center">
                        {curso.titulo}
                      </h3>
                      <p className="text-[#001F33CC] text-sm leading-relaxed text-center">
                        {curso.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Curso Destaque – Representantes Digitais */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 bg-[#001F33] border border-[#D9B98E33] rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition"
              >
                <h3 className="font-playfair text-2xl text-[#D9B98E] mb-4">
                  Formação de Representantes Digitais Certificados INBS
                </h3>
                <p className="font-inter text-[#F8F9FB] text-base leading-relaxed mb-6 max-w-2xl mx-auto">
                  Aprenda estratégias de vendas éticas, marketing regional e expansão comercial sustentável,
                  com base nos protocolos oficiais da Rede Segura Nacional.
                </p>
                <a
                  href="/universidade/representante-digital"
                  className="inline-block bg-[#D9B98E] text-[#001F33] font-semibold px-8 py-3 rounded-lg hover:bg-[#C9A97D] transition"
                >
                  Saiba Mais
                </a>
              </motion.div>

              {/* Transição Textual Institucional */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-16 text-center font-playfair text-[#D9B98E99] text-xl italic"
              >
                A formação é o início. A expansão é o propósito.
              </motion.p>
            </div>
          </section>

      </div>

      {/* BLOCO DE CONVERSÃO */}
      <section className="bg-[#001F33] text-white py-16 text-center px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <p className="text-lg md:text-xl lg:text-2xl text-[#C7D3E3] mb-10 leading-relaxed">
                  Cadastre-se gratuitamente e tenha acesso antecipado aos primeiros cursos, eventos e certificações da <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Universidade Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>.
                </p>
                <Link href="/auth/register">
                  <Button variant="secondary" className="text-base md:text-lg px-10 py-4">
                    Quero fazer parte
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

      {/* BOTÃO FINAL DE RETORNO */}
      <section className="py-10 bg-white mb-24 px-6 mx-6 sm:mx-10 md:mx-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-block px-6 py-3 rounded-2xl border border-[#D9B98E]/30 bg-[#D9B98E] text-[#001F33] font-medium hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md"
            >
              ← Voltar
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
