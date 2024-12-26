import styles from "@/componentes/Topo/Topo.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Topo(){
    return(
        <header className={styles.header}>
            <div  className={styles.div}>
            <Image
                src="/logo.png"
                alt="Logo Sorveteria"
                width={100}
                height={100}
            />
            <nav className={styles.link}>
                <Link href="/home">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/sabores">Sabores</Link>
            </nav>
            </div>
        </header>
    )
}