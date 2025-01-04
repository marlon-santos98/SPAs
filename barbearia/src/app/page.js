'use client'
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  function alterarTema(){
      setDarkMode(!darkMode)
  }

  return (
      <main className={darkMode ? styles.main_dark_mode : styles.main}>
        <header className={styles.header}>
          <Image
            src="/barbearia.png"
            alt="Logo barbearia"
            width={100}
            height={100}
            className={darkMode ? styles.image_dark_mode : null}
          />
          <button className={darkMode ? styles.button_dark_mode : styles.button} onClick={alterarTema}> {darkMode ? <CiLight/> : <MdOutlineDarkMode/>}</button>
        </header>
        <section>
          <Image
            src="/banner.jpg"
            alt="Banner seção 1"
            width={900}
            height={800}
            className={styles.image}
          />
        </section>
        <section>
          <div className={styles.div}>
            <h1>Bem-vindo a Barber Shop</h1>
              <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
              <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
              <p className={styles.assinatura}>S. Kelly</p>
          </div>
        </section>
      </main>
  );
}
