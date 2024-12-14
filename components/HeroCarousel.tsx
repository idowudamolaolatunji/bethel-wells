import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'

const options = { loop: true, duration: 30 }

function HeroCarousel ({ slideImages } : any) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slideImages.map((img: any, i: any) => (
                        <div className="embla__slide" key={i}>
                            <img className="embla__slide__img" src={img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeroCarousel