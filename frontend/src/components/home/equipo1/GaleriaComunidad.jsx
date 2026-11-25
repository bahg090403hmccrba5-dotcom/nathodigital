
import EspacioReservado from '../../ui/EspacioReservado';

export default function GaleriaComunidad() {
    return (
        <section
            id="galeria-comunidad"
            className="bg-manta-oscura/60 py-16"
            aria-labelledby="titulo-galeria"
        >
            <div className="mx-auto max-w-7xl px-4 py-16">

                {/* ======================================
                    EQUIPO 1: GALERÍA DE LA COMUNIDAD
                ====================================== */}

                <EspacioReservado
                    equipo="Equipo 1"
                    titulo="Imágenes de la comunidad"
                    archivo="src/components/home/equipo1/GaleriaComunidad.jsx"
                    pendientes={[
                        'Galería de fotos representativas de Las Moras',
                        'Fotos en public/img/comunidad/',
                        'Cada foto con su texto alternativo (alt)'
                    ]}
                />

                <h2
                    id="titulo-galeria"
                    className="sr-only"
                >
                    Imágenes de la comunidad
                </h2>

                {/* ======================================
                    EQUIPO 1: SU CÓDIGO VA AQUÍ
                ====================================== */}

                {/*
                    INSTRUCCIONES:

                    1. Guardar las fotografías en:
                       public/img/comunidad/

                    2. Utilizar imágenes JPG o WEBP.
                    3. Cada imagen debe tener su atributo alt.
                    4. Organizar las fotografías en una cuadrícula.
                    5. Solicitar permiso para utilizar fotografías
                       de personas de la comunidad.
                */}

                {/* ======================================
                    EQUIPO 1: HASTA AQUÍ
                ====================================== */}

            </div>
        </section>
    );
}