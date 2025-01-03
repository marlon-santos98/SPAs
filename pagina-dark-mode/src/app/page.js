'use client';
import estilos from "./page.module.css";
import { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Home() {

  const [alterarTema, setAlterarTema] = useState(false)

  function trocarTemaPagina() {
    setAlterarTema(!alterarTema)
  }

  return (
    <div className={alterarTema ? estilos.dark_mode : estilos.light_mode}>
      <header className={estilos.header_container}>
        <h1>Coffe Shop</h1>
        <button onClick={trocarTemaPagina}>
          {alterarTema ? <BsSun/> : <BsMoon/>}
        </button>
      </header>
      <main className={estilos.main_container}>
        <div>
          <h2>A melhor cafeteria do Brasil</h2>
          <p>
            Venha conhecer a melhor cafeteria do Brasil!
            Localizada no coração de São Paulo, oferecemos cafés artesanais de alta qualidade e um ambiente acolhedor.
            Desfrute de nossas bebidas exclusivas e deliciosos acompanhamentos enquanto relaxa em um espaço único.
            Esperamos por você para uma experiência inesquecível!
          </p>
          <button>Nossas Lojas</button>
        </div>
      </main>
    </div>
  );
}