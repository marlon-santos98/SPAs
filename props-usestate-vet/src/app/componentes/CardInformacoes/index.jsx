import estilos from "./CardInformacoes.module.css";

export default function CardInformacoes(props) {
  let nomeAnimalCachorro = "Cachorro";
  let nomeAnimalGato = "Gato";
  let informacaoCachorro = "É um mamífero carnívoro da família dos canídeos.";
  let informacaoGato = "É um mamífero carnívoro da família dos felídeos.";

  return (
    <div className={estilos.card_informacoes}>
      <h3>Informação sobre o {props.tipoAnimal === "cachorro" ? nomeAnimalGato : nomeAnimalCachorro}</h3>
      <p>{props.tipoAnimal === "cachorro" ? informacaoGato : informacaoCachorro}</p>
    </div>
  );
}