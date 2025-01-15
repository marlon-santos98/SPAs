export default function SecaoExperienciaTrabalho(props){
    return(
        <section>
            <div>
                <h1>Experiências de Trabalho</h1>
                <p> Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div>
                <div>
                    <p>{props.data}</p>
                    <h3>{props.titulo}</h3>
                    <p>{props.texto}</p> 
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </section>
    )
}