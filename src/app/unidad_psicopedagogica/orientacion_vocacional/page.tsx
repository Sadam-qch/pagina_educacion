"use client";

import Platforms from "@/components/Platforms";

export default function Page() {
  return (
    <div className="flex flex-col pt-20">
      {/* Sección 1: Título principal */}
      <section className="py-12 bg-white">
        <div className="container px-3 mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-blue-700">
          Programa de Orientacion Pedagogica para la vocacion productiva tecnologica
          </h1>
        </div>
      </section>

      {/* Sección 2: Video educativo y descripción */}
      <section className="py-12">
        <div className="container flex flex-col items-center gap-8 px-4 mx-auto md:flex-row">
          {/* Bloque 1: Reproductor de YouTube */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/VIDEO_ID_EDUCATIVO" 
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
              Aprende con Nuestros Videos
            </h2>
            <p className="text-lg text-gray-700">
              Explora nuestro video educativo y descubre las claves para una
              educación de calidad. Nuestro contenido está diseñado para brindarte
              una experiencia de aprendizaje interactiva y actualizada.
            </p>
          </div>
        </div>
      </section>

      {/* Sección 3: Orientación Vocacional */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-4xl font-bold text-center">
            Orientación Vocacional
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Opción 1 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Opción+1"
                alt="Orientación 1"
                className="object-cover w-full h-40 rounded"
              />
              <h3 className="mt-4 text-xl font-bold">Opción 1</h3>
              <p className="mt-2 text-gray-600">
                Breve descripción sobre la orientación vocacional 1.
              </p>
            </div>
            {/* Opción 2 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Opción+2"
                alt="Orientación 2"
                className="object-cover w-full h-40 rounded"
              />
              <h3 className="mt-4 text-xl font-bold">Opción 2</h3>
              <p className="mt-2 text-gray-600">
                Breve descripción sobre la orientación vocacional 2.
              </p>
            </div>
            {/* Opción 3 */}
            <div className="p-4 bg-white rounded-lg shadow">
              <img
                src="https://via.placeholder.com/300x200?text=Opción+3"
                alt="Orientación 3"
                className="object-cover w-full h-40 rounded"
              />
              <h3 className="mt-4 text-xl font-bold">Opción 3</h3>
              <p className="mt-2 text-gray-600">
                Breve descripción sobre la orientación vocacional 3.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mb-12">
              <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
                {/**Plataformas Educacionales */}
                <Platforms />
              </div>
            </section>

      {/* Sección 4: Actividades con video y contenido dinámico */}
      <section className="py-12">
        <div className="container flex flex-col items-center gap-8 px-4 mx-auto md:flex-row">
          {/* Bloque 1: Video de actividades */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-blue-600 animate-pulse">
              Actividades Dinámicas
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Mira nuestras actividades interactivas que combinan teoría y práctica
              para ofrecerte una experiencia educativa única.
            </p>
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/VIDEO_ID_ACTIVIDADES" // Reemplaza VIDEO_ID_ACTIVIDADES
                title="Video de Actividades"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Bloque 2: Imagen ilustrativa */}
          <div className="w-full md:w-1/2">
            <h2 className="mb-4 text-3xl font-bold text-blue-600 animate-pulse">
              Actividades Dinámicas
            </h2>
            <p className="mb-4 text-lg text-gray-700">
              Mira nuestras actividades interactivas que combinan teoría y práctica
              para ofrecerte una experiencia educativa única.
            </p>
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/VIDEO_ID_ACTIVIDADES" // Reemplaza VIDEO_ID_ACTIVIDADES
                title="Video de Actividades"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
