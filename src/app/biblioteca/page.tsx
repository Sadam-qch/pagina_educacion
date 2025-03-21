"use client";
import React from "react";
import { usePublication } from "@/hooks/usePublications";
import { stripHtml } from "@/util/formatText";

export default function Page() {
  const { biblioteca, loading } = usePublication();

  if (loading) {
    return <p>cargando....</p>;
  }
  return (
    <div className=" p-6 pt-24 ">
      <h2 className="mb-4 text-3xl font-bold text-center">
        Visita Nuestra Biblioteca
      </h2>
    
    <section className=" grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      
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
