"use client";
import Image from 'next/image';
import car1 from "../../../public/carrossel/car1.png"
import car2 from "../../../public/carrossel/car2.png"
import car3 from "../../../public/carrossel/car3.png"
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Scale, BriefcaseBusiness, Clock } from 'lucide-react';

const services = [
    {
        title: "Consultoria Jurídica",
        description: "Orientação sobre questões legais e direitos.",
        duration: "1h",
        price: "R$ 100,00",
        icon: <Scale />,
        linkText: "Entrar em contato",
        image: car1,
    },
    {
        title: "Planejamento Previdenciário",
        description: "Avaliação do melhor benefício previdenciário.",
        duration: "1h",
        price: "R$ 100,00",
        icon: <BriefcaseBusiness />,
        linkText: "Entrar em contato",
        image: car2,
    },
    {
        title: "Assessoria Trabalhista",
        description: "Orientação sobre questões trabalhistas.",
        duration: "1h",
        price: "R$ 100,00",
        icon: <BriefcaseBusiness />,
        linkText: "Entrar em contato",
        image: car3,
    },
    {
        title: "Assessoria Empresarial",
        description: "Orientação sobre questões empresariais.",
        duration: "1h",
        price: "R$ 100,00",
        icon: <BriefcaseBusiness />,
        linkText: "Entrar em contato",
        image: car1,
    },
];

export function Service() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 },
        },
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }
    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-gray-400 py-16">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <h2 className='text-3xl font-bold mb-12 '>Serviços</h2>
                <p className='text-xl font-bold mb-12'>Serviços Previdenciário e Trabalhista</p>

                <div className='relative'>
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-gray-200  p-6 text-black rounded space-y-4 h-full flex flex-col'>
                                        <div className='flex-1 flex items-start justify-between'>
                                            <div className='flex gap-3'>
                                                <Image src={item.image} alt={item.title} className='h-20 w-20 rounded-md' />
                                                <span className='text-3xl'>{item.icon}</span>
                                                <div>
                                                    <h3 className='font-bold text-xl my-1 select-none'>{item.title}</h3>
                                                    <p className='text-gray-800 text-sm select-none'>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-5 h-5' />
                                                <span>{item.duration}</span>
                                            </div>
                                            <a href="#" className='text-blue-500'>{item.linkText}</a> {/* Adicionando link "Saiba mais" */}
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className='bg-gray-600 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft className='w-5 h-5 text-gray-300' />
                    </button>
                    <button onClick={scrollNext} className='bg-gray-600 flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight className='w-5 h-5 text-gray-300' />
                    </button>
                </div>
            </div>
        </section>
    );
}   