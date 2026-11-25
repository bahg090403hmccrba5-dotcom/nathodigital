 export default function EspacioReservado({equipo, titulo, archivo, pendientes =[]})
 {
return(
    <div className= "rounded-2xl border-4 border-dashed border-maiz bg-maiz/10 p-8 text-center">
        <span className="inline-block rounded-full bg-grana px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-manta">
            {equipo}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-grana">
            {titulo}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
            {archivo}
        </p>

        <ul className="mt-4 list-inside list-disc text-left">
            {pendientes.map((pendiente, index) => (
                <li key={index}>{pendiente}</li>
            ))}
        </ul>
    </div>
)
}