import styles from "@/app/componentes/Topo/Topo.module.css"
import Image from "next/image"
import iconeSol from "/public/sun.png"
import iconeLua from "/public/moon.png"
import logo from "/public/logo.png"

export default function Topo(props){
    return(
    <header>
        <Image
            className={styles.logo} 
            src={logo}
            alt="Logo"
            width={40}
            height={40}
        />
        <button onClick={props.alterarTema}>
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