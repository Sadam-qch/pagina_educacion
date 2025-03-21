"use client";
import Authorities from "@/components/Authorities";
import Campuses from "@/components/Campuses";
import { useInstitutionData } from "@/hooks/useInstitutionData";
import { stripHtml } from "@/util/formatText";
import WelcomeInformation from "@/components/WelcomeInformation";

export default function AboutPage() {
  // Usamos el hook para obtener los datos de la institución
  const { institutionData, loading } = useInstitutionData();

  // Manejo de estado de carga y errores
  if (loading)
    return (
      <div className="py-10 text-center">
        Cargando información institucional...
      </div>
    );

  return (
    <main className="">
      <div
        className="w-full mx-auto text-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo1.jpg')" }}
         >
        <h1 className="text-5xl font-extrabold text-white animate-pulse text-secondar bg-opacity-75 rounded-lg">
          ACERCA DE LA CARRERA
        </h1>
      </div>
      {/* Sección de Información Institucional */}
      <section className="w-full pt-16 mb-12 px-12 ">
        {/* Información de bienvenida */}
        <WelcomeInformation />
        <div className=" mb-8 bg-white rounded-lg shadow-md px-12 text-justify">
          <h1 className="text-3xl font-bold text-[#0A02B0] mb-2">Misión</h1>
          <p className="mb-6 text-lg">
            {stripHtml(institutionData?.institucion_mision) ||
              "Información no disponible"}
          </p>

          <h1 className="text-3xl font-bold text-[#0A02B0] mb-2">Visión</h1>
          <p className="mb-6 text-lg">
            {stripHtml(institutionData?.institucion_vision) ||
              "Información no disponible"}
          </p>

          <h1 className="text-3xl font-bold text-[#0A02B0] mb-2">Objetivos</h1>
          <p className="text-lg">
            {stripHtml(institutionData?.institucion_objetivos) ||
              "Información no disponible"}
          </p>
        </div>
      </section>

      <section className="w-full mb-12">
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          {/**Autoridades  */}
          <Authorities />
        </div>
      </section>

      <section className="w-full mb-12">
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          <Campuses />
        </div>
      </section>

      {/* Sección del mapa */}
      <section className="w-full mb-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-[#0A02B0] mb-6">
            Ubicación de la Carrera de Ciencias de la Educación
          </h2>
          <div className="w-full mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {institutionData?.institucion_api_google_map ? (
                <iframe
                  className="w-full h-[450px] border-0"
                  src={institutionData.institucion_api_google_map}
                  allowFullScreen
                  loading="lazy"
                  title="Ubicación UPEA"
                ></iframe>
              ) : (
                <div className="w-full h-[450px] flex items-center justify-center bg-gray-100">
                  No se pudo cargar el mapa
                </div>
              )}
              <a
                href="https://maps.app.goo.gl/GD9vASYcvmSDdgdAA"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-[#f56224] text-white px-4 py-2 rounded hover:bg-[#0A02B0] transition-colors duration-300"
              >
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
