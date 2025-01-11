'use client';
import { useState } from "react";
import estilos from "./page.module.css";
import Topo from "./componentes/Topo";
import CardAnimal from './componentes/CardAnimal';
import CardInformacoes from './componentes/CardInformacoes';

export default function Home() {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  return (
    <div className={estilos.container_principal}>
        <Topo clickAlterarAnimal={alterarState}/>
      <main>
        <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
        <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>
      </main>
    </div>
  );
}