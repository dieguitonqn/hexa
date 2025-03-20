'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'

export function CarouselClientes() {
    const [emblaRef] = useEmblaCarousel({ loop: true,  }, [AutoScroll({playOnInit:true,speed: 1, stopOnInteraction:false, startDelay: 0 })])

    return (
        <div className=' overflow-hidden'>

        <div className="embla w-fit" ref={emblaRef}>
            <div className="embla__container max-w-xs items-center">
                <div className="embla__slide ">
                    <img
                        src="/clientes/chevron.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </img>
                </div>
                <div className="embla__slide ">
                    <img
                        src="/clientes/calfrac.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </img>
                </div>
                <div className="embla__slide ">
                    <img
                        src="/clientes/FRICSA.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </img>
                </div>
 
                <div className="embla__slide ">
                    <img
                        src="/clientes/sanantonio.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </img>
                </div>
                <div className="embla__slide ">
                    <img
                        src="/clientes/ypf.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </img>
                </div>

                <div className="embla__slide ">
                    <img
                        src="/clientes/weatherford.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </img>
                </div>
            </div>
        </div>
        </div>
    );
}