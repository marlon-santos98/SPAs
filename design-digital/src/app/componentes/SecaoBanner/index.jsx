import Image from "next/image"

export default function SecaoBanner(){
    return(
        <section>
            <div>
                <Image
                src="/banner.jpg"
                alt="Banner"
                width={690}
                height={390}
                />
            </div>
            <div>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>AGÊNCIA DE BRANDING</h1>
                <h1>E DESIGN DIGITAL</h1>
            </div>
        </section>
    )
}