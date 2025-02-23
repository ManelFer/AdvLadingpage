"use client";
import useEmblaCarousel from 'embla-carousel-react';
import {ChevronLeft, ChevronRight, Scale, BriefcaseBusiness, Clock   } from 'lucide-react';

{/* Ideia principal é fazer um array para ser consumido para ficar mais dinamico */}

const   services = [
    {
        title: "Consultoria Jurídica",
        description: "Orientação sobre questões legais e direitos.",
        duration: "1h",
        price: "R$ 100,00",
        icon: <Scale/>,
        linkText: "Saiba mais",
    },
    {
        title: "Planejamento Previdenciário",
        description: "Avaliação do melhor benefício previdenciário.",
        duration: "1h",
        price: "R$ 100,00",
        icon: <BriefcaseBusiness/>,
        linkText: "Saiba mais",
    },
]

export function Service() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": {slidesToScroll: 3},
        },
    })

    function scrollPrev(){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16"> {/* Fundo cinza e ocupa toda a tela */}
           <div className="container mx-auto px-4">{/* Div para centralizar o conteúdo */}
                <h2 className='text-3xl font-bold mb-12'>Serviços</h2>

                <div className='relative'>
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index)=>(
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-gray-100 p-6 text-black roun space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>

                                            <div className='flex gap-3'>
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1 select-none'>{item.title}</h3>
                                                    <p className='text-gray-800 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='border-t border-gray-700 pt-4 flex itemss-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-5 h-5'/>
                                                <span>{item.duration}</span>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <button onClick={scrollPrev}><ChevronLeft /></button>
                <button onClick={scrollNext}><ChevronRight /></button>
                <div>{/* Div para os grids de serviços */}    

                </div>
           </div>
        </section>
    );
}