 import Logo from '../ui/Logo.jsx'
import Navbar from './Navbar.jsx'
import GrecaOtomi from '../ui/GrecaOtomi.jsx'

export default function Header(){
  return(
    <header className="sticky top-0 z-50 bg-white">
      {/* Franja verde que se ve arriba en la Lenovo */}
      <div className="bg-[#1a4d2e] py-1 text-center text-[10px] text-white">
        El huahi - Barrio de Las Moras, Villa del Carbón, Estado de México
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Logo />
        <Navbar />
      </div>

      {/* Grecas de colores que encerraste en verde */}
      <GrecaOtomi />
    </header>
  )
}