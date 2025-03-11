"use client";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { institutionData } = useInstitutionData();

  const settings = {
    dots: true,            // Puntos de navegación
    infinite: true,        // Desplazamiento infinito
    speed: 500,           // Velocidad de transición (ms)
    slidesToShow: 1,      // Muestra 1 imagen a la vez
    slidesToScroll: 1,    // Avanza 1 imagen por vez
    autoplay: true,       // Activar autoplay
    autoplaySpeed: 1500,  // Cambia cada 1/2 segundo 
    arrows: false,        // Oculta flechas (opcional)
  };

  return (
    <section className="">
      {institutionData && (
        <Slider {...settings}>
          {institutionData.portada.map((data, _i) => (
            <div key={`card-${_i}`} className="flex items-center justify-center w-full">
              <div
                className="relative flex items-center justify-start w-full min-h-[70vh] md:min-h-screen text-white bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/Portada/${data.portada_imagen}')`,
                  backgroundSize: "contain",  // Muestra la imagen completa
                }}
              >
                {/* Contenido de la cabecera */}
                <div className="relative z-10 max-w-3xl p-6 px-10 ">
                  <h1 className="font-bold text-left text-white md:text-2xl">
                  {data.portada_subtitulo}
                  </h1> <br />
                  <h1 className="text-3xl font-bold text-left text-white md:text-5xl animate-pulse">
                    {data.portada_titulo}
                  </h1> <br />
                  <h1 className="text-3xl font-bold text-left text-white md:text-2xl">
                    Carrera acreditada
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </section>
    
  );
}
