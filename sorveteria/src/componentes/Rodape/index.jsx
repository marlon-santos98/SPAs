import styles from "@/componentes/Rodape/Rodape.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.div}>
            <Image
                src="/logo.png"
                alt="Logo da Sorveteria"
                width={100}
                height={100}
            />
            <div>
                <h3>ENDEREÇO</h3>
                <p>Av. Bernardino de</p>
                <p>Campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>
            <div>
                <h3>CONTATO</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>
            <div>
                <h3>HORÁRIOS</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
            </div>
            <div className={styles.developedby}>
                <p>Gelateria. Orgulhosamente desenvolvido por Marlon Santos</p>
            </div>
        </footer>
    )
}