"use client";

export default function Authorities() {
    return (
      <section className="p-6 mt-4 bg-white rounded-lg shadow-md w-">
      {/* Sección Nuestras Autoridades */}
      <div className="">
        <h2 className="mb-1 text-xl font-bold text-center">Nuestras Autoridades</h2>

        {/* Divisiones de las sedes */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
          {/* autoridad 1 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg bg-cyan-800">
            <img 
              src="https://serviciopagina.upea.bo/InstitucionUpea/Autoridad/6b24a4db-eda5-4855-87c2-b452650abc72.png" 
              alt="imagen" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">MSc. Deivid Pacosillo Mamani</h3>
            <h2 className="font-serif text-sm">DIRECTOR DE CARRERA</h2>
          </div>

          {/* autoridad 2 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg bg-cyan-800">
            <img 
              src="https://serviciopagina.upea.bo/InstitucionUpea/Autoridad/af1631cf-0e96-4fe1-aff5-14650c074335.png" 
              alt="imagen" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Univ. Luis Miguel Cadenas Rojas</h3>
            <h2 className="font-serif text-sm">EJECUTIVO a.i. CENTRO DE ESTUDIANTES</h2>
          </div>

        </div>
      </div>
      </section>
    );
  }
  