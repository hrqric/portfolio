import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight, Download, Star, MapPin, Briefcase, BriefcaseBusiness } from 'lucide-react';
import { Slide, ToastContaine, ToastContainer, toast } from 'react-toastify';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [copied, setCopied] = useState(false);
  const textToCopy = "cauehrqric@hotmail.com";

  const notify = () => toast.success('💾 E-mail copiado com sucesso!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Slide,
    });;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Mi's Planner",
      description: "Plataforma completa para monitoramento de estudos",
      tech: ["React", "Node.js", "Tailwind", "TypeScript", "Supabase"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Dolar Info",
      description: "Aplicação de cotação de moedas em comparação com real",
      tech: ["JavaScript", "CSS", "GETAWESOME API", "Supabase"],
      image: "https://i.imgur.com/CxsinC4.png",
      github: "#",
      live: "#"
    },
    {
      title: "Pokédex",
      description: "Projeto usando PokeAPI para mostrar ao usuário os Pokemons",
      tech: ["CSS", "JavaScript", "PokeAPI"],
      image: "https://i.imgur.com/bfMTOqr.png",
      github: "#",
      live: "#"
    },
    {
      title: "Previsão de tempo",
      description: "Projeto usando Python para prever o clima em determinada região usando Big Data",
      tech: ["PySpark", "Python", "Big Data"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    },
        {
      title: "BOT FURIOSO",
      description: "Projeto usando Python para realizar um web-scraping e pegar informações da HLTV sobre o time de cs FURIA e mostrar ao usuário via bot do Telegram",
      tech: ["Python", "Webscrapping", "Telegram BOT"],
      image: "https://emtodolugar.facha.edu.br/wp-content/uploads/2021/04/furia-esports.jpg?w=1280&h=720&crop=1",
      github: "#",
      live: "#"
    },
        {
      title: "Webstatus",
      description: "Projeto usando Flask para mostrar ao usuário sites que estão onlines, offlines e inválidos.",
      tech: ["CSS", "Python", "Flask"],
      image: "https://i.imgur.com/guqdRr0.png",
      github: "#",
      live: "#"
    },
    {
      title: "Meu Portfolio",
      description: "Projeto para englobar todos os projetos que já realizei! (será atualizado constantemente 😅)",
      tech: ["React", "TypeScript", "Toastify", "Tailwind", "Lucide-React"],
      image: "https://i.imgur.com/AekhdA3.png",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Low-code", icon: BriefcaseBusiness, items: ["Power Automate", "Power Apps", "Power BI", "Create"]},
    { name: "Frontend", icon: Code, items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Angular"] },
    { name: "Backend", icon: Code, items: ["Node.js", "Python", "C#", "JavaScript","PostgreSQL", "MongoDB"] },
    { name: "Design", icon: Palette, items: ["Figma", "Canva", "UI/UX"] },
    { name: "Mobile", icon: Smartphone, items: ["React Native", "Flutter", "Android"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Sobre', 'Projetos', 'Skills', 'Contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Cauê Henrique
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvedor & Transformador Digital
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Transformo ideias em experiências digitais incríveis. Especializado em automação de processos, também sei fazer algumas telas bonitas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Ver Projetos <ArrowRight size={20} />
              </button>
              <button className="border border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2">
                <Download size={20} /> Baixar Curriculo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.sobre ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-800 flex items-center justify-center">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQFJlbi63tWxuw/profile-displayphoto-shrink_800_800/B4DZctRJJ5H4Ac-/0/1748811159531?e=1754524800&v=beta&t=wA6e5yb5BqQAc30vTQqLqxE3UUC4xhyYE8CjxscrTmU" 
                      alt="Profile" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Sou um desenvolvedor apaixonado por criar soluções digitais inovadoras. Com mais de 2 anos de experiência, 
                  trabalho com as mais modernas tecnologias para entregar produtos que fazem a diferença.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Minha jornada começou com curiosidade sobre como as coisas funcionam na web, e hoje construo
                  projetos que impactam processos de usuários.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <MapPin size={20} />
                  <span>Sorocaba, São Paulo, Brasil</span>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/hrqric" target='_blank' className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/cauehrqric/" target='_blank' className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                    <Linkedin size={24} />
                  </a>
                  <a onClick={(e) => {e.preventDefault(); navigator.clipboard.writeText(textToCopy); notify()}} className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                    <Mail size={24} />

                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
                    <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Slide}
                    />
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.projetos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meus Projetos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <a href={project.github} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                          <Github size={16} />
                        </a>
                        <a href={project.live} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Habilidades
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((category, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 text-center group hover:transform hover:scale-105"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{category.name}</h3>
                  <div className="space-y-2">
                    {category.items.map((item, i) => (
                      <div key={i} className="text-gray-400 text-sm">{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.contato ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Entre em contato e vamos criar algo incrível!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:joao@email.com"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                cauehrqric@hotmail.com
              </a>
              <div className="flex gap-4 justify-center">
                <a href="#" className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                  <Github size={24} />
                </a>
                <a href="#" className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 HRQ RIC. Desenvolvido com React e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;