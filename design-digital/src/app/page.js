'use client';
import {useState } from "react";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho"
import Rodape from "./componentes/Rodape";




export default function Home() {
  
  const [ehTemaEscuro, setEhTemaEscuro] = useState(false)
  
  function alterarTema(){
  setEhTemaEscuro(!ehTemaEscuro)
}
  return (
    <div>
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro}/>
      <SecaoBanner ehTemaEscuro={ehTemaEscuro}/>
      <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro}/>
      <Rodape ehTemaEscuro={ehTemaEscuro}/>
    </div>
  );
}
