"use client";
export default function Campuses() {
    return (
      <section className="p-6 mt-4 bg-white rounded-lg shadow-md">
      {/* Sección Sedes academicas */}
      <div className="">
        <h2 className="mb-4 text-xl font-bold text-center">Sedes Academicas</h2>

        {/* Divisiones de las sedes */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Sede 1 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
            <img 
              src="https://serviciopagina.upea.bo/Publicaciones/da91a6e3-7b5b-45ed-bba6-3137e39c084f.jpg" 
              alt="Sede 1" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Sede Academica Batallas</h3>
          </div>

          {/* Sede 2 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
            <img 
              src="https://serviciopagina.upea.bo/Publicaciones/b541c092-4f5d-499c-b164-ea933fd7226f.jpg" 
              alt="Sede 2" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Sede Academica de Guaqui</h3>
          </div>

          {/* Sede 3 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
            <img 
              src="https://serviciopagina.upea.bo/Publicaciones/9305b1a5-a728-46ca-b29c-3ff0ffc823b0.jpg" 
              alt="Sede 3" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Sede Academica Chaguaya</h3>
          </div>

          {/* Sede 4 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
            <img 
              src="https://serviciopagina.upea.bo/Publicaciones/ae974b12-b52a-4a85-aa1a-e8286b9440fa.jpg" 
              alt="Sede 4" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Sede Academica Viacha</h3>
          </div>
        </div>
      </div>
    </section>
    );
  }
  