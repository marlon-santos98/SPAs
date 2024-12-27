import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.div}>
          <h1 className={styles.h1}>SORVETE ARTESANAL</h1>
          <Image
            src="/banner-home.png"
            alt="Banner Home"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card_individual}>
          <Image
            src="/banner-sabores.jpg"
            alt="Banner Sabores"
            width={400}
            height={300}
            className={styles.image_cards}
          />
        </div>
        <div className={`${styles.card_individual} ${styles.cards_p}`}>
          <h1>NOSSOS SABORES</h1>
          <h3>Novos e deliciosos!</h3>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais, à base de frutas e
            sem nenhum conservante! Também temos opções sem lactose e sem
            açúcar. Venha conhecer e perceber que tem como o sorvete ser
            delicioso e saudável ao mesmo tempo!
          </p>
        </div>
        <div className={`${styles.card_individual} ${styles.cards_p}`}>
          <h1>NOSSOS EVENTOS</h1>
          <h3>Delicias com sorvete!</h3>
          <p>
            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
            prontinhos para te atender e oferecer os melhores eventos com os
            melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
            aqui com a gente.
          </p>
        </div>
        <div className={styles.card_individual}>
          <Image
            src="/eventos-image.jpg"
            alt="Eventos imagem"
            width={400}
            height={300}
            className={styles.image_cards}
          />
        </div>
        <div className={styles.card_individual}>
          <Image
            src="/sobre-image.jpg"
            alt="Imagem sobre"
            width={400}
            height={300}
            className={styles.image_cards}
          />
        </div>
        <div className={`${styles.card_individual} ${styles.cards_p}`}>
          <h1>SOBRE NÓS</h1>
          <h3>Alegria em cada casquinha!</h3>
          <p>
            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos
            há anos no mercado produzindo o que tem de melhor para o nosso
            cliente e você não pode ficar fora dessa. Venha nos fazer uma visita
            e aproveite o melhor atendimento e o melhor sorvete da cidade.
          </p>
        </div>
      </div>
    </main>
  );
}
