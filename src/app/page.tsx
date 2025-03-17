"use client";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Announcements from "../components/Announcements";
import Header from "@/components/Header";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import Congress from "@/components/Congress";

export default function Page() {
  const {institutionData}  =useInstitutionData()
  return (
    <>
    <Header title={institutionData?.institucion_nombre}/>
    <div className="flex flex-col min-h-screen">
      {/* Espaciado para evitar que el contenido quede debajo del menú */}
      <div>
         
        {/* Contenedor principal */}
        <div className="flex-grow w-full max-w-6xl px-4 mx-auto space-y-5 py-6s sm:px-6">
          <Congress/>
          {/* Comunicados de la carrera */}
          <Announcements/>

        </div>
      </div>
    </div>
    </>
  );
  

}
