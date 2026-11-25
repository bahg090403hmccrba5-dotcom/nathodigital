 import { SITIO, MENU } from '../../data/siteConfig'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-bosque-oscuro px-6 py-10 text-manta">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {/* Izquierda */}
        <div>
          <p className="font-bold">{SITIO.nombre}</p>
          <p className="text-xs tracking-widest text-amarillo">{SITIO.lema}</p>
          <p className="mt-3 text-xs opacity-70">
            Plataforma para aprender la lengua otomí y conocer el patrimonio del sitio Las Moras, Villa del Carbón, Estado de México.
          </p>
        </div>

        {/* Centro */}
        <div>
          <p className="font-bold text-amarillo">Explora</p>
          <ul className="mt-2 space-y-1 text-sm">
            {MENU.map((item) => (
              <li key={item.ruta}>
                <Link to={item.ruta} className="hover:underline">{item.texto}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Derecha - EL QUE TE FALTABA */}
        <div>
          <p className="font-bold text-amarillo">Proyecto Escolar</p>
          <p className="mt-2 text-xs opacity-80">
            CECyTEM. Carrera Técnica en Programación, 3er Semestre<br />
            Hecho por Estudiantes del grupo 304
          </p>
        </div>
      </div>

      <p className="mt-8 text-center text-xs opacity-60">
        © {SITIO.anio} {SITIO.nombre} ¡La cultura otomí vive!
      </p>
    </footer>
  )
}