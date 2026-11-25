 
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">

            {/* Accesibilidad: saltar al contenido */}
            <a
                href="#contenido"
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-maiz focus:px-4 focus:py-2 focus:font-bold"
            >
                Saltar al contenido
            </a>

            <Header />

            <main id="contenido" className="flex-1">
                <Outlet />
            </main>

            <Footer />

        </div>
    );
}



 