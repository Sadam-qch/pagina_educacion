"use client";
export default function Platforms() {
    return (
      <section className="p-6 mt-4 bg-white rounded-lg shadow-md">
      {/* Sección  de Plataformas de la Carrera */}
      <div className="">
        <h2 className="mb-4 text-xl font-bold text-center">Plataformas de la Carrera</h2>

        {/* Divisiones horizontales para cada plataforma */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Plataforma 1 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
            <img 
              src="https://inscripcioneseducacion.upea.bo/img/logo.png" 
              alt="Plataforma 1" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Plataforma SUYAY</h3>
            <a 
              href="https://inscripcioneseducacion.upea.bo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-4 text-white bg-yellow-600 rounded-lg hover:bg-sky-600"
            >
              Acceder a la Plataforma
            </a>
          </div>

          {/* Plataforma 2 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
            <img 
              src="https://matriculacion.upea.bo/images/logos/sistema/mae/mae.png" 
              alt="Plataforma 2" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Plataforma MAE</h3>
            <a 
              href="https://matriculacion.upea.bo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-4 text-white bg-yellow-600 rounded-lg hover:bg-sky-600"
            >
              Acceder a la Plataforma
            </a>
          </div>

          {/* Plataforma 3 */}
          <div className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
            <img 
              src="https://w7.pngwing.com/pngs/961/976/png-transparent-moodle-android-educational-icon-thumbnail.png" 
              alt="Plataforma 3" 
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">Plataforma Educativa 3</h3>              <a 
              href="https://virtualeducacion.upea.bo/course/index.php?categoryid=9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-4 text-white bg-yellow-600 rounded-lg hover:bg-sky-600"
            >
              Acceder a la Plataforma
            </a>
          </div>
        </div>
      </div>
    </section>
    );
  }
  