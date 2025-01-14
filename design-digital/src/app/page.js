'use client';
import {useState } from "react";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho"



export default function Home() {
  
  const [ehTemaEscuro, setEhTemaEscuro] = useState(false)
  
  function alterarTema(){
  setEhTemaEscuro(!ehTemaEscuro)
}
  return (
    <div>
      <Topo alterarTema={alterarTema}/>
      <SecaoBanner/>
      <SecaoExperienciaTrabalho/>
    </div>
  );
}
