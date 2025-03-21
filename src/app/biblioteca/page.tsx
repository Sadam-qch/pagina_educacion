"use client";
import React from "react";
import { usePublication } from "@/hooks/usePublications";

export default function Page() {
  const { biblioteca, loading } = usePublication();

  if (loading) {
    return <p>cargando....</p>;
  }
  return (
    <div className="flex flex-col pt-20 ">
      <div
        className="w-full mx-auto text-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo1.jpg')" }}
         >
        <h1 className="text-5xl font-extrabold text-white animate-pulse text-secondar bg-opacity-75 p-4 rounded-lg">
          VISITA NUESTRA BIBLIOTECA
        </h1>
      </div>
      <div className="container py-20 mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-blue-700">
            BIBLIOTECA
          </h1>
        </div>
    <section className="p-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
      
        {biblioteca &&
          biblioteca.map((data) => (
            <div
              key={data.publicaciones_id}
              className="relative p-6 text-center bg-cyan-950 rounded-lg shadow-lg cursor-pointer hover:scale-105"
            >
              {/* Contenedor con altura fija para evitar un slider demasiado grande */}
              <div className="w-full overflow-hidden rounded-md h-96">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}
                  alt={data.publicaciones_titulo}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-50">
                {data.publicaciones_titulo}
              </h3>
            </div>
          ))}
    </section>
    </div>
  );
}
