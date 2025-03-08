"use client";
export default function Announcements() {
    return (
      
       <section className="p-6 mt-4 bg-white rounded-lg">
       {/* Sección de Comunicados  */}
       <div className="">
         <h2 className="mb-4 text-4xl font-bold text-center">COMUNICADOS</h2>
         <h2 className="mb-4 text-4xl font-bold text-center">Convenios Institucionales</h2>

         {/* Cards para comunicados Institucionales*/}
         <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
           {/* Card 1 */}
           <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Convocatorias/b8e96b92-587e-44b5-ba76-1584a752e5af.png" 
              target="_blank">
                <img 
                  src="https://serviciopagina.upea.bo/Convocatorias/b8e96b92-587e-44b5-ba76-1584a752e5af.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Cs. de la Educación (U.P.E.A.) y la Dirección Departamental de Educación de La Paz firman convenio.
              </h4>
            </div>

         </div>

         <h2 className="mb-4 text-4xl font-bold text-center">Convenios por Modalidad de Graduación</h2>

         {/* Cards para comunicados Convenios por modalidad de graduación */}
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {/* Card 1 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/ee88cdc6-f2bd-4e21-9b9c-42ee964f1cee.png" target="_blank">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/ee88cdc6-f2bd-4e21-9b9c-42ee964f1cee.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Ciencias de la Educación y Centro de Desarrollo Infantil Burbujitas.
              </h4>
            </div>
            {/* Card 2 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/a608c240-5037-4b94-aba7-0ee468bd89bc.png">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/a608c240-5037-4b94-aba7-0ee468bd89bc.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Ciencias de la Educación y CEADL.
              </h4>
            </div>
            {/* Card 3 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/4aa0f4fe-b251-410f-bdb2-468bff2e3ad1.png">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/4aa0f4fe-b251-410f-bdb2-468bff2e3ad1.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Ciencias de la Educación y CEJUPA.
              </h4>
            </div>
            {/* Card 4 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/fd2cb486-88d9-4884-979b-2a0621cf6ed3.png">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/fd2cb486-88d9-4884-979b-2a0621cf6ed3.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                {"Ciencias de la Educación y Ch'uxña Uta Bolivia."}
              </h4>
            </div>
            {/* Card 5 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/009fbaf1-c636-4642-bded-56c5723d5edb.png">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/009fbaf1-c636-4642-bded-56c5723d5edb.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Ciencias de la Educación y Defensa de Niños y Niñas Internacional.
              </h4>
            </div>
            {/* Card 6 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/ae584946-ead6-4830-8e39-8ce3b848a363.png">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/ae584946-ead6-4830-8e39-8ce3b848a363.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Ciencias de la Educación y Asociacion Emilia de Wojtyla.
              </h4>
            </div>
            {/* Card 7 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/d631b62d-66db-4666-abda-99f000e2fe74.png">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/d631b62d-66db-4666-abda-99f000e2fe74.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Ciencias de la Educación y Tzeilius.
              </h4>
            </div>
            {/* Card 8 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
              <a href="https://serviciopagina.upea.bo/Publicaciones/ae584946-ead6-4830-8e39-8ce3b848a363.png">
                <img 
                  src="https://serviciopagina.upea.bo/Publicaciones/ae584946-ead6-4830-8e39-8ce3b848a363.png" 
                  alt="Imagen" 
                  className="object-contain w-full h-48 transition-transform duration-300 rounded-t-lg cursor-pointer hover:scale-110"
                />
              </a>
              <h4 className="mt-3 font-serif text-lg">
                Ciencias de la Educación y Asociacion Emilia de Wojtyla.
              </h4>
            </div>
         </div>
       </div>
     </section>
    );
  }
  