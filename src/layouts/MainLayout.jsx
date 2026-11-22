
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

import "./MainLayout.css";

function MainLayout({ children }) {
  const mensagemWhatsApp = encodeURIComponent(
    "Olá Luís, vi seu site e quero conversar sobre desenvolvimento web!"
  );

  return (
    <>
      <Header />

      <main className="main-content">
        {children}
      </main>

      <a
        href={`https://wa.me/5519974082724?text=${mensagemWhatsApp}`}
        className="whatsapp-global"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale comigo pelo WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>

      <Footer />
    </>
  );
}

export default MainLayout;
