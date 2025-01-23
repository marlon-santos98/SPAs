import icone1 from "/public/entrada.png";
import icone2 from "/public/massa.png";
import icone3 from "/public/carne.png";
import icone4 from "/public/bebidas.png";
import icone5 from "/public/salada.png";
import icone6 from "/public/sobremesa.png";

export default function Categorias(){
    return(
        <section>
            <div>
                <button>Entradas</button>
                <button>Massas</button>
                <button>Carnes</button>
                <button>Bebidas</button>
                <button>Saladas</button>
                <button>Sobremesas</button>
            </div>
        </section>
    )
}