 import HeroBanner from "../components/home/HeroBanner.jsx"
import PorQueVisitar from "../components/home/equipo1/PorQueVisitar.jsx"
import ConoceLasMoras from "../components/home/equipo1/ConoceLasMoras.jsx"
import GaleriaComunidad from "../components/home/equipo1/GaleriaComunidad.jsx"
import ExploraPlataforma from "../components/home/ExploraPlataforma.jsx"

export default function Inicio(){
  return(
    <div>
      <HeroBanner />
      <PorQueVisitar />
      <ConoceLasMoras />
      <GaleriaComunidad />
      <ExploraPlataforma />
    </div>
  )
}