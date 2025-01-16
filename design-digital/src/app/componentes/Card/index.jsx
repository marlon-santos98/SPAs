export default function Card(props){
    return(
        <div>
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