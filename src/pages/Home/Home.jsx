import "./Home.css";
import LanguageBarChart from "../../components/LanguageBarChart/LanguageBarChart";
import SkillTable from "../../components/OSPopularityTable/OSPopularityTable";
import WeatherApp from "../../components/WeatherApp/WeatherApp"
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaWordpress, FaGamepad } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

import logoCsharp from "../../img/csharp.png";
import logoPHP from "../../img/php.png";
import logoConversor from "../../img/conversor.png";

function Home() {

  // =========================== BLOCO 1: Projetos ===========================
  const projetos = [
    {
  nome: "Western Shooter 3D",
  descricao: "Jogo de tiro 3D em JavaScript + Three.js + Vite.",
  url: "https://western-shooter-3d.vercel.app/",
  tecnologias: [<FaJs />, <FaCode />],
  imagem: "/images/Western.png",
},
    {
  nome: "Blue Bird",
  descricao: "Desenvolvimento de Jogos com GDevelop 5.",
  url: "https://dev-luis-oliveira-game-blue-bird.vercel.app/",
  tecnologias: [<FaGamepad />],
  imagem: "/images/bluebird.png",
},
    {
      nome: "Jogo de Nave",
      descricao: "Desenvolvimento de Jogos com Construct 3.",
      url: "https://dev-luis-oliveira-game-nave.vercel.app/",
      tecnologias: [<FaGamepad />],
      imagem: "/images/nave.png",
    },
    {
      nome: "Kitnet Jaguariúna",
      descricao: "Site de divulgação de Kitnets para locação.",
      url: "https://kitnetjaguariuna.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      imagem: "/images/kitnet.png",
    },
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
      imagem: "/images/match.jpeg",
    },
    {
      nome: "WebDev Luís",
      descricao: "Criação de Sites e Landing Pages.",
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
      descricao: "Template de landing page para oficinas mecânicas.",
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
      nome: "Limpeza e Manutenção de Piscinas",
      descricao: "Template de landing page para Limpeza e manutenção de piscinas.",
      url: "https://piscina-webdevluis.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      imagem: "https://piscina-webdevluis.vercel.app/img/piscina1.jpg",
    },
    {
      nome: "Conversor de Moedas Web",
      descricao: "O Conversor de Moedas Web é uma aplicação moderna desenvolvida para realizar conversões cambiais em tempo real de forma simples, rápida e acessível diretamente pelo navegador.",
      url: "https://conversor-moedas-web.vercel.app/",
      tecnologias: [<FaPython />],
      imagem: logoConversor
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
    
    </div>
  );
}

export default Home;
