import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import "./Contato.css";

function Contato() {
  const mensagemWhatsApp = encodeURIComponent(
    "Olá Luís, vi seu site e quero conversar sobre desenvolvimento web!"
  );

  // Função para abrir e-mail de forma universal
  const abrirEmail = () => {
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

    const email = "desenvolvimentoweb1983@gmail.com";
    const subject = encodeURIComponent("Contato pelo site");

    if (isMobile) {
      // Mobile: abre app de e-mail
      window.location.href = `mailto:${email}?subject=${subject}`;
    } else {
      // Desktop: abre Gmail web
      window.open(
        `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}`,
        "_blank"
      );
    }
  };

  return (
    <section className="contato-section">
      <h1>Contato</h1>
      <p>Canais de comunicação</p>
      <div className="contato-links">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/luís-oliveira-563341279"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-link linkedin"
        >
          <FaLinkedin /> LinkedIn
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/5519974082724?text=${mensagemWhatsApp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contato-link whatsapp"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        {/* E-mail universal */}
        <button
          onClick={abrirEmail}
          className="contato-link email"
          style={{ border: "none", cursor: "pointer" }}
        >
          ✉️ E-mail
        </button>

        {/* GitHub */}
        <a
          href="https://github.com/desenvolvimentoweb1983"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-link github"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Ícone flutuante do WhatsApp */}
      <a
        href={`https://wa.me/5519974082724?text=${mensagemWhatsApp}`}
        className="whatsapp-flutuante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo no WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </section>
  );
}

export default Contato;
