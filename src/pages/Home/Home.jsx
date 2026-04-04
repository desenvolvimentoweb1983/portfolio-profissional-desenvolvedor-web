import "./Home.css";
import LanguageBarChart from "../../components/LanguageBarChart/LanguageBarChart";
import SkillTable from "../../components/OSPopularityTable/OSPopularityTable";
import WeatherApp from "../../components/WeatherApp/WeatherApp"
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaWordpress } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

import logoCsharp from "../../img/csharp.png";
import logoPHP from "../../img/php.png";

function Home() {

  // =========================== BLOCO 1: Projetos ===========================
  const projetos = [
    {
      nome: "ADI Triunfo Pedreira",
      descricao: "Site institucional para promover a presença digital e otimizar a comunicação da instituição.",
      url: "https://www.aditriunfopedreira.com.br/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
      imagem: "https://www.aditriunfopedreira.com.br/logo1.jpg",
    },
    {
      nome: "Projeto Match com parceria da IBM",
      descricao: "Treinamento Interativo Sobre Atendimento ao Cliente.",
      url: "https://treinamentoatendimentocliente.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
      imagem: "https://dev-projeto1match.pantheonsite.io/wp-content/uploads/2023/11/logo-match-4.jpeg",
    },
    {
      nome: "WebDev Luís",
      descricao: "Criação de Sites e Landing Pages",
      url: "https://webdevluis.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      imagem: "https://webdevluis.vercel.app/imagens/banner.jpg",
    },
    {
      nome: "php-na-pratica",
      descricao: "Projeto simples desenvolvido em PHP para demonstrar conhecimentos em desenvolvimento web, com estrutura organizada, conteúdo dinâmico e layout responsivo.",
      url: "https://webdevluis.infinityfreeapp.com/",
      tecnologias: [<FaPhp />],
      imagem: logoPHP,
    },
    {
      nome: "Registro de Marcas",
      descricao: "Site demonstrativo para consultoria de registro de marcas e patentes no Brasil.",
      url: "https://registro-de-marcas-site.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      imagem: "https://registro-de-marcas-site.vercel.app/img/hero.jpg",
    },
    {
      nome: "Oficina Mecânica",
      descricao: "Template de landing page para oficinas mecânicas",
      url: "https://oficina-webdevluis.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      imagem: "https://oficina-webdevluis.vercel.app/img/oficina1.jpg",
    },
    {
      nome: "meu-site-csharp",
      descricao: "Site institucional para promover a presença digital e otimizar a comunicação da instituição.",
      url: "https://meu-site-csharp.onrender.com/",
      tecnologias: [<FaCode />],
      imagem: logoCsharp,
    },
    {
      nome: "LImpeza e Manutenção de Piscinas",
      descricao: "Template de landing page para Limpeza e manutenção de piscinas",
      url: "https://piscina-webdevluis.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      imagem: "	https://piscina-webdevluis.vercel.app/img/piscina1.jpg",
    },
    {
      nome: "Conversor de Moedas Web",
      descricao: "O Conversor de Moedas Web é uma aplicação moderna desenvolvida para realizar conversões cambiais em tempo real de forma simples, rápida e acessível diretamente pelo navegador.",
      url: "https://conversor-moedas-web.vercel.app/",
      tecnologias: [<FaPython />],
      imagem: "https://conversor-moedas-web.vercel.app/opengraph-image.png?opengraph-image.7b8decf5.png",
    },
  ];

  // =========================== BLOCO 2: JSX ===========================
  return (
    <div className="home-container">

      {/* ================= PROJETOS ================= */}
      <section className="projetos">
        <h2>Projetos</h2>
        <div className="projetos-cards">
          {projetos.map((projeto, index) => (
            <a
              key={index}
              href={projeto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projeto-card"
            >
              <img src={projeto.imagem} alt={projeto.nome} />
              <div className="projeto-info">
                <h3>{projeto.nome}</h3>
                <p>{projeto.descricao}</p>
                <div className="tecnologias">
                  {projeto.tecnologias.map((tech, idx) => <span key={idx}>{tech}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ================= BOAS VINDAS ================= */}
      <section className="welcome-card" style={{ display: 'flex', justifyContent: 'center' }}>
        <p className="welcome-message">
          Sou grato pela oportunidade de apresentar meu trabalho.{' '}
          <span className="animated-text">
            Explore meus projetos e descubra como posso agregar valor à sua equipe.
          </span>
        </p>
      </section>
      
      {/* ================= LANGUAGE BAR CHART ================= */}
      <LanguageBarChart />
      
      {/* ================= SKILL TABLE ================= */}
      <SkillTable />
      
      {/* Aqui você coloca o módulo de clima */}
      
      {/* CLIMA TEMPO */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh'
      }}>
        <WeatherApp />
      </div>
    
    </div>
  );
}

export default Home;
