'use client';
import { useState } from "react";
import Menu from "@/app/componentes/Menu"
import estilos from "@/app/page.module.css"
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


export default function Home() {

  const [menuAberto, setMenuAberto] = useState(false)

  function atualizarMenu(){
    setMenuAberto(!menuAberto)
  }
  return (
    <main className={estilos.container}>
    <header className={estilos.topo}>
      <button className={estilos.botao} onClick={atualizarMenu}>
        {menuAberto ? <IoClose /> : <CiMenuBurger />
        }
      </button>
    </header>
    {menuAberto && (
      <Menu/>
    )}
  </main>
  );
}
