
'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'

export function CarouselClientes() {
    const [emblaRef] = useEmblaCarousel({ loop: true,  }, [AutoScroll({playOnInit:true,speed: 1 })])

    return (
        <div className=' overflow-hidden'>

        <div className="embla w-fit" ref={emblaRef}>
            <div className="embla__container max-w-xs items-center">
                <div className="embla__slide ">
                    <Image
                        src="/clientes/chevron.jpg"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </Image>
                </div>
                <div className="embla__slide ">
                    <Image
                        src="/clientes/calfrac.jpeg"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </Image>
                </div>
                <div className="embla__slide ">
                    <Image
                        src="/clientes/FRICSA.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </Image>
                </div>
                <div className="embla__slide ">
                    <Image
                        src="/clientes/oldelval.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </Image>
                </div>
                <div className="embla__slide ">
                    <Image
                        src="/clientes/sanantonio.jpeg"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </Image>
                </div>
                <div className="embla__slide ">
                    <Image
                        src="/clientes/ypf.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </Image>
                </div>

                <div className="embla__slide ">
                    <Image
                        src="/clientes/weatherford.png"
                        alt=''
                        width={150}
                        height={150}
                        className='m-auto'>
                    </Image>
                </div>
            </div>
        </div>
        </div>
    );
}