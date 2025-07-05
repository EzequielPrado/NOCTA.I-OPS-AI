import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  RefreshCw,
  Puzzle,
  TrendingDown,
  Calendar,
  Mail,
  AlertCircle,
  Zap,
  DollarSign,
  BarChart3,
  Headphones,
  Repeat,
  Target,
  Building2,
  CreditCard,
  Gift,
  LineChart,
  Briefcase,
  ShoppingCart,
  Cpu,
  Database,
  MessageSquare,
  FileText,
  Settings,
  CheckCircle2,
  Phone,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  Star,
  Quote,
  MessageCircle,
  Instagram,
  Plus,
  Minus
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    company: '',
    segment: '',
    website: '',
    revenue: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for framework steps animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...prev, stepIndex]);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe framework steps
    const steps = document.querySelectorAll('[data-step]');
    steps.forEach(step => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsFormSubmitted(true);
    setTimeout(() => setIsFormSubmitted(false), 5000);
  };

  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#04020a] text-white relative overflow-hidden" style={{ backgroundColor: '#0b0b0b' }}>
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern bg-grid opacity-20 animate-grid-glow pointer-events-none"></div>
      
      {/* Header */}
      <header className="fixed top-2 left-2 right-2 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-black/15 backdrop-blur-md border border-white/15 rounded-2xl px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <button 
                onClick={scrollToTop}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <img 
                  src="https://i.imgur.com/fxfSiHc.png" 
                  alt="NOCTA.I Logo" 
                  className="h-8 w-auto"
                />
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 ml-6">
                <button 
                  onClick={scrollToTop}
                  className="text-white hover:text-[#6831f3] transition-colors font-medium"
                >
                  Início
                </button>
                
                {/* Dropdown */}
                <div className="relative">
                  <button 
                    className="flex items-center gap-1 text-white hover:text-[#6831f3] transition-colors font-medium"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                  >
                    Mais
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div 
                    className={`absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/15 rounded-lg shadow-xl transition-all duration-300 ${
                      isDropdownOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a href="#funcionalidades" className="block px-4 py-3 text-white hover:text-[#6831f3] hover:bg-white/5 transition-all duration-200 rounded-t-lg">
                      Funcionalidades
                    </a>
                    <a href="#como-funciona" className="block px-4 py-3 text-white hover:text-[#6831f3] hover:bg-white/5 transition-all duration-200">
                      Como funciona
                    </a>
                    <a href="#faq" className="block px-4 py-3 text-white hover:text-[#6831f3] hover:bg-white/5 transition-all duration-200">
                      Perguntas frequentes
                    </a>
                    <a href="#contato" className="block px-4 py-3 text-white hover:text-[#6831f3] hover:bg-white/5 transition-all duration-200 rounded-b-lg">
                      Contato
                    </a>
                  </div>
                </div>
              </nav>

              {/* CTA Button */}
              <button 
                onClick={scrollToForm}
                className="hidden md:block bg-[#6831f3] hover:bg-purple-600 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
              >
                Contrate
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 rounded-b-2xl animate-in slide-in-from-top-2 duration-300">
                <div className="px-4 py-4 space-y-4">
                  <button 
                    onClick={() => { scrollToTop(); setIsMenuOpen(false); }}
                    className="block w-full text-left text-white hover:text-[#6831f3] transition-colors font-medium"
                  >
                    Início
                  </button>
                  <a href="#funcionalidades" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#6831f3] transition-colors font-medium">
                    Funcionalidades
                  </a>
                  <a href="#como-funciona" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#6831f3] transition-colors font-medium">
                    Como funciona
                  </a>
                  <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#6831f3] transition-colors font-medium">
                    Perguntas frequentes
                  </a>
                  <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#6831f3] transition-colors font-medium">
                    Contato
                  </a>
                  <button 
                    onClick={() => { scrollToForm(); setIsMenuOpen(false); }}
                    className="w-full bg-[#6831f3] hover:bg-purple-600 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300"
                  >
                    Contrate
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[#140037]/30 via-transparent to-[#6831f3]/10"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-3xl lg:text-5xl font-black leading-tight">
                  <span className="text-[#6831f3]">Automatize</span> processos inteiros com <span className="text-[#6831f3]">IA</span> sob medida — <span className="text-[#6831f3]">reduza até 80%</span> do trabalho humano em <span className="text-[#6831f3]">apenas 20 dias</span>.
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-[#6831f3] to-purple-400"></div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Integração total com seus sistemas. IA operando vendas, suporte, cobranças e administração — <span className="text-[#6831f3] font-semibold">de forma escalável, segura e humanizada.</span>
                </p>
              </div>
              
              <button 
                onClick={scrollToForm}
                className="group bg-gradient-to-r from-[#6831f3] to-purple-600 hover:from-purple-600 hover:to-[#6831f3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3"
              >
                <span>🚀 Quero Agendar Diagnóstico Gratuito</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#1d1d1d]/80 to-[#140037]/50 backdrop-blur-sm border border-[#6831f3]/20 rounded-2xl p-8 space-y-6 transition-all duration-500 transform-gpu hover:scale-105 hover:border-[#6831f3]/80 hover:z-20 overflow-visible">
              <h3 className="text-2xl font-bold text-center mb-6">Resultados Comprovados</h3>
              <div className="grid gap-6">
                {[
                  { icon: Users, value: "+50", text: "empresas atendidas" },
                  { icon: TrendingUp, value: "Até +40%", text: "de conversão no final do mês" },
                  { icon: Clock, value: "24h/dia", text: "operação rodando" },
                  { icon: CheckCircle, value: "100%", text: "humanizado" },
                  { icon: Zap, value: "Mais tempo livre", text: "para o que realmente importa" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#6831f3]/20 rounded-full flex items-center justify-center group-hover:bg-[#6831f3]/30 transition-colors">
                      <item.icon className="w-6 h-6 text-[#6831f3]" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-[#6831f3]">{item.value}</div>
                      <div className="text-gray-400 text-sm lg:text-base">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-[#1d1d1d]/30 backdrop-blur-sm px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-12">
            Você ainda opera com <span className="text-[#6831f3]">sobrecarga manual</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
            {[
              { icon: RefreshCw, text: "Geração manual de relatórios e planilhas" },
              { icon: Puzzle, text: "Integrações falhas entre CRM, gateways e sistemas" },
              { icon: TrendingDown, text: "Vendas e suporte travados por processos lentos" },
              { icon: Mail, text: "Prospecção outbound 100% manual" },
              { icon: Calendar, text: "Follow-ups esquecidos, leads frios e perda de receita" },
              { icon: AlertCircle, text: "Diretoria sobrecarregada com tarefas operacionais" }
            ].map((item, index) => (
              <div key={index} className="group bg-gradient-to-br from-red-500/30 to-red-600/30 border border-red-400/40 rounded-xl p-6 hover:border-red-400 transition-all duration-500 transform-gpu hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)] hover:z-20 backdrop-blur-sm overflow-visible relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-red-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <item.icon className="w-8 h-8 text-red-400 mb-4 mx-auto group-hover:scale-110 group-hover:animate-pulse transition-all duration-300 relative z-10" />
                <p className="text-gray-300 group-hover:text-red-200 text-sm lg:text-base transition-colors duration-300 relative z-10">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Benefits Section */}
<section className="py-20 bg-[#04020a] px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-black mb-12">
      Veja os resultados nos <span className="text-[#6831f3]">primeiros dias</span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
      {[
        { icon: Zap, text: "−80% de tarefas manuais", color: "text-yellow-400" },
        { icon: TrendingUp, text: "+70% mais produtividade", color: "text-green-400" },
        { icon: DollarSign, text: "Redução de custos operacionais", color: "text-green-400" },
        { icon: BarChart3, text: "Aumento de receita com menos equipe", color: "text-blue-400" },
        { icon: Clock, text: "Atendimento e vendas funcionando 24/7", color: "text-purple-400" },
        { icon: TrendingUp, text: "Crescimento escalável com previsibilidade", color: "text-cyan-400" }
      ].map((item, index) => (
        <div key={index} className="group relative bg-gradient-to-br from-[#140037]/40 to-[#1d1d1d]/60 border border-[#6831f3]/30 rounded-xl p-6 hover:border-[#6831f3] transition-all duration-500 hover:scale-105 backdrop-blur-sm transform-gpu hover:z-20 hover:shadow-glow-lg overflow-visible">
          {/* Overlay de brilho interno */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6831f3]/0 via-[#6831f3]/5 to-[#6831f3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-[#6831f3]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <item.icon className={`w-6 h-6 ${item.color} group-hover:animate-pulse`} />
            </div>
            <p className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 text-sm lg:text-base">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Target Audience */}
<section className="py-20 bg-gradient-to-br from-[#140037]/30 to-[#1d1d1d]/50 backdrop-blur-sm px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-black mb-12">
      Projetado para operações que precisam de <span className="text-[#6831f3]">eficiência real</span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
      {[
        { icon: Building2, title: "SaaS & Plataformas", color: "from-blue-500 to-cyan-600" },
        { icon: CreditCard, title: "Gateways de Pagamento", color: "from-green-500 to-emerald-600" },
        { icon: Gift, title: "Plataformas de Sorteios e Rifas", color: "from-pink-500 to-rose-600" },
        { icon: LineChart, title: "Brokers & Financeiras", color: "from-yellow-500 to-orange-600" },
        { icon: Briefcase, title: "Agências ou Assessorias", color: "from-purple-500 to-indigo-600" },
        { icon: ShoppingCart, title: "E-commerces", color: "from-teal-500 to-green-600" }
      ].map((item, index) => (
        <div key={index} className="group relative bg-gradient-to-br from-[#140037]/40 to-[#1d1d1d]/60 border border-[#6831f3]/30 rounded-xl p-6 hover:border-[#6831f3] transition-all duration-500 hover:scale-105 backdrop-blur-sm transform-gpu hover:z-20 hover:shadow-glow-lg overflow-visible">
          {/* Overlay de brilho interno */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6831f3]/0 via-[#6831f3]/5 to-[#6831f3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          
          <div className="relative z-10">
            <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
              <item.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-lg group-hover:text-[#6831f3] transition-colors duration-300">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
{/* Solution Section */}
<section id="funcionalidades" className="py-20 bg-[#04020a] px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-black mb-6">
        Sua operação no automático, com <span className="text-[#6831f3]">inteligência de verdade</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Não criamos bots. Criamos inteligências que entendem, agem e escalam — como uma equipe incansável, 24 horas por dia.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 overflow-visible">
      {[
        { icon: Target, title: "SDR IA que agenda leads qualificados", color: "from-green-500 to-emerald-600" },
        { icon: MessageSquare, title: "IA de vendas 1:1 no WhatsApp", color: "from-blue-500 to-cyan-600" },
        { icon: CreditCard, title: "Recuperação de PIX e cartões recusados", color: "from-yellow-500 to-orange-600" },
        { icon: Headphones, title: "Automação de suporte e atendimento técnico", color: "from-purple-500 to-pink-600" },
        { icon: Settings, title: "Regras operacionais automatizadas (via API/Webhook)", color: "from-indigo-500 to-purple-600" },
        { icon: Repeat, title: "Fluxos de follow-up e reativação integrados", color: "from-teal-500 to-green-600" }
      ].map((item, index) => (
        <div key={index} className="group relative bg-gradient-to-br from-[#140037]/40 to-[#1d1d1d]/60 border border-[#6831f3]/30 rounded-xl p-6 hover:border-[#6831f3] transition-all duration-500 hover:scale-105 hover:shadow-glow-lg backdrop-blur-sm transform-gpu hover:z-20 overflow-visible">
          {/* Overlay de brilho interno */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6831f3]/0 via-[#6831f3]/5 to-[#6831f3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          
          <div className="relative z-10">
            <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <p className="font-semibold text-gray-200 group-hover:text-white transition-colors text-sm lg:text-base">{item.title}</p>
            <CheckCircle className="w-5 h-5 text-[#6831f3] mt-2" />
          </div>
        </div>
      ))}
    </div>

    <div className="text-center">
      <button 
        onClick={scrollToForm}
        className="bg-gradient-to-r from-[#6831f3] to-purple-600 hover:from-purple-600 hover:to-[#6831f3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3 mx-auto"
      >
        <span>Quero automatizar minha empresa</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  </div>
</section>



      {/* Testimonials Section */}
      <section className="py-20 bg-[#04020a] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-black mb-12">
            Operações já transformadas com a <span className="text-[#6831f3]">NOCTA.I OPS AI</span>
          </h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 overflow-visible">
            {[
              {
                name: "CEO de Corretora OB",
                company: "Corretora de Opções Binárias",
                text: "Com a IA da NOCTA.I, automatizamos a recuperação de todos os PIX de depósito gerado e não pago. Isso aumentou significativamente a quantidade de depósitos em nossa corretora.",
                rating: 5
              },
              {
                name: "CEO de Gateway",
                company: "Gateway de Pagamentos",
                text: "Com a NOCTA.I adicionamos a função de recuperação de PIX nativa no nosso gateway. Todos os produtores elogiam essa funcionalidade.",
                rating: 5
              },
              {
                name: "CEO de Agência",
                company: "Agência Digital",
                text: "Com a IA da NOCTA, automatizamos a recuperação de PIX direto no WhatsApp. O atendimento ficou humanizado, 24h. O LTV aumentou e a conversão melhorou visivelmente.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1d1d1d]/80 to-[#04020a]/50 border border-[#6831f3]/20 rounded-xl p-8 hover:border-[#6831f3]/80 transition-all duration-500 transform-gpu hover:scale-105 hover:z-20 backdrop-blur-sm overflow-visible">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#6831f3] mb-4 mx-auto" />
                <p className="text-gray-300 mb-6 italic text-sm lg:text-base">"{testimonial.text}"</p>
                <div className="border-t border-gray-600 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
        {/* Strategic Form Section */}
<section id="formulario" className="py-20 bg-[#04020a] px-4">
  <div className="max-w-4xl mx-auto">
    <div className="bg-gradient-to-br from-[#1d1d1d]/80 to-[#04020a]/50 border border-[#6831f3]/20 rounded-2xl p-8 backdrop-blur-sm">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-black mb-4">
          Quer ver o que sua empresa <span className="text-[#6831f3]">pode automatizar</span>?
        </h2>
        <p className="text-gray-300">
          Responda algumas perguntas e receba um diagnóstico real com soluções aplicáveis.
        </p>
      </div>

      {isFormSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-400 mb-2">✅ Sucesso!</h3>
          <p className="text-gray-300">
            🕑 Em alguns segundos você vai receber uma mensagem no WhatsApp com os próximos passos do seu diagnóstico.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome / WhatsApp */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Qual o seu nome? *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-[#04020a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6831f3] focus:ring-2 focus:ring-[#6831f3]/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Qual o seu WhatsApp? *</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="w-full bg-[#04020a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6831f3] focus:ring-2 focus:ring-[#6831f3]/20 transition-all"
                placeholder="(11) 99999-9999"
                required
              />
            </div>
          </div>

          {/* E-mail / Empresa */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Qual o seu melhor e-mail? *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#04020a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6831f3] focus:ring-2 focus:ring-[#6831f3]/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Qual o nome da sua empresa *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-[#04020a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6831f3] focus:ring-2 focus:ring-[#6831f3]/20 transition-all"
                required
              />
            </div>
          </div>

          {/* Segmento / Site */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Qual o segmento? *</label>
              <input
                type="text"
                name="segment"
                value={formData.segment}
                onChange={handleInputChange}
                className="w-full bg-[#04020a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6831f3] focus:ring-2 focus:ring-[#6831f3]/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Link do site ou Instagram</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full bg-[#04020a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6831f3] focus:ring-2 focus:ring-[#6831f3]/20 transition-all"
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Faixa de faturamento */}
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Faixa de faturamento mensal</label>
            <select
              name="revenue"
              value={formData.revenue}
              onChange={handleInputChange}
              className="w-full bg-[#04020a] border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#6831f3] focus:ring-2 focus:ring-[#6831f3]/20 transition-all"
            >
              <option value="">Selecione uma opção</option>
              <option value="0-30k">R$ 0 - R$30.000</option>
              <option value="30-50k">R$30.000 - R$50.000</option>
              <option value="50-100k">R$50.000 - R$100.000</option>
              <option value="100-500k">R$100.000 - R$300.000</option>
              <option value="500k+">R$500.000 +</option>
            </select>
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#6831f3] to-purple-600 hover:from-purple-600 hover:to-[#6831f3] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-3"
          >
            <span>🚀 Enviar e Agendar Diagnóstico</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  </div>
</section>

      
{/* Framework Section */}
<section id="como-funciona" className="py-20 bg-gradient-to-br from-[#140037]/30 to-[#1d1d1d]/50 backdrop-blur-sm px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-black mb-6">
        Framework <span className="text-[#6831f3]">NOCTA.I OPS AI</span>
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-visible">
      {[
        { step: "1", title: "Diagnóstico", subtitle: "estratégico personalizado", icon: FileText },
        { step: "2", title: "Mapeamento", subtitle: "de fluxos e dados internos", icon: BarChart3 },
        { step: "3", title: "Criação", subtitle: "de Agentes IA sob medida", icon: Cpu },
        { step: "4", title: "Integração", subtitle: "full-stack com seu ecossistema", icon: Database },
        { step: "5", title: "Treinamento", subtitle: "com dados reais", icon: Users },
        { step: "6", title: "Validação", subtitle: "+ Testes operacionais", icon: CheckCircle2 },
        { step: "7", title: "Ativação", subtitle: "e performance monitorada", icon: Zap },
        { step: "8", title: "Otimização", subtitle: "contínuas por IA Learning", icon: TrendingUp }
      ].map((item, index) => (
        <div 
          key={index} 
          className={`group relative transition-all duration-700 overflow-visible ${
            visibleSteps.includes(index) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
          data-step={index}
        >
          <div className="group relative bg-gradient-to-br from-[#140037]/40 to-[#1d1d1d]/60 border border-[#6831f3]/30 rounded-xl p-6 hover:border-[#6831f3] transition-all duration-500 hover:scale-105 backdrop-blur-sm transform-gpu hover:z-20 hover:shadow-glow-lg overflow-visible">
            {/* Overlay Glow Interno */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6831f3]/0 via-[#6831f3]/5 to-[#6831f3]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

            {/* Conteúdo */}
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 bg-[#6831f3]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
              </div>
              <div className="text-sm text-[#6831f3] font-bold mb-1">ETAPA {item.step}</div>
              <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.subtitle}</p>
            </div>
          </div>

          {/* Linha Conectora */}
          {index < 7 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#6831f3] to-transparent"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About NOCTA.I Section */}
      <section className="py-20 bg-[#04020a] px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <img 
              src="https://i.imgur.com/fxfSiHc.png" 
              alt="NOCTA.I Logo" 
              className="h-16 w-auto mx-auto mb-8"
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
            <p className="text-gray-300">
              Fundada em <span className="text-[#6831f3] font-semibold">2024</span>, a NOCTA.I nasceu com uma visão clara: romper com a automação robótica, engessada e genérica do mercado — e entregar <span className="text-[#6831f3] font-semibold">inteligência real</span>, com <span className="text-[#6831f3] font-semibold">personalização humana</span> e <span className="text-[#6831f3] font-semibold">resultado validado</span>.
            </p>
            
            <p className="text-gray-300">
              Nós <span className="text-red-500 font-bold">NÃO</span> criamos chatbots de opção 1, 2 ou 3.<br />
              Criamos <span className="text-[#6831f3] font-semibold">agentes de IA</span> capazes de <span className="text-[#6831f3] font-semibold">entender, conversar, agir e escalar</span>, como se fossem membros estratégicos da sua equipe — só que disponíveis <span className="text-[#6831f3] font-semibold">24 horas por dia, 7 dias por semana</span>, sem erro e sem descanso.
            </p>

            <div className="bg-gradient-to-br from-[#1d1d1d]/80 to-[#140037]/50 border border-[#6831f3]/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Produtos NOCTA.I</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#6831f3] pl-6">
                  <h4 className="text-xl font-bold text-[#6831f3] mb-2">🚀 NOCTA.I SALES AI™ — IA para Vendas e Atendimento</h4>
                  <p className="text-gray-300 mb-2">
                    Ideal para empresas que querem <span className="text-[#6831f3] font-semibold">escalar comercial</span>, <span className="text-[#6831f3] font-semibold">recuperar leads perdidos</span>, liberar o time humano do operacional e <span className="text-[#6831f3] font-semibold">vender no automático</span>, sem perder o toque humano.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Utilizado por clínicas, infoprodutores, imobiliárias, e-commerces e negócios de atendimento direto.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-purple-400 mb-2">🔧 NOCTA.I OPS AI™ — IA para Operação e Automação Profunda</h4>
                  <p className="text-gray-300 mb-2">
                    Desenvolvido para empresas com <span className="text-purple-400 font-semibold">grande carga operacional</span>, <span className="text-purple-400 font-semibold">alto volume de processos</span> e <span className="text-purple-400 font-semibold">múltiplos sistemas a integrar</span>.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Aqui, a IA atua nos bastidores — automatizando CRMs, integrações por API, planilhas, processos administrativos e fluxos financeiros.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-gray-300">
                Cada projeto NOCTA.I é entregue com um <span className="text-[#6831f3] font-semibold">framework proprietário</span>, que garante <span className="text-[#6831f3] font-semibold">implantação personalizada</span>, <span className="text-[#6831f3] font-semibold">validação prática</span> e <span className="text-[#6831f3] font-semibold">performance mensurável</span> em até 20 dias.
              </p>
              
              <div className="space-y-2 text-xl font-bold">
                <p className="text-[#6831f3]">Mais do que vender IA, entregamos operações completas que funcionam com inteligência real.</p>
                <p className="text-white">Essa é a nossa essência.</p>
                <p className="text-[#6831f3]">Esse é o novo padrão de automação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-[#140037]/30 to-[#1d1d1d]/50 backdrop-blur-sm px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-6">
              Perguntas <span className="text-[#6831f3]">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Quanto tempo leva para implementar a IA na minha empresa?",
                answer: "Nosso framework proprietário garante implementação completa em até 20 dias. Isso inclui diagnóstico, mapeamento, criação dos agentes IA, integração com seus sistemas, treinamento e validação operacional."
              },
              {
                question: "A IA da NOCTA.I funciona com meus sistemas atuais?",
                answer: "Sim! Nossa IA se integra via API, webhooks e conectores nativos com CRMs, gateways de pagamento, planilhas, bancos de dados e praticamente qualquer sistema que sua empresa já utiliza."
              },
              {
                question: "Qual a diferença entre NOCTA.I OPS AI e outros chatbots do mercado?",
                answer: "Não criamos chatbots genéricos. Desenvolvemos agentes de IA treinados especificamente para sua operação, capazes de executar tarefas complexas, tomar decisões baseadas em regras de negócio e operar com total autonomia 24/7."
              },
              {
                question: "Preciso ter conhecimento técnico para usar a solução?",
                answer: "Não! Entregamos tudo configurado e funcionando. Sua equipe recebe treinamento completo e suporte contínuo. A IA opera de forma transparente, sem necessidade de conhecimento técnico avançado."
              },
              {
                question: "Qual o investimento necessário para implementar a NOCTA.I OPS AI?",
                answer: "O investimento varia conforme a complexidade da sua operação e sistemas a integrar. Oferecemos um diagnóstico gratuito onde apresentamos uma proposta personalizada com ROI projetado para sua realidade específica."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-[#1d1d1d]/80 to-[#04020a]/50 border border-[#6831f3]/20 rounded-xl backdrop-blur-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-bold text-[#6831f3] pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-[#6831f3] transition-transform duration-200" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#6831f3] transition-transform duration-200" />
                    )}
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${
                  openFAQ === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#04020a] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Pronto para escalar sua operação com <span className="text-[#6831f3]">IA em 20 dias</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A IA que vai executar sua operação com inteligência já pode estar rodando no mês 1.
            Vamos te mostrar exatamente como.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#6831f3] to-purple-600 hover:from-purple-600 hover:to-[#6831f3] px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3 mx-auto"
          >
            <span>🚀 Agendar Diagnóstico Estratégico Gratuito</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#140037]/50 py-12 border-t border-[#6831f3]/20 backdrop-blur-sm px-4 mt-auto" style={{ backgroundColor: '#0b0b0b' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://i.imgur.com/fxfSiHc.png" 
                  alt="NOCTA.I Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-black">OPS AI</span>
              </div>
              <p className="text-gray-400 mb-4">
                Automação operacional profunda com IA aplicada.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-5 h-5 text-[#6831f3]" />
                <span className="text-gray-300">enterprise@noctai.com.br</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="https://instagram.com/noctai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://linkedin.com/company/noctai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <button onClick={scrollToTop} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <a href="#funcionalidades" className="block text-gray-400 hover:text-white transition-colors">Funcionalidades</a>
                <a href="#como-funciona" className="block text-gray-400 hover:text-white transition-colors">Como funciona</a>
                <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Outros Produtos</h4>
              <div className="space-y-3">
                <a 
                  href="https://www.noctai.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-[#1d1d1d]/50 rounded-lg border border-[#6831f3]/20 backdrop-blur-sm hover:border-[#6831f3]/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-[#6831f3] font-bold">🟣 NOCTA.I SALES AI™</div>
                  <div className="text-sm text-gray-400">IA para Vendas e Atendimento</div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#6831f3]/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">Copyright © 2025 NOCTA.I OPS AI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;