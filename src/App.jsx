import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Home from "./pages/Home";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="*" element={<PaginaErro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
