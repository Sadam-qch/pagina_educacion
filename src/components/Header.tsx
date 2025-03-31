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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <section className="w-full pt-20">
      {institutionData && (
        <Slider {...settings}>
          {institutionData.portada.map((data, _i) => (
            <div
              key={`card-${_i}`}
              className="w-full"
            >
              <div
                className="relative flex items-center justify-start w-full h-screen md:h-[90vh] sm:h-[80vh] text-white bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/Portada/${data.portada_imagen}')`,
                }}
              >
                {/* Contenido de la cabecera */}
                <div className="relative z-10 max-w-3xl p-6 px-10 bg-opacity-50 rounded-lg">
                  <h1 className="text-lg font-semibold text-left text-white md:text-2xl">
                    {data.portada_subtitulo}
                  </h1>
                  <h1 className="text-6xl font-bold text-left text-white md:text-5xl animate-pulse">
                    {data.portada_titulo}
                  </h1>
                  <h1 className="text-xl font-bold text-left text-white md:text-2xl">
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
