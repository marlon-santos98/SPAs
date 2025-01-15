export default function Rodape(props){
    return(
        <section>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>
            <div>
                {props.children}
            </div>
            <div>
                <p>{props.developedby}</p>
            </div>
            
        </section>
    )
}