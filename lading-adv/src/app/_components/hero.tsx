import Image from "next/image";
import fundo from '../../../public/hero.jpeg'; // Certifique-se de que o caminho da imagem está correto

export function Hero() {
    return (
        <section className="w-full h-screen bg-black flex items-center justify-center relative"> {/* Fundo cinza e ocupa toda a tela */}
            <div className="absolute inset-0 opacity-50"> {/* Faz a imagem ocupar todo o contêiner */}
                <Image 
                    src={fundo} 
                    alt="fundo" 
                    layout="fill" // Faz a imagem preencher o contêiner
                    objectFit="cover" // Cobre o contêiner sem distorcer
                    quality={90} // Aumenta a qualidade da imagem
                />
            </div>
            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>{/* Contêiner para o texto */}
                <article> {/* Grid com uma coluna para telas pequenas e duas para telas médias */}
                    <div className="space-y-6 text-right"> {/* Texto branco */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bol leading-10"> Sarah Priscila </h1>
                        <h2 className="text-lg md:text-xl text-gray-300 leading-7"> Advogada especialis </h2>
                        <p className="text-base md:text-lg text-gray-400 whitespace-pre-line">Especializada em litígios e resolução de conflitos,<br/>
                            minha abordagem estratégica garante que seus interesses sejam sempre priorizados.
                            <br />  
                            Vamos trabalhar juntos para alcançar seus objetivos.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}