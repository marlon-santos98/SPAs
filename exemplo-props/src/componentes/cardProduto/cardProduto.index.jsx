import styles from "@/componentes/cardProduto/cardProduto.module.css"
export default function CardProduto(props){
return(
    <div className={styles.divmain}>
        <div className={styles.div}>
            <h3>{props.nome}</h3>
            <p>R${props.preco}</p>
            <small>{props.categoria}</small>
            <button>Adicionar</button>
        </div>
    </div>
)
}