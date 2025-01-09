import Image from 'next/image';
import estilos from "@/app/componentes/CardAnimal/CardAnimal.module.css"
import imagemCachorro from '/public/cachorro.jpg'
import imagemGato from '/public/gato.jpg'

export default function CardAnimal(props) {
  return (
    <div className={estilos.div}>
      <Image src={props.imagemAnimal === "cachorro" ? imagemCachorro : imagemGato} alt="animal" />
    </div>
  );
}