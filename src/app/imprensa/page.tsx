"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";

export const dynamic = "force-static";

export default function ImprensaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      <div className="px-8 md:px-20 py-28 md:py-36 flex-1">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-10 md:space-y-14"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#E5C48F] mb-8">
              <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> na mídia nacional
            </h1>
            <p className="text-lg md:text-xl text-[#E5E9F0] max-w-3xl mx-auto leading-relaxed md:leading-loose">
              Reconhecida por sua inovação em rastreabilidade e transparência,
              a <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> vem conquistando destaque em portais, veículos e órgãos oficiais.
            </p>
          </motion.div>

          {/* Institucional */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center max-w-4xl mx-auto space-y-10 md:space-y-14 mt-24 md:mt-32"
          >
            <p className="text-[#E5E9F0]/90 text-lg md:text-xl leading-relaxed md:leading-loose">
              O <strong className="text-[#E5C48F]">Selo Nacional de Autenticidade <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span></strong> é pauta constante em veículos de comunicação,
              universidades e eventos do setor de bebidas, tecnologia e gestão pública.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              A imprensa reconhece o projeto como um marco no avanço da{" "}
              <strong className="text-[#E5C48F]">rastreabilidade, confiança e governança digital</strong> no Brasil.
            </p>
          </motion.section>

          {/* Comunicados Oficiais – Rede Segura Nacional */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            id="comunicados-oficiais"
            className="py-24 bg-[#001F33] text-white mt-24 md:mt-32"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#D9B98E] mb-10 text-center">
                Comunicados Oficiais – Rede Segura Nacional
              </h2>
              <p className="text-center text-white/80 max-w-2xl mx-auto mb-12 text-base md:text-lg">
                Publicações técnicas emitidas pelo Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS) e órgãos vinculados à Rede Segura Nacional.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {/* COMUNICADO 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#002A46]/40 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold text-[#D9B98E] mb-3">🛡️ Comunicado Oficial</span>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    Ativação Nacional do Sistema de Certificação Digital
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed mb-4">
                    A Rede Segura Nacional anuncia o início da integração de estabelecimentos e municípios no Protocolo Técnico INBS-001:2025, consolidando o Selo <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> como padrão nacional de autenticidade.
                  </p>
                  <p className="text-xs text-[#D9B98E]/80 font-medium mb-4">📅 Publicado em 28 de outubro de 2025</p>
                  <Link href="/imprensa/comunicados/ativacao-nacional-certificacao-digital" className="text-[#D9B98E] hover:text-white text-sm font-semibold transition-all duration-200 underline">
                    Ler Comunicado Completo →
                  </Link>
                </motion.div>

                {/* COMUNICADO 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-[#002A46]/40 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold text-[#D9B98E] mb-3">🛡️ Comunicado Oficial</span>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    Norma Técnica INBS-001:2025 – Versão Revisada
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed mb-4">
                    O INBS divulga a versão revisada da Norma Técnica que define as diretrizes de certificação, auditoria e rastreabilidade de bebidas certificadas pela Rede Segura Nacional.
                  </p>
                  <p className="text-xs text-[#D9B98E]/80 font-medium mb-4">📅 Publicado em 30 de outubro de 2025</p>
                  <Link href="/imprensa/comunicados/norma-tecnica-inbs-001-2025" className="text-[#D9B98E] hover:text-white text-sm font-semibold transition-all duration-200 underline">
                    Ler Comunicado Completo →
                  </Link>
                </motion.div>

                {/* COMUNICADO 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-[#002A46]/40 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="inline-flex items-center text-xs uppercase tracking-wide font-semibold text-[#D9B98E] mb-3">🛡️ Comunicado Oficial</span>
                  <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                    Adesão Institucional de Municípios Certificados
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed mb-4">
                    Prefeituras de 42 regiões já integram oficialmente o programa <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>, fortalecendo transparência e segurança sanitária em todo o país.
                  </p>
                  <p className="text-xs text-[#D9B98E]/80 font-medium mb-4">📅 Publicado em 31 de outubro de 2025</p>
                  <Link href="/imprensa/comunicados/adesao-institucional-municipios" className="text-[#D9B98E] hover:text-white text-sm font-semibold transition-all duration-200 underline">
                    Ler Comunicado Completo →
                  </Link>
                </motion.div>
              </div>

              <div className="h-px w-full bg-[#D9B98E]/20 my-16"></div>
            </div>
          </motion.section>

          {/* Destaques de mídia */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10 md:space-y-14 mt-24 md:mt-32"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-[#E5C48F] mb-10">
              Destaques na mídia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
              {[
                {
                  veiculo: "Valor Econômico",
                  titulo:
                    "Blockchain chega ao copo: tecnologia garante autenticidade das bebidas brasileiras.",
                  slug: "valor-blockchain",
                },
                {
                  veiculo: "Estadão",
                  titulo:
                    "Prefeituras adotam o selo <span className=\"inline-flex items-baseline gap-[1px]\"><span className=\"font-playfair text-inbsBlue\">Bebida Selada</span><span className=\"font-inter text-inbsBlue text-[0.65em] ml-[1px] relative\" style={{ top: \"-0.35em\" }}>®</span></span> para fortalecer combate à falsificação e arrecadação local.",
                  slug: "estadao-selo-municipios",
                },
                {
                  veiculo: "Exame",
                  titulo:
                    "<span className=\"inline-flex items-baseline gap-[1px]\"><span className=\"font-playfair text-inbsBlue\">Bebida Selada</span><span className=\"font-inter text-inbsBlue text-[0.65em] ml-[1px] relative\" style={{ top: \"-0.35em\" }}>®</span></span> cria ecossistema nacional de confiança e inovação no setor de bebidas.",
                  slug: "exame-certificacao",
                },
              ].map((noticia, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-[#001F33]/50 border border-[#E5C48F]/20 rounded-2xl p-10 md:p-12 flex flex-col justify-between hover:border-[#E5C48F]/40 transition-all duration-500 ease-in-out shadow-md"
                >
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-[#E5C48F] mb-4">
                      {noticia.veiculo}
                    </h3>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed md:leading-loose">
                      {noticia.titulo}
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link href={`/noticias/${noticia.slug}`}>
                      <Button
                        variant="secondary"
                        className="w-full text-base md:text-lg"
                      >
                        Ver matéria
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Releases */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center space-y-10 md:space-y-14 mt-24 md:mt-32"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#E5C48F] mb-8">
              Releases e Comunicados Oficiais
            </h2>
            <p className="text-[#E5E9F0]/80 text-lg md:text-xl leading-relaxed md:leading-loose max-w-3xl mx-auto">
              Acompanhe os comunicados e notas oficiais do{" "}
              <strong className="text-[#E5C48F]">Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS:001)</strong>.
            </p>
            <div className="mt-10 md:mt-12">
              <Link href="/atualizacao">
                <Button variant="secondary" className="text-lg md:text-xl px-10 py-5">
                  Ver comunicados oficiais
                </Button>
              </Link>
            </div>
          </motion.section>

          {/* Contato com imprensa */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-10 md:space-y-14 mt-24 md:mt-32"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#E5C48F] mb-8">
              Contato para imprensa
            </h2>
            <p className="text-lg md:text-xl text-[#E5E9F0]/90 leading-relaxed md:leading-loose">
              <strong className="text-[#E5C48F]">E-mail:</strong> imprensa@bebidaselada.com.br
              <br className="hidden md:block" />
              <strong className="text-[#E5C48F]">Telefone:</strong> +55 (11) 99999-9999
              <br className="hidden md:block" />
              Assessoria: <strong className="text-[#E5C48F]">Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> (INBS)</strong>
            </p>
            <div className="mt-10 md:mt-12">
              <a href="mailto:imprensa@bebidaselada.com.br">
                <Button variant="secondary" className="text-lg md:text-xl px-10 py-5">
                  Solicitar informações
                </Button>
              </a>
            </div>
          </motion.section>

          {/* Fechamento */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center space-y-6 mt-24 md:mt-32"
          >
            <p className="text-[#E5E9F0]/90 text-lg md:text-xl italic leading-relaxed md:leading-loose max-w-3xl mx-auto">
              "Transparência é notícia. A <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> reforça o compromisso com
              a verdade, a rastreabilidade e a inovação brasileira."
            </p>
          </motion.section>

          {/* Botão Voltar (padrão global) */}
          <div className="text-center mt-20">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
