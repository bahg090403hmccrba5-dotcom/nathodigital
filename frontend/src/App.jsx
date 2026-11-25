 import { Routes, Route } from "react-router-dom";
import Header from './components/layout/Header.jsx'
import Inicio from './pages/Inicio.jsx'
import Footer from './components/layout/Footer.jsx'
import EnConstruccion from './components/ui/EnConstruccion.jsx'

export default function App(){
  return(
      <div className="min-h-screen bg-[#fdf6e3] flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/lecciones" element={<EnConstruccion />} />
            <Route path="/videojuegos" element={<EnConstruccion />} />
            <Route path="/casas-de-resguardo" element={<EnConstruccion />} />
            <Route path="/en-construccion" element={<EnConstruccion />} />
          </Routes>
        </main>
        <Footer />
      </div>
  )
}