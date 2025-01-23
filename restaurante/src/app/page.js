'use client'
import { produtosEntradas } from "@/servico/funcoes";
import { useState } from "react";
import Categorias from "@/componentes/Categorias";


export default function Home() {
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas)
  return (
    <div>
      <Categorias/>
    </div>
  );
}
