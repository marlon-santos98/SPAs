import Image from "next/image";
import styles from "@/app/sabores/sabores.module.css"; // Se você tiver um estilo personalizado

export default function Sabores() {
  return (
    <section>
      <div className="w3-display-container w3-text-white">
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
          <h1>SABORES DE SORVETE</h1>
        </div>
      </div>
    </section>
  );
}
