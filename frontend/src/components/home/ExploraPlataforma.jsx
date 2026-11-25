  
import { Link } from 'react-router-dom'
import { MODULO, MODULOS } from '../../data/siteConfig'

export default function ExploraPlataforma() {
  return (
    <section className="bg-bosque px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-bold tracking-widest text-amarillo">
          {MODULO.eyebrow}
        </p>
        <h2 className="mt-2 text-center text-3xl font-extrabold text-manta">
          {MODULO.titulo}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {MODULOS.map((item) => (
            <Link
              key={item.titulo}
              to={item.ruta}
              className="block rounded-2xl bg-manta p-6 shadow-lg hover:scale-[1.02] hover:shadow-xl transition"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${item.color}`}>
                <span>{item.icono}</span>
              </div>
              <h3 className="mt-4 font-bold text-bosque-oscuro">{item.titulo}</h3>
              <p className="mt-2 text-sm text-bosque-oscuro/70">{item.descripcion}</p>
              <span className="mt-4 inline-block text-sm font-bold text-rosa">
                Entrar →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}