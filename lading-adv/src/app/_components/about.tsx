import Image from "next/image"
import advBalanca from '../../../public/advBancada.jpeg'
export function About(){
    return (
        <section className=" container mx-auto pt-16 pb-16 px-4">
            <div className="flex justify-between mt-8">{/* div do sobre  */}
                <div className="w-1/2 pl-4"> {/* Div direita com texto */}
                    <h1 className="text-3xl font-bold mb-4">About _____</h1>
                    <p className="text-lg pt-10 ">
                        Olá! Meu nome é Sarah tenho 23 anos, bacharel em direito e avogada pela OAB.
                        <br />
                        Atualmente, estou me especializando em Direito Previdenciário e Trabalhista, sempre buscando aprimorar meus conhecimentos.
                        <br />
                        Minha trajetória profissional inclui dois anos de estágio na Defensoria Pública do estado de Sergipe, onde pude atuar diretamente em casos que garantiram os direitos de quem mais precisava.
                        <br />
                        Após essa experiência, trabalhei como advogada em escritório, consolidando e aprofundando meus conhecimentos, e atualmente, sou advogada administrativa, ampliando ainda mais minhas habilidades.
                        <br />
                        Estou sempre em busca de novos desafios e oportunidades para crescer, com o objetivo de oferecer um trabalho de excelência aos meus clientes.
                        <br />
                    </p>
                </div>
                <div className="w-1/2 pl-4 flex justify-center">{/* div direita */}
                    <Image src={advBalanca} alt="balança" className="object-contain rounded-md" quality={90} height={300} width={400}/>
                </div>
                
            </div>
        </section>
    )
}