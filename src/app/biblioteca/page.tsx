"use client";
import React from "react";
import Slider from "react-slick";
// Importa los estilos esenciales para el slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePublication } from "@/hooks/usePublications";
import { stripHtml } from "@/util/formatText";

export default function Page() {
  const { biblioteca, loading } = usePublication();

  if (loading) {
    return <p>cargando....</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
  };

  return (
    <section className="max-w-5xl p-6 pt-24 mx-auto mt-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-3xl font-bold text-center">
        Visita Nuestra Biblioteca
      </h2>
      <Slider {...settings}>
        {biblioteca &&
          biblioteca.map((data) => (
            <div
              key={data.publicaciones_id}
              className="relative p-6 text-center bg-gray-100 rounded-lg shadow-lg"
            >
              {/* Contenedor con altura fija para evitar un slider demasiado grande */}
              <div className="w-full overflow-hidden rounded-md h-96">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}
                  alt={data.publicaciones_titulo}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {data.publicaciones_titulo}
              </h3>
              <p className="mt-2 text-gray-700">
                {stripHtml(data.publicaciones_descripcion)}
              </p>
            </div>
          ))}
      </Slider>
    </section>
  );
}
