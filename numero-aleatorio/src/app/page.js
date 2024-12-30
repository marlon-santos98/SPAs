'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const[numeroAleatorio, setNumeroAleatorio] = useState(0)

  function gerarNumeroAleatorio(){
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setNumeroAleatorio(novoNumero);
  }

  return (
    <div>
      <h1>Número Aleatório</h1>
      <p>{numeroAleatorio}</p>
      <p>Click no botão abaixo para gerar um número aleatório</p>
      <button onClick={gerarNumeroAleatorio}>Gerar Número</button>
    </div>
  );
}
