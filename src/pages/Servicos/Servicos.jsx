import "./Servicos.css";
import {
  FaLaptopCode,
  FaCogs,
  FaPaintBrush,
  FaTools,
  FaRocket,
  FaChartLine,
  FaHandshake
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
    }
  ];

  return (
    <section className="servicos-container">

      <h1>Nossos Serviços</h1>

      <p className="servicos-subtitulo">
        Soluções completas em desenvolvimento web, do planejamento à publicação.
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