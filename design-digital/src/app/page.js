'use client';
import Image from "next/image";
import {useState } from "react";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho"
import Rodape from "./componentes/Rodape";
import facebook from "/public/facebook.png"
import twitter from "/public/twitter.png"
import linkedin from "/public/linkedin.png"
import behance from "/public/behance.png"
import dribble from "/public/dribble.png"
import google from "/public/google.png"



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
      <Rodape
        titulo="M."
        texto="Ajudamos a criar uma personalidade digital construindo sua marca no 
        ambiente online utilizando ferramentas, estratégias e tecnologias
        personalizadas"
        developedby="Copyright 2025 @ Marlon Santos"
      >
        <Image src={facebook} alt="facebook"/>
        <Image src={twitter} alt="Twitter"/>
        <Image src={linkedin} alt="Linkedin"/>
        <Image src={behance} alt="behance"/>
        <Image src={dribble} alt="dribble"/>
        <Image src={google} alt="google"/>
      </Rodape>
    </div>
  );
}
