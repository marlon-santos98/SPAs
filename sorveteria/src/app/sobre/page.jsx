import Image from "next/image";
import styles from "@/app/sobre/sobre.module.css"

export default function Sobre(){
    return(
        <section>
            <Image
                src="/banner-sobre.png"
                alt="Banner sabores"
                width={1900}
                height={1900}
                className={styles.image}
            />
        <div className={styles["text-container"]}>
            <h1>A GELATERIA</h1>
        </div>
        <div className={styles.div}>
            <h3>SOBRE NÓS</h3>
            <h4>Nós simplesmente amamos sorvete!</h4>
            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
        </div>
        <div className={styles.div_image}>
            <div>
                <Image
                    src="/sobre-image.jpg"
                    alt="Imagem sobre"
                    width={1800}
                    height={800}
                    className={styles.images}
                />
            </div>
            <div>
                <Image
                    src="/sorveteria.jpg"
                    alt="Sorveteria"
                    width={1800}
                    height={800}
                    className={styles.images}

                />
            </div>
        </div>
        </section>
    )
}