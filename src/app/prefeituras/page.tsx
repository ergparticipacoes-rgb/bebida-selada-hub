"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { 
  FileSignature, 
  BarChart3, 
  Shield, 
  Users,
  MapPin,
  Building2,
  TrendingUp,
  Award,
  Leaf,
  GraduationCap,
  Lock,
  FileText,
  Calendar,
  Target,
  Eye,
  Zap,
  Globe
} from "lucide-react";
import { FaHandsHelping } from "react-icons/fa";

export const dynamic = "force-static";

export default function PrefeiturasPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [form, setForm] = useState({
    nomePrefeitura: "",
    nomeGestor: "",
    email: "",
    telefone: "",
    uf: "",
    cidade: "",
    site: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Aqui você pode adicionar a lógica de envio para o backend
    setTimeout(() => {
      setFormSubmitted(false);
      setForm({
        nomePrefeitura: "",
        nomeGestor: "",
        email: "",
        telefone: "",
        uf: "",
        cidade: "",
        site: "",
      });
    }, 5000);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("formulario-adesao");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#001F33] text-white">
      <Navbar />
      
      <div className="flex-1">
        {/* Seção 1 – Hero Institucional */}
        <section className="py-20 md:py-28 px-6 sm:px-10 md:px-20 bg-gradient-to-b from-[#001F33] to-[#002A46] text-center">
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-playfair font-bold text-[#D9B98E] leading-snug md:leading-[1.4] mb-6 text-center"
            >
              Prefeituras Parceiras da Transparência Nacional
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-[#F8F9FB]/90 leading-relaxed md:leading-[1.8] max-w-3xl mx-auto text-center"
            >
              Gestores municipais que aderem à Rede Segura Nacional fortalecem a confiança do consumidor, promovem desenvolvimento econômico e elevam o prestígio de sua gestão.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6"
            >
              <button
                onClick={scrollToForm}
                className="px-10 py-5 text-lg md:text-xl font-semibold rounded-xl bg-[#D9B98E] text-[#001F33] hover:bg-[#E1C7A0] hover:scale-105 hover:brightness-110 transition-all duration-500 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2 focus:ring-offset-[#001F33]"
              >
                Tornar meu município parceiro agora
              </button>
            </motion.div>
          </div>
        </section>

        {/* Divisor dourado */}
        <div className="h-[1px] bg-[#D9B98E]/20"></div>

        {/* Seção 2 – Como Funciona */}
        <section className="py-20 md:py-28 px-6 sm:px-10 md:px-20 bg-[#001F33]">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-[#D9B98E] mb-12 md:mb-16"
            >
              Como Funciona
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              {[
                {
                  icon: FileSignature,
                  titulo: "Adesão Digital",
                  descricao: "Assinatura online e validação institucional.",
                },
                {
                  icon: BarChart3,
                  titulo: "Painel Municipal",
                  descricao: "Acompanhamento de certificações e relatórios locais.",
                },
                {
                  icon: Shield,
                  titulo: "Selo de Transparência",
                  descricao: "Publicação automática da parceria no portal público.",
                },
                {
                  icon: Users,
                  titulo: "Engajamento Local",
                  descricao: "Incentivo a estabelecimentos para certificação.",
                },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group flex flex-col items-center text-center bg-[#002A46]/60 backdrop-blur-sm border border-[#D9B98E]/30 rounded-2xl p-8 shadow-md hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D9B98E33] hover:border-[#D9B98E] transition-all duration-300"
                  >
                    <IconComponent className="mx-auto mb-3 text-5xl text-[#D9B98E] drop-shadow-[0_0_4px_rgba(217,185,142,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#C4A06A] group-hover:drop-shadow-[0_0_8px_rgba(217,185,142,0.7)]" />
                    <h3 className="text-[#D9B98E] font-semibold text-2xl md:text-[1.35rem] mb-2">
                      {item.titulo}
                    </h3>
                    <p className="text-[#F8F9FB] text-lg md:text-[1.1rem] leading-relaxed max-w-md">
                      {item.descricao}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divisor dourado */}
        <div className="h-[1px] bg-[#D9B98E]/20"></div>

        {/* Seção 3 – Benefícios ao Município */}
        <section className="py-20 md:py-28 px-6 sm:px-10 md:px-20 bg-[#001F33]">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-[#D9B98E] mb-12 md:mb-16"
            >
              Benefícios ao Município
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-12">
              {[
                {
                  icon: MapPin,
                  titulo: "Sem Custo de Adesão",
                  descricao: "Parceria gratuita, simples e direta.",
                },
                {
                  icon: Award,
                  titulo: "Valorização da Gestão Pública",
                  descricao: "Transparência reconhecida nacionalmente.",
                },
                {
                  icon: TrendingUp,
                  titulo: "Desenvolvimento Econômico Local",
                  descricao: "Mais arrecadação, fortalecimento do comércio.",
                },
                {
                  icon: Building2,
                  titulo: "Confiança da Opinião Pública",
                  descricao: "Gestão que inspira credibilidade e orgulho cívico.",
                },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex flex-col items-center text-center bg-[#002A46]/60 backdrop-blur-sm border border-[#D9B98E]/30 rounded-2xl p-8 shadow-md hover:shadow-lg hover:shadow-[#D9B98E33] hover:border-[#D9B98E] transition-all duration-300"
                >
                  <IconComponent className="mx-auto mb-3 text-5xl text-[#D9B98E] drop-shadow-[0_0_4px_rgba(217,185,142,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#C4A06A] group-hover:drop-shadow-[0_0_8px_rgba(217,185,142,0.7)]" />
                  <h3 className="text-[#D9B98E] font-semibold text-2xl md:text-[1.35rem] mb-2">
                    {item.titulo}
                  </h3>
                  <p className="text-[#F8F9FB] text-base md:text-lg leading-relaxed">
                    {item.descricao}
                  </p>
                </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divisor dourado */}
        <div className="h-[1px] bg-[#D9B98E]/20"></div>

        {/* Seção 4 – Movimento Nacional */}
        <section className="py-20 md:py-28 px-6 sm:px-10 md:px-20 bg-[#001F33]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto space-y-6 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#D9B98E]">
                Movimento Nacional
              </h2>
              <p className="text-base md:text-lg text-[#F8F9FB] leading-relaxed">
                A Rede Segura Nacional – <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span> integra prefeituras e estabelecimentos em um movimento nacional por transparência, segurança e orgulho na bebida brasileira.
              </p>
              <p className="text-base md:text-lg text-[#D9B98E]/80 italic">
                Baseado no Protocolo INBS-001:2025 — Instituto Nacional <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative" style={{ top: "-0.35em" }}>®</span></span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divisor dourado */}
        <div className="h-[1px] bg-[#D9B98E]/20"></div>

        {/* Seção 5 – Secretarias Diretamente Impactadas */}
        <section className="py-16 md:py-24 px-6 sm:px-10 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-[#001F33] mb-12 md:mb-16"
            >
              Secretarias diretamente impactadas pela adesão ao programa
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {[
                {
                  icon: Building2,
                  titulo: "Fazenda / Finanças",
                  descricao: "Aumenta a arrecadação municipal com a regularização e rastreabilidade das bebidas certificadas.",
                },
                {
                  icon: Shield,
                  titulo: "Saúde / Vigilância Sanitária",
                  descricao: "Reforça o controle sanitário e combate à falsificação de bebidas.",
                },
                {
                  icon: TrendingUp,
                  titulo: "Desenvolvimento Econômico / Turismo",
                  descricao: "Impulsiona o comércio e o turismo responsável, com selo municipal de transparência.",
                },
                {
                  icon: Leaf,
                  titulo: "Meio Ambiente",
                  descricao: "Fortalece ações de sustentabilidade e combate ao descarte irregular de resíduos da cadeia de bebidas.",
                },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group flex flex-col items-center text-center bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#D9B98E33] transition-all duration-300 h-full"
                  >
                    <IconComponent className="mx-auto mb-3 text-5xl text-[#D9B98E] drop-shadow-[0_0_4px_rgba(217,185,142,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#C4A06A] group-hover:drop-shadow-[0_0_8px_rgba(217,185,142,0.7)]" />
                    <h3 className="text-[#001F33] font-semibold mb-2 text-xl md:text-[1.3rem]">
                      {item.titulo}
                    </h3>
                    <p className="text-[#0A0A0A99] text-sm md:text-base leading-relaxed">
                      {item.descricao}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divisor dourado */}
        <div className="h-[1px] bg-[#D9B98E]/20"></div>

        {/* Seção 6 – Outras Secretarias Envolvidas */}
        <section className="py-12 md:py-20 px-6 sm:px-10 md:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-[#001F33] mb-12 md:mb-16"
            >
              Outras secretarias e áreas que também se beneficiam
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  icon: Target,
                  titulo: "Planejamento / Governo",
                  descricao: "Integra o programa às metas de transparência e eficiência da gestão.",
                },
                {
                  icon: GraduationCap,
                  titulo: "Educação",
                  descricao: "Promove conscientização e consumo responsável nas escolas.",
                },
                {
                  icon: Lock,
                  titulo: "Segurança Pública / Guarda Municipal",
                  descricao: "Combate à pirataria e falsificação de bebidas.",
                },
                {
                  icon: FileText,
                  titulo: "Administração / Licitações",
                  descricao: "Inclui padrões de autenticidade em contratos públicos.",
                },
                {
                  icon: Calendar,
                  titulo: "Cultura e Eventos",
                  descricao: "Garante bebidas seguras em festas e eventos municipais.",
                },
                {
                  icon: FaHandsHelping,
                  titulo: "Assistência Social / Direitos Humanos",
                  descricao: "Protege o cidadão e incentiva o consumo seguro e consciente.",
                },
              ].map((item, i) => {
                const IconComponent = item.icon;
                const isHidden = i === 5 && !showAll;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`group flex flex-col items-center text-center bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full ${isHidden ? 'hidden md:block' : ''}`}
                  >
                    <IconComponent className="mx-auto mb-3 text-5xl text-[#D9B98E] drop-shadow-[0_0_4px_rgba(217,185,142,0.4)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#C4A06A] group-hover:drop-shadow-[0_0_8px_rgba(217,185,142,0.7)]" />
                    <h3 className="text-[#001F33] font-semibold text-xl md:text-[1.3rem] mb-2">
                      {item.titulo}
                    </h3>
                    <p className="text-[#0A0A0A99] text-sm md:text-base leading-relaxed">
                      {item.descricao}
                    </p>
                  </motion.div>
                );
              })}
            </div>
            <div className="text-center mt-8 md:hidden">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-[#D9B98E] text-sm underline mt-4"
              >
                {showAll ? 'Ver menos secretarias' : 'Ver todas as secretarias envolvidas'}
              </button>
            </div>
          </div>
        </section>

        {/* Divisor dourado */}
        <div className="h-[1px] bg-[#D9B98E]/20"></div>

        {/* Copy Institucional – Reformulada e Cardeada */}
        <section className="py-20 md:py-28 px-6 sm:px-10 md:px-20 bg-[#001F33]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-[#D9B98E] mb-12 md:mb-16"
            >
              Por que sua prefeitura deve se tornar parceira da Rede Segura Nacional
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
              {[
                {
                  icon: Eye,
                  titulo: "Imagem Pública e Confiança",
                  descricao: (
                    <p className="font-inter text-[#F8F9FB]/90 leading-relaxed">
                      A adesão à Rede Segura Nacional – <span className="inline-flex items-baseline gap-[1px]"><span className="font-playfair text-inbsGold">Bebida Selada</span><span className="font-inter text-inbsGold text-[0.65em] ml-[1px] relative top-[-0.35em]">®</span></span> fortalece a imagem pública do município e amplia o reconhecimento político perante a população e os órgãos de controle.
                    </p>
                  ),
                },
                {
                  icon: Zap,
                  titulo: "Integração e Eficiência",
                  descricao: "O alto nível de integração entre as secretarias municipais e a padronização técnica do programa contribuem diretamente para elevar os indicadores de governança e eficiência administrativa.",
                },
                {
                  icon: Globe,
                  titulo: "Transparência e Desenvolvimento",
                  descricao: "Tornar-se parceiro é alinhar sua gestão às melhores práticas nacionais de transparência, eficiência e desenvolvimento sustentável — atributos de governos modernos e bem avaliados.",
                },
              ].map((item, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex flex-col justify-between text-center min-h-[340px] p-6 border border-[#D9B98E33] rounded-xl bg-[#002A46]/30"
                  >
                    <h3 className="text-[#D9B98E] font-playfair text-2xl md:text-[1.5rem] mb-5">
                      {item.titulo}
                    </h3>
                    <div className="text-xl md:text-[1.15rem] leading-relaxed md:leading-[1.9]">
                      {typeof item.descricao === 'string' ? (
                        <p className="text-[#F8F9FB]/90">{item.descricao}</p>
                      ) : (
                        item.descricao
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divisor dourado */}
        <div className="h-[1px] bg-[#D9B98E]/20"></div>

        {/* Seção 7 – Formulário de Adesão */}
        <section
          id="formulario-adesao"
          className="py-20 md:py-28 px-6 sm:px-10 md:px-20 bg-[#001F33]"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-[#D9B98E] mb-8 md:mb-12"
            >
              Formulário de Adesão
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-[#F8F9FB] text-center mb-10 leading-relaxed"
            >
              Preencha os dados e nossa equipe entrará em contato para formalizar a parceria com seu município.
            </motion.p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#002A46]/60 border border-[#D9B98E]/30 rounded-xl p-10 text-center"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-serif font-bold text-[#D9B98E] mb-3">
                  Solicitação enviada com sucesso
                </h3>
                <p className="text-lg text-[#F8F9FB]">
                  Bem-vindo à Rede Segura Nacional.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="bg-[#002A46]/60 backdrop-blur-sm border border-[#D9B98E]/30 rounded-xl p-8 md:p-10 space-y-6"
              >
                <div>
                  <label htmlFor="nomePrefeitura" className="block text-[#D9B98E] font-semibold mb-2">
                    Nome da Prefeitura *
                  </label>
                  <input
                    id="nomePrefeitura"
                    name="nomePrefeitura"
                    type="text"
                    required
                    value={form.nomePrefeitura}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#D9B98E]/30 transition-all"
                    placeholder="Prefeitura Municipal de..."
                  />
                </div>

                <div>
                  <label htmlFor="nomeGestor" className="block text-[#D9B98E] font-semibold mb-2">
                    Nome do Gestor Responsável *
                  </label>
                  <input
                    id="nomeGestor"
                    name="nomeGestor"
                    type="text"
                    required
                    value={form.nomeGestor}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#D9B98E]/30 transition-all"
                    placeholder="Nome completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[#D9B98E] font-semibold mb-2">
                      E-mail institucional *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#D9B98E]/30 transition-all"
                      placeholder="contato@prefeitura.gov.br"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-[#D9B98E] font-semibold mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={form.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#D9B98E]/30 transition-all"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="uf" className="block text-[#D9B98E] font-semibold mb-2">
                      UF *
                    </label>
                    <select
                      id="uf"
                      name="uf"
                      required
                      value={form.uf}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#D9B98E]/30 transition-all"
                    >
                      <option value="">Selecione</option>
                      {["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"].map((uf) => (
                        <option key={uf} value={uf} className="bg-[#001F33]">
                          {uf}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="cidade" className="block text-[#D9B98E] font-semibold mb-2">
                      Cidade *
                    </label>
                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      required
                      value={form.cidade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#D9B98E]/30 transition-all"
                      placeholder="Nome da cidade"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="site" className="block text-[#D9B98E] font-semibold mb-2">
                    Site oficial (opcional)
                  </label>
                  <input
                    id="site"
                    name="site"
                    type="url"
                    value={form.site}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#D9B98E]/30 text-white placeholder-white/50 focus:outline-none focus:border-[#D9B98E] focus:ring-2 focus:ring-[#D9B98E]/30 transition-all"
                    placeholder="https://www.prefeitura.gov.br"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full px-10 py-5 text-lg md:text-xl font-semibold rounded-xl bg-[#D9B98E] text-[#001F33] hover:bg-[#E1C7A0] hover:scale-105 hover:brightness-110 transition-all duration-500 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2 focus:ring-offset-[#001F33]"
                  >
                    Enviar solicitação
                  </button>
                </div>
              </motion.form>
            )}
          </div>
        </section>

        {/* Botão Voltar */}
        <div className="text-center py-10 pb-20">
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 text-lg font-semibold rounded-lg bg-[#D9B98E] text-[#001F33] hover:brightness-110 hover:scale-105 transition-all duration-400 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5C48F]/60 focus:ring-offset-2 focus:ring-offset-[#001F33]"
          >
            ← Voltar
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}

