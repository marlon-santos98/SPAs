import styles from "@/app/componentes/SecaoExperienciaTrabalho/SecaoExperienciaTrabalho.module.css"
import Card from "../Card"
export default function SecaoExperienciaTrabalho(props){
    return(
        <section className={styles.section}>
            <div>
                <h2>Experiências de Trabalho</h2>
                <p> Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className={styles.cards}>
                <Card
                    data="JUNHO 2012 - 2016"
                    titulo="Web Designer"
                    empresa="Pied Piper StartUp"
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card
                    data="JUNHO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="Pied Piper StartUp"
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card
                    data="JUNHO 2019 - 2023"
                    titulo="Digital Consulting"
                    empresa="Pied Piper StartUp"
                    paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
            </div>
        </section>
    )
}