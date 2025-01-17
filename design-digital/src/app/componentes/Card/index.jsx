import styles from "@/app/componentes/Card/card.module.css"

export default function Card(props){
    return(
        <div className={styles.span}>
            <div>
                <span>{props.data}</span>
                <h3>{props.titulo}</h3>
                <small>{props.empresa}</small>
            </div>
            <div>
                <p>{props.paragrafo}</p>
            </div>
        </div>
    )
}