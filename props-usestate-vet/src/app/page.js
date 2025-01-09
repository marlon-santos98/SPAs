'use client';
import { useState } from "react";
import estilos from "./page.module.css";
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
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
        <button onClick={alterarState}>Mudar Animal</button>
      </header>
      <main>
        <CardAnimal tipoAnimal={tipoDoComponenteCard}/>
        <CardInformacoes tipoAnimal={tipoDoComponenteCard}/>
      </main>
    </div>
  );
}