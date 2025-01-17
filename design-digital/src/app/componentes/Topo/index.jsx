import styles from "@/app/componentes/Topo/Topo.module.css"
import Image from "next/image"
import iconeSol from "/public/sun.png"
import iconeLua from "/public/moon.png"
import logo from "/public/logo.png"

export default function Topo(props){
    return(
    <header className={props.ehTemaEscuro ? styles.topo_dark : styles.topo_claro} >
        <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className={styles.img}
        />
        <button onClick={props.alterarTema} className={props.ehTemaEscuro ? styles.btn_dark : styles.btn_claro}>
            <Image 
                src={props.ehTemaEscuro ? iconeSol : iconeLua}
                alt="icone"
                width={50}
                height={50}
            />
        </button>
    </header>
    )
}