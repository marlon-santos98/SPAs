import Image from "next/image"
import styles from "@/app/componentes/SecaoBanner/SecaoBanner.module.css"

export default function SecaoBanner(){
    return(
        <section className={styles.section}>
            <div>
                <Image
                src="/banner.jpg"
                alt="Banner"
                width={690}
                height={390}
                className={styles.img}
                />
            </div>
            <div className={styles.texto}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>AGÊNCIA DE BRANDING</h1>
                <h1>E DESIGN DIGITAL</h1>
            </div>
        </section>
    )
}