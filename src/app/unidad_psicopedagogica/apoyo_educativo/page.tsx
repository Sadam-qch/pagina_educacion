"use client";

import { useVideos } from "@/hooks/useVideos";
import { stripHtml } from "@/util/formatText";

export default function Page() {
  const { objetivoApoyoEducativo } = useVideos();
  const { apoyoPedagogico } = useVideos();
  return (
    <div className="flex flex-col pt-20">
      {/* Sección 1: Título principal */}
      <div
        className="w-full mx-auto text-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/img/fondo1.jpg')" }}
         >
        <h1 className="text-5xl font-extrabold text-white animate-pulse text-secondar bg-opacity-75 p-4 rounded-lg">
          PROGRAMA DE APOYO EDUCATIVO
        </h1>
      </div>
      <div className="container py-20 mx-auto text-center">
          <h1 className="text-5xl animate-pulse font-extrabold text-blue-700">
            PROGRAMA DE APOYO EDUCATIVO
          </h1>
        </div>
      {/* Sección 2: Video educativo y descripción */}
      {objetivoApoyoEducativo &&
        objetivoApoyoEducativo.map((data) => (
          <section key={data.video_id} className="py-12">
            <div className="container flex flex-col items-center gap-8 px-4 mx-auto md:flex-row">
              {/* Bloque 1: Reproductor de YouTube */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full rounded-lg shadow-lg h-96"
                    src={data.video_enlace}
                    title="Video Educativo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* Bloque 2: Texto descriptivo */}
              <div className="w-full md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-center text-secondary">
                  {data.video_titulo}
                </h2>
                <p className="text-lg text-justify text-gray-700">
                  {stripHtml(data.video_breve_descripcion)}
                </p>
              </div>
            </div>
          </section>
        ))}
      {/**Segundo bloque de descripcion y video educativos  */}
      {apoyoPedagogico &&
        apoyoPedagogico.map((data) => (
          <section key={data.video_id} className="py-12">
            <div className="container flex flex-col items-center gap-8 px-4 mx-auto md:flex-row">
              {/* Bloque 2: Texto descriptivo */}
              <div className="w-full md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold text-center text-secondary">
                  {data.video_titulo}
                </h2>
                <p className="text-lg text-justify text-gray-700">
                  {stripHtml(data.video_breve_descripcion)}
                </p>
              </div>
              {/* Bloque 1: Reproductor de YouTube */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full rounded-lg shadow-lg h-96"
                    src={data.video_enlace}
                    title="Video Educativo"
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
  );
}
