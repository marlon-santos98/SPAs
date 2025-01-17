import facebook from "/public/facebook.png"
import twitter from "/public/twitter.png"
import linkedin from "/public/linkedin.png"
import behance from "/public/behance.png"
import dribble from "/public/dribble.png"
import google from "/public/google.png"
import Image from "next/image"
import styles from "@/app/componentes/Rodape/Rodape.module.css"

export default function Rodape(props){
    return(
        <section className={props.ehTemaEscuro ? styles.section_dark : styles.section}>
            <div className={styles.div}>
            <h2>M.</h2>
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.</p>
            <div className={styles.icones}>
            <Image src={facebook} alt="Facebook"  className={styles.image}/>
            <Image src={linkedin} alt="linkedin"  className={styles.image}/>
            <Image src={twitter} alt="twitter"  className={styles.image}/>
            <Image src={behance} alt="behance"  className={styles.image}/>
            <Image src={dribble} alt="dribble"  className={styles.image}/>
            <Image src={google} alt="google"  className={styles.image}/>
            </div>
            <p>Copyright 2022 @ Marlon Santos</p>
            </div>
        </section>
    )
}