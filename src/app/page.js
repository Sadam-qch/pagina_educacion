"use client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import WelcomeInformation from "./components/WelcomeInformation";
import Announcements from "./components/Announcements";

export default function Page() {
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Espaciado para evitar que el contenido quede debajo del menú */}
      <div>
        {/* Información de bienvenida */}
        <WelcomeInformation />
  
        {/* Contenedor principal */}
        <div className="flex-grow w-full max-w-6xl px-4 py-6 mx-auto space-y-5 sm:px-6">
          {/* Comunicados de la carrera */}
          <Announcements/>
          
          
        </div>
      </div>
    </div>
  );
  

}
