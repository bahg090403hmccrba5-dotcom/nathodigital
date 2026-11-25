 import { useEffect, useState } from 'react'
import { SLIDES } from '../../data/bannerSlides'

const INTERVALO = 6000

export default function HeroBanner() {

    const [actual, setActual] = useState(0)
    const [pausado, setPausado] = useState(false)

    const total = SLIDES.length

    const siguiente = () => {
        setActual((i) => (i + 1) % total)
    }

    const anterior = () => {
        setActual((i) => (i - 1 + total) % total)
    }

    useEffect(() => {
        if (pausado || total <= 1) return

        const id = setInterval(() => {
            setActual((i) => (i + 1) % total)
        }, INTERVALO)

        return () => clearInterval(id)

    }, [pausado, total])

    if (total === 0) {
        return null
    }

    return (
        <section
            className="relative h-[420px] overflow-hidden bg-bosque-oscuro sm:h-[520px]"
            aria-roledescription="carrusel"
            aria-label="Imágenes de Las Moras"
            onMouseEnter={() => setPausado(true)}
            onMouseLeave={() => setPausado(false)}
        >

            {/* Imágenes del carrusel */}
            {SLIDES.map((slide, i) => (

                <div
                    key={slide.imagen}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        i === actual ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden={i !== actual}
                >

                    {/* Imagen de fondo */}
                    <div
                        role="img"
                        aria-label={slide.alt}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: url(${slide.imagen})
                        }}
                    />

                    {/* Capa oscura para mejorar la lectura */}
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-bosque-oscuro/90 via-bosque-oscuro/50 to-transparent"
                    />

                    {/* Texto del banner */}
                    <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">

                        <h1 className="max-w-xl text-4xl font-extrabold text-manta sm:text-6xl">
                            {slide.titulo}
                        </h1>

                        <p className="mt-4 max-w-lg text-lg text-manta/90">
                            {slide.texto}
                        </p>

                        <a
                            href="#conoce-las-moras"
                            className="mt-8 w-fit rounded-full bg-maiz px-6 py-3 font-extrabold text-carbon shadow hover:bg-maiz/85"
                        >
                            Conoce Las Moras
                        </a>

                    </div>
                </div>
            ))}

            {/* Flecha anterior */}
            {total > 1 && (
                <button
                    type="button"
                    onClick={anterior}
                    aria-label="Imagen anterior"
                    className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-manta/80 px-3 py-2 text-2xl font-bold text-bosque-oscuro hover:bg-manta sm:block"
                >
                    ‹
                </button>
            )}

            {/* Flecha siguiente */}
            {total > 1 && (
                <button
                    type="button"
                    onClick={siguiente}
                    aria-label="Imagen siguiente"
                    className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-manta/80 px-3 py-2 text-2xl font-bold text-bosque-oscuro hover:bg-manta sm:block"
                >
                    ›
                </button>
            )}

            {/* Indicadores en forma de rombo */}
            {total > 1 && (
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-3">

                    {SLIDES.map((slide, i) => (

                        <button
                            key={slide.imagen}
                            type="button"
                            onClick={() => setActual(i)}
                            aria-label={Ver imagen ${i + 1}}
                            aria-current={i === actual}
                            className={`h-3.5 w-3.5 rotate-45 border-2 border-manta ${
                                i === actual ? 'bg-maiz' : 'bg-transparent'
                            }`}
                        />

                    ))}

                </div>
            )}

        </section>
    )
}