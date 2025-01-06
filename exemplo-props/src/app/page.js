import styles from "./page.module.css";
import CardProduto from "@/componentes/cardProduto/cardProduto.index";

export default function Home() {
  return (
    <main>
      <CardProduto
        nome={'Hamburguer'}
        preco={18}
        categoria={'Lanche'}
      />
      <CardProduto
        nome={'Sorvete'}
        preco={8}
        categoria={'Lanche'}
      />
      <CardProduto
        nome={'Salgadinho'}
        preco={182}
        categoria={'Lanche'}
      />
    </main>
  );
}
