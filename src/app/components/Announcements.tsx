"use client";
export default function Announcements() {
    return (
      
       <section className="p-6 mt-4 bg-white rounded-lg">
       {/* Sección de Comunicados  */}
       <div className="">
         <h2 className="mb-4 text-4xl font-bold text-center">COMUNICADOS</h2>

         {/* Cards para comunicados */}
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
           {/* Card 1 */}
           <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
             <img 
               src="https://serviciopagina.upea.bo/Convocatorias/b8e96b92-587e-44b5-ba76-1584a752e5af.png" 
               alt="Imagen" 
               className="object-cover w-full h-48 rounded-t-lg"
             />
             <h3 className="mt-4 text-lg font-semibold">Cs. de la Educación (UPEA) y la Dirección</h3>
             <p className="mt-2 text-sm text-gray-700">Departamento de Educación de La Paz firman convenio.</p>
             <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">Leer más</a>
           </div>

         </div>
       </div>
     </section>
    );
  }
  