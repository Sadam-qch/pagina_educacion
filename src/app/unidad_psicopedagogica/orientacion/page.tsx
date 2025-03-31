"use client";
import Platforms from "@/components/Platforms";
import { useVideos } from "@/hooks/useVideos";
import { stripHtml } from "@/util/formatText";

export default function Page() {
  const { orientacionVoc } = useVideos();
  const { actividades } = useVideos();
  return (
    <div className="flex flex-col pt-20">
      {/* Sección 1: Título principal */}
      <section>
      <div
        className="w-full mx-auto text-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo1.jpg')" }}
         >
        <h1 className="text-5xl font-extrabold text-white animate-pulse text-secondar bg-opacity-75 p-4 rounded-lg">
          ORIENTACIÓN VOCACIONAL
        </h1>
      </div>
        <div className="container py-20 mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-blue-700">
            PROGRAMA DE ORIENTACIÓN PEDAGOGICA PARA LA VOCACIÓN PRODUCTIVA
            TECNOLÓGICA
          </h1>
        </div>
      </section >
      {/* Sección 2: Video educativo y descripción */}
      {orientacionVoc &&
        orientacionVoc.map((data) => (
          <section key={data.video_id} className="py-12">
            <div className="container flex flex-col items-center gap-8 px-4 mx-auto md:flex-row">
              {/* Bloque 1: */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full rounded-lg shadow-lg h-96"
                    src={data.video_enlace}
                    title="Video Educativo"
                    frameBorder="1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Bloque 2: Texto descriptivo */}
              <div className="w-full md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-secondary">
                  {data.video_titulo}
                </h2>
                <p className="text-lg text-justify text-gray-700">
                  {stripHtml(data.video_breve_descripcion)}
                </p>
              </div>
            </div>
          </section>
        ))}

      <section className="w-full mb-12">
        <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
          {/**Plataformas Educacionales */}
          <Platforms />
        </div>
      </section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 p-6">
      {/* Sección 4: Actividades con video y contenido dinámico */}
      {actividades &&
        actividades.map((data) => (
          <section key={data.video_id} className="py-12 px-5">
            <div className="container flex flex-col items-center">
              {/* Bloque 1: Video de actividades */}
              <div className="w-full">
                <h2 className="mb-4 text-3xl text-center font-bold text-black">
                  {data.video_titulo}
                </h2>
                <p className="mb-4 text-lg text-justify text-gray-700">
                  {stripHtml(data.video_breve_descripcion)}
                </p>
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full rounded-lg shadow-lg h-96"
                    src={data.video_enlace}
                    title="Video de Actividades"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
