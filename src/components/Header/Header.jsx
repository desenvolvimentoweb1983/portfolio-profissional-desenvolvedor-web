import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="branding">
          <img
            src="/logo.png"
            alt="Logo Luís Oliveira"
            className="logo"
          />
          <span className="brand-name">Portfólio</span>
        </div>

        <nav>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

