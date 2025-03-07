"use client";
import React from "react";
import Slider from "react-slick";
// Importa los estilos esenciales para el slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page() {
  const anuncios = [
    {
      id: 1,
      title: "DIDACTICA GENERAL",
      description: "Agustin de la Herra Gascon",
      image: "https://serviciopagina.upea.bo/Publicaciones/4f809ff9-66ea-4020-89f4-cb9d0064033e.png",
    },
    {
      id: 2,
      title: "Didactica General",
      description: "Antonio Revilla",
      image: "https://serviciopagina.upea.bo/Publicaciones/b53958c8-ddc7-4ea9-81f1-bef17ffa3481.png",
    },
  ];

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
    <section className="max-w-5xl p-6 mx-auto mt-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-3xl font-bold text-center">Visita Nuestra Biblioteca</h2>
      <Slider {...settings}>
        {anuncios.map((anuncio) => (
          <div
            key={anuncio.id}
            className="relative p-6 text-center bg-gray-100 rounded-lg shadow-lg"
          >
            {/* Contenedor con altura fija para evitar un slider demasiado grande */}
            <div className="w-full h-64 overflow-hidden rounded-md">
              <img
                src={anuncio.image}
                alt={anuncio.title}
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{anuncio.title}</h3>
            <p className="mt-2 text-gray-700">{anuncio.description}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}
