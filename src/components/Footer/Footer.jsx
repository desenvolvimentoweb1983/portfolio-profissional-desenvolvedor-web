import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} DevLuísOliveira. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
