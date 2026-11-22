
import "./Servicos.css";

import {
  FaLaptopCode,
  FaCogs,
  FaPaintBrush,
  FaTools,
  FaRocket,
  FaChartLine,
  FaHandshake,
  FaGamepad
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Servicos() {

  const servicos = [
    {
      icone: <FaLaptopCode />,
      titulo: "Criação de Sites Profissionais",
      descricao: "Sites modernos, responsivos e personalizados para empresas e projetos digitais."
    },
    {
      icone: <FaCogs />,
      titulo: "Desenvolvimento de Aplicações Web",
      descricao: "Sistemas e funcionalidades sob medida com integração de APIs e automação."
    },
    {
      icone: <FaPaintBrush />,
      titulo: "Design e Interface (UI/UX)",
      descricao: "Layouts modernos e experiência do usuário otimizada."
    },
    {
      icone: <FaTools />,
      titulo: "Manutenção e Suporte",
      descricao: "Atualizações, correções e melhorias contínuas."
    },
    {
      icone: <FaRocket />,
      titulo: "Publicação e Deploy",
      descricao: "Hospedagem, domínio e colocação do site no ar."
    },
    {
      icone: <FaChartLine />,
      titulo: "Otimização e Performance",
      descricao: "Melhoria de velocidade e SEO técnico."
    },
    {
      icone: <FaHandshake />,
      titulo: "Consultoria Digital",
      descricao: "Planejamento estratégico para seu projeto."
    },
    {
      icone: <FaGamepad />,
      titulo: "Instrutor de Desenvolvimento de Jogos",
      descricao: "Aulas práticas de lógica de programação e criação de jogos 2D e 3D, utilizando GDevelop 5, Construct 3 e GameMaker."
    }
  ];

  return (
    <section className="servicos-container">

      <h1>Serviços</h1>

      <p className="servicos-subtitulo">
        Soluções em desenvolvimento web, criação de jogos digitais e tecnologia.
      </p>

      <div className="servicos-grid">
        {servicos.map((servico, index) => (
          <div key={index} className="servico-card">

            <div className="servico-icone">
              {servico.icone}
            </div>

            <h3>{servico.titulo}</h3>

            <p>{servico.descricao}</p>

            <Link to="/contato" className="servico-botao">
              Solicitar orçamento
            </Link>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Servicos;
