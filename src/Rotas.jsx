import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from './views/home/Home';

function Rotas() { 
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-cliente" element={<div>Página de Clientes</div>} />
      <Route path="/list-produto" element={<div>Página de Produtos</div>} />
      </Routes>
  );
}

export default Rotas;
