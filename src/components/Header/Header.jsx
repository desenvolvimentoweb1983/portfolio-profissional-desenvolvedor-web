import "./Header.css";

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
          <span className="brand-name">Luís Oliveira</span>
        </div>

        <nav>
          <ul className="nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
