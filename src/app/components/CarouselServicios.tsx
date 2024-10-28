'use client'


import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function CarouselServicios1() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide ">
          <Image
            src="/servicios1.jpeg"
            alt='Servicios1'
            width={600}
            height={600}
            className='m-auto'>
          </Image>
        </div>
        <div className="embla__slide">
          <Image
            src="/servicios2.jpeg"
            alt='Servicios2'
            width={600}
            height={600}
            className='m-auto'>
          </Image>
        </div>
        <div className="embla__slide">
          <Image
            src="/servicios3.jpeg"
            alt='Servicios3'
            width={600}
            height={600}
            className='m-auto'>
          </Image>
        </div>
        <div className="embla__slide">
          <Image
            src="/servicios4.jpeg"
            alt='Servicios4'
            width={600}
            height={600}
            className='m-auto'>
          </Image>
        </div>
      </div>
    </div>
  )
}

export function CarouselServicios2() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src="/servicios2-1.jpeg"
            alt='Servicios2-1'
            width={600}
            height={600}
            className='m-auto'>
          </Image>
        </div>
        <div className="embla__slide">
          <Image
            src="/servicios2-2.jpeg"
            alt='Servicios2-2'
            width={600}
            height={600}
            className='m-auto'>
          </Image>
        </div>
        <div className="embla__slide">
          <Image
            src="/servicios2-3.jpeg"
            alt='Servicios2-3'
            width={600}
            height={600}
            className='m-auto'>
          </Image>
        </div>
        <div className="embla__slide">
          <Image
            src="/servicios2-4.jpeg"
            alt='Servicios2-4'
            width={400}
            height={400}
            className='m-auto'>
          </Image>
        </div>
      </div>
    </div>
  )
}


export function CarouselServicios3() {
  const [emblaRef] = useEmblaCarousel({ loop: false })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src="/servicios3-1.jpeg"
            alt='Servicios3-1'
            width={600}
            height={600}>
          </Image></div>
        <div className="embla__slide"> <Image
          src="/servicios3-2.jpeg"
          alt='Servicios3-2'
          width={600}
          height={600}>
        </Image></div>
        <div className="embla__slide"> <Image
          src="/servicios3-3.jpeg"
          alt='Servicios3-3'
          width={600}
          height={600}>
        </Image></div>
        <div className="embla__slide"> <Image
          src="/servicios3-4.jpeg"
          alt='Servicios3-4'
          width={600}
          height={400}>
        </Image></div>
      </div>
    </div>
  )
}

