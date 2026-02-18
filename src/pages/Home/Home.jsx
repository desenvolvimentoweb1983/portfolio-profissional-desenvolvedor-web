import "./Home.css";
import LanguageBarChart from "../../components/LanguageBarChart/LanguageBarChart";
import SkillTable from "../../components/OSPopularityTable/OSPopularityTable";
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaWordpress } from "react-icons/fa";
import OSPopularityTable from "../../components/OSPopularityTable/OSPopularityTable";

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
      nome: "WebDev Luís",
      descricao: "Criação de Sites e Landing Pages",
      url: "https://webdevluis.vercel.app/",
      tecnologias: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      imagem: "https://webdevluis.vercel.app/imagens/banner.jpg",
    },
    {
      nome: "Projeto Match com parceria da IBM",
      descricao: "Treinamento Interativo Sobre Atendimento ao Cliente.",
      url: "https://dev-projeto1match.pantheonsite.io/",
      tecnologias: [<FaWordpress />],
      imagem: "https://dev-projeto1match.pantheonsite.io/wp-content/uploads/2023/11/logo-match-4.jpeg",
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
      <OSPopularityTable />

    </div>
  );
}

export default Home;
