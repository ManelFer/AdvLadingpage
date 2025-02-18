import Image from "next/image";
import service from '../../../public/service.png';

export function Service() {
    return (
        <section className="w-full h-screen bg-gray-800 text-white relative"> {/* Fundo cinza e ocupa toda a tela */}
            <div className="absolute inset-0">
                <Image 
                    src={service} 
                    alt="Fundo" 
                    layout="fill" 
                    objectFit="cover" 
                    quality={90} 
                />
                <div className="absolute inset-0 bg-black opacity-50" /> {/* Camada de opacidade */}
            </div>
            <div className="relative z-10 text-white text-center"> {/* Texto sobreposto */}
                <div className="container relative mx-auto outline outline-white outline-offset-4 shadow-md w-full h-screen flex items-center justify-center"> {/* Quadrado perfeito */}
                    <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
                </div>
            </div>
        </section>
    );
}