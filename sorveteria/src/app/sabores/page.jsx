import Link from "next/link";
import Image from "next/image";
import styles from "@/app/sabores/sabores.module.css"

export default function Sabores(){
    return(
        <section className={styles.section}>
            <div>
                <Image
                    src="/banner-sabores"
                    alt="Banner Sabores"
                    width={500}
                    height={500}
                />
            </div>
        </section>
    )
}