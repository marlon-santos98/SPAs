import Image from "next/image";
import styles from "@/app/sabores/sabores.module.css"; // Se você tiver um estilo personalizado

export default function Sabores() {
  return (
    <section>
      <div>
        {/* A imagem fica como fundo da "container", permitindo que o texto fique sobre ela */}
        <Image
          src="/banner-sabores.jpg"
          alt="Banner Sabores"
          width={1800}
          height={400}
          className={styles.image}  // Estilo personalizado da imagem (opcional)
        />
        <div className={styles["text-container"]}>
          {/* O w3-center vai garantir que o texto esteja centralizado */}
          <h1>NOSSOS SABORES</h1>
        </div>
      </div>

      <h2 className={styles.h2}>SABORES DE SORVETE</h2>

      <div className={styles.cards}>
      <div className={styles.card_individual}>
        <Image
          src="/sabor-oreo.jpg"
          alt="Sabor Oreo"
          width={100}
          height={100}
          className={styles.image_card}
        />
        <h4>Sorvete de Oreo</h4>
        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
      </div>
      <div className={styles.card_individual}>
      <Image
          src="/sorbet-morango.png"
          alt="Sabor Morango"
          width={100}
          height={100}
          className={styles.image_card}
        />
        <h4>Sorvete Morando</h4>
        <p>Delicioso sorvete sabor Morango. Uma explosão de sabor.</p>
      </div>
      <div className={styles.card_individual}>
      <Image
          src="/sabor-pistache.png"
          alt="Sabor Oreo"
          width={100}
          height={100}
          className={styles.image_card}
        />
        <h4>Sorvete Pistache</h4>
        <p>Cremoso sorvete sabor Pistache. Uma explosão de sabor.</p>
      </div>
      <div className={styles.card_individual}>
      <Image
          src="/sabor-cookies-avela.png"
          alt="Sabor Cookies e avela"
          width={100}
          height={100}
          className={styles.image_card}
        />
        <h4>Sorvete Cookies & Avelã</h4>
        <p>Delicioso sorvete sabor Cookies & Avelã. Uma explosão de sabor.</p>
      </div>
      <div className={styles.card_individual}>
      <Image
          src="/sorbet-Kiwi.png"
          alt="Sabor Kiwi"
          width={100}
          height={100}
          className={styles.image_card}
        />
        <h4>Sorvete de Kiwi</h4>
        <p>Delicioso sorvete sabor Kiwi. Uma explosão de sabor.</p>
      </div>
      <div className={styles.card_individual}>
      <Image
          src="/sorbet-limao.png"
          alt="Sabor Limão"
          width={100}
          height={100}
          className={styles.image_card}
        />
        <h4>Sorvete de Limão Siciliano</h4>
        <p>Delicioso sorvete sabor Limão Siciliano. Uma explosão de sabor.</p>
      </div>
      </div>
    </section>
  );
}
