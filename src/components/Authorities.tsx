"use client";

import { useInstitutionData } from "@/hooks/useInstitutionData";

export default function Authorities() {
  const {institutionData} = useInstitutionData()

    return (
      <section className="p-6 mt-4 bg-white rounded-lg shadow-md w-">
      {/* Sección Nuestras Autoridades */}
        <h2 className="mb-1 text-xl font-bold text-center">Nuestras Autoridades</h2>
        {/* Cards autoridades */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
          {institutionData && institutionData.autoridad.map((data,_i)=>(
            <div key={`card-${_i}`} className="p-6 text-center bg-gray-100 rounded-lg shadow-lg">
              <img 
                src={`${process.env.NEXT_PUBLIC_API_URL}/InstitucionUpea/Autoridad/${data.foto_autoridad}`} 
                alt="imagen" 
                className="object-cover w-full rounded-t-lg h-96"
              />
              <h3 className="mt-4 text-lg font-semibold">{data.nombre_autoridad}</h3>
              <h2 className="font-serif text-sm">{data.cargo_autoridad}</h2>
            </div>
          )) }

        </div>
      </section>
    );
  }
  