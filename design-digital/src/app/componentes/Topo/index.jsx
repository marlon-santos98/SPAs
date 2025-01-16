import styles from "@/app/componentes/Topo/Topo.module.css"
import Image from "next/image"
import iconeSol from "/public/sun.png"
import iconeLua from "/public/moon.png"
import logo from "/public/logo.png"

export default function Topo(props){
    return(
    <header className={styles.header} >
        <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className={styles.img}
        />
        <button onClick={props.alterarTema} className={styles.button}>
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