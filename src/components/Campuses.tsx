"use client";
import { usePublication } from "@/hooks/usePublications";

export default function Campuses() {
  const { sedes, loading } = usePublication();

  if (loading) {
    return <p className="py-4 text-center">Cargando sedes académicas...</p>;
  }

  return (
    <section className="p-6 mt-4 bg-white rounded-lg shadow-md">
      {/* Sección Sedes académicas */}
      <h2 className="mb-6 text-2xl font-bold text-center text-[#0A02B0]">SEDES ACADÉMICAS</h2>
      
      {/* Todas las sedes en una sola cuadrícula */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {sedes &&
        sedes.map((data) => (
          <div 
            key={data.publicaciones_id}
            className="overflow-hidden transition-transform duration-300 bg-gray-100 rounded-lg shadow-lg hover:transform hover:scale-105"
          >
            <div className="relative h-48">
              <img 
                src={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`} 
                alt="Sede académica" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">{data.publicaciones_titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}