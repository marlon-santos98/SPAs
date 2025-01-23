import Image from "next/image"
import styles from "@/componentes/Banner/Banner.module.css"

export default function Banner(){
    return(
        <section className={styles.topo}>
            <Image
                src="/banner.png"
                alt="Banner"
                width={500}
                height={500}
                className={styles.img}
            />
            <div>
            <h1>RESTAURANT</h1>
                <p>
                De pratos clássicos a criações surpreendentes, nosso cardápio é um
                requinte de sabores refinados.
                </p>
        </div>
        </section>
    )
}