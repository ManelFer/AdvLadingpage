import Image from "next/image"
import advBalanca from '../../../public/advBancada.jpeg'
export function About(){
    return (
        <section className=" container mx-auto pt-16 pb-16 px-4">
            <div className="flex justify-between mt-8">{/* div do sobre  */}
                <div className="w-1/2 pl-4"> {/* Div direita com texto */}
                    <h1 className="text-3xl font-bold mb-4">About _____</h1>
                    <p className="text-lg pt-10 ">
                        Olá! Meu nome é Sarah Priscila e sou uma advogada com mais de 10 anos de experiência,
                        <br />
                        especializada em litígios e resolução de conflitos. 
                        <br />
                        Minha paixão pela justiça e pelos direitos humanos me levou a defender clientes em diversas situações, 
                        <br />
                        sempre buscando soluções eficazes e personalizadas. 
                        <br />
                        Acredito que a comunicação clara e a empatia são essenciais para entender as necessidades de cada cliente,
                        <br /> 
                        e me esforço para garantir que suas vozes sejam ouvidas. 
                        <br />
                        Além do meu trabalho, sou ativa em causas sociais e busco constantemente aprender e crescer, tanto pessoal quanto profissionalmente.
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