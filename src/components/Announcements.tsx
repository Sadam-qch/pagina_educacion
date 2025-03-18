"use client";

import { usePublication } from "@/hooks/usePublications";

export default function Announcements() {
  const { convenios } = usePublication();

  return (
    <section className="p-6 mt-4 bg-white rounded-lg">
      {/* Sección de Comunicados  */}
      <div className="">
        <h2 className="mb-4 text-4xl font-bold text-center">COMUNICADOS</h2>
        <h2 className="mb-4 text-4xl font-bold text-center">
          Convenios Institucionales
        </h2>

        {/* Cards para comunicados Institucionales*/}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 ">
            {/* Card 1 */}
            <div className="max-w-md p-6 rounded-lg shadow-lg bg-cyan-950">
              <a
                href="https://serviciopagina.upea.bo/Convocatorias/b8e96b92-587e-44b5-ba76-1584a752e5af.png"
                target="_blank"
              >
                <img
                  src="https://serviciopagina.upea.bo/Convocatorias/b8e96b92-587e-44b5-ba76-1584a752e5af.png"
                  alt="Imagen"
                  className="object-contain w-full h-64 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-center text-white text-ellipsis">
                Cs. de la Educación (U.P.E.A.) y la Dirección Departamental de
                Educación de La Paz firman convenio.
              </h4>
            </div>
          </div>
        </div>

        <h2 className="mb-4 text-4xl font-bold text-center">
          Convenios por Modalidad de Graduación
        </h2>

        {/* Cards para comunicados Convenios por modalidad de graduación */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          {convenios &&
            convenios.map((data, index) => (
              <div
                key={`card-convenio-${index}`}
                className="p-6 rounded-lg shadow-lg bg-cyan-950"
              >
                <a
                  href={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}
                  target="_blank"
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/Publicaciones/${data.publicaciones_imagen}`}
                    alt="Imagen"
                    className="object-contain w-full h-64 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                  />
                </a>
                <h4 className="mt-3 font-serif text-center text-white text-ellipsis">
                  {data.publicaciones_titulo}
                </h4>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
