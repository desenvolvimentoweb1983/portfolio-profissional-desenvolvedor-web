import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Servicos from "./pages/Servicos/Servicos";
import Contato from "./pages/Contato/Contato";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;