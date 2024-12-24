import Link from "next/link";
import styles from './Topo.module.css';


export default function Topo(){
    return(
        <section className={styles.container_topo}>
        <h1>Navegação React</h1>
        <nav>
        <Link className={styles.link_frontend} href="/frontend">Front-end</Link>
        <Link className={styles.link_backend} href="/backend">Back-end</Link>
        <Link className={styles.link_mobile} href="/mobile">Mobile</Link>
        </nav>
        </section>
    )
}