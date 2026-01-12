import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>Luís Oliveira</h1>
        <nav>
          <ul className="nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
