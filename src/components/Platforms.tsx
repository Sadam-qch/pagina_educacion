"use client";
import { useExternalLinks } from "@/hooks/useExternalLinks";

export default function Platforms() {
  const { links, loading } = useExternalLinks();

  if (loading) {
    return <p className="py-4 text-center">Cargando plataformas...</p>;
  }

  if (!links || links.length === 0) {
    return <p className="py-4 text-center">No hay información de plataformas disponible.</p>;
  }

  return (
    <section className="p-6 mt-4 bg-white rounded-lg shadow-md">
      {/* Sección de Plataformas de la Carrera */}
      <h2 className="text-3xl font-bold text-center text-[#0A02B0] mb-6">Plataformas de la Carrera</h2>
      
      {/* Todas las plataformas en una sola cuadrícula */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((data, index) => (
          <div 
            key={`platform-${index}-${data.ei_id || index}`}
            className="overflow-hidden transition-all duration-300 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="relative h-48">
              <img 
                src={`${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/LinksExternos/${data.ei_imagen}`}
                alt={data.ei_nombre || "Plataforma"} 
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="mb-4 text-lg font-semibold">{data.ei_nombre}</h3>
              <a 
                href={data.ei_link}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white transition-colors duration-300 bg-yellow-600 rounded-lg hover:bg-sky-600"
              >
                Acceder a la Plataforma
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}