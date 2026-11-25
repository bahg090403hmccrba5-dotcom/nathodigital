 import EspacioReservado from '../../ui/EspacioReservado';

export default function ConoceLasMoras() {
    return (
        <section
            id="por-que-visitar"
            className="mx-auto max-w-7xl scroll-mt-32 px-4 py-16"
            aria-labelledby="titulo-conoce"
        >
            {/* EQUIPO 1: SU CÓDIGO VA AQUÍ */}

            <EspacioReservado
                equipo="Equipo 1"
                titulo="Por qué visitar Las Moras"
                archivo="src/components/home/equipo1/PorQueVisitar.jsx"
                pendientes={[
                    "Razones para visitar la comunidad",
                    "Tarjetas con icono",
                    "Título y texto breve",
                    'Opcional: botón de "Cómo llegar"'
                ]}
            />

            <h2 id="titulo-conoce" className="sr-only">
                ¿Por qué visitar Las Moras?
            </h2>

            {/* EQUIPO 1: HASTA AQUÍ */}
        </section>
    );
}